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
	2013.02.20 ALP 	- Added ability to have timed CC and page content, including sub-page (e.g., popups and contentSwaps) timed CC and audio.
	2013.02.22 ALP	- Added ability to have sub-page timed content.
	2013.02.25 ALP 	- Altered rewind to re-load page content, rather than trying to reverse everything that has happened. Also, added shell.caption.current property and shell.timedContent.current property and adjusted the programming to store separate positions for the mainPage timing and subPage timing. Adjusted the shell.caption positions, but didn't get to shell.timedContent changes fully.
	2013.03.22 ALP 	- Integrated jQuery for page load and resize functions. Update Next/Back functionality to work with jQuery and <button> tags as the Next/Back buttons. Added <toggleClickableCover>.
	2013.03.26 	ALP - Adjustments to combine play/pause into a single button, and addition of <togglePlayPause>. Also fixed the volume onclick code so that you can't mute it while it's disabled. Added listener for $.jPlayer.event.ended to call <togglePlayPause>.
	
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

/* EVENTS *****************************************************************************************/
//addEvent(window, 'load', windowResize);
$(window).resize(function() {
	windowResize();
});
//addEvent(window, 'load', initShell);
$(document).ready(function() {
	initShell();
	windowResize();
});
addEvent(window,'unload',quitSCO);
function initShell() {
	prepMenuButtons();
	initMenu();
	if (shell.keyboardShortcuts.isEnabled) {
		prepKeyboardShortcuts();	
	}
	//console.log("Mobile? " +shell.onMobileDevice);	
	// Set up the audio player
	if (shell.audio.audioEnabled == true) initAudioPlayer();	
	// Set up the closed captioning
	if (shell.caption.isEnabled == true) initCC();
	// Set up the Exit button functionality
	setExit();
	// Load the correct page
	var dest = parseUri(window.location).query.split('page='); // dirty JM/2007.11.21
	if (dest.length > 1) {
		initStartPage(dest[1]);
	} else {
		initStartPage(myMenuData.firstSCOPage);
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

function prepMenuButtons() {
	if (myMenuData) {
		if (!menu.alwaysOpen) { 
			// if the menu is not always open (ie toggle-able) add buttons and events to toggle menu
			for (var i = 0; i < menu.toggleButtons.length; i++) {
				ada$(menu.toggleButtons[i]).onclick = function(e){
					myMenuData.toggleMenu('menu');
					$(resources.resWrapEl).addClass('off'); //2013 ALP
					// stop even bubbling/propagation (so outerWrap doesn't immediately hide menu)
					if (!e) 
						var e = window.event;
					e.cancelBubble = true;
					if (e.stopPropagation) 
						e.stopPropagation();
					return false;
				};
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
		
		for (var i=0; i<shell.courseNav.length; i++) {
			addCourseNavButton(shell.courseNav[i].button, shell.courseNav[i].url, shell.courseNav[i].name);
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
			setTimeout(function(){$(resources.focusEl).focus()},0);
			toggleClickableCover(true);
			break;
		case (false): 
			$(resources.resWrapEl).addClass('off');
			$(resources.resLink).attr('title','Click to open the Resources menu');
			setTimeout(function(){$(resources.resLink).focus()},0);
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
function addCourseNavButton(button, url, name) {
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
	window.open(url,name,'height=530, width=995, scrollbars=1');
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
*/
function updateMenu() {
// pass in the url of the nodeMenuPage (either the closest older sibling that is displayed on the menu, or if no sibling is on the menu, the closest ancestor that is displayed in the menu).
	if (myMenuData && (myScoData.nodeMenuPage)) { // if the menu is loaded and there is a nodeMenuPage
		shell.currPageId = myScoData.nodeMenuPage.id;
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
*/
function updateShell(pageData) {	
	if (pageData) currPageData = pageData;
	//ada$(shell.content.contentDiv).focus();
	hideMenus();	
	loadPageCC(); // writes caption/transcript information from scoContent.js
	//If this is not the first page, load the audio
	if (shell.currPageNum != 0) {
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
	ada$(shell.header.series).innerHTML = SCOData.seriesTitle;
	ada$(shell.header.course).innerHTML = SCOData.courseTitle;
	scoNode = SCOUts(SCOPages, shell.currPageId);
	if (scoNode) { // scoNode returns false if the page does not exist
		/* next 2 lines update the current section of the menu */
		myScoData = scoNode;
		updateMenu();
		
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
				bc = myParent.node.name  + " > " + bc; //ALP Commented out to just show lesson title
			}
		} else {
			var bc = scoNode.node.name; // Just display the name
		}
		updateBreadcrumb(bc+' > <strong>'+ scoNode.node.name +"</strong>");// SCOData.moduleTitle + " | " + 
		} else { // if you are on a page not in SCOPages
		// do this
	}
	//setTimeout(function(){
		//console.log('setting focus to breadcrumb');
		$(shell.breadcrumb.div).focus()
		// add a highlight effect to that id (comment out if not using)			
		//.effect("highlight", {}, 1000);
	//},0);
	trackCompletion();
}
function updateBreadcrumb(bc) {
	$(shell.breadcrumb.div).empty();
	$(shell.breadcrumb.div).append(bc);
}
/*
Change Log: 
	2013.02.12 ALP - Moved removeDialogs to come before the new page load. Otherwise, if the server is slow, new dialogs get written and then removed right away.
	2013.03.01 ALP - Added code to reset VideoJS.players to avoid problems with flash fallback
	2013.04.11 ALP - Removed call to <trackCompletion>, as it now gets called in <updateShell>
*/
function loadPage(id) {
	//console.log("loading page id " + id);
	var pageToLoad = myContentData.findPageURLByPageId(id);
	pageContent = myContentData.getPageContentById(id);
	//Remove any open dialogs, if they exist		
	removeDialogs(dialogArray);
	// Reset the video player
	VideoJS.players = {};
	pageVidIds = new Array();
	pageVidCC = new Array();
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
	if ($('#'+shell.content.contentDiv).empty()) {
		shell.currPageId = id;
		//trackCompletion();
		clearCC();
		clearAudio();
		shell.caption.currPosition = 0;
		shell.timedContent.currPosition = 0;
		
		$('#'+shell.content.contentDiv).load(pageToLoad, function() {
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
	updateShell(pageContent);
	addFocusHighlighting();
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
*/
function setNav(type, nodeId, title) {
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
	if (isDimmed) {
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
function disableNav(type,isEnd) {
	var myLi;
	var atEnd = isEnd || false;
	//alert("disabling " + type);
	switch(type) {
		case('back'):
			backIsDim = true;
			$(shell.pageNav.backBtn).attr('disabled','disabled');
			$(shell.pageNav.backBtn).attr('title',"No previous page.");
			$(shell.pageNav.backBtn).off('click',shell.pageNav.backBtn);
			$(shell.pageNav.backBtn).addClass('dim');
			$(shell.pageNav.backBtn).css('cursor','default');
			break;
		case('next'):
			nextIsDim = true;
			$(shell.pageNav.nextBtn).attr('disabled','disabled');
			if (!atEnd) {
				$(shell.pageNav.nextBtn).attr('title',"Next is currently disabled.");
			} else {
				$(shell.pageNav.nextBtn).attr('title',"No next page.");
			}
			$(shell.pageNav.nextBtn).off('click');
			$(shell.pageNav.nextBtn).on('click',function() {
				if (atEnd) {
					alert("You have reached the end of this course.");
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
			$(shell.pageNav.backBtn).removeAttr('disabled');
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
			$(shell.pageNav.nextBtn).removeAttr('disabled');
			$(shell.pageNav.nextBtn).css('cursor','pointer');
			if (scoNode.nodeNext.name == shell.menuJSONName) {
				disableNav('next',true);
			} else {
				setNav('next', scoNode.nodeNext.id, scoNode.nodeNext.name);
			}
			break;
	}
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
*/
function trackCompletion() {
	//console.log(shell.tracking.pagesVisited);
	if (shell.tracking.pagesVisited[shell.currPageNum-1] != 1) {
		// Keep track of the pages visited
		//console.log("setting "+shell.currPageNum+" to visited");
		shell.tracking.pagesVisited[shell.currPageNum-1] = 1;
		//console.log("This is the first visit");
		shell.tracking.firstVisit = true;
	} else {
		shell.tracking.firstVisit = false;
	}
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
		if (SCOComplete && scorePassed) {
			//console.log("calling completeSCO()");
			completeSCO();
			SCOPassed = true;
		} 
	}
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
			play:shell.audio.play/*,
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
	if (shell.caption.isTimedCC || shell.timedContent.isEnabled) {
		$(shell.audio.playerDiv).on($.jPlayer.event.timeupdate, function(event) {
			audioPlayerUpdate(event);
		});
	}
	/*$(shell.audio.playerDiv).on($.jPlayer.event.ended, function(event) {
		togglePlayPause('end');
		console.log('ended from initAudio player');
		$(shell.audio.playerDiv).off($.jPlayer.event.ended);
	});*/
	$(shell.audio.play).click(function(e) {
		togglePlayPause();
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
			//if it is muted
			if ($(shell.audio.volume).hasClass('muted') && !$(shell.audio.volume).hasClass('dim')) {
				$(shell.audio.volume).removeClass('muted');
				$(shell.audio.volume).attr("title","Volume is on");
				$(shell.audio.playerDiv).jPlayer("volume",shell.audio.defaultVolume);
			} else if (!$(shell.audio.volume).hasClass('dim')) {
				$(shell.audio.volume).addClass('muted');
				$(shell.audio.volume).attr("title","Volume is muted");	
				$(shell.audio.playerDiv).jPlayer("volume",0);
			}
			return false;
		});	
	}
}
function togglePlayPause(type) {
	// If the audio is currently playing
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
		if (shell.caption.isTimedCC) {
			var ccObjArray = shell.caption.data[shell.currPageId].mainPage;
			if (shell.caption.onSubPage) {
				if (shell.caption.onSubSubPage) {
					ccObjArray = shell.caption.data[shell.currPageId].subPages[shell.caption.subPageNum].subPages[shell.caption.subSubPageNum];
				} else {
					ccObjArray = shell.caption.data[shell.currPageId].subPages[shell.caption.subPageNum].mainPage;
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
*/
function loadPageAudio(audioFile) {
	$(shell.audio.playerDiv).off($.jPlayer.event.ended);
	togglePlayPause('end');
	shell.caption.currPosition = 0;
	shell.timedContent.currPosition = 0;
	var audioToLoad = audioFile || currPageData.audio;	
	if (audioToLoad && audioToLoad != '') {
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
		$(shell.audio.playerDiv).jPlayer("play"); // Attempt to auto play the media
		togglePlayPause();
		if (audioIsDim) enableAudioControls();
	} else {
		//console.log("This page has no audio");
		$(shell.audio.playerDiv).jPlayer("clearMedia");
		disableAudioControls();
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
	});
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
*/
function disableAudioControls() {
	audioIsDim = true;
	$(shell.audio.play).addClass('dim');
	//$(shell.audio.pause).addClass('dim');
	$(shell.audio.rewind).addClass('dim');
	$(shell.audio.play).css('cursor','default');
	//$(shell.audio.pause).css('cursor','default');
	$(shell.audio.rewind).css('cursor','default');
	if (shell.audio.volume != '') {
		$(shell.audio.volume).addClass('dim');
		$(shell.audio.volume).css('cursor','default');
		$(shell.audio.volume).attr('title','');
	}
	$(shell.audio.play).attr('title',''); 
	//$(shell.audio.pause).attr('title','');
	$(shell.audio.rewind).attr('title','');
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
	$(shell.audio.play).removeClass('dim');
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
		$(shell.audio.volume).attr('title','Volume');
	}
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
			},
			close: function() {
				$('#'+shell.caption.btnId).focus();
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
*/
function storeCCData() {
	if (!shell.caption.data[shell.currPageId]) {
		shell.caption.data[shell.currPageId] = new Object();
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
	}  else {
		//console.log('Already stored content for the main page. May need to store info for a popUp or contentSwap');
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
	Ensable the CC button on pages with CC text

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
*/
function checkClickCompletion(isClicked) {
	var isComplete = true;
	var k = $('[id^="trigger"]').length;
	for (i = 0; i < k; i++) {
		//run through the pop-ups and see if all have been clicked
		isComplete = isComplete && isClicked[i];
	}
	if (isComplete) {
		//alert('Activity has been completed.');
		shell.tracking.pagesVisited[shell.currPageNum-1] = 1;
		enableNav('next');
	}
}
function pauseAllVideos() {
	//console.log("pausing all videos");
	if (currPageVideo != undefined) {
		//console.log("Video id: " + pageVidIds[currPageVideo]);
		_V_(currPageVideo).ready(function(){
			var myPlayer = this;
			myPlayer.pause();
		});	
	}
	
	/*for(i in pageVidIds) {
		_V_(pageVidIds[i]).ready(function(){
  			var myPlayer = this;
  			//console.log("Video id: " + myPlayer.id);
			myPlayer.pause();
		});	
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
	if (currPageData.timedEvents && currPageData.timedEvents.events && currPageData.timedEvents.events.length != 0){
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
			if (speed != undefined) $(timeInfo.contentId[i])[timeInfo.displayType[i]](speed);
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
				if (currObj.displayType[n] == 'fadeIn') {
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
	if (currPageData.timedEvents && currPageData.timedEvents.events.length != 0){
		//console.log("adding a section 508-compliant text description");
		if (currPageData.timedEvents.description) {
			openerArray = new Array();
			dialogArray = new Array();
			popUp.widthArray[popUp.widthArray.length] = currPageData.timedEvents.description.width;
			popUp.heightArray[popUp.heightArray.length] = currPageData.timedEvents.description.height;
			popUpIsRequired = false;
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
