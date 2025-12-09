var linkedFrom=0

function getPageVariables (pg) {
	console.log("getting " + pg)
	$.getScript(pg)
		.done(function( script, textStatus ) {
			console.log( textStatus );
			console.log(script);
			startPage();
		})
		.fail(function() {
			console.log("fail")
if(arguments[0].readyState==0){
        //script failed to load
    }else{
        //script loaded but failed to parse
        alert(arguments[2].toString());
    }
		});
}

function startPage() {
	console.log("startPage")
	buildLinks()
	fillAgreement();
	makeLawsAndRegs();
	makePolicies();
}

function buildLinks() {
	console.log("build links")
	$("#primaryLink").append('<a id="link'+primaryArticle+'" href="javascript:handleLink('+primaryArticle+');">Article '+primaryArticle+'</a>')
	if (relatedArticles.length == 0) {
		$("#relatedLinks").append("(No related articles.)")
	}
	for (x=0; x<relatedArticles.length; x++) {
		$("#relatedLinks").append('<a id="link'+relatedArticles[x]+'" href="javascript:handleLink('+relatedArticles[x]+');">Article '+relatedArticles[x]+'</a><br>')
	}
}

function fillAgreement() {
	console.log("fillAgreement")
	makeArticle(primaryArticle)
	for (x=0; x<relatedArticles.length; x++) {
		makeArticle(relatedArticles[x]);
	}

}

function makeArticle(j) {
	console.log("make " + j)

	$("#doc").append("<a name='article-" + j + "' id='article-" + j + "' class='artDiv' tabindex='-1'></a>")
	$("#article-" + j).load("../master_agreement/master_agreement/article" + j + ".html", function() {
		$("#article-" + j).append("<div><a class='hideFromScreen' onfocus=\"this.className='returnFocus'\" onblur=\"this.className='hideFromScreen'\" style='margin:10px 0;' href='javascript:backToTree();'>Return to List</a></div>");
		swapHeadings3();
	});

}

function swapHeadings3() {
	console.log("swap 3")
	//need to parse articles and change h3 to h4, h2 to h2 and h1 to h2
	var $h3s = $("#doc h3");
	$h3s.replaceWith(function() {
		return $('<h5/>', {
			html:this.innerHTML
		});
	});
	setTimeout(swapHeadings2,200)
}

function swapHeadings2() {
	console.log("swap 2")
	var $h2s = $("#doc h2");
	$h2s.replaceWith(function() {
		return $('<h4/>', {
			html:this.innerHTML
		});
	});
	setTimeout(swapHeadings1,200)
}

function swapHeadings1() {
	console.log("swap 1")
	var $h1s = $("#doc h1");
	$h1s.replaceWith(function() {
		return $('<h3/>', {
			html:this.innerHTML
		});
	});
	$("#doc").css("visibility","visible");
}
function makeLawsAndRegs() {
	console.log("make laws")

	if (lawsAndRegs.length < 8) {
		if (lawsAndRegs.length==0) {
			lawsAndRegs[0] = "(No laws or regulations.)"
			$("#lawsBox div:first").empty()
			$("#lawsBox div:first").css("height","10px")
			
		}
		
		$("#lawsCol2").css("display","none")
		$("#lawsCol1").css({"display":"table","position":"relative","width":"205px","text-align":"center"})
		for(x=0; x<lawsAndRegs.length; x++) {
			$("#lawsCol1 ul").append("<li><span style='width:185px;display:inline-block;padding-bottom:4px;'>"+lawsAndRegs[x]+"</span></li>");
			//$("#lawsCol1 ul").append("<li>"+lawsAndRegs[x]+"</li>");
		}
	} else {
		for(x=0; x<lawsAndRegs.length; x++) {
			if (x % 2 == 0) {
				$("#lawsCol1 ul").append("<li>"+lawsAndRegs[x]+"</li>");
			} else {
				$("#lawsCol2 ul").append("<li>"+lawsAndRegs[x]+"</li>");
			}
		}
	}
	
}

function makePolicies() {
	console.log("make policies")

	if (policies.length==0) {
		policies[0] = "(No VA policies.)"
		$("#policyBox p:first").empty()

	}


	for (x=0; x<policies.length; x++){
		$("#policyBox ul").append("<li>"+policies[x]+"</li>");
	}
	if (policies.length == 1) {
		//if the one item is "No VA Policies" fix the layout so it doesn't look stupid
		if (policies[0].indexOf("No ")) { 
			$("#policyBox ul").css("text-indent","-50px")
			$("#policyBox ul").css("text-align", "center")
		}
	}
}

function backToTree() {
console.log("backtotree " +linkedFrom ) 
$("#link"+linkedFrom).focus()
}

function handleLink(link, fr) {
	linkedFrom=link
	//$("#" + activeLink + "-div").focus();
	$("#article-"+link).focus();
	currentTop = $("#masterBox").scrollTop()
	adjustAmount = $("#article-" + link).position().top
	$("#masterBox").scrollTop(currentTop + adjustAmount)
}