var randomAudioNumber = Math.floor(Math.random() * 13) + 1;
console.log(randomAudioNumber)

//submitButton.addEventListener("click", hadleSubmit());
function handleCompare() {
	console.log("handle compare")
	var complete = true
	$("input:text").each(function(i) {
		//save user answers in array
		userArray[i] = $(this).val()
		if ($(this).val() == "") {
			//something wasn't answered
			complete = false
		}
	})
	
	if (!complete) {
		console.log("IM NOT DONE")
		handleNotComplete()
	}

	//hide placeholder graphic
	$("#feedbackGraphic").css("display", "none");

	//populate feedback with user answers
	for (x = 0; x < userArray.length; x++) {
		sel = "#feedbackAnswer" + (x + 1)
		console.log("selector is " + sel)
		if (userArray[x] == "") {
			userArray[x] = "No Answer"
		}
		$(sel).html(userArray[x])
	}

	//show feedback box
	$("#feedbackAnswers").css("display", "inline-block");

	//hide feedback box to assistive technology - added to tag

	//populate text entry boxes with agreement array items
	//put in hidden divs that allow assistive tech to see "your answers"
	//make it in the format of Master agreement: answer   Your answer: answer
	$(".entryHolder").css("display", "none");
	$(".entrySpace").css("display", "inline-block");
	$(".maText").each(function(i) {
		$(this).html(agreementArray[i])
	})
	$(".userAnswer").each(function(i) {
		$(this).html(userArray[i])
	})

	//change instruction text
	$("#instructions1").css("display", "none")
	$("#instructions2").css("display", "block")


	//show confidence question
	$("#compare").css("display", "none")
	//$("#confidenceQuestion").css("display", "block")


	//make focus go to top of page
	//$("#pageInstructions span").html(afterSubmitPrompt)
	setPageInstructions(afterSubmitPrompt)
	
}

function handleNotComplete() {
	//show feedback box to say it's not done
	//need to be modal with faded background covering and locking the rest of the exerces

}
