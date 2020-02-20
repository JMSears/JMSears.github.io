/**************************************************************************************************
Methods: 
	createCookie
	readCookie
	eraseCookie
Reference: 	http://www.quirksmode.org/js/cookies.html
Change Log: n/a
***************************************************************************************************/
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name) {
	createCookie(name,"",-1);
}

/**************************************************************************************************
Method: initialize
	Creates cookies for each lesson if they don't already exist.
	Visually indicates the completion status of each lesson.
Parameters: none
Change Log: n/a
***************************************************************************************************/
function cookieInitialize(url) {
	//alert(readCookie('FDIC_LastPage'));
	url = url.toString().substring(url.toString().lastIndexOf('/')+1, url.length);
	
	if (readCookie('FDIC_LastPage') == null) {
		setCookiePage(url);
		window.frames['mainFrame'].location = url;
	}
	else {
		loadCookiePage();
	}	
}

function setCookiePage(lastURL) {
	lastURL = lastURL.toString().substring(lastURL.toString().lastIndexOf('/')+1, lastURL.toString().length);
	createCookie('FDIC_LastPage', lastURL, 30);
}

function promptCookieQuit() {
	var msg = 'Are you sure you want to exit the course?';
	if (confirm(msg)) {
		setCookiePage(window.frames["mainFrame"].location);
		//alert(readCookie('FDIC_LastPage'));
		window.close();
	}
}

function loadCookiePage() {
	var url = readCookie('FDIC_LastPage');
	window.frames["mainFrame"].location = url;
}
