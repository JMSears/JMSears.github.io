/* 
Change Log:
	2013.04.26 ALP - Initial version and undocumented changes to date.
	2013.04.27 ALP - Added <resetPopUps> to ensure pop-up data doesn't get stored from page to page.
	2014.05.21 ALP - Added extraCompleted property to allow dev to specify other actions that must be completed before page is complete.
*/
var popUp = {
	ccArray: new Array(),
	audioArray: new Array(),
	currPopUp: 1,
	xArray: new Array(),
	yArray: new Array(),
	widthArray: new Array(),
	heightArray: new Array(),
	dialogPosArray: new Array(),
	parentPosArray: new Array(),
	elementOfPosArray: new Array(),
	isRequired: shell.popUp.isRequired,
	extraCompleted: true,
	extraAlert: ""
}
var openerArray = new Array();
var dialogArray = new Array();
//var popUpIsRequired = shell.popUp.isRequired;
/*
Function: resetPopUps
	Function called on every page load to reset popUp information

Parameters:
	None

Dependencies:
	<popUp>

Returns:
	none
	
Change Log:
	2013.04.27	ALP	- Initial version
*/
function resetPopUps() {
	openerArray = new Array();
	dialogArray = new Array();
	popUp.ccArray = new Array();
	popUp.audioArray = new Array();
	popUp.currPopUp = 1;
	popUp.xArray = new Array();
	popUp.yArray = new Array();
	popUp.widthArray = new Array();
	popUp.heightArray = new Array();
	popUp.dialogPosArray = new Array();
	popUp.parentPosArray = new Array();
	popUp.elementOfPosArray = new Array();
	popUp.isRequired = shell.popUp.isRequired;
	popUp.clickedArray = new Array();
}
/*
Function: createPopUp
	make pop up based on triggers defined in scoContent.js; also creates click events for the trigger

Parameters:
	None

Dependencies:
	<scoContent.js>; <jQuery>

Returns:
	none
	
Change Log:
	2012.11.20	MTW	- Initial version
	2012.12.06	ALP - Modifications to allow popUp size to be defined on a per-popUp basis in scoContent
	2014.05.21	ALP - Added check for popUp.extraCompleted
*/
function createPopUp(){
	var isClicked = new Array();
	var i = 0; //for array above
	var j = 1; // for ids in html below
	$(function(){
		//If pop-ups must be visited, disable Next Button until all pop ups are viewed
		//console.log(shell.tracking.firstVisit);
		if (shell.tracking.firstVisit && popUp.isRequired) {
			//console.log(popUp.isRequired);
			disableNav('next');
			setPageVisit(false);
		};
		//then find each pop up trigger (what ever that trigger may be image, text, etc...) and make a dialog box
		$('[id^="trigger"]').each(function() {
			//pass the trigger id and pop up id to the function below
			createDialog('#trigger'+j, '#popUp_'+j);
			//set the isClicked value to false to determine if all elemements have been viewed
			isClicked[i] = false;
			//$(this).attr('tabindex',1);
			//i++;
			j++;
		});
		//make a click event for each trigger
		$(function(){
			$('[id^="trigger"]').click(function() {
				var x = $('[id^="trigger"]').index(this);
				shell.popUp.lastFocusEl = '#'+this.id;
				//change the isClicked value to true
				isClicked[x] = true;
				console.log('clicked '+x);
				popUp.clickedArray = isClicked;
				//check if all have been completed to enable the next button
				if (popUp.isRequired) {
					if (popUp.extraCompleted) {
						contentSwap.actionAlert = "";
						checkClickCompletion(isClicked);
					}
				}
				return false;
			});
		});
	});
	
};
/*
Change Log: 
	2013.01.07	ALP - Vastly simplified dialog positioning using jQuery positioning widget
	2013.01.25	ALP - Updated programming to only stop audio and switch CC if there is CC stored for the pop-ups.
	2013.01.31	ALP - Updated to load audio/CC text for pop-ups if it exists.
	2013.03.22	ALP - Adjusted to make the close button focus when you tab out of the dialog (default jQuery behavior that I had overwritten accidentally)
	2013.05.07	ALP	- Added setting of shell.caption.subPageNum and shell.caption.onSubPage on dialog open and removal on dialog close in order to correctly display the CC text for the dialogs. Removed setting of css left to shell.popUp.left.
	2014.07.22 	ALP - Added 'has been visited' to the hidden Section 508 text on a clicked image-based link.
*/
function createDialog(openerDiv, dialogDiv) {
	// openerDiv and dialogDiv strings need to be preceeded by #, so "#hintsDialog"
	//console.log("creating dialog for " + openerDiv + " and " + dialogDiv);
	openerArray[openerArray.length] = openerDiv;
	dialogArray[dialogArray.length] = dialogDiv;
	
	if (getInternetExplorerVersion() < 7 && getInternetExplorerVersion() > 0) {
		$(dialogDiv).dialog({
			autoOpen: false,
			resizable: false,
			width: shell.popUp.width,
			height: shell.popUp.height,
			dialogClass: 'tips',
			modal:true,
			open: function(event, ui) {
				// Give the close button a tab index
				//$('.ui-dialog').find('div').first().find('a').first().attr("tabindex", 99);
				$('select').css({ visibility: "hidden" });
				checkSize(dialogDiv);
				pauseAllVideos(); // Pause any videos that might be playing
				if (pageVidCC.length > 0) clearAudio(); // Clear any audio files that might be playing
				//If there is audio for this pop-up
				console.log("popUp.audioArray[dialogDiv]: " + popUp.audioArray[dialogDiv]);
				if (popUp.audioArray[dialogDiv]) {
					pauseAudio(); // Pause any audio files that might be playing
					loadPageAudio(popUp.audioArray[dialogDiv]); // Load the audio
					shell.caption.currPosition = 99;
					loadCCText(popUp.ccArray[dialogDiv]); // Load the CC text
					if(delayPage){
						pauseAudio();
						togglePlayPause();
					}
				}
			},
			close: function(e,ui) {
				if(e.hasOwnProperty('originalEvent')) {
					//console.log('click');
					// Probably a real click.
				} else{
					//console.log('focus');
					// Probably a fake click.
				}
				$('select').css({ visibility: "visible" });
				pauseAllVideos(); // Pause any videos that might be playing
				//pauseYouTubeVideo(); // Pause any YouTube videos that might be playing
				if (pageVidCC.length > 0 || popUp.audioArray[dialogDiv]) clearAudio(); // Clear any audio files that might be playing
				if (pageVidCC.length > 0 || popUp.ccArray[dialogDiv]) clearCC(); // Clear any text that may be in the CC box
				//console.log('focusing on ' + shell.popUp.lastFocusEl);
				$(shell.popUp.lastFocusEl).focus();
				shell.popUp.lastFocusEl = '';
			}
		});
	} else {
		$(dialogDiv).dialog({
			autoOpen: false,
			resizable: false,
			width: shell.popUp.width,
			//minHeight: shell.popUp.minHeight,
			//maxHeight: shell.popUp.maxHeight,
			dialogClass: 'tips2',
			//focus: function( event, ui ) {console.log($(this).attr('id') + " has focus");},
			open: function(event, ui) {
				
				// Give the close button a tab index
				$(this).css("minHeight", shell.popUp.minHeight),
				$(this).css("maxHeight", shell.popUp.maxHeight),
				checkSize(dialogDiv);
				//Add a visited class to the trigger
				if(!$('#trigger'+dialogDiv.substring(7)).hasClass('visited')) {
					$('#trigger'+dialogDiv.substring(7)).addClass('visited');
					//Add 'has been visited' to the hidden Section 508 text
					if ($('#trigger'+dialogDiv.substring(7)+' span').length > 0)
					$('#trigger'+dialogDiv.substring(7)+' span').html($('#trigger'+dialogDiv.substring(7)+' span').html()+" <span class='sect508'>(has been visited)</span>");
				}
				pauseAllVideos(); // Pause any videos that might be playing
				if (pageVidCC.length > 0) clearAudio(); // Clear any audio files that might be playing
				//If there is audio for this pop-up
				if (popUp.audioArray[dialogDiv]) {
					shell.caption.subPageNum = dialogDiv.substring(7);
					shell.caption.onSubPage = true;
					loadCCText(popUp.ccArray[dialogDiv]); // Load the CC text
					loadPageAudio(popUp.audioArray[dialogDiv]); // Load the audio
					//Disable Autoplay Code. #JS addition
					if(delayPage){
						pauseAudio();
						togglePlayPause();
					}
				}
			},
			close: function(e,ui) {
				if(e.hasOwnProperty('originalEvent')) {
					//console.log('click');
					// Probably a real click.
				} else{
					//console.log('focus');
					// Probably a fake click.
				}
				pauseAllVideos(); // Pause any videos that might be playing
				//pauseYouTubeVideo(); // Pause any YouTube videos that might be playing
				if (pageVidCC.length > 0 || popUp.audioArray[dialogDiv]) clearAudio(); // Clear any audio files that might be playing
				if (pageVidCC.length > 0 || popUp.ccArray[dialogDiv]) clearCC(); // Clear any text that may be in the CC box
				//console.log('focusing on ' + shell.popUp.lastFocusEl);
				$(shell.popUp.lastFocusEl).focus();
				shell.popUp.lastFocusEl = '';
				shell.caption.subPageNum = 0;
				shell.caption.onSubPage = false;
				return false;
			}
		});
	}
	//console.log("dialogs done");
	$(openerDiv).click(function(e) {
		closeAllDialogs();
		//console.log("shell.popUp.dialogPosition: " + shell.popUp.dialogPosition + " shell.popUp.parentPosition: " + shell.popUp.parentPosition+" shell.popUp.elementOfPosition: " + shell.popUp.elementOfPosition);
		$(dialogDiv).dialog('open');
		checkPosition(dialogDiv);	
		return false;
	});
}
function closeAllDialogs() {
	//console.log("closing all dialogs");
	for (var i=0, j=dialogArray.length; i<j; ++i) {
		if ($(dialogArray[i]).dialog('isOpen'))	{
			$(dialogArray[i]).dialog('close');
		}
	}
}
function checkSize(dialogDiv) {
	var pos = dialogDiv.substring(dialogDiv.lastIndexOf('_')+1)*1 - 1;
	//console.log("popUpWidthArray: " + popUpWidthArray + " " + pos);
	if (popUp.widthArray[pos] != 0) {
		$(dialogDiv).dialog({
			width: popUp.widthArray[pos],
			height: popUp.heightArray[pos]
		});
		//alert("changing size to: " + popUpWidthArray[pos]+","+popUpWidthArray[pos]);
		
	}
}
function checkPosition(dialogDiv) {
	var pos = dialogDiv.substring(dialogDiv.lastIndexOf('_')+1)*1 - 1;
	//console.log(popUp.xArray + " " + pos);
	//console.log(popUp.yArray + " " + pos);
	if (popUp.dialogPosArray != undefined) {
		var my = popUp.dialogPosArray[pos] || shell.popUp.dialogPosition;
		var at = popUp.parentPosArray[pos] || shell.popUp.parentPosition;
		var of = popUp.elementOfPosArray[pos] || shell.popUp.elementOfPosition;
		//$(dialogDiv).dialog( {position:{my:my, at:at, of:of, collision:"none"}});
		$(dialogDiv).dialog('widget').position({my:my, at:at, of:of, collision:"none"});
		//console.log($(dialogDiv).dialog('widget').offset().left);
	} else {
		$(dialogDiv).dialog('widget').position({my:shell.popUp.dialogPosition, at:shell.popUp.parentPosition, of:shell.popUp.elementOfPosition, collision:"none"});	
	}
}
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

function initializeVideos() {
	//console.log("initializeVideos");
	//console.log(pageVidIds);
	if (pageVidIds.length > 0) {
		//console.log(pageVidIds.length);
		for (var i=0, j=pageVidIds.length; i<j; i++) {
			//console.log(pageVidIds[i]);
			var myPlayer1 = _V_('#'+pageVidIds[i]); myPlayer1.ready(function(){ this.volume(0.25); this.addEvent("play", updateCC);});
			
			/*_V_(pageVidIds[i], {}, function(){
			  console.log(pageVidIds[i] + "Player is initialized and ready.");
			  var myPlayer = this;
			  myPlayer.addEvent("play", updateCC);
			});*/
		}
	}
}

function updatePageVidIds(id,cc) {
	pageVidIds[pageVidIds.length] = id;
	pageVidCC[id] = cc;
	//console.log("CC for " + id + ": " +pageVidCC[id]);
}

function removeDialogs(diags) {
	//console.log(removeDialogs);
	for (var i=0, j=diags.length; i<j; ++i) {
		$(diags[i]).empty().remove();
	}
	resetPopUps();
}
function openDialog(num) {
	//console.log($("#popUp_"+num).innerHTML);
	$("#popUp_"+num).dialog("open");
}
// Change Log: 
// 2014.07.21 - ALP - Updated the template_popUp.html page to instead call storeSubCCData(id, audioId, cc); and popUp.audioArray["#popUp_"+id] = audioId; in the <setPopAudio> helper function. This allows the CC text to correctly be updated for pop-ups, including multiple timed blocks of CC text.
function updatePopAudio(popId, audioId, cc) {
	//popUp.audioArray[popId] = audioId;
	//console.log(cc[0].html);
	//popUp.ccArray[popId] = cc[0].html;	
	//console.log(cc);
	//console.log(popUp.audioArray);
}
