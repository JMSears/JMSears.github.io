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
	return false;
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
*/
function displayQuestion(audio){
	$('.questionMark').hide();
	$('.questionText').removeClass('off');
	shell.caption.mainPosition = shell.caption.currPosition;
	loadSubContentAudioCC(1,audio);
	//togglePlayPause();
	markPageComplete();
	
}


var empVisited = new Array(8);
function clickEmp(num) {
	$("#emp"+num).addClass("off"); 
	$("#text"+num).removeClass("off");
	empVisited[num-1] = true;
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
	if (shell.tracking.firstVisit) {
		disableNav('next');
		shell.tracking.pagesVisited[shell.currPageNum-1] = 0;
	}	
}
function markPageComplete() {
	enableNav('next');
	shell.tracking.pagesVisited[shell.currPageNum-1] = 1;	
}