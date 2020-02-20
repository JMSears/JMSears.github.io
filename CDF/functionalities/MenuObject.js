/*
Object: MenuObject
	Reads a JSON file containing the menu content and create the menu

Parameters:
	none

Dependencies:
	<ada$>; <ContentObject>

Returns:
	none

Bugs:
	None known

To Do:
	Speed it up!
	Allow children that are hidden from the menu to update the menu to the parent section.
	
	
Change Log:
	2007.05.19	ALP	- Initial version
	2007.05.28	ALP	- Modified call to <createMenuLink> in <createMenuList> to avoid adding nodes with no URLs to the pageUrls array.
	2007.05.30	ALP	- Added test for this.currLink before using it. Pages like menu page will not have a current section highlighted.
	2007.07.23	ALP	- Fixed a bug in <createMenuList> that was not displaying multiple levels of pages with children correctly.
	2007.08.01 	ALP	- Changed programming so that clicking on the text of a page with children will expand to show the children rather than taking you to the first child page. To revert back to old behavior, remove the "this.createExpandableLink(myParentLi.childNodes[1],myOnclickId);" in <MO.appendChildList>.
	2010.06.13	ALP	- Added tracking of the menu button list item id to allow it to look toggled. Also added menuOnClass to button when the menu is opened, and no class when the menu is closed. Removed expand/collapse behavior of sections. Search for 2010.06.13 to remove changes.
	2010.06.21  VRB - Added refreshing of jScrollPane to <MO.writeMenu>.
	2010.06.24  ALP - Added refreshing of jScrollPane when section is expanded/collapsed in <MO.createExpandOnclick>. Added back expand/collapse behavior.
	2010.07.07  VRB - Removed jScrollPane due to inconsistencies in Internet Explorer.
	2011.01.07  VRB - Seperated MenuObject into its own js file.
	2012.10.03	ALP	- Modified to work with new JS Template shell, which includes the addition of ids to scoMenu (used to be sco_data) in place of names so that two pages can have the same URL.
	2012.10.04	ALP	- Corrected error in searchHardLeft function. Also updated to consider a page a node that has an id defined, rather than a page property.
	2012.10.07	ALP	- Corrected numerous other errors that were occurring after the changes in sco_data to have unique id and no URL. Also added dynamic setting of the this.firstSCOPage variable, so that scoStart does not have to be hard-coded.
	2012.10.09	ALP - Adjusted programming to get the current menu section updating again.
	2012.12.12 	ALP - Adjusted to only display menu.topBranchName if it has a value. Also fixed a bug that was breaing the menu display if it had more than two levels.
	2013.02.06	ALP	- Adjusted toggleMenu to focus on the menuContent div when the menu is opened.
	2013.03.22	ALP - Changed menu.menuBtn to a jQuery selector in shellData, and updated how classes are added here. Also, added call to <toggleClickableCover> in <toggleMenu>, which places an invisible div over the page and closes the menu when it is clicked. Added title attributes in <toggleBranch>, <highlightCurrent>, and <hideCurrent>
	2013.04.11  VRB - Added Functionality Required by new page tracking module. Minor style changes here and there.
	2013.05.04 	ALP - Modified <toggleMenu> to add .click AND .keypress events to the menu close button when the menu is opened. If you try to add when it is closed (from shell.js) they do not work.
	2014.09.04	ALP - Modified <createExpandableArrow> to give blank alt text to the expandable arrows and to create hidden Section 508 text that explains what the link is for screen readers.
	2014.09.27 ALP 	- Fixed the <toggleBranch> to correctly swap the arrow when the text link is clicked to expand/collapse. Also added hidden Section 508 text to the links to indicated whether they are current open or closed.
*/

function MenuObject() {
	instance = this; // so we can reference this instance of the object in onclick events
	this.menuData           = SCOPages;           // The name of the JSON variable that contains the menu data
	this.SCOPath            = this.menuData.path; // The path to the SCO. Defined in the JSON variable above
	this.currentLevel       = 0;                  // The current level of the menu that is being created
	this.menuIsOpen         = false;              // Boolean to store the current state of the menu
	this.menuContent;                             //  variable to store the content of the menu once it's been created
	this.currTotalPages;                          // Stores the number of pages in the flow of the current top-level branch
	this.currPage;                                // Stores the number of the current page
	this.currLink;                                // Stores a reference to the link for the current page.
	this.currItems          = new Array();        // Stores the li and ul elements that have a class of current.
	this.exclusiveItems     = new Array();
	this.currExclusive;
	this.pendingLists       = new Array();        // array to hold the ul's as they are created.
	this.pageLinkEls        = new Array();        // Stores references to every page link on the menu. Corresponding ids are in this.pageIds
	this.pageIds            = new Array();        // Stores references to every id in the menu. Corresponding link elements are in this.pageLinkEls
	this.pageUrls           = new Array();        // stores references to every Url in the menu. Corresponding ids are in this.pageIds
	this.menuWritten        = false;              // Stores whether the menu has been written to the page yet.
	this.firstSCOPage       = -1;                 // Stores the id of the first page in the SCO.
}

var MO = MenuObject.prototype;

/* Function that creates the unordered list that makes up the menu */
MO.createMenuList = function() {
	var myListItem, currLink, currNode, myListId, myOnclickId, levelChange, mySpan, myName, addTopSpacer;
	this.menuTrav 								= new SCOTrav(this.menuData);		// create SCOTrav object
	var myList 									= document.createElement('UL');
	myList.id 									= menu.menuListId; // needed for currentHighlight to work in IE
	var currList 								= 0;
	var currDepth 								= 0;
	var currTopLevel 							= 1;
	var firstBranch 							= true;
	this.pendingLists[this.pendingLists.length] = myList;
	var currNode 								= this.menuTrav.nextNode();
	var exclusive 								= false; // to store whether the previous node was exclusive
	var counter 								= 0;
	var toDisable 								= false; // to store whether to disable the menu link
				
	// For every node that should be displayed in the menu
	while (currNode.theNode) { // while there are still nodes
		addTopSpacer 	= false;
		currDepth 		= currDepth + (currNode.dMenuDepth*-1);
		myListItem 		= document.createElement('LI');
		mySpan 			= "";
		currExpandable 	= this.createExpandable(currDepth);
		currCheckmark  	= this.createCheckmark();
		// create the link's name...
		if (currDepth != 0) { // if we are not on the first level
			myName = currNode.theNode.name;
		} else if (currNode.theNode.isNumbered == false) { // if we are on the first level, but it should not be numbered
			myName = currNode.theNode.name;
		} else { // if we are on the first level
			if (menu.topBranchName != undefined && menu.topBranchName != '') {
				myName = menu.topBranchName + ' ' + currTopLevel + ': ' + currNode.theNode.name;
			}  else {
				myName = currNode.theNode.name;
			}
			currTopLevel++;
		}
		//console.log(myName + ": " + currNode.theNode.id);
		// Disable any pages past the current page in the menu when the shell first loads
		//console.log("curr page: " + shell.currPageNum + ", Counter: " + counter);
		if (!toDisable && counter >= shell.currPageNum) {
			toDisable = true;
		}
		if (currDepth == 0 && currList == 0)
			addTopSpacer = true;
		
		// create menu link
		currLink = this.createMenuLink(menu.menuLevelTags[currDepth],myName,mySpan,currNode.theNode.id,addTopSpacer,toDisable);
		counter++;
		// append children
		myListItem.appendChild(currExpandable);
		myListItem.appendChild(currCheckmark);
		myListItem.appendChild(currLink);
	
		// determine relationship of current and previous nodes:
		switch (currNode.dMenuDepth) {
			case(0): // if this node is a sibling of the previous node.
				// append it to the current list.
				//console.log(currNode.theNode.name + " is a sibling node");
				this.pendingLists[this.pendingLists.length-1].appendChild(myListItem);
				break;
			case(-1): // if this node is the child of the previous node
				//console.log(currNode.theNode.name + " is a child node");
				this.pendingLists[this.pendingLists.length-1].appendChild(myListItem);
				myList = document.createElement('UL');
				// Assign an id which will be used for the parent onclick event
				myListId = menu.menuContentEl + 'List' + currList;
				if (exclusive) { /* if the previous node was an exclusive node, note it here on the first child */
					myListId += 'Exclusive';
					exclusive = false;
				}
				myList.id = myListId;
				// close the list by default
				myList.className = menu.menuOffClass;
				currList++;
				myList.appendChild(myListItem);
				this.pendingLists[this.pendingLists.length] = myList;
				break;
			default: // if this node is an ancestor of the previous node
				//console.log(currNode.theNode.name + " is an ancestor node");
				var parentLi, childList;
				// for each level we moved up
				//console.log("moving up " + currNode.dMenuDepth + " levels");
				for (var i=0; i<currNode.dMenuDepth; i++) {
					parentLi = this.pendingLists[this.pendingLists.length-2].lastChild;
					childList = this.pendingLists[this.pendingLists.length-1];
					//console.log("parent, child: " + parentLi.id + ", " + childList.id);
					// append the child list to the parent list item
					this.appendChildList(parentLi,childList);
					// append the new parent to the end of the parent list
					this.pendingLists[this.pendingLists.length-1].appendChild(myListItem);
				}
				break;
		}
		
		// if this node is of type exclusive, set the exclusive variable
		if (currNode.theNode.type == 'exclusive') {
			exclusive = true;
		}
		// go on to the next node...
		currNode = this.menuTrav.nextNode();
	} // end while there are more nodes
	if (this.pendingLists.length > 1) {
		//console.log("there are still unclosed nodes in the number of: " + this.pendingLists.length - 1);
		var myLength = this.pendingLists.length;
		var myParentLi, myChildList;
		// for each list that has not been closed.
		while (this.pendingLists.length >= 2) {
			myParentLi = this.pendingLists[this.pendingLists.length-2].lastChild;
			myChildList = this.pendingLists[this.pendingLists.length-1];
			// append the child list to the parent list item
			this.appendChildList(myParentLi,myChildList); 
		}
	}
	
	this.menuContent = this.pendingLists[0];
	this.sortLinks();
	this.writeMenu();
}
		
/* Function to create a link that contains the specified heading type with the specified text */
MO.createMenuLink = function(tag,name,span,id,addTopSpacer,isDisabled) {
	branchHeading = document.createElement(tag);
	myHeading = document.createTextNode(name);
	//var mySpanElem = document.createElement('span');
	//mySpanElem.appendChild(document.createTextNode(span));
	//branchHeading.appendChild(mySpanElem);
	branchHeading.appendChild(myHeading);
	branchHeadingLink = document.createElement('a');
	branchHeadingLink.href = '#';
	branchHeadingLink.id = id;
	//console.log("isDisabled "+ isDisabled);
	if (isDisabled && menu.forceInOrder) {
		// Make the link disabled until the page is reached through the next button
		branchHeadingLink.className = 'disabled';
	}
	/* If the current node has an id, which all nodes should */
	if (id) {
		var tempUrl = myContentData.findPageURLByPageId(id);
		// If the current node is a page.
		//console.log("setting URL for " + id + " to " + tempUrl);
		if (tempUrl != false) {
			// If the first page in the SCO has not been set
			
			if (this.firstSCOPage == -1) {this.firstSCOPage = id;}
			var pageId = id;
			branchHeadingLink.id = id;
			//console.log(id + " " + menu.forceInOrder + " " + isDisabled);
			branchHeadingLink.onclick = function() {				
				//If this link in the menu is not disabled
				if (!menu.forceInOrder || this.className != 'disabled') {
					//console.log("enabling " + id);
					//pageDirection = 'forward';
					loadPage(pageId);
					// reset the current page 
					// Add the following two lines back in once the current link is working 
					if (instance.currLink) {
						instance.currLink.className = '';
						instance.currLink = this;
					}
					// close the menu
					instance.toggleMenu(false);
					return false;
				}
			}			
			this.pageLinkEls[this.pageLinkEls.length] = branchHeadingLink;
			this.pageUrls[this.pageUrls.length] = tempUrl;
			this.pageIds[this.pageIds.length] = id;
		}
	} 
	if(addTopSpacer && menu.addDividers) {
		var temp = document.createElement('DIV');
		temp.className = "lineSpacer firstLineSpacer";
		temp.setAttribute('tabIndex',-1);
		branchHeadingLink.appendChild(temp);
	}
	branchHeadingLink.appendChild(branchHeading);
	if (menu.addDividers) {
		var temp = document.createElement('DIV');
		temp.className = "lineSpacer";
		branchHeadingLink.appendChild(temp);
	}
	return branchHeadingLink;
}


/* Function to create a placeholder for the exapandable arrow */
MO.createExpandable = function( depth ) {
    var myInsert = document.createElement('SPAN');
    myInsert.className = menu.branchNoExpandClass + " " + "expand" + depth;
    //myInsert.setAttribute('tabIndex',0);
    return myInsert;                                    
}
MO.createCheckmark = function() {
    var myCheck = document.createElement('SPAN');
    myCheck.className = 'checkmark off';
    myCheck.setAttribute('tabIndex', -1);
    var myCheckImg = document.createElement('IMG');
    myCheckImg.src = '../images/menu_check.png';
    myCheck.appendChild(myCheckImg);
    return myCheck;
}

/* Function to append a child list to the specified parent list item and set the onclick event to call toggleBranch*/		
MO.appendChildList = function(myParentLi, myChildList) {
    // find the id of the child list
    myOnclickId = myChildList.id;
    // create the link to expand the branch
    this.createExpandableArrow(myParentLi.firstChild,myOnclickId);
    // create the link around the text to expand the branch
    this.createExpandableLink(myParentLi.childNodes[2],myOnclickId);
    //append the child list to the parent li
    myParentLi.appendChild(myChildList);    
    // if the parent li does not have a url assigned, specify the first page of the child list.
    //if (!myParentLi.childNodes[1].onclick) {
    //    myParentLi.childNodes[1].onclick = myChildList.firstChild.childNodes[1].onclick;
    //}
    // remove the child list from the array
    this.pendingLists.pop();
}
/* Function to create an expandable arrow image/link for a section that is expandable */
MO.createExpandableArrow = function(el,expandListId,isExclusive) {
    el.className = menu.branchExpandableClass;
    var myExpandableImage = document.createElement('IMG'); // 2010.06.13
	myExpandableImage.setAttribute('alt', "");
    var myExpandableLink  = document.createElement('A');
    
    myExpandableLink.className  = menu.branchClosedClass;
    myExpandableLink.href       = '#';
    myExpandableLink.onclick    = this.createExpandOnclick(expandListId);
	myExpandableLink.setAttribute('tabindex', -1);
    
    myExpandableImage.src       = menu.branchClosedImage;
    myExpandableImage.className = 'png';
    myExpandableImage.width     = menu.branchImageWidth;
    myExpandableImage.height    = menu.branchImageHeight;
    menu.branchClosedImage.alt  = '';
    
	var myAltText = document.createElement("SPAN");
	myAltText.className = 'sect508';
	myAltText.innerHTML = "Expand/collapse section";
    myExpandableLink.appendChild(myExpandableImage);
	myExpandableLink.appendChild(myAltText);
    el.appendChild(myExpandableLink);
}    	

/* Function to create an expandable link for the text on a section that is expandable */
MO.createExpandableLink = function(el,expandListId) {
	el.className = '';
	el.onclick = this.createExpandOnclick(expandListId);
}	

/* Helper function to create the link and add the appropriate onclick event. Returns the link. */
MO.createExpandOnclick = function(expandListId) {
	if (expandListId.indexOf('Exclusive') != -1) {
		var temp = function(e) {
			instance.hideAllBranches();
			instance.toggleBranch(this,ada$(expandListId),true);
			// fixMenuWidth();
			return false;
		}
	} else {
		var temp = function(e) {
			instance.toggleBranch(this,ada$(expandListId));
			// fixMenuWidth();
			return false;
		}
	}
	return temp;
}

/* Function called on every page to update the current section in the menu. */
MO.setCurrentMenuSection = function(pageId) {    
    // get current link
    this.currPage = pageId;
    this.currLink = this.findLinkElById(pageId);
	//console.log('this.currLink: '  +this.currLink.id);
    
	// hide branches
    instance.hideAllBranches();
    
    if ( !this.currLink ) {
        var altId = scoNode.nodePageParent.id;
        this.currLink = this.findLinkElById( altId );
    }
    
    // when link exists
    if (this.currLink) {
		var branch = this.currLink.parentNode.lastChild;
		if ( branch && branch != this.currLink) {
			instance.toggleBranch(this.currLink,branch,true); // last 3 lines moved here 2013.01.20		    
		}
        this.hideCurrent();
        this.highlightCurrent();
    }
}

/* Function that performs a bubble sort on the pageIds array and updates the pageUrls, pageIds, and pageLinkEls arrays. */
MO.sortLinks = function() {
	var myLength = this.pageIds.length;
	var dummy1, dummy2;
	for (var i=0; i<(myLength-1); i++) {
		for (var j=i+1; j<myLength; j++) {
			if (this.pageIds[j] < this.pageIds[i]) {
				dummy1 = this.pageUrls[i];
				this.pageUrls[i] = this.pageUrls[j];
				this.pageUrls[j] = dummy1;
				dummy2 = this.pageLinkEls[i];
				this.pageLinkEls[i] = this.pageLinkEls[j];
				this.pageLinkEls[j] = dummy2;
				dummy3 = this.pageIds[i];
				this.pageIds[i] = this.pageIds[j];
				this.pageIds[j] = dummy3;
			}
		}
	}
}

/* Function that finds the link element associated with the specified id. */
MO.findLinkElById = function(id) {
	var start = 0;
	var end = this.pageIds.length - 1;
	var location = this.findLinkElByIdHelper(id,start,end);
	var myEl = this.pageLinkEls[location];
	return myEl;
}

MO.updateCheckmark = function(id, isChecked) {
    var el = this.findLinkElById(id);
    if ( el == undefined ) {
        return;
    }
    if ( isChecked ) {
        $(el.parentNode.childNodes[1]).removeClass('off');
    } else {
        $(el.parentNode.childNodes[1]).addClass('off');        
    }
}

/* Recursive helper function to search the pageIds array for the specified id. Returns the location in the array that the url was found.*/
MO.findLinkElByIdHelper = function(id,start,end) {
	myLocation = Math.round((end + start)/2);
	if (end < start) {
		return false;
	} else {
		if (id == this.pageIds[myLocation]) {
			return myLocation;
		} else if (start == end) {
			return;
		} else if (id < this.pageIds[myLocation]) {
			return this.findLinkElByIdHelper(id,start,myLocation-1);
		} else {
			return this.findLinkElByIdHelper(id,myLocation+1,end);
		}
	}
}

/* Function that applies the current class to the appropriate sections of the menu. */
MO.highlightCurrent = function() {
	var currLink = this.currLink;
	if (typeof(currLink) != 'undefined') {
	    currLink.className = menu.currentClass;
	}
	this.currItems[this.currItems.length] = currLink;
	currLink = currLink.parentNode;
	while (currLink.parentNode && currLink.id != menu.menuListId) {
		//console.log('currLink.tagName: ' + currLink.tagName);
		switch(currLink.tagName) {
			case('LI'):
				currLink.className = menu.currentClass; 
				break;
			case('UL'):
				//console.log($(currLink).prev().children(":first").html());
				//$(currLink).prev().attr('title',$(currLink).prev().children(":first").html()+ ' is open');
				var myHTML = $(currLink).prev().children(":first").html();
				if (myHTML.indexOf("<") != -1) 
					myHTML = myHTML.substring(0,myHTML.indexOf("<"));
				$(currLink).prev().children(":first").html(myHTML+ '<span class="sect508"> (expanded)</span>');
				// give the list the current class
				currLink.className = menu.currentClass + ' ' + menu.menuOnClass; 
				// give the parent of the list the open class
				currLink.parentNode.firstChild.firstChild.className = menu.branchOpenClass;
				// give the parent of the list the open arrow
				currLink.parentNode.firstChild.firstChild.firstChild.src = menu.branchOpenImage; 
				break;
		}
		this.currItems[this.currItems.length] = currLink;
		currLink = currLink.parentNode;
	}
}

MO.hideCurrent = function() {
	//console.log('hiding ' + this.currItems.length + ' items');
	for (var i=0; i<this.currItems.length; i++) {
		switch(this.currItems[i].tagName) {
			// hide the lists
			case('UL'):
				//console.log($(this.currItems[i]).prev().attr('id'));
				//$(this.currItems[i]).prev().attr('title',$(this.currItems[i]).prev().children(":first").html()+ ' is closed');
				var myHTML = $(this.currItems[i]).prev().children(":first").html();
				if (myHTML.indexOf("<") != -1) 
					myHTML = myHTML.substring(0,myHTML.indexOf("<"));
				$(this.currItems[i]).prev().children(":first").html(myHTML+ '<span class="sect508"> (collapsed)</span>');
				this.currItems[i].className = menu.menuOffClass;
				break;
			// unclass the list items and the a
			default:
				this.currItems[i].className = '';
				break;
		}

	}
	// clear out the array
	this.currItems.length = 0;
}

MO.generateMenu = function() {
	ada$(menu.menuWrapEl).className = menu.menuOnClass;
	if (!this.menuWritten)  {
		this.writeMenu();
		this.menuWritten = true;
	} 
	if (this.currLink) {
		this.highlightCurrent();
	}
	this.menuIsOpen = true;
}

/* Function to toggle the menu on and off */
MO.toggleMenu = function(state) {
	//console.log("toggling menu: " + state);
	var focusMenuBtn = false;
	if (!menu.alwayOpen) {
		if (state == true || state == false) { // if a valid value is specified, use it
			var action = state;
		}
		else {
			if (state == 'menu') focusMenuBtn = true;
			var action = !this.menuIsOpen; // else default to the opposite of the current state.
		}
		if (action != this.menuIsOpen) { // only proceed if we're not already in the desired state
			switch (action) {
				case (true): // if the menu should be opened
					ada$(menu.menuWrapEl).className = menu.menuOnClass;
					$(menu.menuBtn).addClass(menu.menuOnClass);
					if (!this.menuWritten) {
						this.writeMenu();
						this.menuWritten = true;
					}
					if (this.currLink) {
						this.highlightCurrent(); // remove this if the hideAllBranches() call is removed below.
					} else {
					    this.setCurrentMenuSection( this.currPage );
					}
					this.menuIsOpen = true;
					//$('#'+menu.toggleButtons[0]).prop('title','Menu is open');
					$(menu.toggleButtons[0]).attr('title','Click to close the Menu');
					var menuObj = this;
					$(menu.menuClose).click(function() {menuObj.toggleMenu(false); $(menu.menuClose).unbind('click')}).keypress(function(e) { var keyCode = e.keyCode || e.which; if (keyCode == 13) {menuObj.toggleMenu(false); $(menu.menuClose).unbind('keypress')}}); //2013.05.04 ALP
					//if (getInternetExplorerVersion() < 7 && getInternetExplorerVersion > 0) {
					//	$("#mainFrame").contents().find('select').css({ visibility: "hidden" });
					//}
					setTimeout(function(){$('#menuContent').focus()},0);
					toggleClickableCover(true);
					break;
				case (false):
					this.hideAllBranches(); // remove this if you want the menu to "remember" its last state when you simply close it.
					ada$(menu.menuWrapEl).className = menu.menuOffClass;
					$(menu.menuBtn).removeClass(menu.menuOnClass);
					//preventProgressJump();
					this.menuIsOpen = false;
					//$('#'+menu.toggleButtons[0]).prop('title','Menu is closed');
					$(menu.toggleButtons[0]).attr('title','Click to open the Menu');
					//if (getInternetExplorerVersion() < 7 && getInternetExplorerVersion > 0) {
					//	$("#mainFrame").contents().find('select').css({ visibility: "visible" });
					//}
					if (focusMenuBtn) $(menu.toggleButtons[0]).focus();
					toggleClickableCover(false);
					break;
			}
		//$('#menuContent').jScrollPane({showArrows:true, scrollbarWidth:13, scrollbarMargin:5, dragMinHeight:44, dragMaxHeight:44});
		}
		// fixMenuWidth();
	}
}

/* Function to toggle a branch open and closed */
MO.toggleBranch = function(caller,branch,toState) {
	//console.log('toggleBranch '+ branch.id+' '+toState);
	var newCallerClass, newBranchClass;
	if (caller != caller.parentNode.firstChild) {
		caller = caller.parentNode.firstChild; //.firstChild;
	}
	// can pass in the toggle direction, or do the opposite of what is there
	var toState = typeof(toState) != 'undefined' ? toState : (branch.className.indexOf(menu.menuOnClass)*-1);
	if (toState == true || toState == 1) { // if it is not open, open it
		newBranchClass = menu.menuOnClass;
		newCallerSrc = menu.branchOpenImage;
		var branchLink = $(caller).parent().next().next();
		//ALP 2014.09.27
		if (branchLink.attr('id') == undefined) {	
			branchLink = $(caller).next().next();
			caller = $(caller).children(":first");
		}
		var myHTML = $(branchLink).children(":first").html();
				if (myHTML.indexOf("<") != -1) 
					myHTML = myHTML.substring(0,myHTML.indexOf("<"));
		$(branchLink).children(":first").html(myHTML+ '<span class="sect508"> (expanded)</span>');
		if ($(caller).hasClass(menu.currentClass)) {
			newCallerClass = menu.branchOpenClass + ' ' + menu.currentClass;
		} else {
			newCallerClass = menu.branchOpenClass;
		}
		// End ALP 2014.09.27
	} else { // otherwise, close the branch
		newBranchClass = menu.menuOffClass;
		newCallerSrc = menu.branchClosedImage;
		var branchLink = $(caller).parent().next().next();
		//ALP 2014.09.27
		if (branchLink.attr('id') == undefined) {	
			branchLink = $(caller).next().next();
			caller = $(caller).children(":first");
		}
		var myHTML = $(branchLink).children(":first").html();
		if (myHTML.indexOf("<") != -1) 
			myHTML = myHTML.substring(0,myHTML.indexOf("<"));
		$(branchLink).children(":first").html(myHTML + '<span class="sect508"> (collapsed)</span>');
		if ($(caller).hasClass(menu.currentClass)) {
			newCallerClass = menu.currentClass;
		} else {
			newCallerClass = menu.branchClosedClass;
		}
	}
	//console.log($(caller).children("img").length);
	if ( $(caller).children("img").length == 1) {
	   $(caller).children("img").attr("src",newCallerSrc); // 2010.06.13	    
	}
	$(caller).removeClass(menu.branchOpenClass);
	$(caller).addClass(newCallerClass);
	$(branch).removeClass(menu.menuOnClass);
	$(branch).addClass(newBranchClass);
	// End ALP 2014.09.27
	//$('#menuContent').jScrollPane({showArrows:true, scrollbarWidth:13, scrollbarMargin:5, dragMinHeight:44, dragMaxHeight:44});
}

/* Function to hide all of the branches of the menu */
MO.hideAllBranches = function() {
	//console.log('hiding all branches');
	var outerMenu = ada$(menu.menuContentEl).getElementsByTagName('UL');
	var menuChildrenLists = outerMenu[0].getElementsByTagName('UL');
	// for each ul below the top level, hide it
	for (var i=0; i<menuChildrenLists.length; i++) {
		this.toggleBranch(menuChildrenLists[i].parentNode.firstChild.firstChild,menuChildrenLists[i],false);
	}
	//$('#menuContent').jScrollPane({showArrows:true, scrollbarWidth:13, scrollbarMargin:5, dragMinHeight:44, dragMaxHeight:44});
}

/* Function: writeMenu  
		Writes the menu content to the menu content div 
*/
MO.writeMenu = function() {
	if (ada$(menu.menuContentEl)) { // Check to be sure the menu content el exists
		ada$(menu.menuContentEl).appendChild(this.menuContent);
	} else {
		alert("Cannot display menu. Missing menu content element.");
	}
	//$('#menuContent').jScrollPane({showArrows:true, scrollbarWidth:13, scrollbarMargin:5, dragMinHeight:44, dragMaxHeight:44});
}

//=============================================================================
/*
Function: SCOTrav
	Creates an object that traverses an SCO tree as used by DT2.  It is to be used
	to traverse the nodes of the tree returning them, as needed, in the order in
	which they will be processed to create a menu.

Parameters:
	objectArg - The first node is the SCO Tree.

Dependencies:
	none

Returns:
	Call 'nextNode' function returns an object that contains a member 'theNode'
	that is the next node in the menu progression, a member 'dPageDepth' that is
	the change in tree depth counting only nodes that are pages in from the returned
	next node and the previous node, a member 'dNodeDepth' that is the change
	in tree depth counting all nodes from the returned next node and the previous
	node, a member 'dMenuDepth' that is the change in tree depth counting all nodes 
	that are in the menu regardless of whether each node is a page, and a boolean 
	'dFamily' that accounts for the case when moving to the next
	node has not caused a net changed in node or page depth as described earlier but
	the movement still required moving beyond simply siblings of the last node.
	The function 'resetTree' returns the operation to the start.

Bugs:
	None known

To Do:
	none

Change Log:
	2007.05.15	ADP	- Initial version
	2007.07.01	ADP	-	Added new return member 'dMenuDepth' for use in the menu. It correctly determines depth of an item listed on the menu, whether or not it is a page.
*/

/* SCOTrav constructor */
function SCOTrav( objectArg ) {

	/* init a member instance of SCO tree top parent */
	this.trunk = objectArg;
	
	/* init a member current node location in tree */
	this.cur = this.trunk;
	
	/* init arrays to act as backwards links */
	this.nodePath = new Array();
	this.indexPath = new Array();
	
	/* init members to record changes in depth */
	this.dPageDepth = 0;
	this.dNodeDepth = 0;
	this.dMenuDepth = 0;
	this.dFamily = false;
}

//=============================================================================

/* SCOTrav prototype */
var SCOTravProto = SCOTrav.prototype;

//=============================================================================

/* function to return next node */
SCOTravProto.nextNode = function() {

	/* reset depth changes to zero */
	this.dPageDepth = 0;
	this.dNodeDepth = 0;
	this.dMenuDepth = 0;
	this.dFamily = false;
	
	/* treat special case where we are starting at the tree 'trunk' and where
	that first node is not a page = set initial delta page depth to one so that
	moving to first page found returns zero change in page depth */
	if ( this.cur == this.trunk && !this.isPage( this.trunk ) )
		 this.dPageDepth = 1;
	if ( this.cur == this.trunk && !this.inMenu( this.trunk ) ) 
		 this.dMenuDepth = 1;
		 
	/* call helper function to get next node and init the corresponding
	value in an object that will be returned */
	var resultObject = { theNode:this.nextNodeHelper(), dPageDepth:this.dPageDepth, dNodeDepth:this.dNodeDepth, dMenuDepth:this.dMenuDepth, dFamily:this.dFamily };
	
	/* return result object */
	return resultObject;
}

//=============================================================================

/* helper function to return next node */
SCOTravProto.nextNodeHelper = function() {

	/* if current node has children and isnt hidden
	from the menu then next is lower in tree */
	if ( this.getBranches( this.cur ) && !this.hideFromMenu( this.cur ) ) {
	
		 /* move downward in tree once along first children path */
		 this.travDown(0);
		 
		 /* while we havent found a node that should appear in the menu and are
		 still able to move downward along first children do so, also checking
		 again specifically for hideFromMenu property as if is true then dont
		 traverse lower (this enforces inheritance of this property */
		 while ( !this.hideFromMenu( this.cur ) && !this.inMenu( this.cur ) && this.travDown(0) );
					 
			/* if we successfully found the next page by moving downward return it */
			if ( this.inMenu( this.cur ) )
				 return this.cur;	
	}

	/* if here then we need to look rightward in the tree for the next menu
	node so first step is to move back up until we hit a node that has
	younger siblings of nodes we were just at */
	
	/* so start process by moving up once and	rember the sibling we were just at */
	var olderSibling = this.travUp();
	
	/* while we havent found a node with younger sibling and havent reached the
	trunk continue moving up */
	while ( !this.hasYoungerChildren( this.cur, olderSibling ) && this.cur != this.trunk )
				olderSibling = this.travUp();
				
	/* if we quit moving up because we hit the trunk and it doesnt have any older
	children then the whole tree has been traversed so return false for
	done = no next node.  for safety sake reset first */
	if ( this.cur == this.trunk && !this.hasYoungerChildren( this.cur, olderSibling ) ) {
	
		 /* reset */
		 this.resetTree();
		 
		 /* return false for done traversing tree */
		 return false;
	}
		 
	/* if here we found a branch with younger siblings than have been
	returned yet so move down to the located younger sibling */
	this.travDown( olderSibling+1 );
	
	/* if the node we have just located should
	appear in the menu then we	can return it */
	if ( this.inMenu( this.cur ) )
		 return this.cur;
		 
	/* if here then we needed to move to younger siblings to find the next node
	but since we just failed the above test, this implication is that simply moving
	to the next youngest child of the last node is not sufficient in the current
	case the find our 'next', therefore we are changing families to do so and we
	need to remember it */
	this.dFamily = true;
		 
	/* if the node is not in the menu we need to keep
	looking forward so do this via recursion */
	return this.nextNodeHelper();	
}

//=============================================================================

/* function to reset to the start of the tree */

SCOTravProto.resetTree = function() {

	/* move current back to the trunk */
	this.cur = this.trunk;
	
	/* empty arrays */
	this.popArray( this.nodePath );
	this.popArray( this.indexPath );
	
	/* reset depth members */
	this.dPageDepth = 0;
	this.dNodeDepth = 0;
	this.dMenuDepth = 0;
	this.dFamily = false;
}

//=============================================================================

/* function to pop all elements from an arry */

SCOTravProto.popArray = function( arrayArg ) {

	/* while not empty pop */
	while ( arrayArg.length )
		arrayArg.pop();
}

//=============================================================================

/* function to travel down in tree while remembering the path taken */

SCOTravProto.travDown = function( indexArg ) {

	/* if current node has children (and enough of them) */
	if ( this.getBranches( this.cur ) /*&& this.getBranches( this.cur ).length > indexArg*/) {
	
		 /* push current position data onto arrays to remember path */
		 this.nodePath.push( this.cur );
		 this.indexPath.push( indexArg );
		 
		 /* move current pointer down the tree */
		 this.cur = this.getBranches( this.cur )[ indexArg ];
		 
		 /* decrement node depth change */
		 this.dNodeDepth--;
		 
		 /* only decrement page depth change if moved *TO* a node that is page */
		 if ( this.isPage( this.cur ) )
		 		this.dPageDepth--;
				
		/* only decrement menu change counter if moved *TO* a node in the menu */
		if ( this.inMenu( this.cur ) ) 
			 this.dMenuDepth--;
		/* return true for success moving down */
		return true;
		}
		 
	/* if here then failed to move down */
	return false;
}

//=============================================================================

/* function to travel up in tree remembering the path taken */

SCOTravProto.travUp = function() {

	/* if not back to trunk */
	if ( this.cur != this.trunk ) {
	
		 /* only increment page depth change if moved FROM a page which is
		 different from hown this is counted in the down function this is
		 why this count is done before the cur node is updated */
		 if ( this.isPage( this.cur ) )
		 		this.dPageDepth++;
				
 		 /* only increment menu depth change if moved FROM a menu node which is
		 different from hown this is counted in the down function this is
		 why this count is done before the cur node is updated */
		 if ( this.inMenu( this.cur ) ) 
		 		this.dMenuDepth++;
		 /* move current pointer up by popping new cur from node path array */
		 this.cur = this.nodePath.pop();
		 	 
		 /* increment node depth change */
		 this.dNodeDepth++;
		 
		 /* return popped latest index for success
		 so we know child we were at last */
		 return this.indexPath.pop();
		 }
		 
	/* if here then failed to move up return -1 to distinguish
	fail case from non-negative result of success case */
	return -1;
}

//=============================================================================

/* function to return children if node has them */
SCOTravProto.getBranches = function( objectArg ) {

	/* try the check branches array property */
	try {

		/* if exists return it */
		if ( objectArg.branches )
 			return objectArg.branches;
	}

	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================

/* function to if a node has children younger than an input index */
SCOTravProto.hasYoungerChildren = function( objectArg, indexArg ) {

	/* if node has branches and enough of them then true, note we check these
	conditions separately to avoid an error on checking length on dne array */
	if ( this.getBranches( objectArg ) && this.getBranches( objectArg ).length > indexArg )
		 return true;
		 
	/* if here then false */
	return false;
}

//=============================================================================

/* a function to check if a node is in the menu by checking if a
page property exists and hideFromMenu is not defined to true */
SCOTravProto.inMenu = function( objectArg ) {
	/* if show in menu then always in menu */
	if ( this.showInMenu( objectArg ) ) 
		return true;
		 
 	/* check for hide from menu */
	if ( this.hideFromMenu( objectArg ) ) 
		return false;
			 
	/* check page - note before ADP changed isPage to be based on sco data nodes'
	isPage property (used to be based on existence of an id) used to say here that
	if a node was a page then show in menu, but now all 'pages' are not necessarily
	shown in menu */
	//if ( this.isPage( objectArg ) ) 
	//	return true;
	
	/* after commenting out last section after changing nature of 'isPage'
	needed another way to include rule that nodes with ids are shown in menu
	unless directed otherwise by show in menu props */
	if ( this.hasId(objectArg) )
		return true;
			 
	/* if here return false */
	return false;
}

//=============================================================================

/* function to check if object has an id defined */
SCOTravProto.hasId = function( objectArg ) {

	/* try to check if in menu */
	try {
 
		/* check id */
		if ( objectArg.id ) 
			 return true;
			 
		/* if here return false */
		return false;
	}
	
	/* if error on property dne return false */
	catch (err) { return false; };
}
	
//=============================================================================

/* a function to check if a node is a page by checking if an id property exists,
note before 'isPage' change, if 'id' defined then true, else false, error false,
now if isPage == true then true, else false, error true */
SCOTravProto.isPage = function( objectArg ) {

	/* try to check if in menu */
	try {
 
		/* check page */
		if ( objectArg.isPage == false) 
			 return false;
			 
		/* if here return true */
		return true;
	}
	
	/* if error on property dne return true */
	catch (err) { return true; };
}

//=============================================================================

/* a function to check if a node has the hideFromMenu property defined to true */
SCOTravProto.hideFromMenu = function( objectArg ) {

	/* try to check if defined true */
	try {
 
		/* check for true property */
		if ( objectArg.hideFromMenu )
			 return true;
			 
		/* if here return false */
		return false;
	}
	
	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================
/* a function to check if a node has the showInMenu property defined to true */
SCOTravProto.showInMenu = function( objectArg ) {

	/* try to check if defined true */
	try {
 
		/* check for true property */
		if ( objectArg.showInMenu )
			 return true;
			 
		/* if here return false */
		return false;
	}
	
	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================
/*
Function: SCOUts
	A function to search an unsorted tree of SCO's for the desired node, its
	parent, its nearest parent that is also a page, and the next and previous
	nodes in the flow.  Note, that the functions used by this function assume
	that a node is a page iff it has a 'page' property defined to a value with
	a finite length.
	
Parameters:
	objectArg		- an object that is an unsorted tree of nodes with 'branches' arrays of child 
					  nodes to be search by 'page' or 'name' node property.
	searchValueArg	- the value to be searched for in a node's 'page' or 'name' property.
	searchMethodArg	- the property to search for, either 'page' or 'name' or 'id', 'id' is default.
	
Dependencies:
	none

Returns:
	A 'foundObject' that has properties that are the node '.node' with the searched for	property, 
	and its parent '.nodeParent' which is the first parent of the node that is also a page, and 
	'nodeNext' and 'nodePrev' that are the next and previous nodes in the flow, and also now returns 
	a property 'nodeMenuPage' which gives the page that should be pointed to in the menu when the 
	searched for page is active.

Bugs:
	None known

To Do:
	none

Change Log:
	2007.05.13	ADP	- 	Initial version
	2007.05.20	ADP - 	Re-written (user interface unchanged) to operate by recording path traversing 
						tree using lifo's so that a wider range of properties may be determined and 
						returned.  Added return property 'nodeMenuPage' which gives the page that 
						should be pointed to in the menu when the searched for page is active
	2007.05.28	ADP - 	Updated so that at start of lesson the previous button moves to end of 
						previous lesson and likewise with next button.  if no next or previous 
						lesson exists then the function will return the highest node for 
						next/previous as appropriate.  NOTE - the code does not explicitly search 
						for starts and ends of 'lessons' it was simply more a case of updating the 
						coding of rules regarding behavior when the end of a branch is reached etc.
	2007.07.01	ADP - 	Updated code to correctly handle lesson-level nodes with no children, such 
						as the course home page.
	2007.07.09 	ADP - 	Updated code to allow specification of isJumpPage:true to allow a page to
						behave like a jump page, meaning that at the end of a child branch, the next 
						button returns to the jump page.
	2007.07.22	ADP - 	Updated code to allow jump pages with grandchildren to work correctly. Also 
						fixed so that the last page of the tree returns the top-level node 
						(SCOPages) instead of undefined.
	2013.01.21	ADP - 	Updated code change 'isJumpPage' property to be named 'isBranchStartPage' and
						added flag to branch start pages 'visitAll' to indicate if all branches are to
						be visited and there the next from the end of a branch should be the branch page
						itself.  Several bugs fixed.  All function argument names changed to match ALP's
						preferences.
*/

// front end unsorted tree search function
function SCOUts( object, searchValue, searchMethod ) {

	// init arrays to record paths
	var nodePath = new Array();
	var indexPath = new Array();
	
	// if object or search value is undefined return false for not found
	if ( typeof( object ) == 'undefined' || typeof( searchValue ) == 'undefined' )
		 return false;
	
	// set defaults
	searchMethod = typeof(searchMethod) != 'undefined' ? searchMethod : 'id';
	
	// vertical search based on input method
	switch ( searchMethod ) {

		// search nodes by name case and if node found return object
		case ( "name" ):
			return SCOUtsHelper( object, searchValue, namePropertyFunction, nodePath, indexPath, 0 );
			break;
		
		// search nodes by name case and if node found return object
		case ( "page" ):
			return SCOUtsHelper( object, searchValue, pagePropertyFunction, nodePath, indexPath, 0 );
			break;
			
		// search nodes by default/id case and if node found return object
		default:
			return SCOUtsHelper( object, searchValue, idPropertyFunction, nodePath, indexPath, 0 );
			break;

	} // end switch

	// enforce all control paths return a value
	return false;
}

//=============================================================================

/* recursive helper function to search the tree for a node with the specified
property while simultaneously recording the path taken to traverse the tree in
a pair of lifos so that various nodes that neighbor this path at various positions
may be returned */

function SCOUtsHelper( object, searchValue, propertyFunction, nodeArray, indexArray, curIndex ) {
	
	/* push current index onto index lifo */
	indexArray.push( curIndex );
	
	/* check current node */
	if ( searchValue == propertyFunction( object ) )
		 return buildReturnObject( object, nodeArray, indexArray );
		 
	/* push current node onto node lifo before moving down */
	nodeArray.push( object );
	
	/* init variable to hold branch result */
	var branchResult;

	/* if object has children check them too */
	if ( objectGetBranches( object ) ) {
		var iEnd = objectGetBranches( object ).length;
		for (var i = 0; i < iEnd; ++i) {
		 
			/* get branch result */
			branchResult = SCOUtsHelper( objectGetBranches( object )[i], searchValue, propertyFunction, nodeArray, indexArray, i );

			/* if branch has non null result return it */
			if ( branchResult )
				return branchResult;
			
			/* most recent search path failed so remove record of it */
			indexArray.pop();
			nodeArray.pop();
			}
	}
				
	/* return false for not found in subtree with top-most node object as if
	we are here then current node is not searched for node and has no children */
	return false;
}

//=============================================================================

/* 
	a function that takes as arguments the node that has been searched for and found
	and the lifos that have recorded the path to that node so that an object with needed
	properties can be constructed and returned 

	2013.01.21	ADP - 	Formatted debugging statements added (left commented out).
	2013.04.11  VRB -   Added data parameter to return object
*/

function buildReturnObject( found, nodeArray, indexArray ) {

	/* init an object to hold result setting node values to found node as default */
	var returnObject;
	
	/* set defaults based on if array has finite size */
	if ( nodeArray.length )
		returnObject = { nodePrev:(nodeArray[0]), node:found, nodeNext:(nodeArray[0]), nodePageParent:found, nodeParent:found, nodeMenuPage:found };
	else
		returnObject = { nodePrev:found, node:found, nodeNext:found, nodePageParent:found, nodeParent:found, nodeMenuPage:found };
	
	returnObject.data = new Object();
    returnObject.data.nodeArray = nodeArray;
    returnObject.data.indexArray = indexArray;
    
	/* use the found node and the lifos that specify the path to it to
	determine the various parents, note work with array copies */
	setParents( found, nodeArray.slice(), indexArray.slice(), returnObject );
	
	/* use the found node and the lifos that specify the path to it to
	determine the next and previous nodes, note work with array copies */
	setPrev( found, nodeArray.slice(), indexArray.slice(), returnObject );
	setNext( found, nodeArray.slice(), indexArray.slice(), returnObject );
	
	// uncomment for debugging
	/*
	console.log("-------------------------------------------");
	console.log("found=("+idPropertyFunction(found)+")");
	console.log("nodePrev=("+idPropertyFunction(returnObject.nodePrev)+")");
	console.log("nodeNext=("+idPropertyFunction(returnObject.nodeNext)+")");
	*/
	
	/* check various defaults */
	checkDefaults( found, nodeArray, indexArray, returnObject );
	
	/* done constructing object so return it */
	return returnObject;
}

//=============================================================================

/* 
	function to find the parent node and the nearest parent that is also a page
	node given the found object and the lifos that define the path to it 

	2013.01.21	ADP - 	Obsolete code deleted.
*/

function setParents( found, nodeArray, indexArray, returnObject ) {

	/* if node path lifo is null then parents are self so return */
	if ( !nodeArray.length )
		return;
		 
	/* if here then first parent exists so set parent to that */
	returnObject.nodeParent = nodeArray.pop();
	
	/* if the node we just popped is the same as the found node then that
	means the found node wasa left on the lifo so if possible pop again */
	if ( returnObject.nodeParent == found && nodeArray.length )
		returnObject.nodeParent = nodeArray.pop();
	
	/* assume for now that the node parent is also the page parent */
	returnObject.nodePageParent = returnObject.nodeParent;
	
	/* while the page parent is still not a page and the path lifo isnt
	empty continue to pop from the node path lifo */
	while ( !nodeIsPage( returnObject.nodePageParent ) && nodeArray.length )
		returnObject.nodePageParent = nodeArray.pop();
		
	/* if the found node is not a page or is hidden then check for a parent that
	is a page that is not hidden */
	if ( !nodeIsPage( found ) || nodeIsHidden( found ) ) {
	
		/* start search for this node in lifo by assuming that it is the page parent */
		returnObject.nodeMenuPage = returnObject.nodePageParent;

		/* while this node doesnt meet the desired criteria and there are still
		nodes left in the node lifo then pop new nodes to test from there */
		while ( (!nodeIsPage( returnObject.nodeMenuPage ) || nodeIsHidden( returnObject.nodeMenuPage ) ) && nodeArray.length )
			nodeArray.length = nodeArray.pop();	
	}
		 
	/* need to check for possibility that menu page criteria were not met
	because search was cutoff in which case reset to default found */
	if ( !nodeIsPage( returnObject.nodeMenuPage ) || nodeIsHidden( returnObject.nodeMenuPage ) )
		returnObject.nodeMenuPage = found;
}

//=============================================================================

/*
	function to find the previous node given the found object and the lifos
	that define the path to it.  NOTE - this function assumes that the nodeParent
	and nodePageParent properties have already been set

	2013.01.21	ADP - 	Added code to fix branch start page related bugs and to
						implement 'visitAll' functionality.
*/

function setPrev( found, nodeArray, indexArray, returnObject ) {

	/* if node path lifo is null then siblings are self so return */
	if ( !indexArray.length )
		 return;
		 
	// if parent is branch start page...
	if (nodeIsBranchStartPage(returnObject.nodeParent)) {
	
		// ... then previous is always the page parent
		returnObject.nodePrev = returnObject.nodeParent;
		
		// done
		return;
	
	} // end if parent is branch start page
		 
	/* pop the first element from the index lifo so we can tell what
	the sibling index is of the found node */
	var siblingIndex = indexArray.pop();
	
	/* push sibling index back onto index array */
	indexArray.push( siblingIndex );
	
	// if found node is not oldest amonsgst siblings
	if (siblingIndex != 0) {
	
		// get next older sibling
		var olderSibling = objectGetBranches( returnObject.nodeParent )[ siblingIndex - 1 ];
		
		// if older sibling is a branch start node
		if (nodeIsBranchStartPage( olderSibling )) {
		
			// set previous node to older sibling branch start node
			returnObject.nodePrev = olderSibling;
			
			// done
			return;			
		
		} // end if older sibling is a branch start node
	
	} // end if found node is not oldest amonsgst siblings
	
	/* init variable to hold search result */
	var hardSearchResult = searchHardPrevious( nodeArray, indexArray );

	/* if found a valid result then reset previous */
	if ( hardSearchResult )
		returnObject.nodePrev = hardSearchResult;
}

//=============================================================================

/*
	function to find the next node given the found object and the lifos that
	define the path to it.  NOTE - this function assumes that the nodeParent
	and nodePageParent properties have already been set 

	2013.01.21	ADP - 	Added code to fix branch start page related bugs and to
						implement 'visitAll' functionality.
*/

function setNext( found, nodeArray, indexArray, returnObject ) {
				
	// if node path lifo is null then siblings are self so return
	if ( !indexArray.length )
		 return;

	// pop the first element from the index lifo so we can tell what
	// the sibling index is of the found node
	var siblingIndex = indexArray.pop();
	
	// push sibling index back onto index array
	indexArray.push( siblingIndex );
	
	// if current page is not a branch start page then set next using correct method
	if ( !nodeIsBranchStartPage( found ) ) {

		// try to find a next using this method
		var tempNext = oldestPageChild( found );
		 
		// if a valid result was found and is page
		if ( tempNext && nodeIsPage(tempNext) ) {
		
			// set property
			returnObject.nodeNext = tempNext;
			
			// return
			return;
			
		} // end valid result found
			
	} // end if current is not a branch start page
		 
	// else use branch start page methods
	else {

		// if found node is the last child amongst siblings then next
		// node is first parent that is also a page
		if ( siblingIndex == objectGetBranches( returnObject.nodeParent ).length - 1 )
			returnObject.nodeNext = returnObject.nodePageParent;
	  
		// else if found node is not last child of immmediate parent then the
		// next node is actually the next child of immediate parent
		else
			returnObject.nodeNext = objectGetBranches( returnObject.nodeParent )[ siblingIndex + 1 ];
			
		// if valid result found return
		if ( returnObject.nodeNext && nodeIsPage(returnObject.nodeNext) )
			return;
		
	} // branch start page else
			
	// if here, above defintions failed to produce a next node that is a page...

	// init variable to hold search result
	var hardSearchResult = searchHardNext( nodeArray, indexArray, returnObject.nodeParent, returnObject.nodePageParent );
	 
	// if found a valid result then reset next
	if ( hardSearchResult )
		returnObject.nodeNext = hardSearchResult;
}

//=============================================================================

/*
	function to return the oldest child of a node that is a page
	
	2013.01.21	ADP - 	Added code to fix branch start page related bugs and to
						implement 'visitAll' functionality.
*/

function oldestPageChild( object ) {

	// if current object has no children then return false for dne
	if ( !objectGetBranches( object ) )
		 return false;

	// else check all immediate children to see if any are pages
	for (var i = 0; i < objectGetBranches( object ).length; i++)
		if ( nodeIsPage( objectGetBranches( object )[i] ) )
			return objectGetBranches( object )[i];
	 
	// init a temp var to hold search results
	var searchResult = false;

	// move to deeper levels
	for (var i = 0; i < objectGetBranches( object ).length; i++) {
	
		// search next level
		searchResult = oldestPageChild( objectGetBranches( object )[i] );
		
		// if success return it else keep on looking
		if ( searchResult )
			 return searchResult;		
	}
	
	// if here then failed at this depth so return false
	return false;
}

//=============================================================================

/*
	function to check that various returning properties have been correctly
	determined and possibly then reset.  NOTE - this function assumes that the
	nodeParent and nodePageParent properties have already beeen set 
*/

function checkDefaults( found, nodeArray, indexArray, returnObject ) {

	/* if node path lifo is null then siblings are self so return */
	if ( !indexArray.length )
		return;

	/* pop the first element from the index lifo so we can tell what
	the sibling index is of the found node */
	var siblingIndex = indexArray.pop();

	/* if the found node is not a page or is hidden check for an older sibling
	that is a not hidden page noting that we dont want to overwrite ny content
	in the 'nodeMenuPage' property unless we found a node that meets the criteria
	as the default condition has already been set */
	if ( !nodeIsPage( found ) || nodeIsHidden( found ) ) {
	
		/* start by decrementing index of the current sibling */
		--siblingIndex;

		/* while older siblings remain and we havent found one that is a page and
		also isnt hidden keep looking at older siblings */
		while ( siblingIndex > -1 && (!nodeIsPage( objectGetBranches( returnObject.nodeParent )[ siblingIndex ] ) || nodeIsHidden( objectGetBranches( returnObject.nodeParent )[ siblingIndex ] )) )
			siblingIndex--;
			 
		/* if found an older sibling that matches the criteria then set property */
		if ( nodeIsPage( objectGetBranches( returnObject.nodeParent )[ siblingIndex ] ) && !nodeIsHidden( objectGetBranches( returnObject.nodeParent )[ siblingIndex ] ) )
			returnObject.nodeMenuPage = objectGetBranches( returnObject.nodeParent )[ siblingIndex ];
	}
}

//=============================================================================

/*
	a function to handle search for a previous page for case when found node has
	no younger siblings and the page parent could not be set to a real page
*/

function searchHardPrevious( nodeArray, indexArray ) {

	/* if node or index arrays are empty then nothing to do */
	if ( !nodeArray.length || !indexArray.length )
		 return false;

	/* init a value to hold evolving search result start with false for not found */
	var searchResult = false;
	
	/* init a var to hold current node being searched */
	var curNode;
	
	/* while havent found a result and still places to look */
	while ( !searchResult && nodeArray.length ) {
	
		// set current node
		curNode = nodeArray.pop(); 
		
		// initialize iterator to keep stacks synced
		var i = indexArray.pop()-1;
		
		// check cur node
		if (nodeIsBranchStartPage(curNode))
			return curNode;
	
		/* search all older chlidren of parent starting on right */
		for (; i >= 0; --i) {
		
			// if older sibling is branch start page, then that should be the previous
			if (nodeIsBranchStartPage(objectGetBranches( curNode )[i]))
				searchResult = objectGetBranches( curNode )[i];
		
			// else search this sub tree starting with right most elements
			else
				searchResult = searchHardRight( objectGetBranches( curNode )[i] );
				
			/* if good answer found return it */
			if ( searchResult )
				return searchResult;	
				 
			} // end iteration over older children
			
		// older children is not prev, so if parent is page, then thats prev
		if ( nodeIsPage( curNode ) )
			return curNode;
	}

	/* done so no matter what return result as it stands */
	return searchResult;
}

//=============================================================================

/*
	a function to search a subtree and return the right most node that is a page
	or false if does not exist.  this function searches the children first so it is
	therefore looking for the lowest rightmost node in the given subtree that is a
	page
*/

function searchHardRight( object ) {

	/* init a value to hold search result start with false for not found */
	var searchResult = false;
	
	/* search children first starting on the right */
	if ( objectGetBranches( object ) )
		for (var i = objectGetBranches( object ).length-1; i >= 0; --i) {
		 
			/* get result */
			searchResult = searchHardRight( objectGetBranches( object )[i] )

			/* if found a result return it */
			if ( searchResult )
				return searchResult;
		}
				
	/* if here then chlidren are no good so if the current object is page
	then return that */
	if ( nodeIsPage( object ) )
		return object;
				
	/* return false for not found in subtree with top-most node object as if
	we are here then current node is not searched for node and has no children */
	return false;
}

//=============================================================================

/*
	a function to handle search for a next page for case when easier rules
	dont give a result

	2013.01.21	ADP - 	Added code to fix branch start page related bugs and to
						implement 'visitAll' functionality.
*/

function searchHardNext( nodeArray, indexArray, nodeParent, nodePageParent ) {

	// if node or index arrays are empty then nothing to do
	if ( !nodeArray.length || !indexArray.length )
		 return false;

	/* init a value to hold evolving search result start with false for not found */
	var searchResult = false;
	
	// if parent is branch search page and is visit all then it is next
	if ( nodeIsPage( nodeParent ) && nodeIsBranchStartPage( nodeParent ) && nodeIsVisitAll( nodeParent ) )
		return nodeParent;
	
	/* init a var to hold current node being searched starting with 
	first parent node in path to found node */
	var curNode = nodeArray.pop();
	var curBranches = objectGetBranches( curNode ).length;
	
	// search all younger chlidren of parent starting on left
	var i = indexArray.pop()+1;
	if (!nodeIsBranchStartPage( nodeParent ))
		for (; i < curBranches; i++) {

			// search this sub tree starting with right most elements */
			searchResult = searchHardLeft( objectGetBranches( curNode )[i] );
			
			// if good answer found return it
			if ( searchResult )
				return searchResult;				
	}
	
	/* if here then we failed to find a next node by looking at younger siblings
	so before we start looking further up the tree check if we are in a section
	below a branch start page and therefore should go back to that */
	
	/* now continue looking further up the tree if needed so ... while havent
	found a result and still places to look ... */
	while ( !searchResult && nodeArray.length ) {
	
		// set current node
		curNode = nodeArray.pop();
		curBranches = objectGetBranches( curNode ).length;
		
		// if cur node is page is branch start page and is visit all then return it
		if (nodeIsPage( curNode ) && 
			nodeIsBranchStartPage( curNode ) &&
			nodeIsVisitAll( curNode ) )
			return curNode;
	
		// search all younger chlidren of parent starting on left
		var i = indexArray.pop()+1
		if ( !nodeIsPage( curNode ) || !nodeIsBranchStartPage( curNode ) )
			for (; i < curBranches; ++i) {
		
				// search this sub tree starting with right most elements
				searchResult = searchHardLeft( objectGetBranches( curNode )[i] );
				
				// if good answer found return it
				if ( searchResult )
					return searchResult;				
			}
	}

	/* done so no matter what return result as it stands */
	return searchResult;
}

//=============================================================================

/*
	a function to search a subtree and return the left most node that is a page
	or false if does not exist.  this function searches parent before children so as
	it searches the given subtree it is looking for the highest and leftmost node
	that is a page 
*/

function searchHardLeft( object ) {

	// search parent first and if page return it
	if ( nodeIsPage( object ) )
		 return object;

	// init a value to hold search result start with false for not found
	var searchResult = false;
	
	// search children starting on the left
	if ( objectGetBranches( object ) ) {
		var iEnd = objectGetBranches( object ).length;
		for (var i = 0; i < iEnd; ++i) {
		 
			// get result
			searchResult = searchHardLeft( objectGetBranches( object )[i] )

			// if found a result return it
			if ( searchResult )
				return searchResult;
		}
	}
				
	// return false for not found in subtree with top-most node object as if
	// we are here then current node is not searched for node and has no children
	return false;
}

//=============================================================================

/* a default property function by name */
function namePropertyFunction( object ) {

	/* try to check name */
	try {
 
		/* return name */
		return object.name;
	}

	/* if error on property dne return null */
	catch (err) { return null; };
}

//=============================================================================

function idPropertyFunction( object ) {

	/* try to check id */
	try {
 
		/* return id */
		return object.id;
	}

	/* if error on property dne return null */
	catch (err) { return null; };
}

//=============================================================================

/* a default property function by page */
function pagePropertyFunction( object ) {

	/* try to check page */
	try {
 
		/* return page */
		return object.page;
	}

	/* if error on property dne return null */
	catch (err) { return null; };
}

//=============================================================================

/* a function to check if a node is a branch start page by checking if a isBranchStartPage
property exists and is set to true*/
function nodeIsBranchStartPage( object ) {

	/* try to check page */
	try {
 
		/* check isBranchStartPage property */
		if ( object.isBranchStartPage )
			 return true;
			 
		/* if here return false */
		return false;
	}

	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================

// a function to check if branch start page node has a true visitAll property
function nodeIsVisitAll( object ) {

	/* try to check page */
	try {
 
		/* check property */
		if ( object.visitAll )
			 return true;
			 
		/* if here return false */
		return false;
	}

	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================

/* a function to check if a node is a page by checking if an id property exists */
function nodeIsPage( object ) {

	/* try to check page */
	try {
 
		/* check page */
		if ( object.isPage == false )
			 return false;
			 
		/* if here return true */
		return true;
	}

	/* if error on property dne return true */
	catch (err) { return true; };
}

//=============================================================================

/* a function to check if a node has the hideFromMenu property defined to true */
function nodeIsHidden( object ) {

	/* try to check if defined true */
	try {
 
		/* check for true property */
		if ( object.hideFromMenu )
			 return true;
			 
		/* if here return false */
		return false;
	}
	
	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================

/* function to return children if node has them */
function objectGetBranches( object ) {

	/* try the check branches array property */
	try {

		/* if exists return it */
		if ( object.branches )
 			return object.branches;
	}

	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================

/*
Function: SCOWeight
	A function to traverse an unsorted tree of SCO's and sum the total weight of
	pages.  All nodes that are pages and have no specified weight are assumed to
	have a weight of one.  When a node with a specified weight is encountered it
	is assumed to represent the weight of the entire subtree with that node as
	first node and that subtree is not examined further.  The function will
	simulateously traverse the entire tree summing all weights, and traverse
	the tree only summing until a node matching the specified search criteria is
	found.  A single line (commented) in the recursive helper function may be
	commented/uncommented to change whether the limited search total weight is
	inclusive of the found node weight value.  NOTE!!! this function uses some of
	the functions used by the utsSCO function.
	
Parameters:
	object - an object that is an unsorted tree of nodes with 'branches' arrays of child nodes to be search by 'page' or 'name' node property.
	searchValue - the value to be searched for in a node's 'page' or 'name' property.
	searchMethod - the property to search for, either 'page' or 'name' or 'id', 'id' is default.
	
Dependencies:
	none

Returns:
	The integer weight of the desired tree/subtree.

Bugs:
	None known

To Do:
	none

Change Log:
	2007.05.13	ADP	- Initial version
*/

function SCOWeight( object, searchValue, searchMethod ) {

	/* set defaults */
	searchMethod = typeof(searchMethod) != 'undefined' ? searchMethod : 'id';

	/* weight summation results object */
	resultsObject = { pWeight:0, tWeight:0, terminateSearch:false };
	
	/* search based on input method */
	switch ( searchMethod ) {

		/* search nodes by page and return weight up to found node */
		case ( "page" ):
				 utsWeightHelper( object, searchValue, resultsObject, pagePropertyFunction);
				 return smallResultsObject = { pWeight:resultsObject.pWeight+1, tWeight:resultsObject.tWeight };
			break;
		
		case ( "name" ):
				utsWeightHelper( object, searchValue, resultsObject, namePropertyFunction);
				return smallResultsObject = { pWeight:resultsObject.pWeight+1, tWeight:resultsObject.tWeight };
			break;
				
		/* search nodes by default/name and return weight up to found node */
		default:
				utsWeightHelper( object, searchValue, resultsObject, idPropertyFunction);
				return smallResultsObject = { pWeight:resultsObject.pWeight+1, tWeight:resultsObject.tWeight };
			break;
			
	/* end switch */
	}
	
	/* make sure all control paths return a value use
	unity to prevent any div by zero later */
	return smallResultsObject = { pWeight:1, tWeight:1 };
}

//=============================================================================

function utsWeightHelper( object, searchValue, resultsObject, propertyFunction ) {
	
	 /* if searched node found set results object to
	 terminate search for partial weight value */
	 if ( searchValue == propertyFunction( object ) )
			resultsObject.terminateSearch = true;

		/* get the page weight of the current node */
		var pageWeight = weightPropertyFunction( object );
		
		/* if weight not defined */
		if ( !pageWeight ) {
		
			 /* if node is a page increment weight totals by 1 */
			 if ( nodeIsPage( object )  ) {
			 
					/* only count partial weight if still needed */
					if ( !resultsObject.terminateSearch )
						 resultsObject.pWeight++;
			 
					/* count total weight */
					resultsObject.tWeight++;
					}
		}
			 
		/* else weight is defined */
		else {
		
				/* only count partial weight if still needed */
				if ( !(resultsObject.terminateSearch) )
						resultsObject.pWeight += pageWeight;
		
				 /* add weight to total */
				 resultsObject.tWeight += pageWeight;
				 
				 /* stop checking this subtree */
				 return;
				 }
				 
		/* if current node has any children now sum over all children's trees */
		if ( objectGetBranches( object ) )
			 for (var i = 0; i < objectGetBranches( object ).length; i++)
						utsWeightHelper( objectGetBranches( object )[i], searchValue, resultsObject, propertyFunction );
}

//=============================================================================

/* function to return false if weight is not specified or the weight if it is */
function weightPropertyFunction( object ) {

	/* try to check weight */
	try {
 
		/* return weight */
		return object.weight;
	}

	/* if error on property dne return false */
	catch (err) { return false; };
}

//=============================================================================