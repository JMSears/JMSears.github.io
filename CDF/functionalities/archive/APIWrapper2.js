
// - - - - - - - - - - - - - - - - - - - - -
//   VERTEX SOLUTIONS
//   APIwrapper.js
//   v1.3.0
// - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - -
//   LMS ERROR CODES
// - - - - - - - - - - - - - - - - - - - - -
//      0 - no error
//    101 - general exception
//    201 - invalid argument error
//    202 - element cannot have children
//    203 - element not an array – cannot have count
//    301 - not initialized
//    401 - not implemented error
//    402 - invalid set value, element is a keyword
//    403 - element is read only
//    404 - element is write only
//    405 - incorrect data type
// - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - -
//   LMS PARAMETERS
// - - - - - - - - - - - - - - - - - - - - -
//     STANDARD
//     1 - cmi.core._children (read)
//     2 - cmi.core.student_id (read)
//     3 - cmi.core.student_name (read)
//     4 - cmi.core.lesson_location (read/write)
//     5 - cmi.core.credit (read)
//     6 - cmi.core.lesson_status (read/write)
//     7 - cmi.core.entry (read)
//     8 - cmi.core.score._children (read)
//     9 - cmi.core.score.raw (read/write)
//    10 - cmi.core.total_time (read)
//    11 - cmi.core.exit (write)
//    12 - cmi.core.session_time (write)
//    13 - cmi.suspend_data (read/write)
//    14 - cmi.launch_data (read)
//    
//    OPTIONAL
//    15 - cmi.core.score.max (read/write)
//    16 - cmi.core.score.min (read/write)
//    17 - cmi.core.lesson_mode (read)
//    18 - cmi.comments (read/write)
//    19 - cmi.comments_from_lms (read)
//    20 - cmi.objectives._children (read)
//    21 - cmi.objectives._count (read)
//    22 - cmi.objectives.n.id (read/write)
//    23 - cmi.objectives.n.score._children (read)
//    24 - cmi.objectives.n.score.raw (read/write)
//    25 - cmi.objectives.n.score.max (read/write)
//    26 - cmi.objectives.n.score.min (read/write)
//    27 - cmi.objectives.n.status (read/write)
//    28 - cmi.student_data._children (read)
//    29 - cmi.student_data.mastery_score (read)
//    30 - cmi.student_data.max_time_allowed (read)
//    31 - cmi.student_data.time_limit_action (read)
//    32 - cmi.student_preference._children (read)
//    33 - cmi.student_preference.audio (read/write)
//    34 - cmi.student_preference.language (read/write)
//    35 - cmi.student_preference.speed (read/write)
//    36 - cmi.student_preference.text (read/write)
//    37 - cmi.interactions._children (read)
//    38 - cmi.interactions._count (read)
//    39 - cmi.interactions.n.id (write)
//    40 - cmi.interactions.n.objectives._count (read)
//    41 - cmi.interactions.n.objectives.n.id (write)
//    42 - cmi.interactions.n.time (write)
//    43 - cmi.interactions.n.type (write)
//    44 - cmi.interactions.n.correct_responses._count (read)
//    45 - cmi.interactions.n.correct_responses.n.pattern (write)
//    46 - cmi.interactions.n.weighting (write)
//    47 - cmi.interactions.n.student_response (write)
//    48 - cmi.interactions.n.result (write)
//    49 - cmi.interactions.n.latency (write)
// - - - - - - - - - - - - - - - - - - - - -

var booShowWrapperAlerts = true;  // activate alert boxes.
var APIpos = null;
var debugWin
var debugValues = "";
var showDebug = true; //opens a debug window when values are set/get
if (showDebug){
            debugWin = window.open('debug.html', 'SCORM_Calls', 'location=yes,status=yes,scrollbars=yes,height=600,width=600', false);
}else{
}


// - - - - - - - - - - - - - - - - - - - - -
//   START OF STANDARD FUNCTIONS
// - - - - - - - - - - - - - - - - - - - - -

function debugWinAdd(text){
	if(showDebug){
		debugValues = debugValues + text;
		if(debugWin.document!=null &&debugWin.document.all){
			debugWin.document.all['debugValue'].innerHTML = debugValues; 
		}else{//Firefox Debug -- what to do
			debugWin.document.getElementById('debugValue').innerHTML=debugValues;
		}
	}
}
function LMSInitialize() { // return true or false
	//alert("Inside LMSInitialize");
	var theAPI = getAPI();
	if (theAPI == null) return 'false';
	findAPITries = 0;
	//alert("About to call LMS Initialize");
	var theResult = theAPI.LMSInitialize('').toString();
	
	if (theResult == 'false') var theError = ErrorHandler();

	//alert("LMS Initialize Completed: "+theResult);
	debugWinAdd("<br>LMSInitialize: result="+theResult);
//	if(showDebug) {
//		debugValues = debugValues + "<br>LMSInitialize: result=" + theResult;
//		debugWin.document.all['debugValue'].innerHTML = debugValues;
//	}   

	return theResult;
}

function LMSFinish() { // return true or false
	var theAPI = getAPI();
	if (theAPI == null) return 'false';
	findAPITries = 0;
	var theResult = theAPI.LMSFinish('').toString();
	if (theResult == 'false') var theError = ErrorHandler();
	//alert("LMS Finish returns "+theResult);
//	if(showDebug) {
	debugWinAdd("<br>LMSFinish: result=" + theResult);
//		debugWin.document.all['debugValue'].innerHTML = debugValues;
//	}   

	return theResult;
} 

function LMSCommit() { // return true or false
	var theAPI = getAPI();
	if (theAPI == null) return 'false';
	findAPITries = 0;
	var theResult = theAPI.LMSCommit('').toString();
	if (theResult == 'false') var theError = ErrorHandler();
	//if(showDebug) {
	debugWinAdd("<br>LMSCommit: result=" + theResult);
	//	debugWin.document.all['debugValue'].innerHTML = debugValues;
	//}   

	//alert("LMSCommit returns "+theResult);
	//return theResult;
} 

function LMSSetValue(theName, theValue) { // return true or false
	var theAPI = getAPI();
	if (theAPI == null) return 'false';
	findAPITries = 0;
	var theResult = theAPI.LMSSetValue(theName, theValue).toString();
	//if(showDebug) {
	debugWinAdd("<br>SET: " + theName + ", " + theValue + ", result: " + theResult);
		//debugWin.document.all['debugValue'].innerHTML = debugValues;
	//}   

	LMSCommit();
	if (theResult == 'false') var theError = ErrorHandler();
	//alert("Set Value for "+theName+" to be "+ theValue);
	//return theResult;
}

function LMSGetValue(theName) { // return parameter value
	//alert("Into LMSGetValue");
	var theAPI = getAPI();
	if (theAPI == null) return null;
	findAPITries = 0;
	var theValue = theAPI.LMSGetValue(theName).toString();
	var theError = ErrorHandler();
	//alert("Before Debug");
	//if(showDebug) {
		debugWinAdd("<br>GET: " + theName + ", " + theValue);// + ", result: " + theResult;
		//debugWin.document.all['debugValue'].innerHTML = debugValues;
	//} 
	//if (theError != '0') return null; // if an error occurred
	//alert("Get Value for "+theName+" to be "+ theValue);
	return theValue; // if no error occurred
}

function LMSGetLastError() { // return numeric error code
	var theAPI = getAPI('LMSGetLastError()');
	if (theAPI == null) return '101';
	findAPITries = 0;
	return theAPI.LMSGetLastError().toString();
} 

function LMSGetErrorString(theError) { // return verbal error description
	var theAPI = getAPI('LMSGetErrorString()');
	if (theAPI == null) return 'general exception';
	findAPITries = 0;
	return theAPI.LMSGetErrorString(theError).toString();
} 

function LMSGetDiagnostic(theError) { // return anything
	var theAPI = getAPI('LMSGetDiagnostic()');
	if (theAPI == null) return 'LMS API not found';
	findAPITries = 0;
	return theAPI.LMSGetDiagnostic(theError).toString();
} 

// - - - - - - - - - - - - - - - - - - - - -
//   START OF CUSTOM FUNCTIONS
// - - - - - - - - - - - - - - - - - - - - -

var findAPITries = 0;

function findAPI(win)
{
	var xAPI = false;
	while(!xAPI)
	{
		//alert("Checking in "+win.location.href);
		//alert(findAPITries )
		if (findAPITries > 50){
			//if(showDebug) {
				debugWinAdd("<br>Find API (50 deep) returning: "+((xAPI==false)?"false":"Handle to object"));
				//debugWin.document.all['debugValue'].innerHTML = debugValues;
			//}
			//alert("Returning null");
			return null;
		}
		if(win.API){
			xAPI = win.API;
		} else if(win.parent)	{
			debugWinAdd("<br>Checking parent");
			if(win.parent.API){
				xAPI = win.parent.API;
			}else {
				debugWinAdd("<br>Checking Opener");
				//if(win.parent.opener){
				//	win = win.parent.opener;
				//}
				if(win.parent.opener.API){
					xAPI=win.parent.opener.API;
				}
			}
		} else {
			if(win.opener){
				win = win.opener;
				debugWinAdd("Opener is "+win.location.href);
			}
		}
		debugWinAdd("<br>Finding API: " + findAPITries);

		findAPITries++;
	}
//	var debugtxt="<br>Find API returning: "+(String)((xAPI==false)?"false":"Handle to object");
	//debugWinAdd("<br>Find API returning: "+(String)((xAPI==false)?"false":"Handle to object")); 
/*	if(xAPI==false){
		debugWinAdd("<br>Find API returning: false");
	}else{
		debugWinAdd("<br>Find API returning: Handle to object");
	}
//	debugWinAdd(debugtxt);
	*/
	return xAPI
}

function getAPI()
{
	var xAPI = findAPI(window);
//	var xAPI = getAPIpos(window);
	return xAPI;
}

function getAPIpos(calledBy) {
	if (APIpos==null) {
		APIpos = APIsearch(parent.top);
		if (APIpos==null && typeof(parent.opener)!="undefined" && parent.opener!=null) APIpos = (parent.opener.top) ? APIsearch(parent.opener.top) : APIsearch(parent.opener) ;
	}
	//alert(APIpos)
	if (APIpos==null) showWrapperAlert("Could not locate the API. \n" + calledBy + " was unsuccessful.");
	return APIpos;
}

/*
function getAPIpos(calledBy) {
	if (APIpos==null) {
		APIpos = APIsearch(this.top);
		if (APIpos==null && typeof(this.opener)!="undefined" && this.opener!=null) APIpos = (this.opener.top) ? APIsearch(this.opener.top) : APIsearch(this.opener) ;
	}
	if (APIpos==null) showWrapperAlert("Could not locate the API. \n" + calledBy + " was unsuccessful.");
	return APIpos;
}
*/

function APIsearch(searchIn) { // Search window and child frames for "API" object

	if (searchIn.API != null) return searchIn.API;
	if (searchIn.length > 0) {
		for (var i=0;i<searchIn.length;i++) {
			var theResult = APIsearch(searchIn.frames[i]);
			if (theResult != null) return theResult;
		}
	}
	return null;
}

function ErrorHandler() { // returns info on previous error


	var theAPI = getAPI();
	if (theAPI == null) return;
	var theResult = theAPI.LMSGetLastError().toString();
	if (theResult != '0') showWrapperAlert(theAPI.LMSGetErrorString(theResult).toString() + "\n" + theAPI.LMSGetDiagnostic(theResult).toString());
	return theResult;


}

function showWrapperAlert(theMsg) {
	if (booShowWrapperAlerts) alert(theMsg);
}
//
//	set lesson_status as 'passed' or 'completed'
//	conditional completion based on if course for credit
//	intended to provide universal function
//	that will work in all LMS's
function doPassedOrComplete(){
	var sCEUCredit = LMSGetValue('cmi.core.credit'); 
	//	alert("sCEUCredit: " + sCEUCredit);
	if (sCEUCredit == "credit") 
	{
	//	alert('set status to passed')
		LMSSetValue("cmi.core.lesson_status", "passed");
	} 
	else 
	{
	//	alert('set status to completed')
		 LMSSetValue("cmi.core.lesson_status", "completed");
	 }
}

function testPassed(testType,percent)
{
	if(testType == "pre")
	{
		LMSSetValue("cmi.core.lesson_status", "completed");
	}
	else if(testType == "post")
	{
		LMSSetValue("cmi.core.lesson_status", "passed");
	}
	LMSSetValue("cmi.core.score.raw",percent);
}

function testFailed(percent)
{
	alert('testFailed')
	LMSSetValue("cmi.core.score.raw",percent);
	LMSSetValue("cmi.core.lesson_status", "failed");
}