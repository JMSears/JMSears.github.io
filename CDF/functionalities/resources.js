/*
File name: resources.js
	A collection of functions used to offer the necessary functionality required to power the resources page.

Dependencies:
	<addEvent>; <ada$>;

Change Log:
	2007.07.02	JEM	- Initial version.
	2012.10.15  MTW - modifying for new shell
    2013.04.11  VRB - Standardizing to jQuery event-listeners
To do:
	Object-ize
*/
var currId, dts;
$(document).ready( function() {setTimeout(initResources,1000)} );
function initResources() {
	var dds = document.getElementsByTagName('dd');
	dts = document.getElementsByTagName('dt'); // handy in shared scope so we don't have to re-get each onkeyup
	var currText, currDts, newText, newLink;
	for (var i=0; i< dds.length; i++) { // loop through all of the definitions on the page to do some magic on each
		newText = '';
		newLink = '';
		dds[i].className = 'off'; // hide the definition
		currDts = dts[i];
		currText = currDts.innerHTML; // really should be cloneNode
		//alert("pass "+i+ currDts.firstChild);
		currDts.removeChild(currDts.firstChild);
		newLink = document.createElement('a'); // create a link that will reveal the definition when clicked.
		newLink.href = 'a';
		newLink.title = 'Click to see the definition of ' + currText;
		newLink.onclick = function() {
			toggleDef(this);
			return false;
		}
		newText = document.createTextNode(currText);
		newLink.appendChild(newText);
		currDts.appendChild(newLink);
	}
	ada$('searchForm').onsubmit = function() {return false;};
	var sb = ada$('searchBlank');
	sb.onkeyup = function() {findThis(false);}; // mimic Firefox's find-as-you-type onKeyUp-like functionality
	sb.onfocus = checkSearchForInit;
	sb.onblur = checkSearchForBlur;
	//sb.focus(); // try not focusing onload to ensure instructional text appears
	checkSearchForBlur();
	if (parent.ada$('breadcrumb')) { // if this page is viewed from within the shell...
		parent.ada$('breadcrumb').innerHTML = 'Resources | Glossary';
		enableNav('back');
		var nBack = parent.ada$('navBack');
		nBack.onclick = function() {
			history.go(-1);
			return false;
		}
		nBack.title = 'Return to course.';
		nBack.href = '#';
		disableNav('next');
	}
	ada$('loadingMessage').style.display = 'none'; // once we're done, dismiss the loading message
	//ada$('aids').className = 'offScreen';
	ada$('glossaryList').className = '';
	externalLinks();		
}
function checkSearchForInit() { // if the default text is still there, delete it and style it as normal
	var sb = ada$('searchBlank');
	if (sb.value == 'Type a term here to find it') {
		sb.value = '';
		sb.className = '';
		ada$('aFindNext').className = '';
	}
}
function checkSearchForBlur() { // if the box is blank, add instructional text within the box and dim it a bit.
	var sb = ada$('searchBlank');
	if (sb.value == '') {
		sb.value = 'Type a term here to find it';
		sb.className = 'init';
		ada$('aFindNext').className = 'off';
	}
}
function toggleDef(elId) { // given a clicked term, display or hide the corresponding dd
	var targetEl = elId.parentNode.nextSibling;
	while (targetEl.nodeType != 1) { // to account for differences in whitespace between IE and Moz DOMs
		targetEl = targetEl.nextSibling;
	}
	if (targetEl.className == 'off') { // added check to allow clicking to toggle def on and off AP2007.06.25
		targetEl.className = 'on';
		elId.parentNode.className = 'highlight';
	} else {
		targetEl.className = 'off';
		elId.parentNode.className = '';
	}
}
var currNode = 0;
function findThis(boolContinueSearch) { // auto-reveal the first definition to match the search string
	var val = ada$('searchBlank').value.toLowerCase();
	var targetEl, j;
	hideAllDefs();
	currNode = (boolContinueSearch) ? currNode+1 : 0;
	for (j=dts.length; currNode<j; currNode++) { // find matches by looping through each dt
		if (dts[currNode].innerHTML.toLowerCase().indexOf(val) > 0) {
			dts[currNode].className = 'highlight'; // highlight it
			dts[currNode].scrollIntoView(true); // and scroll it into view
			
			targetEl = dts[currNode].nextSibling;
			while (targetEl.nodeType != 1) { // to account for differences in whitespace between IE and Moz DOMs
				targetEl = targetEl.nextSibling;
			}
			targetEl.className = 'on'; // also reveal the definiton
			parent.ada$('outerWrap').scrollIntoView(true); // scroll the shell back into view (FF bug?)
			return;
		}
	}
	ada$('a').scrollIntoView(true); // if we haven't ejected by now, then we didn't find a match, so return to top
	parent.ada$('outerWrap').scrollIntoView(true); // scroll the shell back into view (FF bug?)
	currNode = 0;
}
function findNext() {
	findThis(true);
}
function hideAllDefs() { // hides all definitions
	for (var i=0, j=dts.length; i<j; i++) {
		dts[i].className = '';
		targetEl = dts[i].nextSibling;
		while (targetEl.nodeType != 1) { // to account for differences in whitespace between IE and Moz DOMs
			targetEl = targetEl.nextSibling;
		}
		targetEl.className = 'off';
	}
}
function toggleAids() {
	if (ada$('aids').className == 'offScreen') {
		ada$('aids').className = 'on';
		ada$('job').className = 'highlight';
	} else {
		ada$('aids').className = 'offScreen';
		ada$('job').className = 'job';
	}
}
function goTo(section) { /* needed to prevent shell from scrolling off screen */
	ada$(section).scrollIntoView(true);
	parent.ada$('outerWrap').scrollIntoView(true); // scroll the shell back into view (FF bug?)
}	
