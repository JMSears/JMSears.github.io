/*
File: shell_mobile.js

Version: 1.0

Description:
	A collection of functions to overwrite the standard functions in shell.js. Also adds some mobile-specific functions.

Dependencies:
	<$>; <initShell>;

Change Log:
	2012.11.XX  JAY - Initial version
	2012.12.28	ALP	- Numerous updates
	
To do:
	Update hard-coded strings to reference the shellData object

*/

$.mobile.autoInitializePage = false;
$(document).ready($.mobile.initializePage);
var audioElement;
var audioPlaying;
var currentPageAudioPath

//This will run when page is loaded once to grab the information from Resources, Glossary, Help, and any other pages...
function buildPage()
{
	$.mobile.initializePage();
};

var menuButtonsVisible = 0;
var ccVisible = 0;
function updateBreadcrumb(bc) {
	$('#moduleTitleName').empty();
	$('#moduleTitleName').append(bc);
}
function prepMenuButtons() {
	var obj = {
    'Resources'     : '../resources/index.html',
    'Glossary'     : '../glossary/index.html',
    'Help' 			: '../help/index.html'
	}
	$.each(obj, function(key, value) {
		$('<div data-role="collapsible" data-theme="a" data-collapsed-icon="adayana-plus" data-expanded-icon="adayana-minus"><h3><a href="#" id="resources" onClick="getHTMLContent(this)" style="color:white">' + key + '</a></h3><div id="' + key + '2' + '"></div></div>').appendTo('#menuButtons');
		
		$.ajax({
		type: "GET",
			 timeout: 90000,
			 url: value,
			 dataType: "html",
			 async: false,
			 cache: false,
			 success: function (html) {
				
			 }
		});
	});
	$('#openMenu').live('click',function() {
		if (!$(this).data('disabled'))
		  if (menuButtonsVisible == 0) { //menu is closed, content is open
			  showMenu();
		  } else {//menu is open, content is closed
			  showContent();
		  }
		  if (ccVisible == 1){
			  return false;
		  }
	});
	$('#navNext').live('click',function() {
		audioElement.pause();
		currentPageAudioPath = currPageData.audio;
		audioElement = document.createElement('audio');
		audioElement.setAttribute('src', currentPageAudioPath + '.mp3');
		audioElement.load();
		audioElement.play();
		audioPlaying = 1;
		$('#play').find('.ui-btn-text').text('Pause');
	});
}
function initAudioPlayer() {
	//build audio element - currently only supports MP3
	currentPageAudioPath = currPageData.audio;
	audioElement = document.createElement('audio');
	audioElement.setAttribute('src', currentPageAudioPath + '.mp3');
	audioElement.play();
	audioPlaying = 1;
	$('#play').live('click',function() {
		if (audioPlaying == 0)
		{
			audioElement.play();
			audioPlaying = 1;
			$(this).find('.ui-btn-text').text('Pause');
		} else {
			audioElement.pause();
			audioPlaying = 0;
			$(this).find('.ui-btn-text').text('Play');
		}
	});
	$('#rewind').live('click',function() {
		audioElement.currentTime = 0;
	});	
}
function initCC() {
	$('#ccText').css("display","none");
	$('#ccLink').live('click',function() {
		if (!$(this).data('disabled'))
		if (ccVisible == 0) //menu is closed, content is open
		{
			$('#menuButtons').css("display","none");
			$('#contentWrap').css("display","none");
			$('#ccText').css("display","inline");
			ccVisible = 1;
			
			$('#openMenu').addClass('ui-disabled'); // looks disabled
			  $('#openMenu').data('disabled',true); //link disabled
			  //openMenu disabled
		} else {
			$('#menuButtons').css("display","none");
			$('#contentWrap').css("display","inline");
			$('#ccText').css("display","none");
			ccVisible = 0;
			
			$('#openMenu').removeClass('ui-disabled'); //looks enabled
			  $('#openMenu').data('disabled',false); //link enabled
			  //openMenu enabled
		} 
	});
}
function showContent() {
	$('#menuButtons').css("display","none");
	$('#contentWrap').css("display","inline");
	menuButtonsVisible = 0;
	$('#ccLink').removeClass('ui-disabled'); //looks enabled
	$('#ccLink').data('disabled',false); //link enabled
}
function showMenu() {
	$('#menuButtons').css("display","inline");
	$('#contentWrap').css("display","none");
	menuButtonsVisible = 1;
	$('#ccLink').addClass('ui-disabled'); // looks disabled
	$('#ccLink').data('disabled',true); //link disabled
}
function loadPage(id) {
	var pageToLoad = myContentData.findPageURLByPageId(id);
	pageContent = myContentData.getPageContentById(id);
	
	//console.log("loading " + pageToLoad);
	if ($('#'+shell.content.contentDiv).empty()) {
		shell.currPageId = id;
		trackCompletion();
		$('#'+shell.content.contentDiv).load(pageToLoad);
	} else {
		alert('AJAX error');	
	}
	updateShell(pageContent);
	showContent();
}
function adjustProgress() {
	var current = shell.currPageNum;
	var total = totalPageNum;
	ada$(shell.progress.textDiv).innerHTML = current + " of " + total;
}
function setExit() {};
function windowResize() {};
function windowResizeHeight() {};
function windowResizeWidth() {};