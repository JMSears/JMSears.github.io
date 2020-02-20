/*
Function: SlideShow
	Creates a slideshow.

Parameters:
	ssID - (String) the id of the slideshow content div
	slidePrefix - (String or Array of strings) the prefix of the slides, must be an array if it is a tabbed 
								slideshow
	total - (Number or array of numbers) the total number of slides, must be an array if it is a tabbed 
					slideshow
	tabLabels - (Array of strings) tabbed slideshows only--array. Either the text or the image filename to 
							display on the tabs.
	tabType - (String) type of labels, either 'text' or 'image'. Default is text.
	
Dependencies:
	<DisplayCollection>; <ada$>;

Returns:
	none

Bugs:
	None known

To Do:
	none

Change Log:
	2007.03.20	ALP	- Initial version
	2007.06.01	JEM	- Updated <createNav> to send opaque images to IE rather than PNG32s due to browser deficiencies.
	2007.06.10	ALP - Updated logic in <updateSlideNumber> to ensure proper behavior for 2-slide slideshows.
	2007.06.14	ALP	-	Added ability to create tabbed slideshows
	2007.06.18	ALP	-	Removed the "Slide X of Y" when there is no navigation
	2007.06.19	ALP	- Corrected some errors caused by previous revisions
*/
var instanceManager = new Array(); // needed to keep track of multiple instances of slideshows.
function SlideShow(ssId,slidePrefix,total,tabLabels,tabType) {
	instanceManager[instanceManager.length] = this;
	this.instance = instanceManager.length - 1;
	this.localVar = 'my' + ssId;
	this.ssId = ssId;	
	//this.instance = this;
	this.ss = ada$(ssId);
	this.prevDimmed = false;
	this.nextDimmed = false;
	if (!tabLabels) {	// if there are no tabs
		this.slidePrefix = slidePrefix;
		this.total = total;
		this.ssType = 'single';
		this.slideCollection = new DisplayCollection(this.slidePrefix,this.total);
	} else { // if it is a tabbed slideshow
		this.slidePrefix = new Array();
		this.total = new Array();
		this.slideCollection = new Array();
		this.tabLabels = new Array();
		this.ssType = 'tabbed';
		this.tabType = tabType || 'text';
		this.ssTabId = this.ss + 'Top';
		this.currTab = 0;
		this.currTabId= this.ssId + 'tab0';
		for (var i=0, j=slidePrefix.length; i<j; i++) {
			this.slidePrefix[i] = slidePrefix[i];
			this.total[i] = total[i];
			this.slideCollection[i] = new DisplayCollection(this.slidePrefix[i],this.total[i]);
			this.tabLabels[i] = tabLabels[i];
		}
		this.createTabs();
	}
	this.currSlide = 1;
	this.currSlideId = this.ssId + 'Curr';
	this.totalSlideId = this.ssId + 'Total';
	if (ada$(this.totalSlideId)) {
		ada$(this.totalSlideId).innerHTML = this.total[0];
	}
	this.ss.className = 'ssContent';
}

var SS = SlideShow.prototype;

/*
Method: createTabs
	Creates the tabs for tabbed slideshows 

Parameters:
	none
*/
SS.createTabs = function() {
	var myNum = this.instance;
	var myTabTable = document.createElement('TABLE');
	myTabTable.className = 'ssTabs';
	var myTbody = document.createElement('TBODY');
	var myRow = document.createElement('TR');
	var myTab, myLink, myLabel, tempId;
	for (var i=0, j=this.slidePrefix.length; i<j; i++) {
		myTab = document.createElement('TD');
		myLink = document.createElement('A');
		myLink.href = "#";
		myLink.id = this.ssId + 'tab' + i;
		if (i==0) {
			myLink.className = 'current';
			myTab.className = 'current';
		} else {
			myLink.className = 'dim';
			myTab.className = 'dim';
		}
		myLink.onclick= function() {
			tempId = this.id;
			if (instanceManager[myNum].currTabId != tempId) { // if it is not the tab that is already current
				// Mark the selected tab as current
				ada$(tempId).className = 'current';
				ada$(tempId).parentNode.className = 'current';
				// Remove the current style from the previously selected tab
				ada$(instanceManager[myNum].currTabId).className = 'dim';
				ada$(instanceManager[myNum].currTabId).parentNode.className = 'dim';
				// Hide all slides from the previous tab
				instanceManager[myNum].slideCollection[instanceManager[myNum].currTab].hideAll();
				// Show both navigation buttons
				instanceManager[myNum].updateNav('showNext');
				instanceManager[myNum].updateNav('showPrev');
				// Set the current tab to the new current tab
				instanceManager[myNum].currTabId = this.id;
				instanceManager[myNum].currTab = tempId.slice(-1);
				// Show the first slide
				instanceManager[myNum].showSlide(1);
				ada$(instanceManager[myNum].ssId).className = 'off';
				//alert('pause');
				ada$(instanceManager[myNum].ssId).className = 'ssContent';
			}
			return false;
		}
		switch (this.tabType) {
			case('text'): 
				myLabel = document.createTextNode(this.tabLabels[i]);
				break;
			case('image'):
				myLabel = document.createElement('IMG');
				myLabel.src = 'images/' + this.tabLabels[i];
				myLabel.alt = 'Section ' + i;
				break;
		}
		myLink.appendChild(myLabel);
		myTab.appendChild(myLink);
		myRow.appendChild(myTab);
	}
	myTbody.appendChild(myRow);
	myTabTable.appendChild(myTbody);
	this.ss.insertBefore(myTabTable,this.ss.firstChild);
}

/*
Method: showSlide
	Displays the specified slide. 

Parameters:
	slide - the number or id of the slide div to display
*/
SS.showSlide = function(slide) {
	switch (this.ssType) {
		case('single'):
			this.slideCollection.showItem(slide);
			break;
		case('tabbed'):
			//
			this.slideCollection[this.currTab].showItem(slide);
			break;
	}
	if (this.hasNav) {
		this.updateSlideNumber();
	}
}
/*
Method: showNext
	Displays the next slide. 

Parameters:
	none
*/
SS.showNext = function() {
	switch (this.ssType) {
		case('single'):
			this.slideCollection.showNext();
			break;
		case('tabbed'):
			this.slideCollection[this.currTab].showNext();
			break;
	}
	this.updateSlideNumber();
}
/*
Method: showPrevious
	Displays the previous slide. 

Parameters:
	none
*/
SS.showPrevious = function() {
	switch (this.ssType) {
		case('single'):
			this.slideCollection.showPrevious();
			break;
		case('tabbed'):
			this.slideCollection[this.currTab].showPrevious();
			break;
	}
	this.updateSlideNumber();
}
/*
Method: updateSlideNumber
	Updates the slide number in the slideshow footer and calls the updateNav function to adjust the next/previous buttons as necessary. 

Parameters:
	none
*/
SS.updateSlideNumber = function() {
	this.previousSlide = this.currSlide;
	switch (this.ssType) {
		case('single'):
			this.currSlide = this.slideCollection.currItem;
			this.totSlide = this.total;
			break;
		case('tabbed'):
			this.currSlide = this.slideCollection[this.currTab].currItem;
			this.totSlide = this.total[this.currTab];
			break;
	}
	ada$(this.currSlideId).innerHTML = this.currSlide;
	ada$(this.totalSlideId).innerHTML = this.totSlide;
	if (this.currSlide == '1' && this.previousSlide != this.totSlide) {
		this.updateNav('start');
	} else if (this.currSlide == '2' && this.previousSlide == '1') {
		this.updateNav('showPrev');
		if ((this.currSlide*1) == this.totSlide) {
			this.updateNav('end');
		}
	} else if ((this.currSlide*1) == this.totSlide) {
		this.updateNav('end');
	} else if ((this.currSlide*1) == this.totSlide-1 && this.previousSlide == this.totSlide) {
		this.updateNav('showNext');
		if (this.currSlide == '1') {
			this.updateNav('start');
		}
	}
	initSlideEvents(this.currSlide);
}
/*
Method: setOnClass
	Allows programmer to change the "on" class of a slide to something other than the default of 'on'. 

Parameters:
	onClass - the class to give to a slide to display it.
*/
SS.setOnClass = function(onClass) {
	this.slideCollection.onClass = onClass;
}
/*
Method: setOffClass
	Allows programmer to change the "off" class of a slide to something other than the default of 'off'. 

Parameters:
	offClass - the class to give to a slide to hide it.
*/
SS.setOffClass = function(offClass) {
	this.slideCollection.offClass = offClass;
}
/*
Method: createNav
	Creates the next and previous buttons and links and appends them to the page. 

Parameters:
	footerId - (optional) the ID of the slideshow footer.
	prevImgId - (optional) the desired ID for the slideshow previous image
	nextImgId - (optional) the desired ID for the slideshow next image
	
To Do:
	- Use variables to specify the image paths and classes.
*/
SS.createNav = function(footerId, prevImgId, nextImgId) {
	//thisInstance = this;
	var myNum = this.instance;
	this.hasNav = true;
	// add the text X of Y
	// add the navigatioin buttons
	this.footerId = footerId || this.ssId + 'Footer';
	this.prevImageId = prevImgId || this.ssId +'Previous';
	this.nextImageId = nextImgId || this.ssId +'Next';
	var myPrevLink = document.createElement('a');
	myPrevLink.href = '#';
	myPrevLink.onclick = function() {
		instanceManager[myNum].showPrevious(); 
		return false;
	};
	var myPrevImage = document.createElement('img');
	myPrevImage.src = (ie) ? '../images/ss_previous_opaque.png' : '../images/ss_previous.png';
	myPrevImage.alt = 'previous slide';
	myPrevImage.className = 'png fr';
	myPrevImage.id = this.prevImageId;
	myPrevImage.width = '29';
	myPrevImage.height = '25';
	myPrevLink.appendChild(myPrevImage);
	ada$(this.footerId).insertBefore(myPrevLink,ada$(this.footerId).childNodes[0]);
	var myNextLink = document.createElement('a');
	myNextLink.href = '#';
	myNextLink.onclick = function() {
		instanceManager[myNum].showNext(); 
		return false;
	};
	var myNextImage = document.createElement('img');
	myNextImage.src = (ie) ? '../images/ss_next_opaque.png' : '../images/ss_next.png';
	myNextImage.alt = 'next slide';
	myNextImage.className = 'png fr';
	myNextImage.id = this.nextImageId;
	myNextImage.width = '29';
	myNextImage.height = '25';
	myNextLink.appendChild(myNextImage);
	ada$(this.footerId).insertBefore(myNextLink,ada$(this.footerId).childNodes[0]);
}
/*
Method: UpdateNav
	Creates a dimmed next or previous button and removes the link -OR- gets rid of a dimmed next/previous button. 

Parameters:
	type	-	what stage the slideshow is in.
	
Notes:
	We must recreate and append the next/previous elements every time in order for the PNG-32 fix to be applied. Once IE6 is dropped, we can simplify this code to check whether an element has already been created and then use that element.

Change Log:
	2007.03.25	ALP	- Initial version
	2007.03.26	JEM	- Changed image sources per new file structure.
*/
SS.updateNav = function(type) {
	if (this.hasNav) {
		if (type == 'start') {
			this.prevDimmed = true;
			this.dimPrevImage = document.createElement('img');
			this.dimPrevImage.src = (ie) ? '../images/ss_previous_dim_opaque.png' : '../images/ss_previous_dim.png';
			this.dimPrevImage.alt = '';
			this.dimPrevImage.className = 'png fr';
			this.dimPrevImage.id = this.prevImageId;
			this.dimPrevImage.width = '29';
			this.dimPrevImage.height = '25';
			this.prevImageLink = ada$(this.prevImageId).parentNode;
			ada$(this.footerId).replaceChild(this.dimPrevImage,this.prevImageLink);
		} else if (type == 'showPrev') {
			if (this.prevDimmed) { // check to be sure the previous button is dimmeed
				ada$(this.footerId).removeChild(this.dimPrevImage);
				ada$(this.footerId).removeChild(ada$(this.nextImageId).parentNode);
				this.createNav();
				this.prevDimmed = false;
			}
		} else if (type == 'end') {
			this.nextDimmed = true;
			this.dimNextImage = document.createElement('img');
			this.dimNextImage.src = (ie) ? '../images/ss_next_dim_opaque.png' : '../images/ss_next_dim.png';
			this.dimNextImage.alt = '';
			this.dimNextImage.className = 'png fr';
			this.dimNextImage.id = this.nextImageId;
			this.dimNextImage.width = '29';
			this.dimNextImage.height = '25';
			this.nextImageLink = ada$(this.nextImageId).parentNode;
			ada$(this.footerId).replaceChild(this.dimNextImage,this.nextImageLink);
		} else if (type == 'showNext') {
			if (this.nextDimmed) { // check to be sure the next button is dimmeed
				ada$(this.footerId).removeChild(this.dimNextImage);
				ada$(this.footerId).removeChild(ada$(this.prevImageId).parentNode);
				this.createNav();
				this.nextDimmed = false;
			}
		}
	}
}
/*
Function: initSlideEvents
	Blank function called at the end of SlideShow.upadetSlideNumber(). It can be defined on the page to trigger events when a slide loads.

Parameters:
	slide - the number of the currently displayed slide.

Dependencies:
	<SlideShow>;

Returns:
	none

Bugs:
	None known

To Do:
	none

Change Log:
	2007.03.22	ALP	- Initial version
*/
function initSlideEvents(slide) {
	// define on the page
}