/*
File Name: utility.js
	A collection of objects used to establish the baseline functionality most helpful in developing any standardized Web application.

Dependencies:
	None.

Change Log:
	2007.06.04	JEM	- Initial version
	2010.12.23	VRB - Added getInternetExplorerVersion()
*/

var isMSIE = /*@cc_on!@*/false; // as much as I hate browser sniffing, this simple means of a necessary evil courtesy Dean Edwards
var ie = /*@cc_on!@*/false; //simplest, accurate IE browser detection method

function getInternetExplorerVersion() {
	var rv = -1; // Return value assumes failure.
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	return rv;
}
/*
 * When the console object does not exist, create a stand-in to prevent errors in unsupported
 * browsers. This modified code is borrowed from the Yahoo media player.
 */
if (! ("console" in window) ) 
{
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group"
                 , "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
    window.console = {};
    for (var i = 0; i <names.length; ++i) window.console[names[i]] = function( val ) { 
        //alert(val); 
    };
}
// written by Dean Edwards, 2005
// with input from Tino Zijdel - crisp@xs4all.nl
// http://dean.edwards.name/weblog/2005/10/add-event/
// Code formatting applied 2007.03.02 Jason Mock
function addEvent(element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	} else {
		if (!handler.$$guid) handler.$$guid = addEvent.guid++;
		if (!element.events) element.events = {};
		var handlers = element.events[type];
		if (!handlers) {
			handlers = element.events[type] = {};
			if (element['on' + type]) handlers[0] = element['on' + type];
			element['on' + type] = handleEvent;
		}
		handlers[handler.$$guid] = handler;
	}
}
addEvent.guid = 1;

function removeEvent(element, type, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(type, handler, false);
	} else if (element.events && element.events[type] && handler.$$guid) {
		delete element.events[type][handler.$$guid];
	}
}

function handleEvent(event) {
	event = event || fixEvent(window.event);
	var returnValue = true;
	var handlers = this.events[event.type];
	for (var i in handlers) {
		if (!Object.prototype[i]) {
			this.$$handler = handlers[i];
			if (this.$$handler(event) === false) returnValue = false;
		}
	}
	if (this.$$handler) {
		this.$$handler = null;
	}
	return returnValue;
}

function fixEvent(event) {
	event.preventDefault = fixEvent.preventDefault;
	event.stopPropagation = fixEvent.stopPropagation;
	return event;
}

fixEvent.preventDefault = function() {
	this.returnValue = false;
}

fixEvent.stopPropagation = function() {
	this.cancelBubble = true;
}

// This little snippet fixes the problem that the onload attribute on the body-element will overwrite
// previous attached events on the window object for the onload event
if (!window.addEventListener) {
	document.onreadystatechange = function() {
		if (window.onload && window.onload != handleEvent) {
			addEvent(window, 'load', window.onload);
			window.onload = handleEvent;
		}
	}
}

/*
Function: ada$
	Given either a string of an element's ID or the element, itself, return the element.

Parameters:
	element	- either a string of an element's ID or the element, itself

Dependencies:
	None.

Returns:
	Element.

Change Log:
	2007.02.12	JEM	- Initial version; adapted from Prototype.js library.
	2011.MM.DD	ALP - Modified functin name to ada$ so as not to conflict with jQuery $ function.
*/
function ada$(element) {
	if (arguments.length > 1) {
		for (var i = 0, elements = [], length = arguments.length; i < length; i++)
			elements.push(ada$(arguments[i]));
		return elements;
	}
	if (typeof element == 'string')
		element = document.getElementById(element);
	return element; // simplified to return just element JM
}

/*
Function: Array.prototype.push
	If the Array prototype lacks a push method (i.e. in IE), add it.

Parameters:
	item	- Item to append to the array

Dependencies:
	None.

Returns:
	New length of the array.

Change Log:
	2007.02.04	JEM	- Initial version
*/
if(Array.prototype.push == null){
	Array.prototype.push = function(item){
		this[this.length] = item;
		return this.length;
	}
}

/*
Function: parseUri 1.2
	Function that parses a URL to return various pieces. Written by Steven Levithan <http://stevenlevithan.com>; MIT License. Test Page: http://stevenlevithan.com/demo/parseuri/js/

Parameters:
	source	- The URL to parse.

Dependencies:
	None.

Returns:
	An object with the following properties based on this example URL:
	http://usr:pwd@www.test.com:81/dir/dir.2/index.htm?q1=0&&test1&test2=value#top
	protocol - Ex: 'http'
	authority - Ex: 'usr:pwd@www.test.com'
	userInfo - Ex: 'usr:pwd'
	user - Ex: 'usr'
	password - Ex: 'pwd'
	host - Ex: 'www.test.com'
	port - Ex: '81'
	relative	- Ex: '/dir/dir.2/index.htm?q1=0&&test1&test2=value#top'
	path -	Ex: '/dir/dir.2/index.htm'
	directory - Ex: '/dir/dir.2/'
	file - Ex: 'index.htm'
	query - Ex: 'q1=0&&test1&test2=value'
	anchor - Ex: 'top'
	queryKey - Ex: Object with three key/value pairs: queryKey.q1='0', queryKey.test1=[empty string], queryKey.test2='value'
	
Change Log:
	2007.07.03	ALP	- Initial version from Steven Levithan
*/

var parseUri = function (source) {
	var o = parseUri.options,
		value = o.parser[o.strictMode ? "strict" : "loose"].exec(source);
	
	for (var i = 0, uri = {}; i < 14; i++) {
		uri[o.key[i]] = value[i] || "";
	}
	
	uri[o.q.name] = {};
	uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
		if ($1) uri[o.q.name][$1] = $2;
	});
	
	return uri;
};

parseUri.options = {
	strictMode: false,
	key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
	q: {
		name: "queryKey",
		parser: /(?=.)&?([^&=]*)=?([^&]*)/g
	},
	parser: {
		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
		loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	}
};

/* URL class for JavaScript
 * Copyright (C) 2003 Johan Känngård, <johan AT kanngard DOT net>
 * http://dev.kanngard.net/
 *	
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 *
 * The GPL is located at: http://www.gnu.org/licenses/gpl.txt
 */

/* Creates a new URL object with the specified url String. */
function URL(url){
	if(url.length==0) eval('throw "Invalid URL ['+url+'];');
	this.url=url;
	this.port=-1;
	this.query=(this.url.indexOf('?')>=0)?this.url.substring(this.url.indexOf('?')+1):'';
	if(this.query.indexOf('#')>=0) this.query=this.query.substring(0,this.query.indexOf('#'));
	this.protocol='';
	this.host='';
	var protocolSepIndex=this.url.indexOf('://');
	if(protocolSepIndex>=0){
		this.protocol=this.url.substring(0,protocolSepIndex).toLowerCase();
		this.host=this.url.substring(protocolSepIndex+3);
		if(this.host.indexOf('/')>=0) this.host=this.host.substring(0,this.host.indexOf('/'));
		var atIndex=this.host.indexOf('@');
		if(atIndex>=0){
			var credentials=this.host.substring(0,atIndex);
			var colonIndex=credentials.indexOf(':');
			if(colonIndex>=0){
				this.username=credentials.substring(0,colonIndex);
				this.password=credentials.substring(colonIndex);
			}else{
				this.username=credentials;
			}
			this.host=this.host.substring(atIndex+1);
		}
		var portColonIndex=this.host.indexOf(':');
		if(portColonIndex>=0){
			this.port=this.host.substring(portColonIndex);
			this.host=this.host.substring(0,portColonIndex);
		}
		this.file=this.url.substring(protocolSepIndex+3);
		this.file=this.file.substring(this.file.indexOf('/'));
	}else{
		this.file=this.url;
	}
	if(this.file.indexOf('?')>=0) this.file=this.file.substring(0, this.file.indexOf('?'));
	var refSepIndex=url.indexOf('#');
	if(refSepIndex>=0){
		this.file=this.file.substring(0,refSepIndex);
		this.reference=this.url.substring(this.url.indexOf('#'));
	}else{
		this.reference='';
	}
	this.path=this.file;
	if(this.query.length>0) this.file+='?'+this.query;
	if(this.reference.length>0) this.file+='#'+this.reference;

	this.getPort=getPort;
	this.getQuery=getQuery;
	this.getProtocol=getProtocol;
	this.getHost=getHost;
	this.getUserName=getUserName;
	this.getPassword=getPassword;
	this.getFile=getFile;
	this.getReference=getReference;
	this.getPath=getPath;
	this.getArgumentValue=getArgumentValue;
	this.getArgumentValues=getArgumentValues;
	this.toString=toString;

	/* Returns the port part of this URL, i.e. '8080' in the url 'http://server:8080/' */
	function getPort(){
		return this.port;
	}

	/* Returns the query part of this URL, i.e. 'Open' in the url 'http://server/?Open' */
	function getQuery(){
		return this.query;
	}

	/* Returns the protocol of this URL, i.e. 'http' in the url 'http://server/' */
	function getProtocol(){
		return this.protocol;
	}

	/* Returns the host name of this URL, i.e. 'server.com' in the url 'http://server.com/' */
	function getHost(){
		return this.host;
	}

	/* Returns the user name part of this URL, i.e. 'joe' in the url 'http://joe@server.com/' */
	function getUserName(){
		return this.username;
	}

	/* Returns the password part of this url, i.e. 'secret' in the url 'http://joe:secret@server.com/' */
	function getPassword(){
		return this.password;
	}

	/* Returns the file part of this url, i.e. everything after the host name. */
	function getFile(){

		return this.file;
	}

	/* Returns the reference of this url, i.e. 'bookmark' in the url 'http://server/file.html#bookmark' */
	function getReference(){
		return this.reference;
	}

	/* Returns the file path of this url, i.e. '/dir/file.html' in the url 'http://server/dir/file.html' */
	function getPath(){
		return this.path;
	}

	/* Returns the FIRST matching value to the specified key in the query.
	   If the url has a non-value argument, like 'Open' in '?Open&bla=12', this method
	   returns the same as the key: 'Open'...
	   The url must be correctly encoded, ampersands must encoded as &amp;
	   I.e. returns 'value' if the key is 'key' in the url 'http://server/?Open&amp;key=value' */
	function getArgumentValue(key){
		var a=this.getArgumentValues();
		if(a.length<1) return '';
		for(i=0;i<a.length;i++){
			if(a[i][0]==key) return a[i][1];
		}
		return '';
	}

	/* Returns all key / value pairs in the query as a two dimensional array */
	function getArgumentValues(){
		var a=new Array();
		var b=this.query.split('&amp;');
		var c='';
		if(b.length<1) return a;
		for(i=0;i<b.length;i++){
			c=b[i].split('=');
			a[i]=new Array(c[0],((c.length==1)?c[0]:c[1]));
		}
		return a;
	}

	/* Returns a String representation of this url */
	function toString(){
		return this.url;
	}
}
/*
Function: wrapOrStuff
	Creates a new element and wraps it around or stuffs it inside an existing element.
	
Parameters:
	type - whether to wrap or stuff
	el - the element to wrap or stuff
	tag - the tag of the new el to create
	property - an array of properties to assign to the new tag
	value - an array of values for the properties

Dependencies:
	none

Returns:
	n/a

Change Log:
	2007.05.13	ALP	- Initial version
	2007.05.26	ALP - Modified to make property and value optional. Added return this.newEl. 
*/
function wrapOrStuff(type,el,tag,property,value) {
	this.type = type;
	this.el = ada$(el);
	this.tag = tag.toUpperCase();
	this.property = property || false;
	this.value = value || false;
	this.newEl = document.createElement(this.tag);
	if (this.property) {
		var propLength = this.property.length;
		for (var i=0; i<propLength; i++) {
			newEl[this.property[i]] = this.value[i];
		}
	}
	switch (this.type) {
		case('wrap'):
			this.parent = this.el.parentNode;
			this.parent.insertBefore(this.newEl,this.el);
			var oldEl = this.parent.removeChild(this.el);
			this.newEl.appendChild(oldEl);
			break;
		case('stuff'):
			this.parent = this.el;
			if (this.parent.firstChild) {
				this.el = this.parent.firstChild;
				var oldEl = this.parent.removeChild(this.el);
				this.newEl.appendChild(oldEl);
			}
			this.parent.appendChild(this.newEl);
			break;
	}
	//return this.newEl;
}
/* 
Function: externalLinks
	Adds functionality to each a tag on the page with a rel="external" to open the link in a new window.  Avoids the need to use invalid XHTML of target="_blank".

Parameters:
	None.

Dependencies:
	None.

Bugs:
	None known.
	
To do:
	None.

Change Log:
	2007.06.27	- ALP initial version
*/
function externalLinks() {
	if (document.getElementsByTagName) {
		var anchors = document.getElementsByTagName("a");
		for (var i=0, j=anchors.length; i<j; i++) {
			var anchor = anchors[i];
			if (anchor.getAttribute("href") &&
				anchor.getAttribute("rel") == "external") {
				anchor.onclick = function () {window.open(this.href); return false;};
			} 
		}
	}
}
addEvent(window,'load',externalLinks);