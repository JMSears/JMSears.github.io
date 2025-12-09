var confidenceFeedbackArray = new Array()
//extremely confident
confidenceFeedbackArray[0] = "<p>It's great that you feel a great deal of confidence in your ability to recall this article.</P><p>No matter how confident you feel, it is always a good idea to read the contract and confirm what you think you know. This will make it easier for you to avoid creating your own intent when reading the Master Agreement. </p><p>Remember, you cannot truly understand an article unless you read it in its entirety. This includes the article's references that should be read in conjunction with it, such as laws, regulations, or VA Policy.</p>"

confidenceFeedbackArray[1] = "<p>It's great that you feel confident in your ability to recall this article, but if you're ever in doubt, don't hesitate to review the contract just in case.</p><p>You may find yourself needing help when you are in the field, especially for those articles that require challenging legal analysis or have numerous other hierarchy items that you should read in conjunction with an article.</p><p>At a minimum, think of some ways to make it easy for you to refer to the contract when you are on the job. For example, keeping a printed copy at the office or an electronic version on your computer.</p><p>Remember, you cannot truly understand an article unless you read it in its entirety. This includes the article's references that should be read in conjunction with it, such as laws, regulations, or VA Policy.</p>"
//middle confidence
confidenceFeedbackArray[2] = "<p>It's ok not to feel completely sure of your ability to recall this article. </p><p>Consider re-reading parts you're not sure about and don't hesitate to review the contract if you're ever asked to interpret an article in the field.</p><p>If you feel that the language of an article is unclear and you cannot understand it, the best course of action is to speak with those who've negotiated the Master Agreement rather than rely on what could be your subjective attempt at the language.</p><p>Remember, you cannot truly understand an article unless you read it in its entirety. This includes the article’s references that should be read in conjunction with it, such as laws, regulations, or VA Policy.</P>"

confidenceFeedbackArray[3] = "<p>It's ok to be unsure of your ability to recall this article.</p><p>This training will provide you with a foundational understanding, but it won't make you an expert!</p><p>How will you refer to the Master Agreement in the field? Having a printed version in your office or an electronic version on your computer will make it easy review when you need to refresh your memory.</p><p>Remember, you cannot truly understand an article unless you read it in its entirety. This includes the article's references that should be read in conjunction with it, such as laws, regulations, or VA Policy.</p>"
//not at all confident
confidenceFeedbackArray[4] = "<p>It's ok not to feel confident in your ability to recall this article and important to be aware of your own understanding. </p><p>Here are some suggestions for confirming your understanding in the field:<ol><li>Keep a hard copy close by you at the office.</li><li>Have an electronic version on your computer.</li><li>Talk with a practitioner of the Master Agreement.</li><li>Reach out to a negotiator of the Master Agreement.</li></ol></p><p>You can take some time now to review this article by returning to the \"Read the Contract!\" page. Then try the recall exercise again to check your knowledge.</p><p>Remember, you cannot truly understand an article unless you read it in its entirety. This includes the article’s references that should be read in conjunction with it, such as laws, regulations, or VA Policy.</p>"

function handleSubmit() {
	var selValue = $('input[name=confidence]:checked').val();
	if (selValue == undefined) {
		alert("Please select your level of confidence.")
	} else {
		var confidenceLevel
		if (selValue == 1) {
			//confident
			$(".confidenceFeedback").html(confidenceFeedbackArray[0])
			$("#dialog-message img").attr("src","../images/People_Confident_Y.png")
			$("#dialog-message").attr("title", "I am extremely confident.")
		} else if(selValue == 2) {
			//somewhat confident
			$(".confidenceFeedback").html(confidenceFeedbackArray[1])
			$("#dialog-message img").attr("src","../images/People_Confident_M.png")
			$("#dialog-message").attr("title", "I am confident.")
		} else if(selValue == 3) {
			//somewhat confident
			$(".confidenceFeedback").html(confidenceFeedbackArray[2])
			$("#dialog-message img").attr("src","../images/People_Confident_M.png")
			$("#dialog-message").attr("title", "I am somewhat confident.")
		} else if(selValue == 4) {
			//somewhat confident
			$(".confidenceFeedback").html(confidenceFeedbackArray[3])
			$("#dialog-message img").attr("src","../images/People_Confident_M.png")
			$("#dialog-message").attr("title", "I am not sure of my confidence.")
		} else {
			//not at all confident
			$(".confidenceFeedback").html(confidenceFeedbackArray[4])
			$("#dialog-message img").attr("src","../images/People_Confident_N.png")
			$("#dialog-message").attr("title", "I am not at all confident.")
		}
		//$(".confidenceFeedback").html(confidenceFeedbackArray[selValue - 1])
		//disable stuff
		$("#submitButton").attr("disabled", "disabled")
		$("input:radio").attr("disabled", "true")
		modalBox()
		//$("#pageInstructions span").html("Select Next to continue")
		setPageInstructions("Select Next to continue.")
	}
}

function modalBox() {
	//write the text that we need to have in there

	$(function() {
		$("#dialog-message").dialog({
			//set the width based on type of box
			width: 800,
			modal: false,
			position: {my: "center", at: "center", of: "#confidenceQuestion"},
			buttons: {
				//Ok: function() {
					//$( this ).dialog( "close" );
				//}
			}
		});
	});
}