/*
Object: ContentObject
	Reads a JSON file containing the course content and stores it for reference

Parameters:
	none

Dependencies:
	<ada$>;

Returns:
	none

Bugs:
	None known

To Do:
	Speed it up!
	
Change Log:
	2012.10.03	ALP	-	Initial version.
*/


function ContentObject() {
	instance = this; // so we can reference this instance of the object in onclick events
	this.contentData = SCOContent; // The name of the JSON variable that contains the content data
	this.pages = this.contentData.pages; // An array of pages objects
	this.templates = this.contentData.templates; // An array of the template objects
	this.sortArray(this.pages,"id");
	this.sortArray(this.templates,"id");
	//console.log(this.templates);
}

var CO = ContentObject.prototype;

/* Function that performs a bubble sort on the specified array and updates the pageUrls, pageIds, and pageLinkEls arrays. */
CO.sortArray = function(arrayToSort,propToSortOn) {
	var myLength = arrayToSort.length;
	var dummy1, dummy2;
	for (var i=0; i<(myLength-1); i++) {
		for (var j=i+1; j<myLength; j++) {
			if (arrayToSort[j][propToSortOn] < arrayToSort[i][propToSortOn]) {
				dummy1 = arrayToSort[i];
				arrayToSort[i] = arrayToSort[j];
				arrayToSort[j] = dummy1;
			}
		}
	}
	//alert(arrayToSort[0][propToSortOn]);
}

CO.findPageURLByPageId = function(id){
	var start = 0;
	var end = this.pages.length - 1;
	//console.log("looking for id: " + id);
	try {
		var pageLocation = this.findItemByPropertyHelper(this.pages,"id",id,start,end,false);
		//console.log("Page location is " + pageLocation);
		if (pageLocation != undefined) {
			//console.log("pageLocation for " + id + "= " + pageLocation)
			var templateId = this.pages[pageLocation].templateId;
			//console.log("TemplateId is " + templateId + "!!!!!!!!!!!!!!!!!!!");
			var templateLocation = this.findItemByPropertyHelper(this.templates,"id",templateId,start,(this.templates.length-1),false);
			//console.log("Found template at "+ templateLocation);
			var pageURL = this.templates[templateLocation].url;
			return pageURL;
		} else {
			return false;	
		}
	}
	/* if error on property dne return false */
	catch (err) { return false; };

}
/*
Function: CO.findItemByPropertyHelper
	Recursive helper function to search the pages array for the specified pageId. Returns the location in the array that the pageId was found.

Parameters:
	array	- The array to search
	prop	- The property to search for within the array objects
	val		- The property value to search for
	start	- The position at which to start searching
	end 	- The position at which to stop searching
	sortFirst	- Whether to first sort the array on the property being searched for. Must do this if the array has not already been sorted on that property.

Dependencies:
	<ContentObject>;

Returns:
	Position in the array of the object that contains the specified property value

Bugs:
	None known

Change Log:
	2012.10.03 - ALP - Initial version.
*/
CO.findItemByPropertyHelper = function(array, prop, val, start, end, sortFirst) {
	//console.log("looking for " + val + " from " + start + " to " + end);
	if (sortFirst) {
		this.sortArray(array,prop)
	}
	//alert("Start is "+ start);
	myLocation = Math.round((end + start)/2);
	//alert("myLocation is " + myLocation);
	if (end < start) {
		//alert("returning false, as end is "+ end +" and start is " + start);
		return false;
	} else {
		if (val == array[myLocation][prop]) {
			//alert("found it at " + myLocation);
			return myLocation;
		} else if (start == end) {
			//alert("start is equal to end");
			return;
		} else if (val < array[myLocation][prop]) {
			return this.findItemByPropertyHelper(array,prop,val,start,myLocation-1);
		} else {
			return this.findItemByPropertyHelper(array,prop,val,myLocation+1,end);
		}
	}
}


/*
Function: CO.getPageContentById
	Recursive helper function to search the pages array for the specified pageId. Returns the location in the array that the pageId was found.

Parameters:
	id	- The id to search for in the page array

Dependencies:
	<ContentObject>;

Returns:
	The content object associated with the pageId specified

Bugs:
	None known

Change Log:
	2012.10.04 - ALP - Initial version.
*/
CO.getPageContentById = function(id) {
	var location = this.findItemByPropertyHelper(this.pages,"id",id,0,this.pages.length-1);
	//console.log(id);
	return this.pages[location].content;
}