function afterLoadAdjustments() {
	//this runs after the page is loaded and rendered
	addMasterAgreement()
	setTimeout(mediaControllerChanges,500)
	changeMenu()
	$("#cover").css("display","none")
	
	//tweaks to pages to fix 508 issues
	$(".searchDiv input").prop("disabled",true)

	//$(".searchDiv input").attr("disabled","disabled")
	if ($("#titleTopic").html()=="") {
		//$("#titleTopic").remove()
		$("#titleTopic").replaceWith(function() {
			return $("<p id='titleTopic'/>").append($(this).contents());
		});
	}
	setTimeout('$("#dynaFly").remove()',500)
	$("html").attr("lang","en")
	$(".controls .position-slider [disabled]").remove()
	//after the fact changes so we don't have to touch every page that had this in it
	$(".splashArticle").replaceWith(function() {
		return $("<h1 class='splashArticle' />").append($(this).contents());
	});
	$(".splashTitle").replaceWith(function() {
		return $("<h2 class='splashTitle' />").append($(this).contents());
	});
	$("#content img").removeAttr("id")
	if (currentLesson==0 & currentPage==1) {
		document.title="Lesson Entry";
	}
	setTimeout(removeEmptyListElementsOnReadPage,650)

}

function afterNewWinLoadAdjustments() {
	//fix the layout in a new window
	$(".titleCourse").prependTo("#headerNewWin")
	$("#titleTopic").css("padding-bottom","15px")
	$("#titleTopic").css("padding-top","0px")
	$("#wrapperContent").css("margin-bottom","10px")
}
function removeEmptyListElementsOnReadPage () {
	$("#lawsBox #lawsCol1 li").each(function(index) {
		if ($(this).text()=="") {
			$(this).remove();
			
		}
	});
	$("#lawsBox #lawsCol2 li").each(function(index) {
		if ($(this).text()=="") {
			$(this).remove();
			
		}
	});
	$("#policyBox li").each(function(index) {
		if ($(this).text()=="") {
			$(this).remove();
			
		}
	});
}

function mediaControllerChanges() {
	//add in the accesskey shortcut for the media controller
	if (getValue("_sAP")=="true") {
		console.log("make pause it")
		$("#player-1 .pause" ).attr("accesskey", "j")
	} else {
		$("#player-1 .play" ).attr("accesskey", "j")
	}
	//makes tweaks to the media controller
	//set the access since we are autoplaying
	$("#player-1").on("omnimediaplayer.play", function() {
		$("#player-1 .play").removeAttr("accesskey")
		$("#player-1 .pause" ).attr("accesskey", "j")
		$("#player-1 .restart").removeAttr("accesskey")
	})
	$("#player-1").on("omnimediaplayer.pause", function() {
		$("#player-1 .pause").removeAttr("accesskey")
		$("#player-1 .play" ).attr("accesskey", "j")
		$("#player-1 .restart").removeAttr("accesskey")
	})
	$("#player-1").on("omnimediaplayer.end", function() {
		$("#player-1 .pause").removeAttr("accesskey")
		$("#player-1 .play").removeAttr("accesskey")
		$("#player-1 .restart" ).attr("accesskey", "j")
	})

	$("#player-1 .mute" ).attr("accesskey", "m")
	
	$("#player-1").on("omnimediaplayer.volumechange", function(e) {
		//turn on cc when muted
		if ($("#player-1 .mute").hasClass("hidden")) {
			//we are muted
			//turn on cc text
			$("#player-1").omnimediaplayer("set", "ccOn", "true")
			//disable cc button
			$(".cc").addClass("disabled")
			$(".cc").attr("disabled", true)
		} else {
			$(".cc").removeClass("disabled")
			$(".cc").removeAttr("disabled")
		}
		//handle swapping out the accesskey
		if ($("#player-1").omnimediaplayer("get", "volume") == 0) {
			$("#player-1 .unmute" ).attr("accesskey", "m")
			$("#player-1 .mute").removeAttr("accesskey")
		} else {
			$("#player-1 .mute" ).attr("accesskey", "m")
			$("#player-1 .unmute").removeAttr("accesskey")
		}
		
		setTimeout(removeVolumeSlider, 2000)
	})
}

function removeVolumeSlider() {
	$(".volume-panel").addClass("hidden")
}

function handleAutoPlay() {
	if (getValue("firstTime")=="") {
		setValue("_sAP", true)
		setValue("firstTime", "done")
	}
}

function centerPopUp() {
	var newPos = (window.innerHeight - $("#showMoreContent").height())/2 -30
	$("#showMoreContent").css("position","fixed")
	$("#showMoreContent").css("top", newPos)
}

function addMasterAgreement() {
	if ($("#btnAgreementAnchor").length == 0) {
		$("#btnsLeft").append("<a href=javascript:newWin('../master_agreement/lca_master_agreement.html','newWindow','width=1000,height=675,scrollbars=yes,resizable=yes');     \" onmouseover=\"swapImg('btnAgreement','../_template/images/btnAgreement_b.png');\" onfocus=\"swapImg('btnAgreement','../_template/images/btnAgreement_b.png');\" onmouseout=\"swapImg('btnAgreement','../_template/images/btnAgreement_a.png');\" onblur=\"swapImg('btnAgreement','../_template/images/btnAgreement_a.png');\" accesskey=\"3\" id=\"btnAgreementAnchor\"><img src=\"../_template/images/btnAgreement_a.png\" alt=\"Master Agreement (Alt+3)\" name=\"btnAgreement\" id=\"btnAgreement\"></a>");
	}
	
	$("#footerInfo").remove()
}

function changeMenu() {
	var e = $("#menuFocus1 li").last().find("a")
	e.text("Lesson Status")
	
}
function settingsPageAdjustments() {
	$("fieldset:eq(0) legend").append($("fieldset:eq(0) p"))
	$("fieldset:eq(0) h1").replaceWith("<h3>Auto Play</h3>")
	$("fieldset:eq(0) h3").css("padding-top","30px")
	$("fieldset:eq(0)").css("margin-top","-30px")


	$("fieldset:eq(1) legend").append($("fieldset:eq(1) p"))
	$("fieldset:eq(1) h1").replaceWith("<h3>Always Show Closed Captions</h3>")
	$("fieldset:eq(1) h3").css("padding-top","15px")
	$("fieldset:eq(1)").css("margin-top","-15px")
	
}

function statusPageAdjustments() {
	$("#tableCourseStatus th:eq(1)").text("Topic")
	var item = $("#msgCourseStatus p")
	if (item.text().indexOf("all lessons")>-1) {
		item.text("The Lesson Exit page will be available once you have completed all topics.")
	}
	if (item.text().indexOf("online learning module")>-1) {
		
		var txt = item.text()
		txt = txt.replace("You", "you")
		txt = txt.replace("online learning module", "lesson")
		txt = txt.replace(/[\u201C\u201D]/g, "\"")
		txt = txt.replace('\".','.\"')
		
		item.text(txt)
	}
		
}

function openGlossary(ltr) {
	newWin('../resources/glossary.htm#'+ltr,'glossary','width=1050,height=675,scrollbars=yes,resizable=yes');
}

function centerPopUp() {
	//var newPos = $("#content").position().top + ($("#content").height() - $("#showMoreContent").height())/2
	//alert(window.innerHeight)
	var newPos = (window.innerHeight - $("#showMoreContent").height())/2 -30
	$("#showMoreContent").css("position","fixed")
	$("#showMoreContent").css("top", newPos)
}



