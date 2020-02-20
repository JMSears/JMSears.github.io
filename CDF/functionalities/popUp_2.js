// NOTE: THIS WHOLE FILE NEEDS TO BE REWORKED TO WORK MORE LIKE CONTENTSWAP. THIS IS MESSY!!!
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
	isRequired: shell.popUp.isRequired
}
var openerArray = new Array();
var dialogArray = new Array();
//var popUpIsRequired = shell.popUp.isRequired;
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
*/
function createPopUp(){
	var isClicked = new Array();
	var i = 0; //for array above
	var j = 1; // for ids in html below
	$(function(){
		//If pop-ups must be visited, disable Next Button until all pop ups are viewed
		if (shell.tracking.firstVisit && popUp.isRequired) {
			//console.log(popUp.isRequired);
			disableNav('next');
			shell.tracking.pagesVisited[shell.currPageNum-1] = 0;
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
					//check if all have been completed to enable the next button
					if (popUp.isRequired) {
						checkClickCompletion(isClicked);
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
				if (popUp.audioArray[dialogDiv]) {
					pauseAudio(); // Pause any audio files that might be playing
					loadCCText(popUp.ccArray[dialogDiv]); // Load the CC text
					loadPageAudio(popUp.audioArray[dialogDiv]); // Load the audio
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
				$(this).css("left", shell.popUp.left),				
				checkSize(dialogDiv);
				//Add a visited class to the trigger
				if(!$('#trigger'+dialogDiv.substring(7)).hasClass('visited')) $('#trigger'+dialogDiv.substring(7)).addClass('visited');
				pauseAllVideos(); // Pause any videos that might be playing
				if (pageVidCC.length > 0) clearAudio(); // Clear any audio files that might be playing
				//If there is audio for this pop-up
				if (popUp.audioArray[dialogDiv]) {
					//console.log(popUp.ccArray[dialogDiv]);
					loadCCText(popUp.ccArray[dialogDiv]); // Load the CC text
					loadPageAudio(popUp.audioArray[dialogDiv]); // Load the audio
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
				if (pageVidCC.length > 0 || popUp.audioArray[dialogDiv]) clearAudio(); // Clear any audio files that might be playing
				if (pageVidCC.length > 0 || popUp.ccArray[dialogDiv]) clearCC(); // Clear any text that may be in the CC box
				//console.log('focusing on ' + shell.popUp.lastFocusEl);
				$(shell.popUp.lastFocusEl).focus();
				shell.popUp.lastFocusEl = '';
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
		//console.log("moving to: " + my+","+at+","+of);
		$(dialogDiv).dialog('widget').position({my:my, at:at, of:of, collision:"flipfit"});
	} else {
		$(dialogDiv).dialog('widget').position({my:shell.popUp.dialogPosition, at:shell.popUp.parentPosition, of:shell.popUp.elementOfPosition, collision:"flipfit"});	
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

var updateCC = function() {
	clearAudio();
	var myPlayer = this;
	//console.log("current video id: "+ myPlayer.id);
	currPageVideo = myPlayer.id;
	disableAudioControls();
	loadCCText(pageVidCC[myPlayer.id]);
}


function removeDialogs(diags) {
	//console.log(removeDialogs);
	for (var i=0, j=diags.length; i<j; ++i) {
		$(diags[i]).empty().remove();
	}
}
function openDialog(num) {
	//console.log($("#popUp_"+num).innerHTML);
	$("#popUp_"+num).dialog("open");
}

function updatePopAudio(popId, audioId, cc) {
	popUp.audioArray[popId] = audioId;
	//console.log(cc[0].html);
	popUp.ccArray[popId] = cc[0].html;	
	//console.log(popUp.audioArray);
}