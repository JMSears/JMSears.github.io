/*
Function: DisplayCollection
	Creates a collection of elements and displays/hides members of the collection. Each element of the collection must have an id of the form prefix+i, where i starts at 1.

Parameters:
	prefix	-	the prefix of all of the elements' id's
	total		-	the total number of elements in the collection
	onClass	-	(optional) the class to use when turning elements 'on'
	offClass	-	(optional) the class to use when turning elements 'off'

Dependencies:
	<ada$>; <array.push>

Returns:
	none

Bugs:
	None known

To Do:
	none

Change Log:
	2007.03.20	ALP	- Initial version
*/

function DisplayCollection(prefix,total,onClass,offClass) {
	this.prefix = prefix;
	this.total = total;
	this.totalDisplayed = 0;
	this.onClass = onClass || 'on';
	this.offClass = offClass || 'off';
	this.currItem = 1;
	this.collection = new Array();
	for (var i=1; i<total+1; i++) {
		var temp = prefix+i;
		this.collection.push(ada$(temp));
		ada$(temp).className = this.offClass;
	}
	
}

var DC = DisplayCollection.prototype;

/*
Method: showItem
	Displays the given item

Parameters:
	theItem	-	the id of the item -OR- the number of the item to display
*/
DC.showItem = function(theItem,mult) {
	this.showMult = mult || false;
	if (this.showMult == false) {
		this.hideAll();
	}
	if (typeof(theItem) == 'string' && theItem.indexOf(this.prefix) != -1) {
		ada$(theItem).className = this.onClass;
		this.setCurrentItem(theItem.substring(this.prefix.length));
	} else {
		var temp = this.prefix+theItem;
		ada$(temp).className = this.onClass;
		this.setCurrentItem(theItem);
	}
}

/*
Method: hideItem
	Hides the given item

Parameters:
	theItem	-	the id of the item -OR- the number of the item to hide
*/
DC.hideItem = function(theItem) {
	if (typeof(theItem) == 'string' && theItem.indexOf(this.prefix) != -1) {
		ada$(theItem).className = this.offClass;
		this.setCurrentItem(theItem.substring(this.prefix.length));
	} else {
		var temp = this.prefix+theItem;
		ada$(temp).className = this.offClass;
		this.setCurrentItem(theItem);
	}
}
	
/*
Method: showNext
	Displays the next item in the collection

Parameters:
	none
*/
DC.showNext = function() {
	this.hideItem(this.currItem);
	this.setCurrentItem('next');
	var temp = this.prefix+this.currItem;
	ada$(temp).className = this.onClass;
}

/*
Method: showPrevious
	Displays the previous item in the collection

Parameters:
	none
*/
DC.showPrevious = function() {
	this.hideItem(this.currItem);
	this.setCurrentItem('previous');
	var temp = this.prefix+this.currItem;
	ada$(temp).className = this.onClass;
}

/*
Method: hideAll
	Hides all items in the collection

Parameters:
	none
*/
DC.hideAll = function() {
	for (var i=0; i<this.collection.length; i++) {
		ada$(this.collection[i]).className = this.offClass;
	}
}

/*
Method: showAll
	Displays all items in the collection

Parameters:
	none
*/
DC.showALL = function() {
	for (var i=0; i<this.collection.length; i++) {
		ada$(this.collection[i]).className = this.onClass;
	}
}

/*
Method: setCurrentItem
	Sets the current item of the collection

Parameters:
	arg	-	'next', 'previous', or the number of the item to set as the current item
*/
DC.setCurrentItem = function(arg) {
	if (arg == 'next') {
		if (this.currItem != this.total) {
			this.currItem++;
		} else {
			this.currItem = 1;
		}
	} else if (arg == 'previous') {
		if (this.currItem != 1) {
			this.currItem = this.currItem -1;
		} else {
			this.currItem = this.total;
		}
	} else {
		this.currItem = arg*1;
	}
	this.totalDisplayed++;
	if (this.totalDisplayed == this.total) {
		allDisplayed(true);
	} else {
		allDisplayed(false);
	}
}

function allDisplayed(arg) {
	// define on the page
}


		
	