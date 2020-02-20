/*
File: content.js

Version: 3.0

Description:
	A collection of course-specific functions for the VA Career Mapping lessons.

Dependencies:
	<jQuery>;

Change Log:
	2013.02.19  ALP - Initial Version

	
To do:

*/

/*================================================================================================*/
// RTT_120 Card Activity
/*================================================================================================*/
/*
Function: swapCards
	Displays the next card in the pile.

Parameters:
	hideItems 	- (array of strings) Array of jQuery identifiers to hide
	showItems 	- (array of strings) Array of jQuery identifiers to show
	audio	 	- (string) The audio path of the audio file to play

Dependencies:
	<$>;

Returns:
	none

Change Log:
	2013.02.19	ALP - Initial Version
	2014.05.20	ALP - Added contentSwap.extraFinished = true; when the last card is viewed
*/
function swapCards(hideItems, showItems, audio, num){
	for (var i=0, j=hideItems.length; i<j; i++) {
		$(	hideItems[i] ).addClass('off');
	}
	for (var k=0, m=showItems.length; k<m; k++) {
		$(	showItems[k] ).removeClass('off');
	}
	shell.caption.onSubSubPage = true;
	shell.caption.subSubPageNum = num;
	shell.caption.subSubPosition = 0;
	/*shell.caption.current.page = 'subSub';
	shell.caption.current.position = shell.caption.subSubPosition;
	shell.caption.current.num = shell.caption.subSubPageNum;*/
	if (audio != "") {
		loadPageAudio(audio);
	} else {
		clearAudio();	
		clearCC();
	}
	if (num == 4) {
		contentSwap.extraCompleted = true;
		console.log(contentSwap.clickedArray);
		checkClickCompletion(contentSwap.clickedArray);
	}
}
function focusTrend() {
	setTimeout(function(){$('#trendHeading').focus()},0);
}
/*================================================================================================*/
// RTT_150 - RTT_180 Question Activity
/*================================================================================================*/

/*
Function: loadSubContentAudioCC
	Loads the audio file and CC text for subcontent

Parameters:
	num		 	- (number) The number of the subcontent to show
	audio	 	- (string) The audio path of the audio file to play

Dependencies:
	<$>;

Returns:
	none

Change Log:
	2013.02.20	ALP - Initial Version
*/
function loadSubContentAudioCC(num, audio){
	shell.caption.onSubPage = true;
	shell.caption.subPageNum = num;
	shell.timedContent.onSubPage = true;
	shell.timedContent.subPageNum = num;
	/*shell.caption.onSubPage = 'sub';
	shell.caption.currentPosition = shell.caption.subPageNum;
	shell.caption.current.num = shell.caption.subPageNum;
	shell.timedContent.current.page = 'sub';
	shell.timedContent.current.position = shell.timedContent.subPosition;
	shell.timedContent.current.num = shell.timedContent.subPageNum;*/
	//console.log(audio);
	if (audio != "") {
		loadPageAudio(audio);
	} else {
		clearAudio();	
		clearCC();
	}
	return false;
}
/*
Function: displayQuestion
	Shows the question and loads he audio and CC

Parameters:
	audio	 	- (string) The audio path of the audio file to play

Dependencies:
	<$>;

Returns:
	none

Change Log:
	2013.02.20	ALP - Initial Version
	2013.04.26 	ALP - Added setting of qAudioPlaying variable to be able to mark the page complete when the question audio is finished.
*/
function displayQuestion(audio){
	$('.questionMark').hide();
	$('.questionText').removeClass('off');
	shell.caption.mainPosition = shell.caption.currPosition;
	loadSubContentAudioCC(1,audio);
	qAudioPlaying = true;
	markPageComplete();
}

var empVisited = new Array(8);
function clickEmp(num) {
	var emp = num.substring(3);
	$("#emp"+emp).addClass("off"); 
	$("#text"+emp).removeClass("off");
	empVisited[emp-1] = true;
	checkEmpComplete();
}
function checkEmpComplete() {
	var allVisited = true;
	for (var i=0; i<8; i++) {
		if (!empVisited[i]) {
			allVisited = false;	
		}
	}
	if (allVisited) {
		markPageComplete();
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
var commRowAdd = 0;
var currCol = 1;
var colTextArray = new Array();
function commShow(col, row) {
	if (col == currCol+1) {
		$('.col'+col).removeClass('off');
		$('.col'+col+' .row'+(row+commRowAdd)).removeClass('off');
		colTextArray[col] = $('.col'+col+' .row'+(row+commRowAdd));
		if (commRowAdd == 2) commRowAdd +=2;
		if (row == 2) commRowAdd +=2;
		$('.yn'+currCol+' .connector').removeClass('off');
		$('.yn'+col).removeClass('off');
		if (row == 1) {
			$('.yn'+currCol+' .yes').addClass('selected');
			$('.yn'+(col-1)+' .no').addClass('off');
		} else {
			$('.yn'+currCol+' .no').addClass('selected');
			$('.yn'+(col-1)+' .yes').addClass('off');
		}
		if (col == 4) {
			$('.reset').removeClass('off');	
			markPageComplete();
		}
		$('.col'+col).focus();
		currCol++;
	} else {
		//do nothing	
	}
}
function resetSupComm() {
	for (var i=1; i<=4; i++) {
		$('.yn'+i+' .connector').addClass('off');
		$('.yn'+(i)+' .no').removeClass('selected');
		$('.yn'+(i)+' .yes').removeClass('selected');
		$('.yn'+i+' .no').removeClass('off');
		$('.yn'+i+' .yes').removeClass('off');
		if (i!=1) {
			//console.log(colTextArray[i]);
			$(colTextArray[i]).addClass('off');
			$('.col'+i).addClass('off');
			$('.yn'+i).addClass('off');
		} 
	}
	$('.reset').addClass('off');	
	$('.col1').focus();
	commRowAdd = 0;
	currCol = 1;
	colTextArray = new Array();
}	
var surveyComplete = false;
function enableCert() {
	surveyComplete = true;	
	markPageComplete();
	trackCompletion();
	$('#cert').removeClass('dim');
}
function openCertificate(lesson,fromMenu) {
	if (surveyComplete) {
		var isComplete = scoIsComplete();
		//console.log(scoIsComplete());
		if (scoIsComplete()) {
			var url = "../resources/certificate.html"+"?course="+SCOData.courseTitle;
			openPopup(url,'Certificate');
			if (fromMenu) toggleResMenu(); //2013 ALP
			return false;
		} else {
			alert("You must complete the lesson before printing your certificate. You have not completed the following pages: " +checkPagesMissed()+". You can find the page numbers between the back and play buttons.");
		}
	} else {
		alert('You must complete the survey before you can print your certificate of completion.');	
	}
	return false;
}
function checkPagesMissed() {
	var pagesMissed = '';
	for (var i=0, j=shell.tracking.pagesVisited.length; i<j; i++) {
		if (shell.tracking.pagesVisited[i] != 1) {
			pagesMissed += (i+1)+", ";
		}
	}
	pagesMissed = pagesMissed.substring(0,pagesMissed.length-2);
	//console.log(pagesMissed);
	return pagesMissed;
}
/* YouTube Functions Added 2014.05.26 - ALP */
var youTubePlayer = new Array();
var youTubeData = new Object();
var currYouTubeVid = "";
var isYouTubeIframeAPIReady = false;
function initYouTubePlayer() {
	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');
	tag.src = (location.protocol == 'https:' ? 'https' : 'http') + "://www.youtube.com/iframe_api"; //"https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
function loadYouTubeVideo(id) {
	console.log(loadYouTubeVideo);
	var currSrc = $('#player'+id).attr('src');
	if (isScreenReader) {
		//console.log("there is a screen reader");
		$('#player'+id).attr('src',currSrc+'&html5=1&rel=0&wmode=window');
	} else {
		$('#player'+id).attr('src',currSrc+'&html5=1&rel=0&wmode=opaque');
	}
	console.log($('#player'+id).attr('src'));
	youTubePlayer[id] = new YT.Player('player'+id, {
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}
function onYouTubeIframeAPIReady() {
	isYouTubeIframeAPIReady = true;
}
function loadYouTubeVideos() {
	console.log(loadYouTubeVideos);
	if (isYouTubeIframeAPIReady) {
		youTubePlayer = new Array();
		for (var key in youTubeData) {
			loadYouTubeVideo(youTubeData[key].id);
		}
	} else {
		setTimeout(loadYouTubeVideos, 50);
	}
}
function pauseYouTubeVideo() {
	console.log(pauseYouTubeVideo);
	console.log(currYouTubeVid);
	if (currYouTubeVid != "") {
		currYouTubeVid.pauseVideo();
	}
}
function removeCurrYouTubeVid() {
	currYouTubeVid.destroy();
}
function isEmpty(obj) {
    var name;
    for (name in obj) {
        return false;
    }
    return true;
}
function onPlayerStateChange(event) {
	console.log(event.data);
  if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING) {
	  currYouTubeVid = event.target;
	  // Pause any audio that is currently playing
	  if ($(shell.audio.play).hasClass('pause')) {
		$(shell.audio.playerDiv).jPlayer("pause");
		$(shell.audio.play).removeClass('pause');
		$(shell.audio.play).addClass('play');
		$(shell.audio.play).attr('title','Click to play the audio');
	  } 
  } else if (event.data == YT.PlayerState.UNSTARTED || event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
	  currYouTubeVid = "";
  }
}
function onPlayerReady(event) {
	//console.log("player is ready");
}
function createAccessText() {
	//console.log('updating access text');
	var newLink = $(document.createElement('a'));
	newLink.attr('href','javascript:void(0);');
	newLink.addClass('skipToNav');
	newLink.attr('id','accessLink');
	var linkTxt;
	var isSR;
	if (isScreenReader) {
		linkTxt = $(document.createTextNode('Select this link to turn off screen reader accessibility for course videos. Note that videos should appear appropriately behind pop-ups.'));
		isSR = false;
	} else {
		linkTxt = $(document.createTextNode('Select this link to turn on screen reader accessibility for course videos. Note that videos may visually overlap some pop-ups.'));
		isSR = true;
	}
	newLink.append(linkTxt);
	$('.accessText').append(newLink);
	$('#accessLink').click(function() {
		updateAccessText();
		return false;
	});
}
function updateAccessText() {
	if (isScreenReader) {
		$('#accessLink').html('Select this link to turn on screen reader accessibility for course videos. Note that videos may visually overlap some pop-ups.');
		isScreenReader = false;
	} else {
		$('#accessLink').html('Select this link to turn off screen reader accessibility for course videos. Note that videos should appear appropriately behind pop-ups.');
		isScreenReader = true;
	}
	//console.log(isScreenReader)
	loadYouTubeVideos();
}
/* End YouTube Functions */