var contentSwap = {
	isRequired: shell.contentSwap.isRequired,
	contentId: 'contentDisplay',
	currContentNum: 1,
	audioArray: new Array(),
	ccArray: new Array(),
	extraCompleted: true, // 2014.05.20 ALP Added for a special case to require additional actions besides visiting the triggers to proceed.
	actionCompleted: true, // 2014.05.20 ALP Added to give ability to require an action before triggers are activated.
	actionAlert: "", // 2014.05.20 ALP Added to provide a custom alert if triggers are clicked before the required action is completed.
	clickedArray: new Array() // 2014.05.21 Added to stored clicked status that is available globally to the page.
}

/*
Function: createContentSwap
	Sets up the onClick events for the entire contentSwap 

Parameters:
	None

Dependencies:
	<scoContent.js>; <checkClickCompletion>; <disableNav>; <swapContent>

Returns:
	none
	
Change Log:
	2013.01.02	ALP - Initial version
	2014.05.20	ALP	- Added check for actionCompleted and triggered alert if it is not. Also added check for extraCompleted and did not enable Next until it was.
*/
function createContentSwap(displayId){
	if (displayId) { 
		contentSwap.contentId = displayId; 
	}
	var isClicked = new Array();
	var i = 0; //for array above
	var j = 1; // for ids in html below
	$(function(){
		//If all sections must be visited, disable Next Button until all triggers are viewed
		if (shell.tracking.firstVisit && contentSwap.isRequired) {
			//console.log(contentSwap.isRequired);
			disableNav('next');
			setPageVisit(false);
			//console.log(shell.tracking.pagesVisited);
		};
		//then find each trigger (what ever that trigger may be image, text, etc...) and set isClicked to false
		$('[id^="trigger"]').each(function() {
			//set the isClicked value to false to determine if all elemements have been viewed
			isClicked[i] = false;
			//i++;
			j++;
		});
		//make a click event for each trigger
		$(function(){
				$('[id^="trigger"]').click(function() {
					var x = $('[id^="trigger"]').index(this);
					if (contentSwap.actionCompleted) {
						//change the isClicked value to true
						isClicked[x] = true;
						contentSwap.clickedArray = isClicked;
						//console.log("trigger: " + x);
						swapContent(x+1);
						//check if all have been completed to enable the next button
						if (contentSwap.isRequired) {
							if (contentSwap.extraCompleted) {
								checkClickCompletion(isClicked);
							} 
						}
					} else {
						if (contentSwap.actionAlert != "")
						alert(contentSwap.actionAlert);
					}
					return false;
			});
		});
	});
	
};
/*

Change Log:
	2013.04.25	ALP	- Added functionality to send user back to the next tab at the end of a swap area (updated template_contentSwap required as well).
	
	*/
function swapContent(num) {
	pauseAllVideos();
	pauseAllAudio();
	if (currYouTubeVid!="") pauseYouTubeVideo();
	//console.log("swapping content to show: " + num);
	// Hide the currently displayed content
	$('#contentNum_' + contentSwap.currContentNum).addClass('off');
	// Remove the current class from the previous trigger
	if ($('#trigger'+contentSwap.currContentNum).hasClass('current')) $('#trigger'+contentSwap.currContentNum).removeClass('current');
	// Hide any instructions or initial content
	if (!$('#initialContentSwap').hasClass('off')) $('#initialContentSwap').addClass('off');
	// Show the new content
	$('#contentNum_' + num).removeClass('off');
	setTimeout(function(){$('#contentNum_' + num).focus()},0);
	$('#contentNum_'+num+'_tabReturn').focus(function() {
		$('#contentNum_'+num+'_tabReturn').addClass('section508');
		/*if ($('#trigger'+(num+1)).length > 0) {
			setTimeout(function(){$('#trigger1').focus()},0);
		} else {
			$('#contentNum_'+num+'_tabReturn').blur();
		}
		$('#contentNum_'+num+'_tabReturn').unbind('focus');
		*/
		$('#contentNum_'+num+'_tabReturn').click(function() {
			$('#trigger1').focus();
			$('#contentNum_'+num+'_tabReturn').off('click');
		});
	});
	$('#contentNum_'+num+'_tabReturn').blur(function() {
		$('#contentNum_'+num+'_tabReturn').removeClass('section508');
	});
	
	contentSwap.currContentNum = num;	
	// Set a visited class on the current trigger
	if(!$('#trigger'+num).hasClass('visited')) {
		$('#trigger'+num).addClass('visited');
	}
	// Add the current class to the current trigger
	$('#trigger'+num).addClass('current');
	// If there is audio for that content, load it
	//clearAudio();
	//console.log(contentSwap.audioArray[num]);
	if (contentSwap.audioArray[num]) {
		clearCC();
		shell.caption.subPageNum = num;
		shell.caption.onSubPage = true;
		shell.caption.subSubPageNum = 0;
		shell.caption.onSubSubPage = false;
		loadPageAudio(contentSwap.audioArray[num]);
		if (shell.caption.data[shell.currPageId].subPages[num]) {			
			shell.caption.currPosition = 0;
		}
	}
	shell.timedContent.subPageNum = num;
	shell.timedContent.onSubPage = true;
	shell.timedContent.subSubPageNum = 0;
	shell.timedContent.onSubSubPage = false;
	shell.timedContent.currPosition = 0;
	//if (contentSwap.ccArray[num]) loadCCText(contentSwap.ccArray[num]); // 2013.02.19 ALP Now done in the loadSubCCText in shell.js
}

