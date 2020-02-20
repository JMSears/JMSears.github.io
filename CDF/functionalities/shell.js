/*
File: shell.js

Version: 3.0

Description:
	A collection of objects used to offer the necessary functionality required to power the Standardized Shell.

Dependencies:
	<addEvent>; <ada$>; <MenuObject>; <updateMenu>; 

Change Log:
	2010.12.23  VRB - Started new shell.js file for XML version of Shell
	2012.10.07	ALP	- Numerous changes to the file to make compatible with JS Template version of the shell
	2012.10.11	ALP	- Removed all references to shell.caption.containerEl, as none of those divs exist anymore due to implementation of jQuery dialog caption.
	2012.10.14	ALP - Added audio.js HTML5 audio player functionality
	2012.12.28	ALP	- Numerous adjustments to break some functions out so that they can be overwritten in shell_mobile.js
	2013.02.04	ALP - Some undocumented adjustments, plus added removeDialogs(dialogArray); to loadPage so that any open pop-ups will be closed whether users access the page from the next/back buttons or the menu. Added ability to time CC text and content to the audio.
	2013.02.05	ALP - Fixed bug with rewind button and timed content. Added keyboard shortcut programming. Added ability to cut off drop-shadows at the bottom of the shell and not have those trigger fluid height until the actual shell is reached (done via definition of shell.limits.bottomEmpty in shellData.js)
	2013.02.20  ALP - Added ability to have timed CC and page content, including sub-page (e.g., popups and contentSwaps) timed CC and audio.
	2013.02.22  ALP	- Added ability to have sub-page timed content.
	2013.02.25  ALP - Altered rewind to re-load page content, rather than trying to reverse everything that has happened. Also, added shell.caption.current property and shell.timedContent.current property and adjusted the programming to store separate positions for the mainPage timing and subPage timing. Adjusted the shell.caption positions, but didn't get to shell.timedContent changes fully.
	2013.03.22  ALP - Integrated jQuery for page load and resize functions. Update Next/Back functionality to work with jQuery and <button> tags as the Next/Back buttons. Added <toggleClickableCover>.
	2013.03.26 	ALP - Adjustments to combine play/pause into a single button, and addition of <togglePlayPause>. Also fixed the volume onclick code so that you can't mute it while it's disabled. Added listener for $.jPlayer.event.ended to call <togglePlayPause>.
	3013.04.11  VRB - Integrated new page completion scripts
	3013.04.11  VRB - Integrated ability to add classification text nodes in the shell UI. 
	
To do:

*/

/* Parameters used by shell.js ********************************************************************/
var backIsDim = false;
var nextIsDim = false;
var CCIsDim = false;
var audioIsDim = false;
var myBack, myNext, dimBack, dimNext;
var screenHeight;
var screenWidth;
var myMenuData;
var scoNode;
var myScoData;
var SCOPassed = false;
var totalPageNum;		// Contains the total number of pages
//var currPageId;			// Contains the id of the current page
var myContentData = new ContentObject(); // Contains the content information for the SCO.
var firstSCOPage;		// Variable to store the first page in the SCO.
var currPageData;
var pageVidIds = new Array() 
var pageVidCC = new Array(); 
var currPageVideo;
var videoPlaying = false;

/* EVENTS *****************************************************************************************/
$(window).resize(function() {
	windowResize();
});
$(document).ready(function() {
	initShell();
	windowResize();
});
$(document).on('unload', quitSCO);

/**
 * Initialize the HTML5 Shell
 * @change 2013.04.11 - VRB - Added Setting of classification DOM elements 
 */
function initShell() {
	loadingScreen.message('Initializing Course Shell');
	prepMenuButtons();
	initMenu();
	debug.init();
	ShellStorage.init();
	if (shell.keyboardShortcuts.isEnabled) {
		prepKeyboardShortcuts();	
	}
	
	$('.classification').html(shell.classification);
    
	//console.log("Mobile? " +shell.onMobileDevice);	
	// Set up the audio player
	if (shell.audio.audioEnabled == true) initAudioPlayer();	
	// Set up the closed captioning
	if (shell.caption.isEnabled == true) initCC();
	// Set up the Exit button functionality
	setExit();
	// Load the correct page
	var dest = parseUri(window.location).query.split('pageId='); // dirty JM/2007.11.21
	if (dest.length > 1) {
		initStartPage(dest[1],false);
	} else {
		initStartPage(myMenuData.firstSCOPage, true);
	}
	//console.log("Mobile? " +shell.onMobileDevice);	
};

/*================================================================================================*/
// SHELL MANIPULATION METHODS
/*================================================================================================*/
/*
Function: windowResize
	Adjusts the height of the content area.

Parameters:
	none

Dependencies:
	<ada$>;

Returns:
	none

Bugs:
	None known

To Do:

Change Log:
	2010.12.23  VRB - Copied winHeight from previous version of shell.js
	2010.12.23  VRB - Renamed to windowResize, split into several functions.
	2010.12.23  VRB - Added resizing of width as well as the height.
	2013.02.05	ALP	- Added ability to cut off drop-shadows at the bottom of the shell and not have those trigger fluid height until the actual shell is reached (done via definition of shell.limits.bottomEmpty in shellData.js)
*/
function windowResize(){
	//try {
		screenHeight = getScreenHeight();
		screenWidth  = getScreenWidth();
		windowResizeHeight();
		windowResizeWidth();
	//} 
	//catch (e) {
	//	setTimeout(windowResize, 10);
	//}
}

function getScreenHeight() {
	if (self.innerHeight) {
		return self.innerHeight;
	} else if (getInternetExplorerVersion() > 5 && getInternetExplorerVersion() < 7) { // Explorer 6
		return document.documentElement.clientHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		return document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		return document.body.clientHeight;
	}
}

function getScreenWidth() {
	if (self.innerWidth) {
		return self.innerWidth;
	} else if (getInternetExplorerVersion() > 5 && getInternetExplorerVersion() < 7) { // Explorer 6
		return document.documentElement.clientWidth;
	} else if (document.documentElement && document.documentElement.clientWidth) { // Explorer 6 Strict Mode
		return document.documentElement.clientWidth;
	} else if (document.body) { // other Explorers
		return document.body.clientWidth;
	}
}

function windowResizeHeight() {
	switch (typeof shell.limits.maxHeight) {
		case 'undefined':  // There is no maximum height
			switch ( typeof shell.limits.minHeight) {
				case 'undefined':
					// There is also no min height - therefore do nothing, keep style set by CSS
					break;
				case 'number':
					// The min height is a number
					if (screenHeight < shell.limits.minHeight-shell.limits.bottomEmpty)
						windowSetHeightToMin();
					else
						windowSetHeightToFluid();
					break;
			}
			break;
		case 'number':  // The maximum height is a number
			switch ( typeof shell.limits.minHeight) {
				case 'undefined': // There is no min height
					if(screenHeight-shell.limits.bottomEmpty > shell.limits.maxHeight) {
						windowSetHeightToMax();
					} else {
						windowSetHeightToFluid();
					}
					break;
				case 'number':
					if(screenHeight > shell.limits.maxHeight) {
						//console.log("screenHeight: "+screenHeight + " shell.limits.maxHeight: " + shell.limits.maxHeight);
						windowSetHeightToMax();
					} else if (screenHeight < shell.limits.minHeight-shell.limits.bottomEmpty) {
						//console.log("screenHeight: "+screenHeight + " shell.limits.minHeight: " + (shell.limits.minHeight-shell.limits.bottomEmpty));
						windowSetHeightToMin();
					} else {
						//console.log("setting height to fluid");
						windowSetHeightToFluid();
					}
					break;
			}
			break;
	}
}

function windowSetHeightToMax() {
	//alert("windowSetHeightToMax: " + screenHeight);
	document.getElementsByTagName('html')[0].style.overflow = 'hidden';
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	$(shell.div).css('height', shell.limits.maxHeight + 'px');
	$(shell.content.wrap).css('height', shell.limits.maxHeight - shell.header.height - shell.footer.height + 'px');
	$(shell.page.div).css('height', shell.limits.maxHeight - shell.header.height - shell.footer.height + 'px');
}
function windowSetHeightToMin() {
	//console.log("windowSetHeightToMin: " + screenHeight);
	document.getElementsByTagName('html')[0].style.overflow = 'auto';
	document.getElementsByTagName('body')[0].style.overflow = 'auto';
	$(shell.div).css('height', shell.limits.minHeight + 'px');
	$(shell.content.wrap).css('height', shell.limits.minHeight - shell.header.height - shell.footer.height + 'px');
	$(shell.page.div).css('height', shell.limits.minHeight - shell.header.height - shell.footer.height + 'px');
}
function windowSetHeightToFluid() {
	document.getElementsByTagName('html')[0].style.overflow = 'hidden';
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	$(shell.div).css('height', screenHeight -shell.page.marginBottom+ shell.limits.bottomEmpty + 'px');
	//alert("windowSetHeightToFluid: " + screenHeight);
	$(shell.content.wrap).css('height', $(shell.div).css('height') - shell.header.height - shell.footer.height + 'px');
	$(shell.page.div).css('height', $(shell.div).css('height') - shell.header.height - shell.footer.height + 'px');
}

function windowResizeWidth() {
	switch (typeof shell.limits.maxWidth) {
		case 'undefined':  // There is no maximum Width
			switch ( typeof shell.limits.minWidth) {
				case 'undefined':
					// There is also no min Width - therefore do nothing, keep style set by CSS
					break;
				case 'number':
					// The min Width is a number
					if (screenWidth < shell.limits.minWidth)
						windowSetWidthToMin();
					else
						windowSetWidthToFluid();
					break;
			}
			break;
		case 'number':  // The maximum Width is a number
			switch ( typeof shell.limits.minWidth) {
				case 'undefined': // There is no min Width
					if(screenWidth > shell.limits.maxWidth) {
						windowSetWidthToMax();
					} else {
						windowSetWidthToFluid();
					}
					break;
				case 'number':
					if(screenWidth > shell.limits.maxWidth) {
						windowSetWidthToMax();
					} else if (screenWidth < shell.limits.minWidth) {
						windowSetWidthToMin();
					} else {
						windowSetWidthToFluid();
					}
					break;
			}
			break;
	}
}

function windowSetWidthToMax() {
	/*document.getElementsByTagName('html')[0].style.overflow = 'hidden';
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';*/
	$(shell.div).css('width', shell.limits.maxWidth + 'px');
	$(shell.div).css('marginLeft', '-' + (shell.limits.maxWidth / 2) + 'px');
	$(shell.page.div).css('width', shell.limits.maxWidth - shell.page.marginLeft - shell.page.marginRight + 'px');
}

function windowSetWidthToMin() {
	document.getElementsByTagName('html')[0].style.overflow = 'auto';
	document.getElementsByTagName('body')[0].style.overflow = 'auto';
	$(shell.div).css('width', shell.limits.minWidth + 'px');
	$(shell.div).css('marginLeft', '-' + (shell.limits.minWidth / 2) + 'px');
	$(shell.page.div).css('width', shell.limits.minWidth - shell.page.marginLeft - shell.page.marginRight + 'px');
}

function windowSetWidthToFluid() {
	/*document.getElementsByTagName('html')[0].style.overflow = 'hidden';
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';*/
	$(shell.div).css('width', screenWidth + 'px');
	$(shell.div).css('marginLeft', '-' + (screenWidth / 2) + 'px');
	$(shell.page.div).css('width', screenWidth - shell.page.marginLeft - shell.page.marginRight + 'px');
}

/* NOT CURRENTLY IN USE - ARCHIVED
 * was used to fix the width of the menu when the scrollbar appears.
 */
function fixMenuWidth() {
	var ieVersion = getInternetExplorerVersion();
	
	if( ada$(menu.menuWrapEl).scrollHeight > ada$(shell.content.wrap).clientHeight ) {
		ada$(menu.menuWrapEl).style.height = ada$(shell.content.wrap).clientHeight + 'px';
		ada$(menu.scrollDiv).style.height = (ada$(shell.content.wrap).clientHeight - 29) + 'px';
	} else {
		ada$(menu.menuWrapEl).style.height = 'auto';
		ada$(menu.scrollDiv).style.height = 'auto';
	}
	
	if( ada$(menu.scrollDiv).scrollHeight > ada$(menu.scrollDiv).clientHeight) {
		if (ieVersion == 7) {	
			// IE 7
			$(menu.menuContentEl).find('li').css('width', 225 + 'px');
		}
		else if (ieVersion < 7 && ieVersion > 0) {	
			// IE 6
			if(ada$(menu.scrollDiv).clientHeight == 0)
				$(menu.menuContentEl).find('li').css('width', 242 + 'px');
			else
				$(menu.menuContentEl).find('li').css('width', 225 + 'px');
		}
	} else {
		if (ieVersion < 7 && ieVersion > 0) {	
			// IE 6
			$(menu.menuContentEl).find('li').css('width', 242 + 'px');
		} else {
			$(menu.menuContentEl).find('li').css('width', 100 + '%');
		}
	}
}

/*================================================================================================*/
// SHELL BUTTONS
/*================================================================================================*/

/*
Function: prepMenuButtons
	Unobtrusively prepare menu buttons for their job of showing menu(s) and the wrapper to dismiss 
	them.  Also applies onclick for the close link at the top right.

Parameters:
	None.

Dependencies:
	<ada$>

Returns:
	None.

Change Log:
	2007.04.03	JEM	- Initial version
	2007.06.08	JEM	- Added handling for Resources and Help buttons
	2007.06.25	ALP	- Added new handling for resources to allow a menu
	2008.10.20	ALP	- Commented out references to close, resources and help since they have been removed.
	2010.09.15	Adam T. - Changed the function callResources() to have the resources file in the root folder.
	2010.12.10  VRB - Removed menuBtn and menuClose for shell with always visible menu
	2010.12.10  VRB - Removed glossaryLink activation for shell without glossary
	2011.01.07  VRB - Modified method to use menu and shell.courseNav JSON objects.
	2013.01.06	ALP - Modified to create a resources menu pop-up and hide it when things are clicked.
	2013.01.08	ALP	- Removed resources menu pop-up functionality for standard shell. Search for //2013 ALP to re-enable.
	2013.03.22	ALP - Re-enabled resources menu pop-up functionality for VA Career Mapping.
*/
var menuCloseFunc = function(e) {
	//console.log('toggling menu');
	myMenuData.toggleMenu('menu');
	$(resources.resWrapEl).addClass('off'); //2013 ALP
	// stop even bubbling/propagation (so outerWrap doesn't immediately hide menu)
	/*if (!e) 
		var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) 
		e.stopPropagation();*/
	return false;
}

var menuCloseKeyPress = function(e) {
	var keyCode = e.keyCode || e.which; 
	if (keyCode == 13) { // if enter key is pressed		 
		menuCloseFunc();
	} 	
	$(this).unbind('keydown');
}
function prepMenuButtons() {
	if (myMenuData) {
		if (!menu.alwaysOpen) { 
			// if the menu is not always open (ie toggle-able) add buttons and events to toggle menu
			for (var i = 0; i < menu.toggleButtons.length; i++) {
				$(menu.toggleButtons[i]).click(menuCloseFunc);
			}
			// can't simply apply these to body as such would impair the clickability of the menu, 
			// itself, when clicked to expand/collapse menu children, thus the four main elements 
			// of the page are tasked with hiding the menu.
			/*for (var i = 0; i < menu.closeMenuElements.length; i++) {
				ada$(menu.closeMenuElements[i]).onclick = function(){
					hideMenus();
					hideResMenu(this); //2013 ALP
				};
			}*/
		}
		// Set on-click for the resources button
		$(resources.resLink).click(function(e) {
			toggleResMenu();
			myMenuData.toggleMenu(false);
			return false;
		}); //2013 ALP
		//Set the on-click for the print button
		$('#printLink').click(function(e) {
			//var transcript = '../resources/'+SCOData.SCOPrefix+'/'+SCOResources.Transcript;
			//Jeff modified 
			var transcript = '../resources/'+SCOResources.Transcript;
			var myPop = window.open(transcript,'Course_Transcript','height=630, width=1010, scrollbars=1');
			myPop.focus();
		});
		
		for (var i=0; i<shell.courseNav.length; i++) {
			var hasPrefix = false;
			if (shell.courseNav[i].afterPrefix) hasPrefix = shell.courseNav[i].afterPrefix;
			addCourseNavButton(shell.courseNav[i].button, shell.courseNav[i].url, shell.courseNav[i].name, hasPrefix);
		}
	} else { // try again
		setTimeout(prepMenuButtons,100);
	}
}
//2013.01.06 ALP
function toggleResMenu(state) {
	var action = false;
	if (state == true || state == false) { // if a valid value is specified, use it
		action = state;
	} else {
		if ($(resources.resWrapEl).hasClass('off')) action = true; // else default to the opposite of the current state.
	} 
	switch (action) {
		case (true): // if the resources menu should be shown
			$(resources.resWrapEl).removeClass('off');
			$(resources.resLink).attr('title','Click to close the Resources menu');
			$(resources.resClose).click(function() {toggleResMenu(false); $(resources.resClose).unbind('click')}).keypress(function(e) {var keyCode = e.keyCode || e.which; if (keyCode == 13) {toggleResMenu(false);$(resources.resClose).unbind('keypress')} });
			setTimeout(function(){$(resources.focusEl).focus()},0);
			toggleClickableCover(true);
			break;
		case (false): 
			$(resources.resWrapEl).addClass('off');
			$(resources.resLink).attr('title','Click to open the Resources menu');
			//setTimeout(function(){$(resources.resLink).focus()},0);
			toggleClickableCover(false);
			break;
	}
}//2013 ALP
/*
Function: toggleClickableCover
	Dynamically shows an invisible, clickable cover that appears under the menus when they are open. Clicking the cover closes the menus and removes the cover itself.

Parameters:
	state - (Optional) Whether to show (true) or hide (false) the cover

Dependencies:
	<$>

Returns:
	None.

Change Log:
	2013.03.22	ALP - Initial version
*/
function toggleClickableCover(state) {
	var action = false;
	if (state == true || state == false) { // if a valid value is specified, use it
		action = state;
	} else {
		if ($(shell.clickableCover.id).hasClass('off')) action = true; // else default to the opposite of the current state.
	}
	switch (action) {
		case (true): // if the clickable cover should be shown
			$(shell.clickableCover.id).removeClass('off');
			$(shell.clickableCover.id).on('click',function() {
				toggleResMenu(false);
				myMenuData.toggleMenu(false);
				toggleClickableCover(false);
			});
			break;
		case (false):
			$(shell.clickableCover.id).off('click');
			$(shell.clickableCover.id).addClass('off');
			break;
	}
}
/*
Function: addCourseNavButton
	creates an onClick event on the element with the id within button. When that element is clicked,
	a popup window will open with the url contained within the 'url' parameter and the page nane
	contained within the 'name' parameter.

Parameters:
	button - id of the element to add the clickability to.
	url    - url of the popup
	name   - name of the popup

Dependencies:
	<ada$>

Returns:
	none.

Change Log:
	2011.01.07  VRB - Initial version
*/
function addCourseNavButton(button, url, name, prefix) {	
	//console.log(prefix);
	if (prefix == 'SCOspecific') {
		prefix = SCOResources[name];
	}
	if (name == 'Certificate') {
		if (typeof noCertificate == 'undefined') {
			//url = url+"?course="+SCOData.courseTitle;
			ada$(button).onclick = function() {
				openCertificate(SCOData.SCOPrefix,true);
				return false;
			}
			return false;
		} else {
			return false;
		}
	}
	if (prefix != false) {
		url = url+SCOData.SCOPrefix+'/'+prefix;
	}
	//console.log(url);
	ada$(button).onclick = function() {
		openPopup(url,name);
		toggleResMenu(); //2013 ALP
		return false;
	};
}

/*
Function: openPopup
	opens a popup window.

Parameters:
	url - url of the popup
	name - name of the popup window

Dependencies:
	<ada$>

Returns:
	none.

Change Log:
	2011.01.XX  VRB - Initial version
*/
function openPopup(url,name) {
	var myPop = window.open(url,name,'height=630, width=1010, scrollbars=1');
	myPop.focus();
	return false;
}
/*
Function: setExit
	Sets up the Exit button to make a final SCORM call

Parameters:
	none

Dependencies:
	<ada$>

Returns:
	none.

Change Log:
	2012.10.20  ALP - Initial version
*/
function setExit() {
	ada$(shell.header.exitLink).onclick = function() {
		promptQuitSCO();
	}
}
/*================================================================================================*/
// MENU METHODS
/*================================================================================================*/
/*
Function: initMenu
	Creates the menu and highlights the current section.
	
Parameters:
	none
	
Dependencies:
	<MenuObject>; <updateMenu>; 

Returns:
	n/a

Change Log:
	2007.05.20	ALP	- Initial version
	2011.01.03  VRB - Copied Method from first shell.js
*/

function initMenu() {
	myMenuData = new MenuObject();
	myMenuData.createMenuList();
	if(menu.alwaysOpen) {
		myMenuData.generateMenu()
	}
	//fixMenuWidth();
}

/*
Function: updateMenu
	Uses Andrew Palla's SCOUts Object (mySCOUts--which is already being called to set the next and 
	previous buttons) to pass in the url of the lowest-level page that should be highlighted in the 
	menu. Should be called on each page load.
	
Parameters:
	none

Dependencies:
	<SCOuts>; 

Returns:
	n/a

Change Log:
	2007.05.20	ALP	- Initial version
	2007.05.29	ALP	- Added setTimeout to be sure setCurrentMenuSection is run on the first page. 
	2007.06.11	JEM	- Added myScoData.nodeMenuPage to if test.
	2010.01.07  VRB - Added method to version 2 of shell.js; changed 'url' to 'page'
	2012.10.03	ALP	- Now passes the 'id' from SCOMenu to the setCurrentMenuSection function instead of 'page'
	2013.04.21	ALP	- Removed the setting of shell.currPageId, as it is already done in another function, and setting it here with myScoData.nodeMenuPage.id was messing things up if the current page was hidden from the menu.
*/
function updateMenu() {
	//console.log("*&*&*&*&*&*&* Updating menu");
// pass in the url of the nodeMenuPage (either the closest older sibling that is displayed on the menu, or if no sibling is on the menu, the closest ancestor that is displayed in the menu).
	if (myMenuData && (myScoData.nodeMenuPage)) { // if the menu is loaded and there is a nodeMenuPage
		//shell.currPageId = myScoData.nodeMenuPage.id;
		myMenuData.setCurrentMenuSection(myScoData.nodeMenuPage.id);
	} else { // try again
		setTimeout(updateMenu,100);
	}
}

/*
Function: hideMenus
	As on the tin: hide all menus.

Parameters:
	None.

Dependencies:
	<ada$>

Returns:
	None.

Change Log:
	2007.04.03	JEM	- Initial version
	2007.05.12	ALP	- Changed to call myMenuData.toggleMenu(false) instead of ada$(menu.menuWrapEl).className = 'off'
*/
function hideMenus() {
	if(myMenuData)
		myMenuData.toggleMenu(false);
}

/*================================================================================================*/
// NAVIGATION METHODS
/*================================================================================================*/
/*
Function: setPageID
	Sets a PPS-specific variable to the content location when delivered via PPS.

Parameters:
	None.

Dependencies:
	None.

Returns:
	None.

Change Log:
	2007.??.??	JEM	- Initial version.
	2011.01.07	VRB - Moved from scoShell.js to shell.js (Method not tested yet in PPS!)
*/
function setPageID(nodeId) {
	if (PPS) {
		window.parent.page = nodeId;
	}
}

/*
Function: updateShell
	updates various items in the shell whenever a new page is loaded
	
Parameters:
	pageData - JSON object containing the page's data from scoContent
	
Dependencies:
	<ada$>; <setBookmark>; <setPageID>; <SCOUts>; <adjustProgress>; <updateMenu>; <setNav>; <disableNav>

Returns:
	n/a

Change Log:
	2011.01.06  VRB - Copied Method from scoShell.js and initial modifications
	2012.10.04	ALP - Updated totalPageNum to read the length of the pages array in scoContent.js
	2012.10.11  MTW - added call to addCC() to get update CC/transcript text
	2012.10.19	ALP - Added back call to setBookmark to set bookmark in the LMS
	2012.10.22 	ALP - Added parameter of pageData to store at the shell level
	2013.01.08	ALP - Added check to the loadPageAudio call to only call the function if it is NOT the first page of the SCO
	2013.01.25	ALP - Added check for scoNode.node.isBranchStartPage an scoNode.node.isRequired to set up the shell.branchStartPages.BSPReqArray, also added check for whether audio should be replayed on the second visit to a BSP
	2013.02.04	ALP - Added call to storeTimedData()
	2013.03.23 ALP 	- Added call to <trackCompletion> at the end.
	2013.04.28 ALP	- Moved loadPageCC and load of audio file to the loadPage function.
	2014.08.04 ALP	- Changed to focus on the series title, not the breacrumb, when the page first loads. Otherwise, the breadcrumb is read immediately, along with the audio narration.
*/
function updateShell(pageData) {	
	if (pageData) currPageData = pageData;
	//ada$(shell.content.contentDiv).focus();
	hideMenus();	
	ada$(shell.header.series).innerHTML = SCOData.seriesTitle;
	ada$(shell.header.course).innerHTML = SCOData.courseTitle;
	scoNode = SCOUts(SCOPages, shell.currPageId);
	if (scoNode) { // scoNode returns false if the page does not exist
		/* next 2 lines update the current section of the menu */
		myScoData = scoNode;
		updateMenu();
		//trackCompletion();
		
		/* next 4 lines are used to update the progress bar */
		var weightResult = SCOWeight(SCOPages, shell.currPageId);
		shell.currPageNum = weightResult.pWeight;
		totalPageNum = myContentData.pages.length;
		adjustProgress();
		/* Update the page in PPS if PPS = true */
		setPageID(shell.currPageId);
		// Bookmark the page in the LMS
		setBookmark(shell.currPageId);
		// update back button:
		if (scoNode.nodePrev.name == shell.menuJSONName) { // If we are on the first page
			disableNav('back');
		} else {
			setNav('back', scoNode.nodePrev.id, scoNode.nodePrev.name);
		}
		// update next button:
		if (scoNode.nodeNext.name == shell.menuJSONName) { // If we are on the last page
			//console.log('we are on the last page');
			disableNav('next',true);
		} else {
			setNav('next', scoNode.nodeNext.id, scoNode.nodeNext.name);
		}
		// If this is a branch start page and all branches are required
		if (scoNode.node.isBranchStartPage && scoNode.node.isRequired) {
			//console.log('this is a branch start page, and all are required');
			shell.branchStartPages.BSPReqArray[scoNode.node.id] = true;
		}
		if (scoNode.nodeParent.name != shell.menuJSONName) {	 // as long as this is not the intro page 
			var bc = scoNode.nodeParent.name;
			var myParent = SCOUts(this[shell.menuJSONName], scoNode.nodeParent.id,'id'); // Problem is names aren't unique...
			
			// while the parent is not SCOPages, find all levels of the breadrcumb.
			while (myParent.nodeParent.name != shell.menuJSONName) {
				myParent = SCOUts(SCOPages, myParent.nodeParent.id,'id'); // ALP - found typo here, was searching for 'myParent.nodeParent.node' should be searching for 'myParent.nodeParent.id'
				bc = myParent.node.name  + " : " + bc; //ALP Commented out to just show lesson title
			}
		} else {
			var bc = scoNode.node.name; // Just display the name
		}
		updateBreadcrumb(bc+' : <strong>'+ scoNode.node.name +"</strong>");// SCOData.moduleTitle + " | " + 
		} else { // if you are on a page not in SCOPages
		// do this
	}
	//setTimeout(function(){
		//console.log('setting focus to breadcrumb');
		$('#'+shell.header.series).focus();
		// add a highlight effect to that id (comment out if not using)			
		//.effect("highlight", {}, 1000);
	//},0);
	trackCompletion();
}
function updateBreadcrumb(bc) {
	$(shell.breadcrumb.div).empty();
	$(shell.breadcrumb.div).append("<h1>" + bc + "</h1>");
}
/*
Change Log: 
	2013.02.12 ALP - Moved removeDialogs to come before the new page load. Otherwise, if the server is slow, new dialogs get written and then removed right away.
	2013.03.01 ALP - Added code to reset VideoJS.players to avoid problems with flash fallback
	2013.04.11 ALP - Removed call to <trackCompletion>, as it now gets called in <updateShell>
	2013.04.27 ALP - Revised call to <removeDialogs> to only execute if there is a dialog to remove.
	2013.04.28 ALP - Added call to loadPageCC and load of audio file to this function.
*/
function loadPage(id) {
	
    loadingScreen.hide();
	//console.log("loading page id " + id);
	var pageToLoad = myContentData.findPageURLByPageId(id);
	pageContent = myContentData.getPageContentById(id);
	//Remove any open dialogs, if they exist. This also clears all dialog data arrays.		
	if (dialogArray.length != 0) removeDialogs(dialogArray);
	// Reset the video player
	unloadAllVideos();
	//VideoJS.players = {};
	//Put us back to the main page audio and CC
	shell.caption.onSubPage = false;
	shell.caption.subPageNum = 0;
	shell.caption.onSubSubPage = false;
	shell.caption.subSubPageNum = 0;
	//Put us back to the main page timedContent
	shell.timedContent.onSubPage = false;
	shell.timedContent.subPageNum = 0;
	shell.timedContent.onSubSubPage = false;
	shell.timedContent.subSubPageNum = 0;
	//console.log("loading " + pageToLoad);
	//Close any open feedback boxes
	if (shell.formQuiz.fbId != "") {
		$('#'+shell.formQuiz.fbId).dialog('destroy');
		$('#'+shell.formQuiz.fbId).remove();
		shell.formQuiz.fbId = "";
	}
	shell.currPageId = id;
	updateShell(pageContent);
	if ($('#'+shell.content.contentDiv).empty()) {
		clearCC();
		clearAudio();
		shell.caption.currPosition = 0;
		shell.timedContent.currPosition = 0;
		$('#'+shell.content.contentDiv).load(pageToLoad, function() {
			loadPageCC(); // writes caption/transcript information from scoContent.js
			//If this is not the first page, load the audio
			if (shell.currPageNum != -1) {
				var loadAud = true;
				if (shell.branchStartPages) {
					// If this is a branch start page that has an audio replay defined
					if (shell.branchStartPages.BSPReplayAudioArray[shell.currPageId] != undefined) {
						// If audio is not supposed to be replayed
						if (!shell.branchStartPages.BSPReplayAudioArray[shell.currPageId]) {
							// check if this is the second visit to the page
							if (shell.branchStartPages.BSPInitArray[shell.currPageId]) {
								//console.log("do not replay audio");
								loadAud = false;	
								clearAudio();
							} 
						} 
					} 
				}
				if (loadAud) {
					loadPageAudio();	// Loads the audio file specified in scoContent.js
				}
			}
			externalLinks();			
			// Store any timed content data
			storeTimedData();
			// Set up any pop-ups
			setUpPopUps();
		});
	} else {
		alert('AJAX error');	
	}	
	//setTimeout(function(){$(shell.breadcrumb).focus()},0);
	addFocusHighlighting();
	if($(outerWrap).css("backgroundImage").indexOf('/images/leftShadow.jpg')<0){
		$('link[href="../styles/shell.css"]').attr('href','../styles/shell508.css');
		$('link[href="../styles/content.css"]').attr('href','../styles/content508.css');
		$('link[href="../styles/ui-lightness/jquery-ui-1.8.23.custom.css"]').attr('href','../styles/ui-lightness/jquery-ui-1.8.23.custom508.css');
		$('link[href="../styles/jquery-adayana.css"]').attr('href','../styles/jquery-adayana508.css');
	}
	else {
		$('link[href="../styles/shell508.css"]').attr('href','../styles/shell.css');
		$('link[href="../styles/content508.css"]').attr('href','../styles/content.css');
		$('link[href="../styles/ui-lightness/jquery-ui-1.8.23.custom508.css"]').attr('href','../styles/ui-lightness/jquery-ui-1.8.23.custom.css');
		$('link[href="../styles/jquery-adayana508.css"]').attr('href','../styles/jquery-adayana.css');
	}
}
function addFocusHighlighting() {
	// add a click handler to all links 
    // that point to same-page targets (href="#...")		
    $("a[href^='#']").click(function() {
      // get the href attribute of the internal link
      // then strip the first character off it (#)
      // leaving the corresponding id attribute
      $("#"+$(this).attr("href").slice(1)+"")
        // give that id focus (for browsers that didn't already do so)
        .focus();
        // add a highlight effect to that id (comment out if not using)			
        //.effect("highlight", {}, 3000);
    });
}
/*
Function: setNav
	Sets the onclick events for the next and back buttons
	
Parameters:
	type 	- 'next' or 'back'
	nodeId 	- the id of the node to go to when clicked
	title	- The tooltop title to display when the button is moused over
	
Dependencies:
	<$>; <loadPage>; <enableNav>;

Returns:
	n/a

Change Log:
	20XX.XX.XX 	ALP - Initial version
	2012.11.07	ALP - Modified to destroy any open jQuery feedback dialog boxes created by formQuiz
	2013.03.22  ALP - Modified to work with jQuery and <button> tags as the Next/Back buttons.
	2013.04.28	ALP - Added check for the page completion status NOT being zero before enabling the Next button.
*/
function setNav(type, nodeId, title) {
	//alert("setNav");
	var targetEl, isDimmed, targetElId;
	switch (type) {
		case('back'):
			targetElId = shell.pageNav.backBtn;
			isDimmed = backIsDim;
			title = "Previous Page: " + title;
			break;
		case('next'):
			targetElId = shell.pageNav.nextBtn;
			isDimmed = nextIsDim;
			title = "Next Page: " + title;
			break;
		}
	targetEl = $(targetElId);
	targetEl.attr('title',title);
	targetEl.css('cursor','pointer');
	targetEl.off('click');
	//console.log('made it ' + targetElId);
	$(targetElId).on('click',function() {
		//console.log('clicked '+ $(this).attr('id'));
		var isDisabled = $(this).attr('disabled');
		if (!isDisabled) {
			loadPage(nodeId);
		}
		return false;
	});
	if (isDimmed && shell.tracking.pagesVisited[shell.currPageNum-1] != 0) {
		enableNav(type);
	}
}

function setNavToURL(type, URL, title) {
	var targetEl, isDimmed, targetElId;
	switch (type) {
		case('back'):
			targetElId = shell.pageNav.backBtn;
			isDimmed = backIsDim;
			title = "Go to: " + title;
			break;
		case('next'):
			targetElId = shell.pageNav.nextBtn;
			nextIsDim = false;
			$(shell.pageNav.nextBtn).removeClass('dim');
			isDimmed = nextIsDim;
			title = "Go to: " + title;
			break;
		}
	targetEl = $(targetElId);
	targetEl.attr('title',title);
	targetEl.css('cursor','pointer');
	targetEl.off('click');
	//console.log('made it ' + targetElId);
	if (URL == "homepage.html") {
		$(targetElId).on('click',function() {
			//console.log('clicked '+ $(this).attr('id'));
			var isDisabled = $(this).attr('disabled');
			if (!isDisabled) {
				//quitSCO();
				window.location = URL;
			}
			return false;
		});
	} else {
		$(targetElId).on('click',function() {
			//console.log('clicked '+ $(this).attr('id'));
			var isDisabled = $(this).attr('disabled');
			if (!isDisabled) {
				window.location = URL;
			}
			return false;
		});
	}
	if (isDimmed && shell.tracking.pagesVisited[shell.currPageNum-1] != 0) {
		enableNav(type);
	}
}
/*
Function: disableNav
	Disables the next and back buttons
	
Parameters:
	type 	- (string) 'next' or 'back'
	isEnd 	- (boolean) whether is it the last page of the SCO
	
Dependencies:
	<ada$>;

Returns:
	n/a

Change Log:
	20XX.XX.XX 	ALP - Initial version
	2013.02.05	ALP - Updated tooltip for next button to indicate when it is disabled due to an activity vs. the last page of the course
	2013.03.22  ALP - Modified to work with jQuery and <button> tags as the Next/Back buttons.
*/
function disableNav(type,isEnd,isHomepage) {
	//console.log("disableNav");
	var myLi;
	var atEnd = isEnd || false;
	//alert("disabling " + type);
	switch(type) {
		case('back'):
			//2014.08.30 ALP - Disabled default shell functionality to point the back button to the course homepage for the CDF course.
			//if (isHomepage) {
				backIsDim = true;
				$(shell.pageNav.backBtn).attr('title',"No previous page.");
				$(shell.pageNav.backBtn).off('click');
				$(shell.pageNav.backBtn).on('click',function() {
					alert("You have reached the beginning of this lesson.");
				});
				$(shell.pageNav.backBtn).addClass('dim');
				$(shell.pageNav.backBtn).css('cursor','default');
			//} else {
				//2014.08.30 ALP - Functionality custom to the VA CDF course
				//setNav('back','00_00_000','Course Homepage');
			//}
			//End custom functionality
			break;
		case('next'):
			nextIsDim = true;
			//$(shell.pageNav.nextBtn).attr('disabled','disabled');
			if (!atEnd) {
				$(shell.pageNav.nextBtn).attr('title',"Next is currently disabled.");
			} else {
				$(shell.pageNav.nextBtn).attr('title',"No next page.");
			}
			$(shell.pageNav.nextBtn).off('click');
			$(shell.pageNav.nextBtn).on('click',function() {
				if (atEnd) {
					alert("You have reached the end of this course.");
				} else if (contentSwap.actionAlert && contentSwap.actionAlert != ""){
					alert(contentSwap.actionAlert);
				} else if (popUp.extraAlert && popUp.extraAlert != ""){
					alert(popUp.extraAlert);
				} else {
					alert("Please complete the activity on this page.");
				}
			});
			$(shell.pageNav.nextBtn).addClass('dim');
			$(shell.pageNav.nextBtn).css('cursor','default');
			break;
	}
}
/*
Function: enableNav
	Enables the next and back buttons
	
Parameters:
	type 	- (string) 'next' or 'back'
	
Dependencies:
	<ada$>; <disableNav>; <setNav>;

Returns:
	n/a

Change Log:
	20XX.XX.XX 	ALP - Initial version
	2013.03.22  ALP - Modified to work with jQuery and <button> tags as the Next/Back buttons.
*/
function enableNav(type) {
	switch (type) {
		case('back'):
			backIsDim = false;
			$(shell.pageNav.backBtn).removeClass('dim');
			//$(shell.pageNav.backBtn).removeAttr('disabled');
			$(shell.pageNav.backBtn).css('cursor','pointer');
			if (scoNode.nodePrev.name == shell.menuJSONName) {
				disableNav('back');
			} else {
				setNav('back', scoNode.nodePrev.id, scoNode.nodePrev.name);
			}
			break;
		case('next'):
			nextIsDim = false;
			$(shell.pageNav.nextBtn).removeClass('dim');
			//$(shell.pageNav.nextBtn).removeAttr('disabled');
			$(shell.pageNav.nextBtn).css('cursor','pointer');
			if (scoNode.nodeNext.name == shell.menuJSONName) {
				disableNav('next',true);
			} else {
				setNav('next', scoNode.nodeNext.id, scoNode.nodeNext.name);
			}
			break;
	}
}
/*
Function: forceNext
	Takes the learner to the next page, even if the next button is currently disabled.
	
Parameters:
	none
	
Dependencies:
	<jQuery>;

Returns:
	n/a

Change Log:
	2013.03.07 	ALP - Initial version
*/
function forceNext() {
	markPageComplete();
	$('#navNext').trigger('click');	
	return false;
}

/*================================================================================================*/
// PROGRESS METHODS
/*================================================================================================*/
/*
Function: adjustProgress
	Adjusts the progress bar

Parameters:
	currPage	- The number of the current page
	totalPages	- The total number of pages in the lesson

Dependencies:
	<ada$>; <trackCompletion>;

Returns:
	none

Bugs:
	None known

Change Log:
	2007.03.08	ALP	- Initial version
	2007.05.25	JEM	- Updated to use ada$()
	2010.07.10	ALP	- Updated to call <trackCompletion>
	2012.10.04	ALP - Updated to work with shellData.js and added ability to specify text, progress bar, or both.
*/
function adjustProgress() {
	var current = shell.currPageNum;
	var total = totalPageNum;
	//alert("current: " + current + " total: " + total);
	if (shell.progress.type == 'text' || shell.progress.type == 'both') {
		ada$(shell.progress.textDiv).innerHTML = current + " of " + total;
	} 
	if (shell.progress.type == 'bar' || shell.progress.type == 'both') {
		var minWidth = shell.progress.barMinWidth;
		var ratio = current/total;
		var pbWidth = shell.progress.barWidth*ratio;
		if (pbWidth < minWidth+4) pbWidth+= minWidth;
		var myEl = ada$(shell.progress.barDiv);
		var myEl2 = ada$(shell.progress.barInner);
		myEl.style.width = pbWidth+'px';
		myEl2.style.width = pbWidth+'px';
		// If it's only the progress bar, hide the text div
		if (shell.progress.type == 'bar') {
			$('#'+shell.progress.textDiv).addClass('off');
		}
	}
}

/*
Function: trackCompletion
	Keeps track of the pages that have been visited

Parameters:
	None

Dependencies:
	None

Returns:
	none

Bugs:
	None known

Change Log:
	2010.07.10	ALP	- Initial version
	2013.04.11 	ALP	- Updated to shell.tracking.pagesVisited[shell.currPageNum-1] to correctly track completion.
	2013.05.04	ALP - Added call to <markPageComplete> to create menu checkmarks.
	2014.10.28 	ALP - Added check for scoIsComplete() to mark SCO complete when needed.
*/
function trackCompletion() {
	//console.log(shell.tracking.pagesVisited);
	if (shell.tracking.pagesVisited[shell.currPageNum-1] != 1) {
		// Keep track of the pages visited
		//console.log("setting "+(shell.currPageNum) + " to visited");
		shell.tracking.pagesVisited[shell.currPageNum-1] = 1;
		//console.log("This is the first visit");
		shell.tracking.firstVisit = true;
		storePagesCompleted();
		markPageComplete();
	} else {
		console.log('page has already been visited');
		markPageComplete();
		shell.tracking.firstVisit = false;
		//console.log(shell.tracking.pagesVisited);
	}
	if (scoIsComplete()) {
		//console.log("calling completeSCO()");
		completeSCO();
		SCOPassed = true;
	}
}
function scoIsComplete() {
	//console.log(shell.tracking.pagesVisited);
	if (SCOPassed) return true;
	if (!SCOPassed && shell.tracking.pagesVisited.length == totalPageNum) {
		//console.log("checking whether all pages have been visited");
		//console.log(shell.tracking.pagesVisited);
		var SCOComplete = true;	
		var scorePassed = true;
		for (var i=0; i<totalPageNum; i++) {
			if (shell.tracking.pagesVisited[i] != 1) {
				SCOComplete = false;
				break;
			}
		}
		if (window.scoredActivities) {
			//console.log("There are scored activities");
			for (var j=0; j<scoredActivities.length; j++) {
				var result = checkIfLessonPassed(j+1);
				if (result.passed == false) {
					scorePassed = false;
					break;
				}
			}
		}
		//console.log('SCOComplete: ' + SCOComplete + " scorePassed: " + scorePassed);
		if (SCOComplete && scorePassed) {
			return true;
		} 
	}
	return false;
}
function setPageScore(num) {
	if (window.scoredActivities) {
		var lessonIndex, pageIndex;
		for (var i=0; i<scoredActivities.length; i++) {
			var lesson = scoredActivities[i];
			for (var j=0; j<lesson.length; j++) {
				if (shell.currPageNum == lesson[j]) {
					lessonIndex = i;
					pageIndex = j;
				}
			}
		}
		//console.log(lessonIndex + " " + pageIndex);
		if (pageIndex == 'undefined' || pageIndex == undefined) {
			return;
		}
		shell.tracking.pageScores[lessonIndex][pageIndex] = num;
	}
}

function initializePageScores() {
	for (var i=0; i<scoredActivities.length; i++) {
		var lessonScores = new Array();
		var lesson = scoredActivities[i];
		for (var j=0; j<lesson.length; j++) {
			lessonScores[j] = 0;	
		}
		shell.tracking.pageScores[i] = lessonScores;
	}
}

function checkIfLessonPassed(lessonNum) {
	var result = new Object;
	result.score = 0;
	result.passed = true;
	if (window.scoredActivities) {
		var lesson = shell.tracking.pageScores[lessonNum-1];
		var lessonTotal = 0;
		for (var i=0; i<lesson.length; i++) {
			lessonTotal += lesson[i];
		}	
		result.score = (lessonTotal/lesson.length)*100;
		if (result.score < passingScore) {
			result.passed = false;
		}
	}
	return result;
}

/*
Function: 

Parameters:

Dependencies:

Returns:

Change Log:

*/
function launchScoFromUrl() {
	var scoPath = parseUri(window.location.href).queryKey.scoPath;
	var errorMessage = 'Sorry, this page was not launched properly.  You course cannot be displayed.  Please try again.';
	var scoStartFile = 'scoStart.html';
	if (scoPath.length > 0) {
		var scoScript = document.createElement('script');
		scoScript.type = 'text/javascript';
		scoScript.src = scoPath + '/content/sco_data.js';
		document.getElementsByTagName('head')[0].appendChild(scoScript);
		ada$(shell.content.contentDiv).src = scoPath + '/' + scoStartFile;
	} else {
		ada$('content').innerHTML = errorMessage;
	}
}
/*================================================================================================*/
// AUDIO PLAYER METHODS
/*================================================================================================*/
/*
Function: initAudioPlayer
	Initializes the jPlayer audio player

Parameters:
	None

Dependencies:
	<jQuery>; <jPlayer>;

Returns:
	none

Bugs:
	None known

Change Log:
	2012.10.22	ALP	- Initial version
	2013.01.06	ALP	- Added ability to have an audio volume button that toggles a volume bar
	2013.01.08	ALP - Added call to loadPageAudio() in ready function to ensure it is loaded only after the player is ready.
	2013.02.20	ALP - Added ability to updated CC text and audio on subpages (e.g., popups and contentSwaps) and to updated timed page content.
	2013.02.22  ALP - Broke audioPlayerUpdate() into its own function. 
	2013.02.25	ALP - Altered rewind to re-load page content, rather than trying to reverse everything that has happened.
	2013.03.26 	ALP - Adjustments to combine play/pause into a single button, and addition of <togglePlayPause>. Added listener for $.jPlayer.event.ended to call <togglePlayPause>.
*/
function initAudioPlayer() {
	// Set up the audio player itself
	//console.log("setting up audio player");
	$(shell.audio.playerDiv).jPlayer({
		ready: function(){
			//console.log("audio player ready");
			// Call this AFTER the audio player is ready
			loadPageAudio();
		},
		swfPath: shell.audio.audioFlashPath,
		noConflict: "jQuery",
		solution: shell.audio.solution,
		wmode: shell.audio.wmode,
		supplied: shell.audio.audioFileType,
		volume: shell.audio.defaultVolume,
		verticalVolume: shell.audio.verticalVolume,
		cssSelectorAncestor:"#"+shell.audio.audioControlContainer,
		cssSelector: {
			/*play:shell.audio.play,
			pause:shell.audio.pause,
			volumeBar:'.'+shell.audio.volumeBar,
  			volumeBarValue:'.'+shell.audio.volumeBarValue*/
		},
		size: {
			width: shell.audio.width,
			height: shell.audio.height
		},
		errorAlerts: shell.audio.debug
	});
	// If needed, set up time tracking
	if ((shell.caption.isTimedCC || shell.timedContent.isEnabled) && shell.caption.data[shell.currPageId]) {
		$(shell.audio.playerDiv).on($.jPlayer.event.timeupdate, function(event) {
			console.log('playing audio');
			audioPlayerUpdate(event);
		});
	}
	/*$(shell.audio.playerDiv).on($.jPlayer.event.ended, function(event) {
		togglePlayPause('end');
		console.log('ended from initAudio player');
		$(shell.audio.playerDiv).off($.jPlayer.event.ended);
	});*/
	$(shell.audio.play).click(function(e) {
		//console.log($(shell.audio.play).hasClass('dim'));
		if ($(shell.audio.play).hasClass('dim') == false) {
			//console.log('I am playing');
			if (videoPlaying) {
				pauseVideo();
				videoPlaying = false;
			} else if (pageVidId != undefined && pageVidId != ''){
				playVideo();
				videoPlaying = true;
			}
			togglePlayPause();
		} else {
			if (currPageData.audio && currPageData.audio != '') {
				alert("The audio has finished playing. To replay the audio, click the replay button.");
			} else {
				alert("This page has no audio or animation to play.");
			}
		}
		//$(shell.audio.playerDiv).jPlayer("play");
		//setTimeout(function() {$(shell.audio.pause).focus()},0);
		return false;
	});
	/*$(shell.audio.pause).click(function(e) {
		$(shell.audio.playerDiv).jPlayer("pause");
		setTimeout(function() {$(shell.audio.play).focus()},0);
		return false;
	});*/
	// Set up the rewind button (which is not a default jPlayer button)
	if (shell.audio.rewind != '') {
		$(shell.audio.rewind).click(function(e) {
			if (!currPageData.audio || currPageData.audio == '') {
				alert('This page has no audio or animation to replay.');
				return false;
			}
			loadPage(shell.currPageId);
			// 2013.02.25 Altered rewind to re-load page content, rather than trying to reverse everything that has happened.
			/*resetTimedData();
			resetTimingPositions();
			shell.audio.currentTime = 0;
			loadPageAudio();
			//$(shell.audio.playerDiv).jPlayer("play",0);*/
			
			return false;
		});
	}
	if (shell.audio.volume != '') {
		$(shell.audio.volume).click(function(e) {
			if (!currPageData.audio || currPageData.audio == '') {
				alert('This page has no audio or animation to mute.');
				return false;
			}
			//if it is muted
			if ($(shell.audio.volume).hasClass('muted') && !$(shell.audio.volume).hasClass('dim')) {
				$(shell.audio.volume).removeClass('muted');
				$(shell.audio.volume).attr("title","Volume is on");
				if (pageVidId != undefined && pageVidId != '') {
					toggleVolume(); 
				} else {
					$(shell.audio.playerDiv).jPlayer("volume",shell.audio.defaultVolume);
				}
			} else if (!$(shell.audio.volume).hasClass('dim')) {
				$(shell.audio.volume).addClass('muted');
				$(shell.audio.volume).attr("title","Volume is muted");	
				if (pageVidId != undefined && pageVidId != '') {
					toggleVolume(); 
				} else {
					$(shell.audio.playerDiv).jPlayer("volume",0);
				}
			}
			return false;
		});	
	}
}
function togglePlayPause(type) {
	//console.log('togglePlayPause');
	if ($(shell.audio.play).hasClass('pause') || type == 'end') {
		$(shell.audio.playerDiv).jPlayer("pause");
		$(shell.audio.play).removeClass('pause');
		$(shell.audio.play).addClass('play');
		$(shell.audio.play).attr('title','Click to play the audio');
	} else {
		if (type != 'end') $(shell.audio.playerDiv).jPlayer("play");
		$(shell.audio.play).removeClass('play');
		$(shell.audio.play).addClass('pause');
		$(shell.audio.play).attr('title','Click to pause the audio');
	}
}
/*
Function: audioPlayerUpdate
	Initializes the jPlayer audio player

Parameters:
	event - The jPlayer time event sent from the audio player

Dependencies:
	<jQuery>; <jPlayer>;

Change Log:
	2013.02.22	ALP	- Initial version - broke out from initAudioPlayer().
*/
function audioPlayerUpdate(event) {
	var time=event.jPlayer.status.currentTime;
	// This if ensures that the update event doesn't fire right after the learner presses the replay button, and so the first item isn't displayed right away again because it thinks it is later than it is.
	if (!(shell.caption.currPosition == 0 && time > 0.5)) {
		//console.log('shell.caption.currPosition: ' + shell.caption.currPosition + " time: " + time);
		shell.audio.currentTime = time;
		if (shell.caption.isTimedCC && shell.caption.data[shell.currPageId]) {
			var ccObjArray = shell.caption.data[shell.currPageId].mainPage;
			if (shell.caption.onSubPage) {
				if (shell.caption.onSubSubPage) {
					ccObjArray = shell.caption.data[shell.currPageId].subPages[shell.caption.subPageNum].subPages[shell.caption.subSubPageNum];
				} else {
					if(shell.caption.data[shell.currPageId].subPages) {
						//console.log("subpages: " +shell.caption.data[shell.currPageId].subPages);
						ccObjArray = shell.caption.data[shell.currPageId].subPages[shell.caption.subPageNum].mainPage;
					}
				}
			}
			//console.log(ccObjArray);
			if (shell.caption.currPosition < ccObjArray.length) {
				var pageInfo = ccObjArray[shell.caption.currPosition];						
				//console.log('pageInfo: ' + pageInfo);
				if (time >= pageInfo.time) {
					loadCCText(pageInfo.html);
					shell.caption.currPosition++;
				}
			} 
		}
		// Set up timed content display
		if (shell.timedContent.data[shell.currPageId]) {
			if (!shell.timedContent.onSubPage && !shell.timedContent.onSubSubPage) {
				if (shell.timedContent.currPosition < shell.timedContent.data[shell.currPageId].mainPage.length) {
					//console.log('shell.timedContent.currPosition: ' + shell.timedContent.currPosition + ' and shell.timedContent.data[shell.currPageId].mainPage.length: ' + shell.timedContent.data[shell.currPageId].mainPage.length);
					var timeInfo = shell.timedContent.data[shell.currPageId].mainPage[shell.timedContent.currPosition];						
					if (time >= timeInfo.time) {
						//console.log(timeInfo.displayType + " " + timeInfo.contentId);
						displayTimedItem(timeInfo);
					}
				}
			} else if (shell.timedContent.onSubPage) {
				//console.log("I'm on a sub page");
				//If ths subpage has timed content (outside of CC text)
				if (shell.timedContent.data[shell.currPageId].subPages) {
					//console.log("shell.timedContent.currPosition: "+ shell.timedContent.currPosition);
					if (shell.timedContent.currPosition < shell.timedContent.data[shell.currPageId].subPages[shell.caption.subPageNum].length) {
						//console.log('shell.timedContent.currPosition: ' + shell.timedContent.currPosition + ' and shell.timedContent.data[shell.currPageId].mainPage.length: ' + shell.timedContent.data[shell.currPageId].mainPage.length);
						var timeInfo = shell.timedContent.data[shell.currPageId].subPages[shell.caption.subPageNum][shell.timedContent.currPosition];						
						//console.log("time: "+ time);
						if (time >= timeInfo.time) {
							//console.log(timeInfo.displayType + " " + timeInfo.contentId);
							displayTimedItem(timeInfo);
						}
					}	
				}
			}
		}
	}
//console.log('time is being updated: ' + event.jPlayer.status.currentTime);		
}
/*
Function: loadPageAudio
	Loads the audio file defined for the page in scoContent into the audio player

Parameters:
	audio - (optional) the audio property to load (defaults to currPageData.audio)

Dependencies:
	<jQuery>; <jPlayer>;

Returns:
	none

Bugs:
	None known

Change Log:
	2012.10.22	ALP	- Initial version
	2013.01.22	ALP	- Modified to accept an optional parameter of the audio file
	2013.02.21	ALP - Modified to set shell.caption.current.position = 0; and shell.timedContent.current.position = 0; every time a new audio file is loaded
	2013.03.08	ALP - Modified to load the correct page cc if the cc is not timed, as that is usually done in the audioPlayerUpdate function, which does not get called when CC is not timed.
	2013.04.15  VRB - Added code to handle the case where audioFile is not set and currPageData is undefined. 
	2013.05.31	ALP	- Added check for audioToLoad != ' ', which is the case where we don't have initial audio, but still want the replay and mute buttons to be enabled.
*/
function loadPageAudio(audioFile) {
	//console.log("audioFile: " +audioFile);
	$(shell.audio.playerDiv).off($.jPlayer.event.ended);
	togglePlayPause('end');
	shell.caption.currPosition = 0;
	shell.timedContent.currPosition = 0;
	if (!videoPlaying) {
		var audioToLoad;
		if(audioFile) {
			audioToLoad = audioFile
		} else {
			audioToLoad = currPageData.audio;
		}
		//console.log(audioToLoad);
		if (audioToLoad && audioToLoad != '' && audioToLoad != ' ') {
			//console.log("loading audio: "+ audioToLoad);
			//Determine the different audio types
			var audioTypes = shell.audio.audioFileType.split(',');
			// Create the audio media format object 
			var audioPaths = {};
			for (var i=0; i<audioTypes.length; i++) {
				if (i != audioTypes.length-1) audioPaths = audioPaths + ", ";
				switch(audioTypes[i]) {
					case('mp3'): 
						audioPaths.mp3 = audioToLoad + ".mp3";
						break;
					case('m4a'):
						audioPaths.m4a = audioToLoad + ".m4a";
						break;
					case('webma'):
						audioPaths.webma = audioToLoad + ".webm";
						break;
					case('oga'):
						audioPaths.oga = audioToLoad + ".ogg";
						break;
					case('fla'):
						audioPaths.fla = audioToLoad + ".flv";
						break;
					case('wav'):
						audioPaths.wav = audioToLoad + ".wav";
						break;
				}
			}
			//console.log("setting media to " + audioPaths.mp3);
			$(shell.audio.playerDiv).jPlayer("setMedia", audioPaths);
			//console.log('playing media');
			//disable AUTOPLAY code. #JS addition
			if(!delayPage || (audioToLoad.length>16)){
				$(shell.audio.playerDiv).jPlayer("play"); // Attempt to auto play the media
				togglePlayPause();
			}
			if (audioIsDim) enableAudioControls();
		} else if (audioToLoad == ' ') {
			if (audioIsDim) enableAudioControls();
		} else {
			//console.log("This page has no audio");
			$(shell.audio.playerDiv).jPlayer("clearMedia");
			disableAudioControls('none');
		}
		if (!shell.caption.isTimedCC) {
			var ccObjArray = shell.caption.data[shell.currPageId].mainPage;
			if (shell.caption.onSubPage) {
				if (shell.caption.onSubSubPage) {
					ccObjArray = shell.caption.data[shell.currPageId].subPages[shell.caption.subPageNum].subPages[shell.caption.subSubPageNum][0];
				} else {
					ccObjArray = shell.caption.data[shell.currPageId].subPages[shell.caption.subPageNum].mainPage[0];
				}
			} else {
				ccObjArray = ccObjArray[0]
			}
			loadCCText(ccObjArray.html);		
		} else {
			$(shell.audio.playerDiv).on($.jPlayer.event.timeupdate, function(event) {
				audioPlayerUpdate(event);
			});
		}
		$(shell.audio.playerDiv).on($.jPlayer.event.ended, function(event) {
			$(shell.audio.playerDiv).off($.jPlayer.event.ended);
			//console.log('audio ended');
			togglePlayPause('end');	
			disablePlay('end');
			audioEnded();	
		});
	}
}
function audioEnded() {
	//Redefine on specific pages to do something activity-specific.	
}
/* 
Function: pauseAudio
	Pauses the current audio file

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2012.12.19	ALP	- Initial version
*/
function pauseAudio() {
	$(shell.audio.playerDiv).jPlayer("pause");	
}
/* 
Function: clearAudio
	Removes any audio files from the audio player

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2012.12.19	ALP	- Initial version
*/
function clearAudio() {
	$(shell.audio.playerDiv).jPlayer("clearMedia");
}
/*
Function: disableAudioControls
	Disable the CC button on pages without audio

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2012.10.22	ALP	- Initial version
	2013.01.08	ALP - Added calls to disable volume toggle button (if present)
	2013.05.04	ALP	- Added "reason" parameter and title and alert when clicked and there is no audio on the page.
*/
function disableAudioControls(reason) {
	//console.log('disableAudioControls');
	$(shell.audio.play).addClass('dim');
	//$(shell.audio.pause).addClass('dim');
	$(shell.audio.rewind).addClass('dim');
	$(shell.audio.play).css('cursor','default');
	//$(shell.audio.pause).css('cursor','default');
	$(shell.audio.rewind).css('cursor','default');
	if (shell.audio.volume != '') {
		$(shell.audio.volume).addClass('dim');
		$(shell.audio.volume).css('cursor','default');
		if (reason == 'none') {
			$(shell.audio.volume).attr('title','This page has no audio or animation to play.');
		} else {
			$(shell.audio.volume).attr('title','The audio is currently disabled.');
		}
	}
	if (reason == 'none') {
		$(shell.audio.play).attr('title','This page has no audio or animation to play.'); 
		//$(shell.audio.pause).attr('title','');
		$(shell.audio.rewind).attr('title','This page has no audio or animation to play.');
	} else {
		$(shell.audio.play).attr('title','The audio is currently disabled.'); 
		//$(shell.audio.pause).attr('title','');
		$(shell.audio.rewind).attr('title','The audio is currently disabled.');
	}
	audioIsDim = true;
}
/*
Function: disablePlay
	Disable the play button (called after audio on a page finishes playing.

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2013.04.27	ALP	- Initial version
*/
function disablePlay(reason) {
	$(shell.audio.play).addClass('dim');
	$(shell.audio.play).css('cursor','default');
	if (reason == 'end') {
		$(shell.audio.play).attr('title','Click the replay button to play the audio again.'); 
	} else {
		$(shell.audio.play).attr('title','This page has no audio.'); 
	}
	audioIsDim = true;
}
/*
Function: enableAudioControls
	Enable the audio controls on pages with audio
Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2012.10.22	ALP	- Initial version
	2013.01.08	ALP - Added calls to enable volume toggle button (if present)
*/
function enableAudioControls() {
	//console.log('enableAudioControls');
	$(shell.audio.play).removeClass('dim');
	$(shell.audio.play).removeAttr('disabled');
	//$(shell.audio.pause).removeClass('dim');
	$(shell.audio.rewind).removeClass('dim');
	$(shell.audio.play).css('cursor','pointer');
	//$(shell.audio.pause).css('cursor','pointer');
	$(shell.audio.rewind).css('cursor','pointer');
	$(shell.audio.play).attr('title','Click to pause the audio');
	//$(shell.audio.pause).css('title','Pause');
	$(shell.audio.rewind).attr('title','Click to replay the audio');
	if (shell.audio.volume != '') {
		$(shell.audio.volume).removeClass('dim');
		$(shell.audio.volume).css('cursor','pointer');
		$(shell.audio.volume).removeAttr('disabled');
		$(shell.audio.volume).attr('title','Click to mute the audio');
	}
	audioIsDim = false;
}
/*
Function: enablePlay
	Enable the play button (called after audio on a page finishes playing).

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2013.04.27	ALP	- Initial version
*/
function enablePlay() {
	$(shell.audio.play).removeClass('dim');
	$(shell.audio.play).removeAttr('disabled');
	$(shell.audio.play).css('cursor','pointer');
	$(shell.audio.play).attr('title','Click to pause the audio');
	audioIsDim = false;
}
/*
Function: initCC
	Open jQuery Dialog box for Closed Captioning.

Change Log:
	2011.03.23	VRB	- Initial version
	2012.10.22	ALP - Added check for whether the CC button is disabled to the onclick funcion
	2013.01.07	ALP - Vastly simplified the CC positioning function to use jQuery positioning widget
*/

var ccX = -1;
var ccY = -1;
function initCC() {
	$(function() {
		$("#"+shell.caption.mainEl).dialog({
			autoOpen: false,
			resizable: true,
			width: shell.caption.width, //600,
			height: shell.caption.height,
			minHeight: shell.caption.minHeight,
			dialogClass: 'ccDialog',
			open: function() {
				$('#cc508Link').focus(function() {
					$('#cc508Link').addClass('section508');
					$('#cc508Link').click(function() {
						$('#bct').focus();
						$('#cc508Link').off('click');
					});
				});
				$('#cc508Link').blur(function() {
					$('#cc508Link').removeClass('section508');
				});
				/*$('#cc508Link').click(function() {
					$('#breadcrumbText').focus();
					$('#cc508Link').off('click');
				});*/
				setTimeout(function(){$('#cc508Link').blur().removeClass('off').addClass('tabReturn')},0);
				//setTimeout(function(){$('#cc508Link').removeClass('off')},0);
			},
			close: function() {
				$('#'+shell.caption.btnId).focus();
				$('#cc508Link').addClass('off');
			},
			resizeStart: function(event, ui) {
				$('#mouseCapture').css({ visibility: "visible", display: 'block' });	
			},
			resizeStop: function(event, ui) {
				$('#mouseCapture').css({ visibility: "hidden", display: 'none' });
			},
			dragStart: function(event, ui) {
				$('#mouseCapture').css({ visibility: "visible", display: 'block' });
			},
			dragStop: function(event, ui) {
				$('#mouseCapture').css({ visibility: "hidden", display: 'none' });
			}
		});
		$('#'+shell.caption.btnId).click(function(e) {
		
			if (!CCIsDim) {
				if ( $('#'+shell.caption.mainEl).dialog('isOpen') )	{			
					$('#'+shell.caption.mainEl).dialog('close');
					//setTimeout(function(){$('#'+shell.caption.btnId).focus()},0);
				} else {
					$('#'+shell.caption.mainEl).dialog('open');
					$('#'+shell.caption.mainEl).dialog('widget').position({my:shell.caption.positionMy, at: shell.caption.positionAt, of: shell.caption.positionWRT});
					//setTimeout(function(){$('#'+shell.caption.textEl).focus()},0);
				}
				return false;
			} else {
				//console.log("CC is diabled");	
			}
		});
	});
}

/*
Function: storeCCData
	Loads the CC data into the shell.caption.data array

Change Log:
	2013.02.04	ALP	- Initial version
	2013.05.06	ALP	- Moved everything after the 3rd line out of the initial if statement.
*/
function storeCCData() {
	if (!shell.caption.data[shell.currPageId]) {
		shell.caption.data[shell.currPageId] = new Object();
	}
	// If content for the main page hasn't already been stored
	var curr = shell.caption.data[shell.currPageId];
	if (!curr.mainPage) {
		curr.mainPage = new Array();
		if (currPageData.closedCaption.length != 0 && currPageData.closedCaption != ''){
			var ccData = currPageData.closedCaption;
			var storageArray = new Array();
			for (var i=0, j=ccData.length; i<j; i++) {
				var ccObject = new Object();
				ccObject.time = ccData[i].time;
				ccObject.html = ccData[i].html;
				storageArray[storageArray.length] = ccObject;
			}		
			curr.mainPage = storageArray;
			//console.log(curr);
		} else {
			//console.log('There is no CC text for this page');	
		}
	} 
}
/*
Function: storeSubCCData
	Loads the CC data into the shell.caption.data array
	
Parameters:
	num 	- The number of the trigger
	id		- The id of the audio file
	ccData	- The closedCaption array for the current subpage

Change Log:
	2013.02.19	ALP	- Initial version
*/
function storeSubCCData(num, id, ccData) {
	//console.log("storing CC data for sub page " + num + " audio file " + id + " CCData: " + ccData);
	// If there is only subpage CC data for this page
	if (!shell.caption.data[shell.currPageId]) {
		//console.log("only sub CC");
		shell.caption.data[shell.currPageId] = new Object();
	}
	// If storage for the sub pages hasn't already been started
	var curr = shell.caption.data[shell.currPageId];
	if (!curr.subPages) {
		curr.subPages = new Array();
	} 
	if (!curr.subPages[num]) {
		// Store the current subpages's CC array
		curr.subPages[num] = new Object();
		curr.subPages[num].mainPage = new Array();
		var storageArray = new Array();
		for (var i=0, j=ccData.length; i<j; i++) {
			var ccObject = new Object();
			ccObject.time = ccData[i].time;
			ccObject.html = ccData[i].html;
			storageArray[storageArray.length] = ccObject;
		}
		//console.log(storageArray);
		curr.subPages[num].mainPage = storageArray;
	}
}

/*
Function: storeSubSubCCData
	Loads the sub, sub CC data into the shell.caption.data array
	
Parameters:
	num 	- The number of the trigger
	ccData	- The closedCaption array for the current sub-subpage

Change Log:
	2013.02.20	ALP	- Initial version
*/
function storeSubSubCCData(num, ccObj) {
	// If storage for the sub pages hasn't already been started
	var curr = shell.caption.data[shell.currPageId];
	if (!curr.subPages) {
		curr.subPages = new Array();
	} 
	// If storage for the sub sub pages hasn't already been started
	if (!curr.subPages[num].subPages) {
		curr.subPages[num].subPages = new Array();
	}
	for (var i=0, j=ccObj.length; i<j; i++) {
		var ccData = ccObj[i].closedCaption;
		var storageArray = new Array();
		for (var k=0, m=ccData.length; k<m; k++) {
			var ccObject = new Object();
			ccObject.time = ccData[k].time;
			ccObject.html = ccData[k].html;
			storageArray[storageArray.length] = ccObject;
		}
		curr.subPages[num].subPages[ccObj[i].id] = storageArray;
	}
	//console.log(shell.caption.data[shell.currPageId]);
}
/*
Function: loadPageCC
	Load the CC text into the CC area

Change Log:
	2012.10.XX	MTW	- Initial version
	2012.10.22	ALP	- Updated to use currPageData and check for whether captioning is enabled
	2013.02.04 	ALP - Re-wrote to work with timed CC text.
*/
function loadPageCC() {
	// Reset the position of the CC array to zero.
	shell.caption.currPosition = 0;
	storeCCData();
	// If CC is not timed, set it up here. Otherwise, it is set up in loadPage
	if (!shell.caption.isTimedCC) {
		loadCCText(shell.caption.data[shell.currPageId].mainPage[shell.caption.currPosition].html);	
	}
}
var updateCC = function() {
	clearAudio();
	var myPlayer = this;
	//console.log("current video id: "+ myPlayer.id);
	currPageVideo = myPlayer.id;
	if (!videoPlaying) { //2014.04.23 AP
		disableAudioControls();
		loadCCText(pageVidCC[myPlayer.id]);
	} else {
		//console.log(pageVidCC);
		loadCCText(pageVidCC[pageVidIds[0]]);
	}
}
/*
Function: loadCCText
	Load the CC text into the CC area

Parameters:
	text	-	The text to load into the CC area

Dependencies:
	None

Returns:
	none
	
Change Log:
	2012.12.19	ALP	- Initial version
*/
function loadCCText(text) {
	clearCC();
	//console.log("Loading: "+text);
	$('#'+shell.caption.textEl).append(text);
	if (CCIsDim) enableCC();
}
/*
Function: loadSubCCText
	Load the CC text into the CC area for sub-pages (like pop-ups or contentSwaps)

Parameters:
	text	-	The text to load into the CC area

Dependencies:
	None

Returns:
	none
	
Change Log:
	2013.02.19	ALP	- Initial version
*/
function loadSubCCText(text) {
	clearCC();
	$('#'+shell.caption.textEl).append(text);
	if (CCIsDim) enableCC();
}
/*
Function: clearCC
	Empties the CC text area

Change Log:
	2012.12.19	ALP	- Initial version
*/
function clearCC() {
	$('#'+shell.caption.textEl).empty();	
}
/*
Function: disableCC
	Disable the CC button on pages without CC text

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2012.10.22	ALP	- Initial version
*/
function disableCC() {
	CCIsDim = true;
	ada$(shell.caption.btnId).className = 'dim';
	ada$(shell.caption.btnId).style.cursor = 'default';
	ada$(shell.caption.btnId).title = 'No ' + shell.caption.name + ' Available';
}
/*
Function: enableCC
	Enable the CC button on pages with CC text

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2012.10.22	ALP	- Initial version
*/
function enableCC() {
	ada$(shell.caption.btnId).className = '';
	ada$(shell.caption.btnId).style.cursor = 'pointer';
	ada$(shell.caption.btnId).title = shell.caption.name;
	CCIsDim = false;
}
/* Used by popUp and contentSwap.js ****************************/
/*
Function: checkClickCompletion
	check if pop up has been viewed (at this time if pop up has been clicked) and if all pop ups have been viewed enable the next button

Parameters:
	isClicked from createPopUp function

Dependencies:
	<enableNav>

Returns:
	none
	
Change Log:
	2012.11.20	MTW	- Initial version
	2014.04.27  ALP - Added call to <markPageComplete> when complete, which also sets the menu checkmark.
*/
function checkClickCompletion(isClicked) {
	var isComplete = true;
	var k = $('[id^="trigger"]').length;
	//console.log(k);
	for (i = 0; i < k; i++) {
		//run through the pop-ups and see if all have been clicked
		isComplete = isComplete && isClicked[i];
	}
	//console.log(isComplete);
	if (isComplete) {
		//alert('Activity has been completed.');
		markPageComplete();
	}
}
function pauseAllVideos() {
	//console.log("pausing all videos");
	//console.log(currPageVideo);
	if (pageVidId != undefined && pageVidId != '') {
		pauseVideo();
	}	
	/*if (currPageVideo != undefined && currPageVideo != '') {
		
		 Uncomment to switch back to HTML5 video
		//console.log("Video id: " + pageVidIds[currPageVideo]);
		_V_(currPageVideo).ready(function(){
			var myPlayer = this;
			myPlayer.pause();
		});	
	}*/
}
function playVideo() {
	var flash = document.getElementById(pageVidIds[0]);
	//console.log('playVideo: '+flash.id);
	flash.playVideo();
}
function pauseVideo() {
	//console.log(pageVidIds);
	var flash = document.getElementById(pageVidIds[0]);
	//console.log('pauseVideo: '+flash.id);
	flash.pauseVideo();
}
function rewindVideo() {
	var flash = document.getElementById(pageVidIds[0]);
	//console.log(flash.id);
	flash.rewindVideo();
}
function toggleVolume() {
	var flash = document.getElementById(pageVidIds[0]);
	//console.log(flash.id);
	flash.toggleVolume();
}
function videoIsPlaying(state) {
	videoPlaying = state;
	//console.log("is video playing? " + 	state);
	if (audioIsDim) enableAudioControls();
}
function hidePlay(){
	//console.log('hidePlay');
	togglePlayPause();
}
function showPlay(){
	//console.log('show play');
	togglePlayPause();
}
function prepVideoSkip() {
	$(document).bind("keyup","space", function(e) {
		//console.log('pressed a key');
		if (pageVidId != undefined && pageVidId != '') {
			var flash = document.getElementById(pageVidIds[0]);
			//console.log(flash.id);
			flash.jumpToEnd();
		}
	});
}
//prepVideoSkip();
/*
Function: unloadAllVideos
	Unloads videos before a new page load to prevent unending errors in IE when the Flash fallback is used

Parameters:
	None

Dependencies:
	None

Returns:
	none
	
Change Log:
	2013.03.13	ALP	- Initial version
*/
function unloadAllVideos() {
	videoIsPlaying(false);
	pageVidIds = new Array();
	pageVidCC = new Array();
	currPageVideo = '';
	pageVidDiv = "";
	pageVidId = "";	
	//console.log('pageVidIds.length: ' + pageVidIds.length);
	/*if (pageVidIds.length != 0) {
		for (var i=0, j=pageVidIds.length; i<j; i++) {
			//console.log('unloading videos');
			//console.log(pageVidIds);
			// get the page's video player
			var player = _V_(pageVidIds[i]);      
												 
		  // for html5 - clear out the src which solves a browser memory leak
		  //  this workaround was found here: http://stackoverflow.com/questions/5170398/ios-safari-memory-leak-when-loading-unloading-html5-video                                         
		  if(player.techName == "html5"){        
			player.tag.src = "";                 
			player.tech.removeTriggers();        
			player.load();                       
		  }                                      
												 
		  // destroy the parts of the player which are specific to html5 or flash
		  //player.tech.destroy();
		
			player.stopTrackingProgress();
			player.stopTrackingCurrentTime();
			VideoJS.players = {};
//			delete _V_.players[player.id];
			player.tech.destroy();
			//player.el.parentNode.removeChild(this.el)
		  
		  // destroy the player                 
		  //player.destroy();                      
		
		  // remove the entire player from the dom
		  $(player.el).remove();  
		}
		pageVidIds = new Array();
		pageVidCC = new Array();
		currPageVideo = '';
	}*/
}
function pauseAllAudio() {}	
/*
Function: setUpBranches
	Sets up the onClick events for the branch links on the current branch start page

Parameters:
	None

Dependencies:
	<shell.branchStartPages>, <$>

Returns:
	none
	
Change Log:
	2013.01.25	ALP	- Initial version
*/
function setUpBranches() {
	var branchArray = shell.branchStartPages.BSPArray[shell.currPageId];
	for (var i=0, j=branchArray.length; i<j; i++) {
		(function(info) {
			$('#'+info.trigger).on('click',function() {goToBranch(info)});
			// If the branch is complete, give the link a visited class
			if (info.isComplete) {
				$('#'+info.trigger).addClass('visited');
			}
		})(branchArray[i]);
	}
}
/*
Function: storeNewBranch
	Saves data object for a new branch in the shell.branchStartPages.BSPArray[shell.currPageId] array.

Parameters:
	id - The id of the first page in the branch
	trigger - the id of the link that jumps the user to the id specified by the id property.

Dependencies:
	<shell.branchStartPages>, <$>

Returns:
	none
	
Change Log:
	2013.01.27	ALP	- Initial version
*/
function storeNewBranch(id, trigger) {
	var BSPArray = shell.branchStartPages.BSPArray[shell.currPageId];
	BSPArray[BSPArray.length] = new Object();
	BSPArray[BSPArray.length-1].id = id;
	BSPArray[BSPArray.length-1].trigger = trigger;
	BSPArray[BSPArray.length-1].isComplete = false;
	//console.log(BSPArray);
}
/*
Function: allBranchesComplete
	Determines whether all branches of a branch start page have been visited

Parameters:
	bsp - the id of the branch start page

Dependencies:
	<shell.branchStartPages>

Returns:
	none
	
Change Log:
	2013.01.22	ALP	- Initial version
*/
function allBranchesComplete(bsp) {
	var isComplete = true;
	// If all branches are required
	if (shell.branchStartPages.BSPReqArray[bsp]) {
		if (shell.branchStartPages.BSPArray[bsp] != undefined) {
			for (var i=0, j = shell.branchStartPages.BSPArray[bsp].length; i<j; i++) {
				//console.log("branch " + i + " is complete? " + 	shell.branchStartPages.BSPArray[bsp][i][2]);
				if (!shell.branchStartPages.BSPArray[bsp][i].isComplete) {
					isComplete = false;
					break;
				}
			}
		} 
	}
	return isComplete;
}
/*
Function: goToBranch
	Jumps to the correct branch and sets the branch to visited

Parameters:
	branchInfo - 	Object, with properties id, trigger, and isComplete

Dependencies:
	<shell.branchStartPages>, <allBranchesComplete>

Returns:
	none
	
Change Log:
	2013.01.25	ALP	- Initial version
*/
function goToBranch(branchInfo) {
	loadPage(branchInfo.id);
	setBranchComplete(branchInfo);
	return false;	
}
/*
Function: setBranchComplete
	Sets a branch's isComplete property to true

Parameters:
	branchInfo - 	Object, with properties id, trigger, and isComplete

Dependencies:
	<shell.branchStartPages>, <allBranchesComplete>

Returns:
	none
	
Change Log:
	2013.01.27	ALP	- Initial version
*/
function setBranchComplete(branchInfo) {
	branchInfo.isComplete = true;
}
/*
Function: stringifyBSPArray
	Turns the BSPArray into a string for LMS storage.

Parameters:
	none

Dependencies:
	<shell.branchStartPages.BSPArray>

Returns:
	BSPArrayString - a string of the shell.branchStartPages.BSPArray
	
Change Log:
	2013.04.28	ALP	- Initial version
*/
function stringifyBSPArray() {
	var BSPArrayString = '';
	//console.log(shell.branchStartPages.BSPArray);
	var num = 0;
	for (key in shell.branchStartPages.BSPArray) {
		if (num != 0) {
			BSPArrayString += "&&";
		}
		var currArray = shell.branchStartPages.BSPArray[key];
		//console.log(currArray);
		BSPArrayString += currArray[0].bsp+"=";
		for (var i=0, j=currArray.length; i<j; i++) {
			var currObj = currArray[i];
			BSPArrayString += currObj.id+",";
			BSPArrayString += currObj.trigger+",";
			BSPArrayString += currObj.isComplete;
			if (i != j-1) {
				BSPArrayString += "!!";
			}
		}
		num++;
	};
	//console.log(BSPArrayString);
	return BSPArrayString;
}
/*
Function: restoreBSPArray
	Turns the BSP string stored in suspend_data back into the object the shell needs

Parameters:
	bspString - The string of information from shell data

Dependencies:
	<shell.branchStartPages.BSPArray>

Returns:
	none
	
Change Log:
	2013.04.28	ALP	- Initial version
*/
function restoreBSPArray(bspString) {
	//console.log("restoring " +bspString);
	var bspArray = bspString.split("&&");
	//console.log(bspArray);
	for (var i=0; i < bspArray.length; i++) {
		var split1 = bspArray[i].split('=');
		shell.branchStartPages.BSPArray[split1[0]] = new Array();
		shell.branchStartPages.BSPInitArray[split1[0]] = true;
		var newArray = new Array();
		var branchArray = split1[1].split('!!');
		for (var j=0, k=branchArray.length; j<k; j++) {
			var split2 = branchArray[j].split(",");
			var currBranch = new Object();
			currBranch.bsp = split1[1];
			currBranch.id = split2[0];
			currBranch.trigger = split2[1];
			currBranch.isComplete = split2[2];
			newArray[newArray.length] = currBranch;
		}
		shell.branchStartPages.BSPArray[split1[0]] = newArray;
	}
	//console.log(shell.branchStartPages.BSPArray);
}
/************************************************/
/* Timed Content Display Code 					*/
/************************************************/
/*
Function: storeTimedData
	Loads the timed content data into the shell.timedContent array

Change Log:
	2013.02.04	ALP	- Initial version
*/
function storeTimedData() {
	if (currPageData.timedEvents) {
		if (currPageData.timedEvents.events && currPageData.timedEvents.events.length != 0){
			if (!shell.timedContent.data[shell.currPageId]) {
				shell.timedContent.data[shell.currPageId] = new Object();
				// If timed content for the main page hasn't already been stored
				var curr = shell.timedContent.data[shell.currPageId];
				if (!curr.mainPage) {
					curr.mainPage = new Array();
					//if (currPageData.timedEvents && currPageData.timedEvents.events.length != 0){
					var timedData = currPageData.timedEvents.events;
					var storageArray = new Array();
					for (var i=0, j=timedData.length; i<j; i++) {
						var timedObject = new Object();
						timedObject.contentId = timedData[i].contentId;
						timedObject.time = timedData[i].time;
						timedObject.displayType = timedData[i].displayType;
						timedObject.speed = timedData[i].speed;
						storageArray[storageArray.length] = timedObject;
					}		
					curr.mainPage = storageArray;
						//console.log("Timed Data:");
						//console.log(curr);
				} 
			}  else {
				//console.log('Already stored timed content for the main page. May need to store timed content for a popUp or contentSwap');
			}
		}
		//console.log(currPageData.timedEvents);
		if (currPageData.timedEvents.description) {
			//alert('addTimedContentDesc');
			addTimedContentDesc();
		}
	} else {
		//console.log('There is no timedContent for this page');	
	}
	if (currPageData.timedEvents && currPageData.timedEvents.subEvents && currPageData.timedEvents.subEvents.length != 0){
		if (!shell.timedContent.data[shell.currPageId]) {
			shell.timedContent.data[shell.currPageId] = new Object();
		}
		// If timed content for the sub page hasn't already been stored
		var curr = shell.timedContent.data[shell.currPageId];
		if (!curr.subPages) {
			curr.subPages = new Array();
		}
		//if (currPageData.timedEvents && currPageData.timedEvents.events.length != 0){
		var timedData = currPageData.timedEvents.subEvents;
		for (var k=0, m=timedData.length; k<m; k++) {
			var storageArray = new Array();
			var subTimedData = timedData[k].events;
			for (var n=0, p=subTimedData.length; n<p; n++) {
				var timedObject = new Object();
				timedObject.contentId = subTimedData[n].contentId;
				timedObject.time = subTimedData[n].time;
				timedObject.displayType = subTimedData[n].displayType;
				timedObject.speed = subTimedData[n].speed;
				storageArray[storageArray.length] = timedObject;
			}
			curr.subPages[timedData[k].id] = storageArray;
		}	
		//console.log(shell.timedContent.data[shell.currPageId]);
	}
}
function displayTimedItem(timeInfo){
	for (var i=0, j=timeInfo.contentId.length; i<j; i++) {
		//console.log('display type is ' + timeInfo.displayType[i]);
		var speed = timeInfo.speed[i];// || timeInfo.speed[0];
		//console.log("speed is " + speed);
		if (timeInfo.displayType[i] != 'animate') {
			if (speed != undefined) {
				if(timeInfo.displayType[i] == 'onV'){
					//console.log('trying to animate' + timeInfo.contentId[i]);
					$(timeInfo.contentId[i]).fadeTo(speed,1);
				}
				else {
					if(timeInfo.displayType[i] == 'toggleV'){
						//console.log('trying to animate' + timeInfo.contentId[i]);
						if ($(timeInfo.contentId[i]).css("opacity")=="0") $(timeInfo.contentId[i]).fadeTo(speed,1);
						else $(timeInfo.contentId[i]).fadeTo(speed,0);
					}
					else {
						$(timeInfo.contentId[i])[timeInfo.displayType[i]](speed);
					}
				}
			}
			else $(timeInfo.contentId[i])[timeInfo.displayType[i]]();
		} else if (timeInfo.displayType[i] == 'animate') {
			//console.log('trying to animate ' + timeInfo.contentId[i])// + ' to ' + timeInfo.properties[i]);
			$(timeInfo.contentId[i])[timeInfo.displayType[i]](timeInfo.properties[i].opacity, speed);
			//console.log('succeeded');
		}
	}
	shell.timedContent.currPosition++;
}
/*
Function: resetTimedData
	Resets the timed data to its original state

Change Log:
	2013.02.05	ALP	- Initial version
*/
function resetTimedData() {
	//Create the array of events to be reversed
	var arrayToReverse = new Array();
	if (currPageData.timedEvents && currPageData.timedEvents.events.length != 0){
		for (var i=0; i<shell.timedContent.current.position; i++) {
			(function(timedData) {
				arrayToReverse[arrayToReverse.length] = timedData;
			})(currPageData.timedEvents.events[i]);
		}
		arrayToReverse.reverse();
		//console.log("arrayToReverse");
		//console.log(arrayToReverse);
		for (var k=0, m=arrayToReverse.length; k<m; k++) {
			var currObj = arrayToReverse[k];
			for (var n=0, p=currObj.contentId.length; n<p; n++) {
				if (currObj.displayType[n] == 'toggleV') {
					if ($(currObj.contentId[i]).opacity==0) $(timeInfo.contentId[i]).fadeTo(0,1);
					else $(currObj.contentId[i]).fadeTo(0,0);
				} else if (currObj.displayType[n] == 'onV') {
					$(currObj.contentId[i]).fadeTo(0,0);
				} else if (currObj.displayType[n] == 'fadeIn') {
					$(currObj.contentId[n]).hide();
				} else if (currObj.displayType[n] == 'fadeOut') {
					$(currObj.contentId[n]).show();
				} else if (currObj.displayType[n] == 'toggle') {
					$(currObj.contentId[n]).toggle();
				} else if (currObj.displayType[n] == 'addClass') {
					$(currObj.contentId[n]).removeClass(currObj.speed[n]);
				} else if (currObj.displayType[n] == 'removeClass') {
					$(currObj.contentId[n]).addClass(currObj.speed[n]);
				}
			//displayTimedItem(arrayToReverse[k]);	
			}
		}
	} else {
		//console.log('There is no timedContent to reverse for this page');	
	}
	shell.timedContent.currPosition = 0;
}
function addTimedContentDesc() {
	if (currPageData.timedEvents && currPageData.timedEvents.description){
		//console.log("adding a section 508-compliant text description");
		if (currPageData.timedEvents.description) {
			openerArray = new Array();
			dialogArray = new Array();
			popUp.widthArray[popUp.widthArray.length] = currPageData.timedEvents.description.width;
			popUp.heightArray[popUp.heightArray.length] = currPageData.timedEvents.description.height;
			popUp.isRequired = false;
			createPopUp();
		}
	}
}

function prepKeyboardShortcuts() {
	for (var i=0, j=shell.keyboardShortcuts.keys.length; i<j; i++) {
		(function(currKey) {
			var keyEvent = currKey.event || 'keyup';
			var keyId = currKey.id;
			$(document).bind(keyEvent,currKey.key, function(e) {
				//console.log('pressed ' + keyId);
				$(keyId).trigger('click');
			});
		})(shell.keyboardShortcuts.keys[i]);
	}
}

/*
Function: setUpPopUps
	Sets up any popups defined on the current page

Change Log:
	2013.02.21	ALP	- Initial version
*/
function setUpPopUps() {
	//console.log('setUpPopUps');
	if (currPageData.popUps) {
		var isRequired = shell.popUp.isRequired;
		for (var i=0, j=currPageData.popUps.length; i<j; i++) {
			popUp.widthArray[popUp.widthArray.length] = currPageData.popUps[i].width;
			popUp.heightArray[popUp.heightArray.length] = currPageData.popUps[i].height;
			if(currPageData.popUps[i].isRequired != 'undefined') {
				isRequired = currPageData.popUps[i].isRequired;
			}
		}
		popUp.isRequired = isRequired;
		createPopUp();	
	}
}
function makeRequired() {
	//console.log('making required')
	if (shell.tracking.firstVisit) {
		disableNav('next');
		setPageVisit(false);
	}	
}
function markPageComplete() {
	//console.log('marking complete');
	enableNav('next');
	setPageVisit(true);
}
//*************************************************************************************************
// Advanced Page Status Tracking
//*************************************************************************************************

/**
 * Abbreviated form of setVisitState which uses the current page 
 * @param {Object} isVisited
 */
function setPageVisit( isVisited ) {
    if ( isVisited ) {
        shell.tracking.pagesVisited[shell.currPageNum-1] = 1;
    } else {
        shell.tracking.pagesVisited[shell.currPageNum-1] = 0;        
    }
    setVisitState(myScoData, isVisited, true);
}

function setVisitState( thisScoData, isVisited, checkDuplicates ) {
   //console.log("setVisitState");
   //console.log(thisScoData);
   //console.log(isVisited);
    // wait 10 ms when myMenuData is undefined
    if ( myMenuData == undefined || myMenuData == null) {
        setTimeout( function(){ setPageVisit(isVisited); }, 10);
        return;
    }
    
    thisScoData.node.visited = isVisited;
    
    var complete = false;
    if ( 'complete' in thisScoData.node ) {
        complete = thisScoData.node.complete;        
    }
    
    // update descendent completion status
    thisScoData.node.childrenComplete = calculateNodeCompletion( thisScoData.node, thisScoData.data.nodeArray, thisScoData.data.indexArray);
    
    // when node and children are all complete...
    if ( thisScoData.node.visited && thisScoData.node.childrenComplete )
        thisScoData.node.complete = true;
    else
        thisScoData.node.complete = false;
    
    // mark with a checkmark
    myMenuData.updateCheckmark(thisScoData.node.id,thisScoData.node.complete === true );
    
    // check duplicated nodes??
    if ( checkDuplicates && 'duplicates' in thisScoData.node ) {
        var tempScoData;
        for ( var i = 0, len = thisScoData.node.duplicates.length; i < len; i++ ) {
            tempScoData = SCOUts( SCOPages, thisScoData.node.duplicates[i]);
            setVisitState( tempScoData, isVisited, false );
        }
    }
    
    // update ancestor completion status
    setAncestorCompletion( thisScoData.data.nodeArray, thisScoData.data.indexArray, thisScoData.node.complete === true );
    
    // update menu
    updateMenu();
    
    // create save data..
    shell.tracking.pageCompletion = createSaveArray( SCOPages );
    storePagesCompleted();
}

function calculateNodeCompletion( found, nodeArray, indexArray ) {
    if ( 'branches' in found ) {
        return getDescendentCompletion( found.branches );
    }
    return true;
}

function getDescendentCompletion( branchArray ) {
    if ( !branchArray.length ) {
         return true;        
    }
        
    var curNode, branches;
    for ( var i = 0, len = branchArray.length; i < len; i++ ) {
        curNode = branchArray[i];
        branches = curNode.branches;
        
        if ( curNode.complete != undefined ) // if doing this, we must make an assumption that ancestor completion is updated when a descendent gets updated.
        {
            // node completion has been previously calculated, use this. 
            if ( curNode.complete )
                continue;
            else
                return false;
        }
        else if ( branches ) {
            curNode.complete = getDescendentCompletion( branches );
            if ( !curNode.complete )
                return false;
        }
        else if ( curNode.visited == undefined || curNode.visited == false ) {
            // this node has not been visited.
            return false;
        }
    }
    return true;
}

// SCORM Save format:
// [ complete, childrenComplete, visited, branches ]
// [ complete, childrenComplete, visited, [ branch1, branch2, branch3, ... ] ]
// [ complete, childrenComplete, visited, [[complete, children, visited, []], [complete, children, visited, []], [complete, children, visited, []] ] ]
function createSaveArray( SCOObj ) {
    var arr = new Array();
    arr[0] = (SCOObj.hasOwnProperty('complete') && SCOObj.complete) ? 1 : 0;
    arr[1] = (SCOObj.hasOwnProperty('childrenComplete') && SCOObj.childrenComplete) ? 1 : 0;
    arr[2] = (SCOObj.hasOwnProperty('visited') && SCOObj.visited) ? 1 : 0;
    
    // when object has branches;
    if ( SCOObj.hasOwnProperty('branches') && SCOObj.branches && SCOObj.branches.length > 0 ) {
        arr[3] = new Array();
        // go through each branch
		//console.log("shell.js line 2780. Go through each branch")
        for ( var i = 0; i < SCOObj.branches.length; i++ ) {
            arr[3][i] = createSaveArray( SCOObj.branches[i] );
        }
    }
    
    return arr;
}

function loadSave( arr ) {
    loadSaveHelper( SCOPages, arr );    
}

function loadSaveHelper( SCOObj, arr ) {
    if ( arr.length < 0 ) {
        return;
    }
    
    var value;
    
    value = arr.shift();
    SCOObj.complete = ( value === "1" || value === 1 || value === true )
    
    value = arr.shift();
    SCOObj.childrenComplete = ( value === "1" || value === 1 || value === true )
    
    value = arr.shift();
    SCOObj.visited = ( value === "1" || value === 1 || value === true )
    
    // When object appears in the menu
    if ( SCOObj.hasOwnProperty('id') ) {
        myMenuData.updateCheckmark( SCOObj.id, SCOObj.complete );        
    }
    
    // when object has branches;
    if ( SCOObj.branches && SCOObj.branches.length > 0 && arr.length > 0 && arr[0].length === SCOObj.branches.length ) {
        // go through each branch
        for ( var i = 0; i < SCOObj.branches.length; i++ ) {
            loadSaveHelper( SCOObj.branches[i], arr[0][i] );
        }
    }
}

function setAncestorCompletion( nodeArray, indexArray, branchComplete ) {
    // go through siblings (data.nodeArray)
    // if sibling has branches, but does not have a complete param, it is incomplete
    // if sibling has complete param, use it to determine new parent completion status
    var currAncestor;
    var currIndex;
    var currNode;
    
    // go through nodes in the array till there are none left...
    while( nodeArray.length > 0 ) {
        currAncestor = nodeArray.pop();
        currIndex    = indexArray.pop();
        // when the descendant was set to complete
        if ( branchComplete ) {
            // need to check if all siblings complete
            var isComplete = true;
            var i = 0;
                len = currAncestor.branches.length;
            // go through ancestor's branches
            for ( i; i < len; i++ ) {
                currNode = currAncestor.branches[i];
                if ( isNodeComplete(currNode) ) 
                    continue;
                else {
                    // complete param is either missing or set to false, sibling is incomplete
                    isComplete = false;
                    currAncestor.complete = false;
                    currAncestor.childrenComplete = false;
                    break;
                }
            }
            
            // when all branches complete...
            if ( isComplete ) {
                currAncestor.childrenComplete = true;
                if ( nodeIsPage(currAncestor) ) {
                    if ( currAncestor.visited )
                        currAncestor.complete = true;
                    else
                        currAncestor.complete = false;
                } else {
                    currAncestor.complete = true;
                }    
            }
            
            // check item in menu
            myMenuData.updateCheckmark(currAncestor.id,currAncestor.complete === true);
        } else {
            // if target branch was set to incomplete, then all ancestors should be set to incomplete
            currAncestor.complete = false;
            currAncestor.childrenComplete = false;            
            myMenuData.updateCheckmark(currAncestor.id,currAncestor.complete === true);
        }
    }
}

function getNodeCompletion( id ) {
    var tempScoData = SCOUts( SCOPages, id );
    return tempScoData.node.complete;
}

function isNodeComplete(node) {
    try {
        return node.complete;
    }
    catch (err) { return false; };
}
