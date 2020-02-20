/*
File Name: SCORM.js
	A collection of functions to interact with the LMS via SCORM

Dependencies:
	SCORM_API_wrapper.js //Pipwerks version
	APIWrapper.js; //Old version - should no longer be needed

Change Log:
	2007.03.26	JEM	- Initial version
	2007.08.24  JEM/ALP - Updated per move to iframes.
	2010.07.06	ALP	-	Modified to work with Plateau LMS for DIA courses
	2010.07.??	ALP	-	Modified to allow tracking of page visits via cmi.suspend_data
	2010.10.08	ALP	-	Modified to allow tracking of scored activities via cmi.suspend_data
	2011.01.07  VRB -   Modified to work with the new XML/XSL shell
	2011.01.07  VRB -	Removed getFileName() as its no longer necessary with the XML/XSL shell.
	2012.10.08  JAY - 	Removing APIWrappers.js and adding SCORM_API_wrapper.js (aka PipWerks) for shell update
	2012.10.19	ALP - 	Updated to work with either SCORM 1.2 or SCORM 2004, and replaced former APIWrapper.js with the pipwerks version
	2013.04.11  VRB -   Changed CDROM to STANDALONE, Optical Media is quickly becoming obsolete.	
*/

/*
Purpose: Variable Setup (Pipwerks has own API)
*/
//var scorm = pipwerks.SCORM.;  //Shortcut
var STANDALONE;
var lmsConnected; //lmsConnected is based on the current variable of STANDALONE
//var lmsConnected = false; // Original version

//Specify version ins shellData.js (either 1.2 or 2004)
pipwerks.SCORM.version = shell.scormVersion;

/*
Function: initStartPage
	Set of functions that should be executed on a start page of a SCO.

Parameters:
	None.

Dependencies:
	<startSCO>; <findContentFrame>;

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Initial version
	2007.08.24	JEM	- Added <findContentFrame> here as it cannot run until the rest of the framework has loaded.
	2010.06.12	ALP	- Added the ability to pass in a start page, defaults to index.html
	2013.04.12  VRB - Added detection of whether course is running locally or on a server
*/
function initStartPage(page, shouldPrompt) {
	(typeof(page) == 'undefined') ? 'index.html' : page;
	if ( PPS ) {
	    STANDALONE = true;
	} else {
    	STANDALONE = Detect.isStandalone;
	}
	lmsConnected = !STANDALONE;
	
	if ( shell.storage.enable ) {
    	startSCO(page,shouldPrompt);
	} else {
	    goToPageInDirectory(page);
	    if (window.scoredActivities) {
            initializePageScores();
        }
	}
}

/*
Function: startSCO
	Initialize the LMS, check for bookmarked last page and prompt if found, and take user to desired page.

Parameters:
	startingPage	- (optional) page id of the page to start with; defaults to 'index.html'.

Dependencies:
	<pipwerks.SCORM.API.find>; <pipwerks.SCORM.set>; <pipwerks.SCORM.save>; <promptGoToBookmark>; <goToPageInDirectory>;

Returns:
	None

Change Log:
	2007.03.27	JEM	- Initial version.
	2007.08.24	JEM	- Updated if (STANDALONE) condition to account for iframe context.
	2007.08.27	JEM	- Fixed lastpage.length>0 bug (can actually get a true condition, now).  Removed cmi.core.exit conditions.
	2010.07.10	ALP	- Added tracking of pages visited for DIA shell
	2011.01.01	VRB - Modified for XML/XSL shell
    2013.04.11  VRB - Modified to utilize LocalStorage (jStorage)
*/
var completionVar = 'cmi.completion_status';
var cmiPrefix = "cmi";

/**
 * Initialize the LMS, check for bookmarked last page and prompt if found, and take user to desired page.
 * @param {String} [startingPage='index.html'] - Page id of the page to start with; defaults to 'index.html'.
 */
function startSCO(startingPage,shouldPrompt) {
	// track whether we've loaded the start page
    var atDestination = false;
    // if starting page is not defined, set to default
    startingPage = (typeof(startingPage) == 'undefined') ? 'index.html' : startingPage;
    // Initialize connection to LMS when not a Standalone course
    if (!STANDALONE) {
        pipwerks.SCORM.init();      
        //alert("initializing LMS");
        
        // Set the SCORM variable name depending on the SCORM version
        if (pipwerks.SCORM.version == "2004") {
            completionVar = 'cmi.completion_status';
        } else {
            completionVar = 'cmi.core.lesson_status';
            cmiPrefix = "cmi.core"; 
        }
    }
    // Load Save Data
    loadSaveData();   
    // Now save the start time to shell.tracking.startTime
    var startTime = new Date().getTime(); // time in seconds
    shell.tracking.startTime = startTime; //pipwerks.SCORM.set("cmi.suspend_data", startTime);
    // Retrieve and process lesson status
    var status = getLessonStatus();
    if (status == 'not attempted') {
       setLessonStatus('incomplete');
    } 
    else if (status == 'incomplete') {
        var lastpage = getLessonLocation()+"";// pipwerks.SCORM.get returns an object rather than a string, so we add "" to make this var a string.
        if (lastpage.length > 0 && lastpage != '' && lastpage != 'null' ) {
            console.log("lastpage: " + lastpage);
			console.log("startingPage: " + startingPage);
			var oldUnitLesson = lastpage.substring(0,lastpage.lastIndexOf('_'));
			console.log("oldUnitLesson: " + oldUnitLesson);
			var newUnitLesson = startingPage.substring(0,startingPage.lastIndexOf('_'));
			console.log("newUnitLesson: " + newUnitLesson);
			if (lastpage != startingPage && oldUnitLesson == newUnitLesson) { // don't prompt if that's where they're going, anyway
                if (promptGoToBookmark(lastpage)) {
                    goToPageInDirectory(lastpage);
                    atDestination = true;
                }
            }
        }
    }
    // When on an LMS, save
    if (!STANDALONE) {
        pipwerks.SCORM.save();
    }
    // If not yet at a start page, load one
    if (!atDestination) {
        goToPageInDirectory(startingPage);
    }
}

/**
 * Load the Course's Save Data 
 * @change (2013.04.15) VRB - Added checks to see if savedData was null or undefined
 */
function loadSaveData() {
	// Read the saved data, which contains the shell.tracking.pagesVisited information
	var savedData = getSaveData();
    // when save data exists:
    if ( savedData != null && savedData != undefined && savedData != 'null' && savedData != '') {
        // parse JSON from save string
        var data = JSON.parse(savedData);
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@data: ");
		console.log(data);
        // When data has a course version specified
        if ( data.hasOwnProperty('courseVersion') ) {
            // if saved version is different from loaded version --> clear
            if ( data.courseVersion != shell.courseVersion ) {
                if ( STANDALONE ) {
                    ShellStorage.flush();                     
                } else {
                    setSaveData('');
                }
                initializePageScores();
                return;
            }
        } 
        // when save data doesn't have a courseVersion --> clear
        else {
            if ( STANDALONE ) {
                ShellStorage.flush();                     
            } else {
                setSaveData('');
            }
            initializePageScores();
            return;
        }
        // Set the appropriate variables
        var completion = shell.tracking.pageCompletion = data.pageCompletion;
        var pages      = shell.tracking.pagesVisited   = data.pagesVisited;
        var scores     = shell.tracking.pageScores     = data.pageScores;
        
        // Load the saved course completion
        loadSave(completion);
        
        // when score data does not exist
        if ( scores === null || scores === '' ) {
            initializePageScores();
        }
    } 
    // when save data does not exist
    else {
        // if scored activities variable is defined, initialize
        if (window.scoredActivities) {
            initializePageScores();
        }
    }
}

/**
 * Save Suspend Data to the appropriate storage location
 * @param {Object|String|Array} data - Value to store in storage 
 */
function setSaveData( data ) {
    if (STANDALONE) {
        ShellStorage.set(shell.courseVersion+"_cmi.suspend_data", data );
    } else {
        pipwerks.SCORM.set("cmi.suspend_data", data);
        pipwerks.SCORM.save();
    }
	//console.log("++++++++++Saving data: ");
	//console.log(data);
}

/**
 * Retrieve Suspend Data from the appropriate storage location 
 */
function getSaveData() {
	//console.log("Standalone: ");
	//console.log(STANDALONE);
    if (STANDALONE) {
		//console.log("courseVersion: " + shell.courseVersion);
		//console.log(ShellStorage.get(shell.courseVersion+"_cmi.suspend_data"));
        return ShellStorage.get(shell.courseVersion+"_cmi.suspend_data","null");
    } else {
        return pipwerks.SCORM.get("cmi.suspend_data");
    }
}

/*
Function: promptGoToBookmark
	Prompt user whether they wish to return to the specified bookmarked location.

Parameters:
	locationMessage	- Desired information to provide to user; typically the file name of the potential destination page.

Dependencies:
	None.

Returns:
	User's confirmation.

Change Log:
	2007.03.26	JEM	- Initial version
	2013.04.11  VRB - Removed if/else statement since Standalone courses are now utlizing LocalStorage to bookmark
*/
function promptGoToBookmark(locationMessage) {
    return (confirm('Do you wish to return to your last location?'));
}

/*
Function: initEndPage
	Clean-up when user has successfully completed the SCO.

Parameters:
	None.

Dependencies:
	<pipwerks.SCORM.set>; <quitSCO>;

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Initial version.
	2007.08.24	JEM	- Moved LMS commands to <quitSCO>.
*/
function initEndPage() {
	promptQuitSCO();
}

/*
Function: promptQuitSCO
	Prompts user to quit SCO.  If confirmed, <quitSCO> is executed.

Parameters:
	None

Dependencies:
	<quitSCO>; <closeWindow>;

Returns:
	None

Change Log:
	2007.03.26	JEM	- Initial version
*/
function promptQuitSCO() {
	var msg = 'Are you sure you want to exit the course?';
	if (confirm(msg)) {
		quitSCO('logout');
		//setTimeout('top.window.close()', 1000);
	}
}

/*
Function: quitSCO
	Necessary clean-up before formally quitting the SCO.

Parameters:
	exitStatus	- (optional) cmi.core.exit value to set; defaults to 'suspend'.

Dependencies:
	<pipwerks.SCORM.set>; <setBookmark>; <LMSCommit>; <LMSFinish>;

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Initial version.
	2008.08.24	JEM	- Moved lesson_location and lesson_status setters here from <initEndPage>.
	2008.08.27	JEM	- Abandoned cmi.core.exit; added test to not overwrite completed status; left bookmarking up to the onload of the page.
	2013.03.11  VRB - Modified to work with Standalone and LMS based courses
*/
function quitSCO(exitStatus) {
	if ( shell.storage.enable ) {
    	var currStatus = getLessonStatus();    
        if (!(currStatus == 'completed' || currStatus == 'passed' || currStatus == 'failed')) {
            setLessonStatus('incomplete');
        }
        storePagesCompleted();    
        if (!STANDALONE) {
            setSessionTime();
			pipwerks.SCORM.set(cmiPrefix+'.exit', 'suspend');
            pipwerks.SCORM.save();
            pipwerks.SCORM.quit();      
        }
        if (exitStatus == "logout") {
            //alert('exitStatus');
			window.close();
			top.window.close();
        }
    } else {
		if (exitStatus == "logout") {
			window.close();
			top.window.close();
		}//alert('storage not enabled');
        //window.close();
    }
}

/*
Function: completeSCO
	Mark the SCO as complete in the LMS.

Parameters:
	completeStatus	- (Optional) Status to set cmi.core.lesson_status to; defaults to 'completed' but useful for 'passed' or 'failed', too.

Dependencies:
	<pipwerks.SCORM.set>; <LMSCommit>; 

Returns:
	None.
	
To Do:
	Update to check for cmi.credit to determine whether to pass "passed" or "completed"

Change Log:
	2007.08.27	JEM	- Initial version.
	2010.07.06	ALP - Updated to set status to "passed" to work with Plateau LMS
*/
function completeSCO(completeStatus) {
	completeStatus = (typeof(completeStatus)!="undefined") ? completeStatus : 'completed';
	
	if ( shell.storage.enable ) {
    	setLessonStatus(completeStatus);
    }
}

/*
Function: setSessionTime
	Sets the session time to cmi.core.session_time.

Parameters:
	None.

Dependencies:
	<pipwerks.SCORM.get>; <pipwerks.SCORM.set>; <LMSCommit>;

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Adapted from Army SCORM Best Practices.

Bugs:
	Assumes cmi.suspend_data only contains start time value.

To do:
	Create cmi.suspend_data handler to allow for flexibility in storing data in cmi.suspend_data.
*/
function setSessionTime() {
	var startTime=shell.tracking.startTime; //pipwerks.SCORM.get("cmi.suspend_data");
	var currentTime = new Date();
	var endTime = currentTime.getTime()
	var calculatedTime = endTime-startTime;
	var totalHours = Math.floor(calculatedTime/1000/60/60);
	calculatedTime = calculatedTime - totalHours*1000*60*60
	if (totalHours < 1000 && totalHours > 99) {
		totalHours = "0"+totalHours;
	} else if (totalHours < 100 && totalHours > 9) {
		totalHours = "00"+totalHours;
	} else if (totalHours < 10) {
		totalHours = "000"+totalHours;
	}
	var totalMinutes = Math.floor(calculatedTime/1000/60);
	calculatedTime = calculatedTime - totalMinutes*1000*60;
	if (totalMinutes < 10) {
		totalMinutes = "0"+totalMinutes;
	}
	var totalSeconds = Math.floor(calculatedTime/1000);
	if (totalSeconds < 10) {
		totalSeconds = "0"+totalSeconds;
	}
	var sessionTime = totalHours+":"+totalMinutes+":"+totalSeconds;
	pipwerks.SCORM.set(cmiPrefix+".session_time", sessionTime);
	pipwerks.SCORM.save();
}
/*
Function: storePagesCompleted
	Saves the shell.tracking.pagesVisited array to the cmi.suspend_data

Parameters:
	None

Dependencies:
	<pipwerks.SCORM.get>; <pipwerks.SCORM.set>;

Returns:
	None.

Change Log:
	2010.07.10	ALP	- Initial version.
	2013.03.11  VRB - Modified to use a stringified JSON object
*/
function storePagesCompleted() {
	if ( shell.storage.enable ) {
    	var save = new Object();
        save.pageCompletion = shell.tracking.pageCompletion;
        save.pagesVisited   = shell.tracking.pagesVisited;
        save.pageScores     = shell.tracking.pageScores;
        save.currentPage    = shell.currPageId;
        save.courseVersion  = shell.courseVersion;
		save.BSPArray 		= shell.branchStartPages.BSPArray;
        var finalString = JSON.stringify( save );
        
        setSaveData( finalString );
        
        //console.log("cmi.suspend_data is now set to " +pipwerks.SCORM.get("cmi.suspend_data"));	
	}
}


/*
Function: getLessonStatus
	As name implies.

Parameters:
	None.

Dependencies:
	<pipwerks.SCORM.get>;

Returns:
	cmi.core.lesson_status

Change Log:
	2007.03.26	JEM	- Initial version
	2013.04.11  VRB - Modified for Standalone use as well
*/
function getLessonStatus() {
	if (STANDALONE) {
        return ShellStorage.get(completionVar,'not attempted');
    } else {
        return pipwerks.SCORM.get(completionVar);
    }

}

/*
Function: setLessonStatus
	Sets a valid cmi.core.lesson_status value.

Parameters:
	status	- Desired value for cmi.core.lesson_status

Dependencies:
	<validLessonStatusValue>; <pipwerks.SCORM.set>; <LMSCommit>;

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Initial version
	2013.04.11  VRB - Modified for Standalone use as well
*/
function setLessonStatus(status) {
	if (validLessonStatusValue(status)) { // validate to possible vocabulary
        if (!STANDALONE) {
            pipwerks.SCORM.set(completionVar, status);
            pipwerks.SCORM.save();
        } else {
            ShellStorage.set(completionVar, status );
        }
    }
}

/*
Function: validLessonStatusValue
	Given a potential cmi.core.lesson_status value, return whether it is an acceptable value.

Parameters:
	status	- A potential cmi.core.lesson_status value

Dependencies:
	None.

Returns:
	Boolean indicating validity of status.

Change Log:
	2007.03.26	JEM	- Initial version

*/
function validLessonStatusValue(status) {
	if (status == 'passed' || status == 'completed' || status == 'failed' || status == 'incomplete' || status == 'browsed' || status == 'not attempted') {
		return true;
	} else {
		return false;
	}
}

/*
Function: validExitValue
	Given a potential cmi.core.exit value, return whether it is an acceptable value.

Parameters:
	exit	- A potential cmi.core.exit value

Dependencies:
	None.

Returns:
	Boolean indicating validity of value.

Change Log:
	2007.03.26	JEM	- Initial version

*/
function validExitValue(exit) {
	if (exit == 'time-out' || exit == 'suspend' || exit == 'logout') {
		return true;
	} else {
		return false;
	}
}

/*
Function: getLessonLocation
	Returns cmi.core.lesson_location.

Parameters:
	None.

Dependencies:
	<pipwerks.SCORM.get>;

Returns:
	cmi.core.lesson_location.

Change Log:
	2007.03.26	JEM	- Initial version
*/
function getLessonLocation() {
	if (!STANDALONE) {
		var locationVar = "cmi.core.lesson_location";
		if (pipwerks.SCORM.version == "2004") {
		    locationVar = "cmi.location";
		}
		return pipwerks.SCORM.get(locationVar);
	} else {
		return ShellStorage.get(shell.courseVersion+"_cmi.location", null);
	}
}

/*
Function: setLessonLocation
	Sets cmi.core.lesson_location

Parameters:
	location	- Desired value to set in cmi.core.lesson_location.

Dependencies:
	<pipwerks.SCORM.set>; <LMSCommit>;

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Initial version
	2013.04.11  VRB - Modified or Standalone use as well
*/
function setLessonLocation(location) {
	if (!STANDALONE) {
		var locationVar = "cmi.core.lesson_location";
		if (pipwerks.SCORM.version == "2004") locationVar = "cmi.location";
		var temp = pipwerks.SCORM.set(locationVar, location);
		pipwerks.SCORM.save();
	} else {
        ShellStorage.set(shell.courseVersion+"_cmi.location", location);
    }

}

/*
Function: setBookmark
	Sets a specified bookmark location to cmi.core.lesson_location and sets cmi.core.exit to 'suspend'.

Parameters:
	location	- (optional) Desired bookmark location; defaults to current location.

Dependencies:
	<setLessonLocation>; <pipwerks.SCORM.set>; <LMSCommit>;

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Initial version
	2010.01.07  VRB - modified for XML/XSL shell
	2013.04.11  VRB - modified for standalone use as well
*/
function setBookmark(location) {
    if ( shell.storage.enable ) {
    	location = (typeof(location) == 'undefined') ? shell.currPageId : location; // if no location is specified, default to the current location
        setLessonLocation(location);
        // When on an LMS:
        if (!STANDALONE) {
            pipwerks.SCORM.set(cmiPrefix+'.exit', 'suspend');
            pipwerks.SCORM.save();
        }
    }
}

/*
Function: goToPageInDirectory
	Given a file name, navigate to that file relative to the current directory.

Parameters:
	pageId	- Destination page id.

Dependencies:
	<loadPage();>

Returns:
	None.

Change Log:
	2007.03.26	JEM	- Initial version.
	2007.08.24	JEM	- Updated method to reflect iframe context.
	2011.01.07  VRB - Modified to use XML/XSL shell
	2013.04.11  VRB - Modified for Standalone use as well
*/
function goToPageInDirectory(pageId) {
	loadPage(pageId);
}

/*
Function: setLessonScore
    Saves the learner's score to the LMS

Parameters:
    score   - Score, ranging from 0 to 100

Dependencies:
    <pipwerks>

Returns:
    None.

Change Log:
    2013.02.13  ALP - Initial version.
*/
function setLessonScore(score) {
    if ( shell.storage.enable ) {
        if (!STANDALONE) {
            pipwerks.SCORM.set(cmiPrefix+'.score.raw', score);
            pipwerks.SCORM.save();
        }
    }
}
