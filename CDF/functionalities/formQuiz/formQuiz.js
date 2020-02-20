/*
Change Log:
    2007.04.17 - ALP - Initial version
    2007.05.12 - ALP - Moved createQFb and addData to their own methods. Turned many arbitrary strings into variables. Other miscellaneous code clean-up.
    2007.06.17 - ALP - Added ability to create table-based questions. Renamed createQFb to createFbEl
    2007.06.18 - ALP - Added support for evaluating drop-down questions. Added ability to create custom activities by defining questionHolder elements on the page and specifying them in the formQuizData JSON variable. Also changed maxAttempts to be defined in the JSON file instead of the constructor.
    2007.06.19 - ALP - Changed feedback for drop down questions to show the shouldCheck class on the last attempt and replace the user's answer with the correct answer. 
    2007.06.26 - ALP - Added ability to add one row or column of drop downs to a table. Also added option to call checkConflict with each drop down change to ensure they are exclusive.
    2007.06.28 - ALP - Added ability to create ordering drag and drop questions.
    2007.07.01 - ALP - Slightly modified the DND functionality so that it does not replace corrects with shouldChecks when the learner gets it right on the final attempt.
    2007.07.13 - ALP - Added support for image-based multiple choice questions. Form must have formType: 'imgMc' and question must have qType: 'img'
    2007.07.16 - ALP - Added ability to specify a question with no correct answer. Question must have fbState: 'noCorrect'.
    2007.08.01 - ALP - Modified <checkQuestionCorrect> to ensure the correct feedback displays for imgMC questions when you have selected at least one incorrect image and then select the correct one.
    2007.08.06 - ALP - Added disableOnCorrect property to allow unlimited re-submits for post-assessment applications.
    2007.08.07 - ALP - Added <setPostAssessment> method to automatically disable choice feedback, set the max attempts to 99, and not disable the form on correct.
    2007.08.08 - ALP - Added call to <questionChange> when the state of the answer changes. questionChange is defined on the page.
    2010.06.25 - VRB - Modified createFbEl to work for DIA shell
    2010.06.25 - VRB - Added call to initJQueryDialogs at end of evaluate function.
    2010.09.xx - VRB - Modified for DIA courses...
    2010.11.04 - ALP - Added tabIndex="0" to stimWrap div to ensure it is read by screen readers. Switched the placement of the <label> tag on answer choices.
    2010.12.08 - VRB - Modified initJQuery methods to be part of the FormQuiz Object
    2010.12.09 - VRB - Finalized merging of formQuiz.js files from multiple projects and updated change log.
    2012.09.05 - VRB - Began some refactoring and adding in the ability to have branching questions.
                     - Renamed addData to generateForm
	2013.01.06 - ALP - Added ability to specify maxAttempts in shellData, and to read it here.
	2013.01.07 - ALP - Modified positioning code to use jQuery positioning widget
	2013.01.31 - ALP - Added ability to specify a customClass for the form, and fixed positioning of form-level feedback boxes and addng tracking for them in the shell so that clicking Next will automatically close them.
	2013.03.22 - ALP - Various adjustments to tabIndex to get it Section 508-compliant.
	2013.04.14 - ALP - Added fieldset and legend tags to make questions Section 508 compliant.
	2014.08.06 - ALP - Numerous changes to improve Section 508 compatibility. These included the addition of hidden section 508 text to communicate the X/check/arrow visuals; the reordering of inputs and their labels so that labels come first in the HTML; addition of this.stimuli to keep track of each question's stimulus.
 */
/**
 * Array containing all Form Quiz Instances
 */
var myFQinstanceArray = new Array();

/**
 * Form Quiz Object. Reads in a JSON variable, writes quiz questions to the page, 
 * and evaluate whether they are answered correctly.
 * @class Form Quiz
 * @param {Object} fqVar JSON containing quiz data
 */
function FormQuiz(fqVar) {
    // store this instance
    myFQinstanceArray[myFQinstanceArray.length] = this;

    // Parameters
    this.instNum = myFQinstanceArray.length - 1; // number indicating the instance number
    this.quizData = fqVar || formQuizData; // stores quiz data object (JSON)
    this.quizType = this.quizData.quizType || 'default'; // stores the quiz type
    this.maxAttempts = this.quizData.maxAttempts || shell.formQuiz.numAttempts; // number indicating the maximum number of attempts

    // Variables that may change from project to project
    this.fbCorrectClass = 'correct'; // class to display choice-level correct feedback (Check)
    this.fbIncorrectClass = 'incorrect'; // class to display choice-level incorrect feedback (X)
    this.fbShouldCheckClass = 'shouldCheck'; // class to display "should have selected" feedback on final attempt (arrow)

    // Arrays set directly from data in formQuizData
    this.qTypes = new Array(); // array to store the question types
    this.answers = new Array(); // array to store the answer strings
    this.qFbTypes = new Array(); // array to store the question feedback types
    this.formFbTypes = new Array(); // array to store the form feedback types
    this.choices = new Array(); // array to store the choices
    this.links = new Array(); // array to store branches to questions for branching quizzes
	this.formLegend = new Array(); // array to store instructional text for a group of questions. Styled as a <legend> inside the <fieldset> for Section 508 compliance

    // Arrays that are populated by the constructor
    this.attemptNum = new Array(); // array to store the number of attempts for each form
    this.fbSpaces = new Array(); // array to store the els whose classes will be changed to show choice (X/OK/arrow) feedback
	this.stimuli = new Array(); // array to store the stimulus el for each question
    this.qFbEl = new Array(); // array to store each question's FB el
    this.formFbEl = new Array(); // array to store each form's FB el
    this.chosenCorrect = new Array(); // array to store the choices that were correctly chosen
    this.chosenIncorrect = new Array(); // array to store the choices that were incorrectly chosen
    this.totalCorrect = new Array(); // array to store the number of actual correct choices for each question
    this.numCorrect = new Array(); // array to store the number of correct choices chosen for each question
    this.numIncorrect = new Array(); // array to store the number of incorrect choices chosen for each question
    this.qCorrect = new Array(); // array to store booleans of whether each question is correct    
    this.formCorrect = new Array(); // array to store booleans of whether each form is correct
    this.dialogIds = new Array(); // array to store the dialog ids

    this.isChoiceFb = true; // boolean to indicate whether there is choice-level feedback
    this.disableOnCorrect = true; // to store whether to disable on a correct answer.
    this.isPostAssessment = false; // boolean to indicate if this is a post Assessment
    this.allowUserToSkipQuestion = false; // boolean to indicate if question may be skipped
    this.feedbackPositionOffset = false; // boolean to indicate if feedback dialog should be offset
    this.feedbackPosition = false; // boolean to indicate if feedback dialog should be absolutely postitioned
    this.feedbackX = 0; // number indicating absolute or offset x value
    this.feedbackY = 0; // number indicating absolute or offset y value
    this.currentQuestion = this.quizData.firstQuestion || 0;
    
    if ( this.quizType == 'branching' ) {
        this.maxAttempts = 1;
        $('#nextQuestion').hide();
        $('#nextQuestion').click($.proxy(function() { 
            this.destroyJQueryDialogs();
            this.generateForm();
            $('#nextQuestion').hide();
            $('#submitBtn').show();
        }, this)); 
    }
        
    this.generateForm();
}

/**
 * Creates and adds the questions to the page and stores references to all relevant pieces in the object's arrays.
 * @name generateForm
 */
/*    
 * Change Log:
 *   2010.06.27 - ALP - Added for attribute back to input's label tag for Section 508 compliance.
 *   2012.08.05 - VRB - Began Refactoring Method to improve FormQuiz
 *   2012.08.05 - VRB - created createMyForm(), createQuestion(), and refactored the way in which many of the data arrays are constructed.
 *   2012.08.05 - VRB - added formType parameter to JSON
 *	 2013.04.14 - ALP - Added fieldset and legend tags to make questions Section 508 compliant
 *	 2013.04.26	- ALP - Moved submit button to be outside of the fieldset, per 508 compliance.
 *	 2014.08.30	- ALP - Added ability to define a form-level "formLegend" in quizData and then, if formLegend exists, have that string be set up as a legend for the form. Specifically implemented for Section 508 compliance on drop-down question pages.
 */
FormQuiz.prototype.generateForm = function() {
    var currForm, myFormEl, myFormNum;
	var myFormLegend = false;

    this.numForms = this.quizData.forms.length;

    // for each form
    for ( var formNum = 0; formNum < this.numForms; formNum++) {
        myFormNum = formNum;
		//if (this.quizData.forms[formNum].customClass) this.customClasses[formNum] = this.quizData.forms[formNum].customClass;
        this.choices[formNum] = new Array();
        this.links[formNum] = new Array();
        this.totalCorrect[formNum] = new Array();
        this.fbSpaces[formNum] = new Array();
		this.stimuli[formNum] = new Array();
        this.answers[formNum] = new Array();
        this.qTypes[formNum] = new Array();
        this.qFbTypes[formNum] = new Array();
        this.qFbEl[formNum] = new Array();
		this.formLegend[formNum] = new Array();

        currForm = this.quizData.forms[formNum]
        qLength = currForm.questions.length;
		if (currForm.formLegend) myFormLegend = currForm.formLegend;
//console.log("FORM LEGEND: "+ myFormLegend);
        // Setup the Form
        myFormEl = this.createMyForm(myFormNum, currForm);
		// Add in a fieldset tag for Section 508 compliance
		
		if (currForm.formType != 'custom') {
			document.getElementById('quiz' + formNum).appendChild(myFormEl);
		}
		var myFSet = document.createElement('FIELDSET');
		var myLegend;
		if (myFormLegend != false) {
			myLegend = document.createElement("LEGEND");
			myLegend.className = 'actionText';	
			myLegend.innerHTML = myFormLegend;
			myFSet.appendChild(myLegend);
		}
		//myFormEl.appendChild(myFSet);
		//var fSet = $(myFormEl).find('fieldset')[0];
        // Create question(s)
        var start;
        var stop;
        if (this.quizType == 'branching') {
            start = this.currentQuestion;
            stop = this.currentQuestion + 1;
        } else {
            start = 0; // default type quizzes start from the 0 index on each form.
            stop = qLength;
        }

        // for each question
        for ( var qNum = start; qNum < stop; qNum++) {
            this.createQuestion(myFormNum, qNum, currForm, myFSet);
        }
		document.getElementById('formQuiz' + formNum).appendChild(myFSet);
        // add the submit button 
        if (currForm.formType != 'imgMc') {
            //console.log("adding Submit button " + currForm.formType);
			this.createSubmitButton(document.getElementById('formQuiz' + formNum), currForm.buttonText || 'Submit',
                    formNum);
        }
		
        // set form feedback if it exists
        if (currForm.fbType) {
            this.formFbTypes[formNum] = currForm.fbType;
            this.formFbEl[formNum] = this.createFbEl(formNum, -1);
        }

        // create an array to track correct questions
        this.qCorrect[formNum] = new Array();

        // set number of attempts for this form
        this.attemptNum[formNum] = 0;
    }
}

FormQuiz.prototype.createQuestion = function(formNum, qNum, currForm, myFormEl) {
    var myInstNum = this.instNum
    var myFormNum = formNum;
    var currQ;
    var myChoice, myInput, qWrapper;
    var myStim, myStimPara, myChoiceWrapper, myFBSpace, myName;
    var myTableChoice;
    var myImgLink, myImg;

    // track choices and feedback spaces for each question on each form
    this.choices[formNum][qNum] = new Array();
    this.fbSpaces[formNum][qNum] = new Array();
	this.stimuli[formNum][qNum] = new Array();

    // get current question
    currQ = currForm.questions[qNum];
    this.links[formNum][qNum] = currQ.links;

    // If this form is not a table
    if (currForm.formType != 'table') {
        if (currForm.questions[qNum].fbType) { // if there is question-level fb
            this.qFbEl[formNum][qNum] = this.createFbEl(formNum, qNum); // create the question feedback div and store a reference to the fb el
        }

        if (currQ.qType != 'dd' ) {
			// 2014.08.05 ALP - Adjusted to put stimulus inside of a <p> tag, and have the legend be inside the p, as it is an inline element.
			myStimPara = document.createElement('P');
			if (currQ.stimulus.charAt(0) == '<') {
				var myLegend = document.createElement('LEGEND');
				myLegend.innerHTML = currQ.stimulus;
				myStimPara.appendChild(myLegend);
			} else {
				var myLegend = document.createElement('LEGEND');
				myStim = document.createTextNode(currQ.stimulus);
				myLegend.appendChild(myStim);
				myStimPara.appendChild(myLegend);
			}
			myStimPara.id = 'qStimf' + formNum + 'q' + qNum;
		} else {
			if (currQ.stimulus.charAt(0) == '<') {
				myStimPara = document.createElement('LABEL');
				myStimPara.innerHTML = currQ.stimulus;
			} else {
				myStimPara = document.createElement('LABEL');
				myStim = document.createTextNode(currQ.stimulus);
				myStimPara.appendChild(myStim);
			}
			this.stimuli[formNum][qNum] = myStimPara;
       	 	myStimPara.htmlFor = 'qStimf' + formNum + 'q' + qNum;
		}
        myStimPara.className = 'stimWrap';
        //myStimPara.tabIndex = "0";
        if (currForm.formType != 'custom') {
            if (currQ.qType != "dd") {
                myFormEl.appendChild(myStimPara);
            }

        } else {
            document.getElementById(currForm.questions[qNum].qWrapEl).appendChild(myStimPara);
        }
    }

    // if a multiple choice or multiple response
    if (currQ.qType == 'mc' || currQ.qType == 'mr' || currQ.qType == 'mr2') {
        qWrapper = document.createElement('UL');
		//qWrapper.tabIndex = '0';
        // for each answer choice
        for ( var choiceNum = 0; choiceNum < currQ.choices.length; choiceNum++) {
            myChoiceWrapper = document.createElement('LI');
            //this.fbSpaces[formNum][qNum][choiceNum] = myChoiceWrapper;
            myFBSpace = document.createElement('LABEL');
			this.fbSpaces[formNum][qNum][choiceNum] = myFBSpace;
            myFBSpace.htmlFor = 'f' + formNum + 'q' + qNum + 'choice' + (choiceNum + 1);
            myName = 'f' + formNum + 'q' + qNum;
            myInput = createNamedElement('INPUT', myName);
            myInput.id = 'f' + formNum + 'q' + qNum + 'choice' + (choiceNum + 1);
            
            if (currQ.qType == 'mc') {
                myInput.type = 'radio';
            } 
            else if (currQ.qType == 'mr' || currQ.qType == 'mr2') {
                myInput.type = 'checkbox';
            }
            myInput.tabIndex = 0;
            /* Call a function that is defined on the page each time a question is changed */
            myInput.onclick = function() {
                questionChange(myFQinstanceArray[myInstNum].attemptNum[myFormNum])
            };
            /*  // Modified to allow HTML in the answer options
            myChoice = document.createTextNode(currQ.choices[choiceNum]);
            myFBSpace.appendChild(myChoice);
            */
			
			myFBSpace.innerHTML = currQ.choices[choiceNum];
            myChoiceWrapper.appendChild(myFBSpace);
			myChoiceWrapper.appendChild(myInput);
            // if it is a table, place one input per cell
            if (currForm.formType == 'table') {
                myTableChoice = document.createElement('TD');
                qWrapper = document.createElement('UL');
                qWrapper.appendChild(myChoiceWrapper);
                myTableChoice.appendChild(qWrapper);
                if (this.myTableType == 'row') {
                    this.myTRs[qNum].appendChild(myTableChoice);
                } else {
                    this.myTRs[choiceNum].appendChild(myTableChoice);
                }
            } else { // otherwise, put them all together
                qWrapper.appendChild(myChoiceWrapper);
            }
            this.choices[formNum][qNum][choiceNum] = myInput; // store refs to the choices
        } // end for each answer choice            
    }
    // if the question is an image multiple choice
    else if (currQ.qType == 'img') {
        // for each answer choice
        for ( var choiceNum = 0; choiceNum < currQ.choices.length; choiceNum++) {
            qWrapper = document.createElement('DIV');
            qWrapper.className = 'imgMc';
            qWrapper.id = 'f' + formNum + '_q' + qNum + '_li' + choiceNum;
            myChoiceWrapper = document.createElement('SPAN');
            this.fbSpaces[formNum][qNum][choiceNum] = myChoiceWrapper;
            myImgLink = document.createElement('A');
            myImgLink.href = '#';
            myImgLink.onclick = function() {
                this.href = 1;
                myFormQuiz.evaluate(this.parentNode.parentNode.id);
                return false;
            };
            myImg = document.createElement('IMG');
            myImg.alt = currQ.altTags[choiceNum];
            myImg.id = 'f' + formNum + '_q' + qNum + '_img' + choiceNum;
            myImg.src = currQ.choices[choiceNum];
            myImgLink.appendChild(myImg);
            qWrapper.appendChild(myChoiceWrapper);
            qWrapper.appendChild(myImgLink)
            myFormEl.appendChild(qWrapper); // append the image to the form
            this.choices[formNum][qNum][choiceNum] = myImgLink; // store refs to the choices
        }
    }
    // if it is a drag and drop ordering question
    else if (currQ.qType == 'dnd') {
        qWrapper = document.createElement('OL');
        qWrapper.id = 'f' + formNum + '_q' + qNum + '_dnd';
        qWrapper.className = 'dndList';
        // for each answer choice
        for ( var choiceNum = 0; choiceNum < currQ.choices.length; choiceNum++) {
            myChoiceWrapper = document.createElement('LI');
            myChoiceWrapper.id = 'f' + formNum + '_q' + qNum + '_li' + choiceNum;
            /* Call a function that is defined on the page each time a question is changed */
            myChoiceWrapper.onclick = function() {
                questionChange(myFQinstanceArray[myInstNum].attemptNum[myFormNum])
            };
            /* */
            this.fbSpaces[formNum][qNum][choiceNum] = myChoiceWrapper;
            myChoice = document.createTextNode(currQ.choices[choiceNum]);
            myChoiceWrapper.appendChild(myChoice);
            qWrapper.appendChild(myChoiceWrapper);
            this.choices[formNum][qNum][choiceNum] = myChoiceWrapper; // store refs to the choices
        } // end for each answer choice
        initDND(qWrapper.id, 'f' + formNum + '_q' + qNum + '_li',
                currQ.choices.length);
        // if a drop-down    
    } else if (currQ.qType == 'dd') {
        myFBSpaceWrap = document.createElement('div');
        myFBSpaceWrap.className = 'ddWrap fr';
        myFBSpaceFloater = document.createElement('P');
        myFBSpaceFloater.className = 'fr';
        myFBSpaceFloater.style.marginRight = '0px';
        myFBSpace = document.createElement('SPAN');
        myFBSpace.className = 'fr';
        myFBSpace.style.display = 'block';
        myFBSpace.style.width = '29px';
        myFBSpace.style.height = '30px';
        myFBSpace.style.margin = '0px';
        myFBSpaceFloater.appendChild(myFBSpace);
        myFBSpaceWrap.appendChild(myFBSpaceFloater);
        qWrapper = document.createElement('DIV');
        qWrapper.className = 'fr';
        myChoiceWrapper = document.createElement('SELECT');
		myChoiceWrapper.id = 'qStimf' + formNum + 'q' + qNum;
        //myChoiceWrapper.className = "fl";
        // function to make drop downs exclusive so that the same value cannot be chosen on both
        if (currForm.questions[qNum].ddExclusive == true) {
            myChoiceWrapper.id = 'q' + (qNum + 1);
            var myLength = currForm.questions.length;
            myChoiceWrapper.onchange = function() {
                questionChange(myFQinstanceArray[myInstNum].attemptNum[myFormNum]);
                checkConflict('q', 1, myLength, this.id); // checkConflict is defined at the bottom of this file
            }
        } else {
            /* Call a function that is defined on the page each time a question is changed */
            myChoiceWrapper.onchange = function() {
                questionChange(myFQinstanceArray[myInstNum].attemptNum[myFormNum])
            };
            /* */
        }
        this.choices[formNum][qNum][0] = myChoiceWrapper; // store ref to the select el
        //this.choices[formNum][qNum][qNum] = myChoiceWrapper; // store ref to the select el
        //myChoiceWrapper.id = 'f'+formNum+'q'+qNum;
        // for each choice
        for ( var choiceNum = 0; choiceNum < currQ.choices.length; choiceNum++) {
            this.fbSpaces[formNum][qNum][choiceNum] = myFBSpace;
            myInput = document.createElement('OPTION');
            myInput.tabIndex = 0;
			if (choiceNum != 0) {
                myInput.value = choiceNum; // number the values of the options so we know later which is selected.
            } else {
                myInput.value = ''; // assign a null value to the blank option
            }
            myChoice = document.createTextNode(currQ.choices[choiceNum]);
            myInput.appendChild(myChoice);
            myChoiceWrapper.appendChild(myInput);
        }
        //myFBSpaceFloater.appendChild(myChoiceWrapper);
        qWrapper.appendChild(myChoiceWrapper);
        

    } // end if dd

    // for all types of questions
	if (currQ.qType == "dd") {
		myFormEl.appendChild(myStimPara);
	}
    if (currForm.formType != 'table' && currForm.formType != 'custom'
            && currForm.formType != 'imgMc') {
        myFormEl.appendChild(qWrapper);
    } else if (currForm.formType == 'custom') {
        document.getElementById(currForm.questions[qNum].qWrapEl).appendChild(
                qWrapper);
    }
	if (currQ.qType == "dd") {
		if (currForm.formType == 'table') {
            myTableChoice = document.createElement('TD');
            myTableChoice.appendChild(myFBSpaceWrap);
            myTableChoice.appendChild(qWrapper);
            if (this.myTableType == 'row') {
                this.myTRs[qNum].appendChild(myTableChoice);

            } else {
                this.myTRs[0].appendChild(myTableChoice);
            }
        } else if (currForm.formType != 'custom') {
            myFormEl.appendChild(myFBSpaceWrap);
        } else {
            document.getElementById(currForm.questions[qNum].qWrapEl).appendChild(myFBSpaceWrap);
        }		
	}
    if (currForm.formType != 'custom') {
        document.getElementById('formQuiz' + formNum).appendChild(myFormEl);
    }

    this.totalCorrect[formNum][qNum] = this.qNumChoiceCorrect(formNum, qNum); // store refs to the number of correct choices for each question
    this.answers[formNum][qNum] = currQ.answers; // store refs to the Answers
    this.qTypes[formNum][qNum] = currQ.qType; // store refs to the question types
    this.qFbTypes[formNum][qNum] = currQ.fbType; // store refs to the question fb type
}

FormQuiz.prototype.createMyForm = function(formNum, currForm) {
    var myFormEl = document.getElementById('formQuiz' + formNum);
    if ( myFormEl != null ) {
        $(myFormEl).remove();
    }
    
    if (currForm.formType != 'custom') {
        myFormEl = document.createElement('FORM');
        myFormEl.id = 'formQuiz' + formNum; // give the form an id so we can use it later in the onclick event.
    }

    var myFbWrap = document.getElementById('feedbackWrapper' + currForm);
    if ( myFbWrap != null ) {
        $(myFbWrap).html('');
    }
    
    myFormEl.className = 'formQuiz';
	// If a custom class is defined, add it
	if(currForm.customClass) $(myFormEl).addClass(currForm.customClass);
    // Add in a fieldset tag for Section 508 compliance
	var myFSet = document.createElement('FIELDSET');
	
	// If this is a table-based question
    if (currForm.formType == 'table') {
        var myColHead, myTableRows, myTableCols, myRowHead, myTable, myTableBody, myTR, myTH, myTHText, myTD;

        if (currForm.rowHead) {
            this.myTableType = 'col';
            myTableRows = currForm.rowHead.length;
            myTableCols = currForm.questions.length;
            myColHead = currForm.questions;
            myRowHead = currForm.rowHead;
        } else {
            this.myTableType = 'row';
            myTableRows = currForm.questions.length;
            myTableCols = currForm.colHead.length;
            myColHead = currForm.colHead;
            myRowHead = currForm.questions;
        }

        // Create the table
        myTable = document.createElement('TABLE');
        myTableBody = document.createElement('TBODY');
        var myTR = document.createElement('TR');
        var myTH = document.createElement('TH');
        myTH.className = 'col';
        myTH.scope = "col";
        myTHText = document.createTextNode('');
        myTH.appendChild(myTHText);
        myTR.appendChild(myTH);

        // Create the column headers
        for ( var colNum = 0; colNum < myTableCols; colNum++) {
            myTH = document.createElement('TH');
            myTH.className = 'col';
            myTH.scope = "col";
            myTH.innerHTML = myColHead[colNum].stimulus;
            myTR.appendChild(myTH);
        }
        myTableBody.appendChild(myTR);

        // Create the rows and row headers
        this.myTRs = new Array();
        for ( var rowNum = 0, r = myTableRows; rowNum < r; rowNum++) {
            myTR = document.createElement('TR');
            myTH = document.createElement('TH');
            myTH.className = 'row';
            myTH.scope = "row";
            myTH.innerHTML = myRowHead[rowNum].stimulus;
            myTR.appendChild(myTH);
            myTableBody.appendChild(myTR);
            // Add the row to the table rows array
            this.myTRs[rowNum] = myTR;
        }
        myTable.appendChild(myTableBody);
        myFormEl.appendChild(myTable);
    }
	//myFormEl.appendChild(myFSet);
    return myFormEl;
}

FormQuiz.prototype.createSubmitButton = function(myFormEl, myButtonText, num) {
    var myPara = document.createElement('P');
    myPara.className = 'formSubmit';
    //myPara.tabIndex = '0';

    var myLink = document.createElement('A');
    myLink.href = '#';
    myLink.className = 'buttonText';
    myLink.id = 'submitBtn';

    var currentNum = "'" + num + "'";

    myLink.onclick = function() {
        // TODO: this won't work if there are multiple quiz objects on a page...
        myFormQuiz.evaluate(this.parentNode.parentNode.id);
        return false;
    };

    var mySpan = document.createElement('SPAN');

    mySpan.innerHTML = myButtonText;
    myLink.appendChild(mySpan);
    myPara.appendChild(myLink);
    myFormEl.appendChild(myPara);
};

/**
 * Creates and writes to the page the FB div for each question. 
 * Should be customized for each project. Note that the first three lines of displayQuestionFb 
 * may also need to be customized per project.
 * @name createFbEl
 * @param {Number} currForm The number of the current form
 * @param {Number} currQ    The number of the current question
 * @returns {Object} A reference to the feedback element
 */
/*  
 * Change Log
 *   2007.06.17 - ALP - Removed the currQ parameter, as it was not needed.
 *   2010.06.25 - VRB - Modified to work for DIA shell
 */
FormQuiz.prototype.createFbEl = function(currForm, currQ) {
    var currFb, fbCloseLink, fbCloseImg, fbTopOuter, fbTopInner, fbTop, fbMiddle, fbContent, fbMiddleInner, fbBottomOuter, fbBottomInner, fbBottom;
    var currFormData = this.quizData.forms[currForm];
    currFb = 'feedbackWrapper' + currForm; // feedback Wrapper Div Name

    fbContent = document.createElement('DIV'); // Just Need one div to create jQuery dialog box.  No title attribute as there will only be text
    fbWrapper = document.createElement('DIV');
    if (currQ != -1) {
        fbContent.id = 'fbContent' + currForm + "_" + currQ;
        fbWrapper.id = 'fbContent' + currForm + "_" + currQ + 'wrap';
    } else {
        fbContent.id = 'fbContent' + currForm;
        fbWrapper.id = 'fbContent' + currForm + 'wrap';
    }
    fbContent.className = "fbPopContent";
    //fbContent.tabindex = "0";
    fbWrapper.appendChild(fbContent);
    document.getElementById(currFb).appendChild(fbWrapper); // attach to feedbackWrapper
    return fbContent;
}

/**
 * Method configures the FormQuiz for a post assessment
 */
FormQuiz.prototype.setPostAssessment = function() {
    this.maxAttempts = 1;
    this.isChoiceFb = false;
    this.disableOnCorrect = true;
    this.isPostAssessment = true;
}

/**
 * Method to offset the position of the jQuery feedback dialog box from its normal position.
 * @param {Number} x
 * @param {Number} y
 */
FormQuiz.prototype.positionFeedbackOffset = function(x, y) {
    this.feedbackPositionOffset = true;
    this.feedbackPosition = false;
    this.feedbackX = x;
    this.feedbackY = y;
}
FormQuiz.prototype.offsetFeedback = FormQuiz.prototype.positionFeedbackOffset;

/**
 *  Method to designate the absolute x,y position where the jQuery dialog should appear
 *  @param {Number} x  a number or string representing position within viewport: 'center', 'left', 'right', 'top', 'bottom'. 
 *  @param {Number} y  a number or string representing position within viewport: 'center', 'left', 'right', 'top', 'bottom'. 
 */
FormQuiz.prototype.positionFeedback = function(x, y) {
    this.feedbackPositionOffset = false;
    this.feedbackPosition = true;
    this.feedbackX = x;
    this.feedbackY = y;
}

/**
 * Method to allow users to skip the question
 */
FormQuiz.prototype.allowUserToSkip = function() {
    this.allowUserToSkipQuestion = true;
}

/*
 Method: evaluate
 The function that is called when the learner submits the form. Evaluates whether the answer(s) is correct and triggers feedback accordingly.

 Parameters:
 formId    -    The ID of the form that is being submitted.

 Change Log:
 2010.06.25 VRB - Added call to <initJQueryDialogs> at end of function.
 2010.12.08 VRB - Moved initJQueryDialogs call.
 2010.12.08 VRB - Removed some parameters from initJQueryDialogs call as it is now part of the object 
 2010.12.09 VRB - Documented changes implemented previously:
 Added ability to show answers when user skips question (if allowUserToSkipQuestion is set to true)
 Added call to externalLinks() to process hyperlinks with external attribute
 2014.08.31 ALP - Adjusted to show choice feedback on incorrect choices on all attempts. Previously, it was only showing up on final attempts.

 */
FormQuiz.prototype.evaluate = function(formId, e) {
    this.correctArray = new Array();
    this.numCorrect = new Array();
    this.numIncorrect = new Array();
    var nextQuestion;
    var currForm = 1 * (formId.substring(formId.indexOf('formQuiz') + 8));
    if (this.attemptNum[currForm] < this.maxAttempts) {
        var isSelected, completed;
        var chosenCorrect = new Array();
        var chosenIncorrect = new Array();
        var qLength = this.qTypes[currForm].length;
        var numComplete = 0;

        var start;
        var stop;
        if (this.quizType == 'branching') {
            start = this.currentQuestion;
            stop = this.currentQuestion + 1;
        } else {
            start = 0; // default type quizzes start from the 0 index on each form.
            stop = qLength;
        }

        // calculate numComplete
        // for each question
        for ( var qNum = start; qNum < stop; qNum++) {
            var qNumCorrect = new Array();
            var qNumIncorrect = new Array();
            var qChosenCorrect = new Array();
            var qChosenIncorrect = new Array();
            var qCorrect = new Array();
            // for each choice
            if (this.qTypes[currForm][qNum] != 'dnd' && this.qTypes[currForm][qNum] != 'img') { // if the question is not a drag and drop or image multiple choice
                if (this.qTypes[currForm][qNum] != 'dd') { // if the question is not a drop down
                    for ( var choiceNum = 0; choiceNum < this.answers[currForm][qNum].length; choiceNum++) {
                        if (this.choices[currForm][qNum][choiceNum].checked) {
                            numComplete++;
                            break;
                        }
                    }
                } else if (this.qTypes[currForm][qNum] == 'dd') {
                    if (this.choices[currForm][qNum][0].value != '') {
                        numComplete++;
                    }
                }
            } else {
                numComplete++;
            }
        }
        
        var questionsToComplete = 1;
        if ( this.quizType != 'branching' ) {
            questionsToComplete = this.qTypes[currForm].length
        }
        
        // User didn't answer the question...
        if (numComplete != questionsToComplete ) {
            if (!this.allowUserToSkipQuestion) { // when user cannot skip question, alert user they must answer the question...
                if (this.qTypes[currForm].length == 1 || this.quizType == 'branching') {
                    alert('Please answer the question.');
                } else {
                    alert('Please answer every question.');
                }
                return;
            } else { // when quiz allows user to skip question, they can click submit to receive answer.
                for ( var qNum = start; qNum < stop; qNum++) {
                    numComplete++;
                    var chosenCorrect = new Array();
                    switch (this.qTypes[currForm][qNum]) { // switch on the question type
                    case ('dd'): // if the current question is a drop-down
                        for ( var v = 0, w = this.quizData.forms[currForm].questions[qNum].choices.length; v < w; v++) {
                            if (this.answers[currForm][qNum][v] == 1) {
                                this.displayChoiceFb(
                                        this.fbSpaces[currForm][qNum][v],
                                        'correct',currForm,qNum);
                                // show the correct answer in the drop down box.
                                this.choices[currForm][qNum][0].value = v;
                                break;
                            }
                        }
                        break;
                    case ('dnd'): // if the question is a drag and drop
                        // NOT YET IMPLEMENTED
                        break;
                    default:
                        // if the current question is anything else
                        // show all the correct answers
                        choiceLength = this.answers[currForm][qNum].length;
                        for ( var choiceNum = 0; choiceNum < choiceLength; choiceNum++) { // for each choice
                            if (this.answers[currForm][qNum][choiceNum] == 1) {
                                this.displayChoiceFb(
                                        this.fbSpaces[currForm][qNum][choiceNum],
                                        'correct',currForm,qNum);
                                chosenCorrect[chosenCorrect.length] = choiceNum;
                            }
                        } // end for each choice
                        break;
                    } // end questionType switch
                    qChosenCorrect[qNum] = chosenCorrect;
                } // end for each question
                this.chosenCorrect[currForm] = qChosenCorrect;
                
                // for each question 
                for ( var qNum = start; qNum < stop; qNum++) { 
                    if (this.quizData.forms[currForm].questions[qNum].fbType) { // if there is question-level fb
                        this.displayQuestionFb(currForm, qNum, true);
                    }
                    if (this.quizData.forms[currForm].questions[qNum].qType == 'dnd') { // and it is a drag and drop
                        if (this.disableOnCorrect) { // if it should be disabled on correct
                            removeDND(); // prevent the learner from dragging
                        }
                    }
                    formQuizQComplete(isCorrect, currForm, qNum) // call the question complete function
                }

                this.formCorrect[currForm] = true;
                if (this.quizData.forms[currForm].fbType) { // if there is form-level fb
                    this.displayFormFb(currForm, true);
                } else { // even if there is no form-level feedback,
                    if (this.quizData.forms[currForm].questions[0].qType != 'dnd') { // do not disable dnd's, because it grays the text in IE
                        if (this.disableOnCorrect) { // if the form should be disabled on correct
                            this.disableFormToggle(currForm, true); // disable the form.
                        }
                    }
                    if (this.disableOnCorrect) { // if the form should be disabled on correct
                        this.attemptNum[currForm] = this.maxAttempts; // set the attempts to the max attempts
                    }
                }
                formQuizQComplete('end'); // call the question msgr function
                this.initJQueryDialogs(currForm);
                formQuizComplete('end', currForm, this); // call the form msgr function
            }
        }
        // end user did not answer question

        // if all questions are answered
        else {
            for ( var qNum = start; qNum < stop; qNum++) { // for each question
                numComplete++;
                var numChoiceCorrect = 0;
                var numChoiceIncorrect = 0;
                var chosenCorrect = new Array();
                var chosenIncorrect = new Array();
                var choiceCorrect = false;
                switch (this.qTypes[currForm][qNum]) { // switch on the question type
                case ('dd'): // if the current question is a drop-down
                    if (this.answers[currForm][qNum][this.choices[currForm][qNum][0].value] == 1) {
                        choiceCorrect = true;
                    } else {
                        choiceCorrect = false;
                    }
                    switch (choiceCorrect) {
                    case (true):
                        numChoiceCorrect++;
						//console.log("DISPLAYING CHOICE FEEDBACK CORRECT");
                        this.displayChoiceFb(this.fbSpaces[currForm][qNum][this.choices[currForm][qNum][0].value],'correct',currForm,qNum,this.choices[currForm][qNum][0].value);
                        chosenCorrect[chosenCorrect.length] = numChoiceCorrect;
                        break;

                    case (false): // if the current choice should not be selected (incorrect)
                        numChoiceIncorrect++;
                        chosenIncorrect[chosenIncorrect.length] = numChoiceIncorrect;
                        //console.log("DISPLAYING CHOICE FEEDBACK SHOULD CHECK ONLY ON LAST ATTEMPT");
						if (this.attemptNum[currForm] == this.maxAttempts - 1) { // if it is the last attempt
                            // show the shouldCheck feedback
							this.displayChoiceFb( this.fbSpaces[currForm][qNum][this.choices[currForm][qNum][0].value],'shouldCheck',currForm,qNum,this.choices[currForm][qNum][0].value);
                            for ( var v = 0, w = this.quizData.forms[currForm].questions[qNum].choices.length; v < w; v++) {
                                if (this.answers[currForm][qNum][v] == 1) {
                                    // show the correct answer in the drop down box.
                                    this.choices[currForm][qNum][0].value = v;
                                    break;
                                }
                            }
                        } 
                        else { // if it is any other attempt
							//console.log("DISPLAYING CHOICE FEEDBACK INCORRECT");
                            this.displayChoiceFb(this.fbSpaces[currForm][qNum][this.choices[currForm][qNum][0].value],'incorrect',currForm,qNum,this.choices[currForm][qNum][0].value);
                        }
                        break;
                    }
                    break;

                case ('dnd'): // if the question is a drag and drop
                    // todo search for qNum and replace with qNum
                    choiceLength = this.answers[currForm][qNum].length;
                    var myItems = document.getElementById('f' + currForm + '_q' + qNum + '_dnd').getElementsByTagName("li");
                    var prefix = 'f' + currForm + '_q' + qNum + '_li';
                    var prefixLength = prefix.length;
                    var currId;
                    // for each choice
                    for ( var choiceNum = 0; choiceNum < choiceLength; choiceNum++) {
                        currId = myItems[choiceNum].id.substring(prefixLength);
                        if (currId == this.answers[currForm][qNum][choiceNum]) {
                            choiceCorrect = true;
                        } else {
                            choiceCorrect = false;
                        }
                        switch (choiceCorrect) {
                        case (true):
                            numChoiceCorrect++;
                            this.displayChoiceFb(myItems[choiceNum], 'correct',currForm,qNum);
                            chosenCorrect[chosenCorrect.length] = choiceNum;
                            break;

                        case (false): // if the current choice is wrong
                            numChoiceIncorrect++;
                            chosenIncorrect[chosenIncorrect.length] = choiceNum;
                            this.displayChoiceFb(myItems[choiceNum],
                                    'incorrect',currForm,qNum);
                            break;
                        }
                    }
                    // if it is the last attempt
                    if (this.attemptNum[currForm] == this.maxAttempts - 1) {
                        var temp, choiceNum;
                        for (choiceNum = 0; choiceNum < choiceLength; choiceNum++) {
                            temp = document.getElementById('f' + currForm + '_q' + qNum + '_dnd').removeChild(document.getElementById(prefix + this.answers[currForm][qNum][choiceNum]));
                            // if the question is correct
                            if (temp.className == this.fbCorrectClass) {
                                // do nothing
                            } else { // otherwise, change to should check
                                temp.className = this.fbShouldCheckClass;
                            }
                            document.getElementById('f' + currForm + '_q' + qNum + '_dnd').appendChild(temp);
                            removeDND();
                        }
                    }
                    break;

                default: // if the current question is anything else
                    choiceLength = this.answers[currForm][qNum].length;
                    
                    // for each choice
                    for ( var choiceNum = 0; choiceNum < choiceLength; choiceNum++) {
                        
                        // if it is not an imgMc question
                        if (this.qTypes[currForm][qNum] != 'img') {
                            isSelected = this.choices[currForm][qNum][choiceNum].checked;
                            if (isSelected) {
                                completed = true;
                                if (this.quizData.forms[currForm].questions[qNum].fbState != 'noCorrect') {
                                    choiceCorrect = this.checkChoiceCorrect(
                                            currForm, qNum, choiceNum);
									// if it is a question with no correct answer.
                                } else {
                                    choiceCorrect = 'noCorrect';
                                    chosenCorrect[chosenCorrect.length] = choiceNum;
                                    chosenIncorrect[chosenIncorrect.length] = choiceNum;
                                }
                            } else {
                                choiceCorrect = 'noSelect';
                            }
                        } 
                        else { // if this is an image-based question
                            if ((this.choices[currForm][qNum][choiceNum].href.substring(this.choices[currForm][qNum][choiceNum].href.length - 1)) * 1 == 1 && this.answers[currForm][qNum][choiceNum] == 1) {
                                choiceCorrect = true;
                            } else if (this.answers[currForm][qNum][choiceNum] == 1) {
                                choiceCorrect = 'noSelect';
                            } else if ((this.choices[currForm][qNum][choiceNum].href.substring(this.choices[currForm][qNum][choiceNum].href.length - 1)) * 1 == 1) {
                                choiceCorrect = false;
                            } else {
                                choiceCorrect = '';
                            }
                        }

                        switch (choiceCorrect) 
                        {
                            case (true):
                                numChoiceCorrect++;
                                this.displayChoiceFb(this.fbSpaces[currForm][qNum][choiceNum],'correct',currForm,qNum);
                                chosenCorrect[chosenCorrect.length] = choiceNum;
                                break;
    
                            case (false): // if the current choice should not be selected (incorrect)
                                numChoiceIncorrect++;
                                chosenIncorrect[chosenIncorrect.length] = choiceNum;
								//if (this.attemptNum[currForm] == this.maxAttempts - 1) {
									this.displayChoiceFb(this.fbSpaces[currForm][qNum][choiceNum],'incorrect',currForm,qNum);
                                //}
                                break;
    
                            case ('noSelect'): // if the current choice is not selected
                                // if it is the last attempt and this choice should have been selected,
                                if (this.attemptNum[currForm] == this.maxAttempts - 1 && this.answers[currForm][qNum][choiceNum] == 1) {
                                    this.displayChoiceFb(this.fbSpaces[currForm][qNum][choiceNum], 'shouldCheck',currForm,qNum);
                                    // otherwise, be sure there is no choice-level feedback
                                } 
                                else {
                                    this.displayChoiceFb(this.fbSpaces[currForm][qNum][choiceNum],'none',currForm,qNum);
                                }
                                break;
    
                            case ('noCorrect'): // if the current choice is selected for a no correct answer question
                                this.displayChoiceFb(
                                        this.fbSpaces[currForm][qNum][choiceNum],
                                        'shouldCheck',
										this.qTypes[currForm][qNum]);
                                break;
                        } // end choiceCorrect switch 
                    } // end for each choice
                    break;

                } 
                // end questionType switch
                
                qNumCorrect[qNum] = numChoiceCorrect;
                qNumIncorrect[qNum] = numChoiceIncorrect;
                qChosenCorrect[qNum] = chosenCorrect;
                qChosenIncorrect[qNum] = chosenIncorrect;
            } 
            // end for each question
            
            this.numCorrect[currForm] = qNumCorrect;
            this.numIncorrect[currForm] = qNumIncorrect;
            this.chosenCorrect[currForm] = qChosenCorrect;
            this.chosenIncorrect[currForm] = qChosenIncorrect;
            var formIsCorrect = true;
            
            // for each question 
            for ( var qNum = start; qNum < stop; qNum++) { 
                // as long as there is a correct answer
                if (this.quizData.forms[currForm].questions[qNum].fbState != 'noCorrect') {
                    var isCorrect = this.checkQuestionCorrect(currForm, qNum);
                    // otherwise, set isCorrect to false
                } else {
                    var isCorrect = false;
                    formQuizQComplete('end'); // call the question msgr function
                }

                if (this.quizData.forms[currForm].questions[qNum].fbType) { // if there is question-level fb
                    this.displayQuestionFb(currForm, qNum, isCorrect);
                    if ( this.quizType == 'branching') {
                        nextQuestion = this.getNextQuestion(currForm, qNum, isCorrect);
                    }
                }
                
                if (!isCorrect) {
                    formIsCorrect = false;
                } 
                else { // if the question is correct
                    if (this.quizData.forms[currForm].questions[qNum].qType == 'dnd') { // and it is a drag and drop
                        if (this.disableOnCorrect) { // if it should be disabled on correct
                            removeDND(); // prevent the learner from dragging
                        }
                    }
                }
                
                formQuizQComplete(isCorrect, currForm, qNum) // call the question complete function
            }

            this.formCorrect[currForm] = formIsCorrect;

            // if there is form-level fb
            if (this.quizData.forms[currForm].fbType) { 
                this.displayFormFb(currForm, formIsCorrect);
            } 
            else { // even if there is no form-level feedback,
                if (isCorrect) { // if it is correct,
                    if (this.quizData.forms[currForm].questions[0].qType != 'dnd') { // do not disable dnd's, because it grays the text in IE
                        if (this.disableOnCorrect) { // if the form should be disabled on correct
                            this.disableFormToggle(currForm, true); // disable the form.
                        }
                    }
                    if (this.disableOnCorrect) { // if the form should be disabled on correct
                        this.attemptNum[currForm] = this.maxAttempts; // set the attempts to the max attempts
                    }
                }
            }
            
            this.attemptNum[currForm]++;
            
            // if this is the last attempt
            if (this.attemptNum[currForm] == this.maxAttempts && !formIsCorrect) { 
                if (this.quizData.forms[currForm].questions[0].qType != 'dnd') { // do not disable dnd's, because it grays the text in IE
                    this.disableFormToggle(currForm, true); // disable the form
                }
                // Initialize jQuery
                formQuizQComplete('end'); // call the question msgr function
                this.initJQueryDialogs(currForm);
                formQuizComplete('end', currForm, this); // call the form msgr function
            } 
            else {
                this.initJQueryDialogs(currForm);
                formQuizComplete(formIsCorrect, currForm, this); // call the form-level complete function    
            }
            
            if ( !isCorrect && this.quizType == 'branching') {
                this.disableFormToggle(currForm, true); // disable the form.
                this.currentQuestion = nextQuestion;
                if ( this.currentQuestion != -1 ) {
                    $('#nextQuestion').show();
                    $('#submitBtn').hide();
                }
                
            }
        } // end if all questions have been answered
    } // end if this attempt was less than the max allowed
    else {
        this.initJQueryDialogs(currForm);
    }
    externalLinks(); // Adds functionality to each a tag within the feedback with a rel="external" to open the link in a new window.  Avoids the need to use invalid XHTML of target="_blank".
}

/*
 Method: checkChoiceCorrect
 Determines whether the current choice is correct. Only called for selected choices.

 Parameters:
 currForm    -    The number of the current form
 currQ - The number of the current question
 currChoice - The number of the current choice
 */
FormQuiz.prototype.checkChoiceCorrect = function(currForm, currQ, currChoice) {
    var isCorrect;
    switch (this.answers[currForm][currQ][currChoice]) { // switch on the correct answer for the current choice

    case (1): // if the current choice should be selected (correct)
        isCorrect = true;
        break;

    case (0): // if the current choice should not be selected (incorrect)                    
        isCorrect = false;
        break;

    } // end current answer switch
    return isCorrect;
}

/*
 Method: checkQuestionCorrect
 Determines whether the current question is correct

 Parameters:
 currForm - The number of the current form
 currQ -    The number of the current question
 */
FormQuiz.prototype.checkQuestionCorrect = function(currForm, currQ) {
    var totCorrect = this.totalCorrect[currForm][currQ];
    // if any wrong choices are selected and it is not an image multiple choice
    if (this.numIncorrect[currForm][currQ] > 0 && this.quizData.forms[currForm].questions[currQ].qType != 'img') { 
        return false;
    } else {
        switch (totCorrect) {

        case (this.numCorrect[currForm][currQ]): // if the number of correct choices equals the number of actual correct choices
            this.qCorrect[currForm][currQ] = true;
            return true;
            break;

        default:
            this.qCorrect[currForm][currQ] = false;
            return false;
            break;

        } // end totCorrect switch
    }
}

/*
 Method: qNumChoiceCorrect
 Finds the number of actual correct choices for the current question. Called in constructor.

 Parameters:
 currForm - The number of the current form
 currQ -    The number of the current question
 */
FormQuiz.prototype.qNumChoiceCorrect = function(currForm, currQ) {
    numChoices = this.quizData.forms[currForm].questions[currQ].choices.length;
    var numCorrect = 0;
    for ( var choiceNum = 0; choiceNum < numChoices; choiceNum++) {
        if (this.quizData.forms[currForm].questions[currQ].qType != 'dnd') {
            if (this.quizData.forms[currForm].questions[currQ].answers[choiceNum] == 1) {
                numCorrect++;
            }
        } else { // if it is a drag and drop, every choice must be correctly placed.
            numCorrect++;
        }
    }
    return numCorrect;
}

/*
 Method: displayChoiceFb
 Displays the visual feedback (X, check, arrow) for each question.

 Parameters:
 fbSpace    -    The element that will contain the X/OK/Arrow
 type - The type of feedback to display

 Change Log:
 2010.12.09 VRB - Documenting previous change: added isPostAssessment lines
 2014.08.06	ALP - Added ability to pass in currForm, qNum, and choiceNum and added Section 508 hidden text that communicates the information from the visual check, X and arrow choice feedback. Tested for qTypes of mc, mr, and dd.
 */
FormQuiz.prototype.displayChoiceFb = function(fbSpace, type, currForm, qNum, choiceNum) {
    if (this.isChoiceFb) {
        var qType = this.qTypes[currForm][qNum];
		var correctAns = "";
		if (qType == "dd") {
			var corrNum;
			for (var i=0, j=this.answers[currForm][qNum].length; i<j; i++) {
				if (this.answers[currForm][qNum][i] == 1) {
					corrNum = i;
					break;	
				}
			}
			if (this.stimuli[currForm][qNum].innerHTML.indexOf("<span")!= -1) {
				this.stimuli[currForm][qNum].innerHTML = this.stimuli[currForm][qNum].innerHTML.substr(0,this.stimuli[currForm][qNum].innerHTML.indexOf("<span"));
			}
		}
		if (fbSpace.innerHTML.indexOf("<span")!= -1) {
			fbSpace.innerHTML = fbSpace.innerHTML.substring(fbSpace.innerHTML.indexOf("</span>")+7);
		}
		switch (type) {
        case ('correct'):
			if (qType == "mr2"){
				fbSpace.parentNode.className = this.fbCorrectClass;
					fbSpace.innerHTML = "<span class='sect508'>(You selected) </span>"+fbSpace.innerHTML;
			}
            else {
				if (qType != "dd") {
					fbSpace.parentNode.className = this.fbCorrectClass;
					fbSpace.innerHTML = "<span class='sect508'>(correctly selected) </span>"+fbSpace.innerHTML;
				} else {
					fbSpace.className = this.fbCorrectClass;
					this.stimuli[currForm][qNum].innerHTML = this.stimuli[currForm][qNum].innerHTML + "<span class='sect508'>("+this.quizData.forms[currForm].questions[qNum].choices[corrNum]+" was correctly selected.)</span>";
				}
			}
            break;
        case ('incorrect'):
            if (qType != "dd") {
				fbSpace.parentNode.className = this.fbIncorrectClass;
				fbSpace.innerHTML = "<span class='sect508'>(incorrectly selected) </span>"+fbSpace.innerHTML;
			} else {
				fbSpace.className = this.fbIncorrectClass;
				this.stimuli[currForm][qNum].innerHTML = this.stimuli[currForm][qNum].innerHTML + "<span class='sect508'>("+this.quizData.forms[currForm].questions[qNum].choices[choiceNum]+" was incorrectly selected.)</span>";
				this.answers[currForm][qNum]
			}
            break;
        case ('shouldCheck'):
			if (qType != "mr2"){
				if (qType != "dd") {
				fbSpace.parentNode.className = this.fbShouldCheckClass;
				fbSpace.innerHTML = "<span class='sect508'>(should have selected) </span>"+fbSpace.innerHTML;
				} else {
					fbSpace.className = this.fbShouldCheckClass;
					this.stimuli[currForm][qNum].innerHTML = this.stimuli[currForm][qNum].innerHTML + "<span class='sect508'>("+this.quizData.forms[currForm].questions[qNum].choices[corrNum]+" should have been selected.)</span>";
				}
			}
            break;

        case ('none'):
            if (qType != "dd") {
				fbSpace.parentNode.className = '';
				fbSpace.innerHTML = "<span class='sect508'>(not selected) </span>"+fbSpace.innerHTML;
			} else {
				fbSpace.className = '';
			}
            break;
        }
    } else if (this.isPostAssessment) {
        if (type == "incorrect")
            fbSpace.className = this.fbIncorrectClass;
    }
}

/*
 Method: displayQuestionFb
 Displays the textual feedback for each question. Big and ugly. Should customise first three lines to match project.

 Parameters:
 currForm - The number of the current form
 currQ - The number of the current question
 isCorrect - Boolean. Whether the question is correct

 Change Log:
 2010.12.09 VRB - Documenting previous change: implemented part type feedback.

 */
FormQuiz.prototype.displayQuestionFb = function(currForm, currQ, isCorrect) {
    //var myFbHead = this.qFbEl[currForm][currQ].parentNode.parentNode.parentNode;
    //alert(myFbHead.tagName);
    var myFbContent = this.qFbEl[currForm][currQ];
    //myFbHead.className = 'feedback';
    var quizDataCurrQuestion = this.quizData.forms[currForm].questions[currQ];
    switch (isCorrect) {
        case (true):
            var posFb = '';
            switch (this.qFbTypes[currForm][currQ]) { // switch on fb type
    
            case ('rs'):
                if (quizDataCurrQuestion.feedback[this.chosenCorrect[currForm][currQ]][this.attemptNum[currForm]]) {
                    posFb += quizDataCurrQuestion.feedback[this.chosenCorrect[currForm][currQ]][this.attemptNum[currForm]];
                } else {
                    posFb += quizDataCurrQuestion.feedback[this.chosenCorrect[currForm][currQ]][0];
                }
				
                break;
    
            default: // for pn, part, mrPartRandom
    
                if (quizDataCurrQuestion.feedback.positive[this.attemptNum[currForm]]) {
                    posFb = quizDataCurrQuestion.feedback.positive[this.attemptNum[currForm]];
                } else {
                    posFb = quizDataCurrQuestion.feedback.positive[0];
                }
                break;
            } // end fbType switch
            myFbContent.innerHTML = posFb + '<span class="sect508">End of pop up. Select Tab to go to the Close button.</span>';
            break;
    
        case (false):
            var negFb = '';
            switch (this.qFbTypes[currForm][currQ]) {// switch on fb type
    
            case ('pn'):
                if (quizDataCurrQuestion.feedback.negative[this.attemptNum[currForm]]) {
                    negFb = quizDataCurrQuestion.feedback.negative[this.attemptNum[currForm]];
                } else {
                    negFb = quizDataCurrQuestion.feedback.negative[0];
                }
                break; // end pn
    
            case ('rs'):
                if (quizDataCurrQuestion.feedback[this.chosenIncorrect[currForm][currQ]][this.attemptNum[currForm]]) {
                    negFb += quizDataCurrQuestion.feedback[this.chosenIncorrect[currForm][currQ]][this.attemptNum[currForm]];
                } else {
                    negFb += quizDataCurrQuestion.feedback[this.chosenIncorrect[currForm][currQ]][0];
                }
                break; // end rs
    
            case ('part'):
                if (this.chosenCorrect.length == 0
                        || this.chosenCorrect[currForm][currQ][0] == undefined) { // No correct Answers
                    if (quizDataCurrQuestion.feedback.negative[this.attemptNum[currForm]]) {
                        negFb = quizDataCurrQuestion.feedback.negative[this.attemptNum[currForm]];
                    } else {
                        negFb = quizDataCurrQuestion.feedback.negative[0];
                    }
                } else { // has at least one correct answer...
                    if (quizDataCurrQuestion.feedback.negative[this.attemptNum[currForm]]) {
                        negFb = quizDataCurrQuestion.feedback.partial[this.attemptNum[currForm]];
                    } else {
                        negFb = quizDataCurrQuestion.feedback.partial[0];
                    }
    
                }
                break; // end part
    
            case ('mrPartRandom'):
                if (this.attemptNum[currForm] != this.maxAttempts - 1) {
                    if (this.numIncorrect[currForm][currQ] > 0) {
                        if (quizDataCurrQuestion.feedback.baseNeg) {
                            negFb = quizDataCurrQuestion.feedback.baseNeg;
                        }
                        var total = this.chosenIncorrect[currForm][currQ].length;
                        var randomNum = Math.floor(Math.random() * total);
                        if (quizDataCurrQuestion.feedback.randomNeg[randomNum][this.attemptNum[currForm]]) {
                            negFb += quizDataCurrQuestion.feedback.randomNeg[randomNum][this.attemptNum[currForm]];
                        } else {
                            negFb += quizDataCurrQuestion.feedback.randomNeg[randomNum][0];
                        }
                        //negFb = 'You have selected ' + numIncorrect + ' incorrect answers.';
                        if (this.numCorrect[currForm][currQ] > 0) {
                            if (quizDataCurrQuestion.feedback.partial) {
                                negFb += '<br /><br />' + quizDataCurrQuestion.feedback.partial;
                            }
                        }
                    } else {
                        negFb = quizDataCurrQuestion.feedback.partial;
                    }
                } else {
                    negFb = quizDataCurrQuestion.feedback.negative;
                }
                break; // end mrPartRandom
    
            } // end fbType switch
            myFbContent.innerHTML = negFb + '<span class="sect508">End of pop up. Select Tab to go to the Close button.</span>';
            break;

    } // end isCorrect switch
}



FormQuiz.prototype.getNextQuestion = function(currForm, currQ, isCorrect) {
    var nextQuestion = 0;
    var questionData = this.quizData.forms[currForm].questions[currQ];
    switch (isCorrect) {
        case (true):
            switch (this.qFbTypes[currForm][currQ]) { // switch on fb type
                case ('rs'):
                    if (questionData.links[this.chosenCorrect[currForm][currQ]][this.attemptNum[currForm]]) {
                        nextQuestion = questionData.links[this.chosenCorrect[currForm][currQ]][this.attemptNum[currForm]];
                    } else {
                        nextQuestion = questionData.links[this.chosenCorrect[currForm][currQ]][0];
                    }
                    break;
        
                default: // for pn, part, mrPartRandom
                    if (questionData.links.positive[this.attemptNum[currForm]]) {
                        nextQuestion = questionData.links.positive[this.attemptNum[currForm]];
                    } else {
                        nextQuestion = questionData.links.positive[0];
                    }
                    break;
            } // end fbType switch
            break;
    
        case (false):
            switch (this.qFbTypes[currForm][currQ]) {// switch on fb type
                case ('pn'):
                    if (questionData.links.negative[this.attemptNum[currForm]]) {
                        nextQuestion = questionData.links.negative[this.attemptNum[currForm]];
                    } else {
                        nextQuestion = questionData.links.negative[0];
                    }
                    break; // end pn
        
                case ('rs'):
                    if (questionData.links[this.chosenIncorrect[currForm][currQ]][this.attemptNum[currForm]]) {
                        nextQuestion = questionData.links[this.chosenIncorrect[currForm][currQ]][this.attemptNum[currForm]];
                    } else {
                        nextQuestion = questionData.links[this.chosenIncorrect[currForm][currQ]][0];
                    }
                    break; // end rs
        
                case ('part'):
                    if (this.chosenCorrect.length == 0
                            || this.chosenCorrect[currForm][currQ][0] == undefined) { // No correct Answers
                        if (questionData.links.negative[this.attemptNum[currForm]]) {
                            nextQuestion = questionData.links.negative[this.attemptNum[currForm]];
                        } else {
                            nextQuestion = questionData.links.negative[0];
                        }
                    } else { // has at least one correct answer...
                        if (questionData.links.negative[this.attemptNum[currForm]]) {
                            nextQuestion = questionData.links.partial[this.attemptNum[currForm]];
                        } else {
                            nextQuestion = questionData.links.partial[0];
                        }
                    }
                    break; // end part
        
                case ('mrPartRandom'):
                    if (this.attemptNum[currForm] != this.maxAttempts - 1) {
                        if (this.numIncorrect[currForm][currQ] > 0) {
                            if (questionData.links.baseNeg) {
                                nextQuestion = questionData.links.baseNeg;
                            }
                            var total = this.chosenIncorrect[currForm][currQ].length;
                            var randomNum = Math.floor(Math.random() * total);
                            
                            if (questionData.links.randomNeg[randomNum][this.attemptNum[currForm]]) 
                            {
                                nextQuestion = questionData.links.randomNeg[randomNum][this.attemptNum[currForm]];
                            } else {
                                nextQuestion = questionData.links.randomNeg[randomNum][0];
                            }
                            
                            if (this.numCorrect[currForm][currQ] > 0) {
                                if (questionData.links.partial) {
                                    nextQuestion = questionData.links.partial;
                                }
                            }
                        } else {
                            nextQuestion = questionData.links.partial;
                        }
                    } else {
                        nextQuestion = questionData.links.negative;
                    }
                    break; // end mrPartRandom
        
                } // end fbType switch
                break;
    } // end isCorrect switch
    return nextQuestion;
}

/*
 Method: displayFormFb
 Function to display textual form feedback.

 Parameters:
 currForm - The number of the current form
 isCorrect - Boolean. Whether the form is correct
 */
FormQuiz.prototype.displayFormFb = function(currForm, isCorrect) {
    //var myFbHead = this.formFbEl[currForm].parentNode.parentNode.parentNode;    
    var myFbContent = this.formFbEl[currForm];
    //myFbHead.className = 'feedback';
    var quizDataCurrForm = this.quizData.forms[currForm];
    switch (isCorrect) {
    case (true):
        var posFb = '';
        if (quizDataCurrForm.feedback.positive[this.attemptNum[currForm]]) {
            posFb = quizDataCurrForm.feedback.positive[this.attemptNum[currForm]];
        } else {
            posFb = quizDataCurrForm.feedback.positive[0];
        }
        myFbContent.innerHTML = posFb + '<span class="sect508">End of pop up. Select Tab to go to the Close button.</span>';
        if (this.quizData.forms[currForm].questions[0].qType != 'dnd') { // do not disable dnd's, because it grays the text in IE
            if (this.disableOnCorrect) { // if the form should be disabled on correct
                this.disableFormToggle(currForm, true); // disable the form
            }
        }
        if (this.disableOnCorrect) { // if the form should be disabled on correct
            this.attemptNum[currForm] = this.maxAttempts; // set the attempts to the max attempts
        }
        break;

    case (false):
        var negFb = '';
        switch (this.formFbTypes[currForm]) {// switch on fb type
        case ('pn'):
            if (quizDataCurrForm.feedback.negative[this.attemptNum[currForm]]) {
                negFb = quizDataCurrForm.feedback.negative[this.attemptNum[currForm]];
            } else {
                negFb = quizDataCurrForm.feedback.negative[0];
            }
            break; // end pn

        case ('part'):
            break; // end part
        } // end fbType switch
        myFbContent.innerHTML = negFb + '<span class="sect508">End of pop up. Select Tab to go to the Close button.</span>';
        break;
    } // end isCorrect switch
}

/*
 Method: disableFormToggle
 Function to toggle the form between disabled and enabled.

 Parameters:
 currForm - The number of thr current form
 toDisabledState - Optional boolean. Whether to enable or disable form.
 */
FormQuiz.prototype.disableFormToggle = function(currForm, toDisabledState) {
    if ( this.quizType == 'branching')
        var currentState = this.choices[currForm][this.currentQuestion][0].disabled;
    else
        var currentState = this.choices[currForm][0][0].disabled;
    
    var toState = (typeof (toDisabledState) != 'undefined') ? toDisabledState : !currentState;
    var qLength = this.choices[currForm].length;
    var choiceLength;
    var start;
    var stop;
    if (this.quizType == 'branching') {
        start = this.currentQuestion;
        stop = this.currentQuestion + 1;
    } else {
        start = 0; // default type quizzes start from the 0 index on each form.
        stop = qLength;
    }
    for ( var qNum = start; qNum < stop; qNum++) {
        choiceLength = this.choices[currForm][qNum].length;
        for ( var choiceNum = 0; choiceNum < choiceLength; choiceNum++) {
            this.choices[currForm][qNum][choiceNum].disabled = toState;
        }
    }
}

/*
 Function: formQuizQComplete
 Must be defined on the page. Called by FormQuiz after evaluating each question.

 Parameters:
 isCorrect    - Boolean. Whether the question is correct
 currForm - The number of the current form
 currQ - The number of the current question

 Dependencies:
 none

 Returns:
 n/a

 Change Log:
 2007.04.17    ALP    - Initial version
 */
function formQuizQComplete(isCorrect, currForm, currQ) {
    // called for each question every time the form is evaluated
    // define on the page
}

/*
 Function: formQuizComplete
 Must be defined on the page. Called by FormQuiz after evaluating each form.

 Parameters:
 isCorrect    - Boolean. Whether the form is correct
 currForm - The number of the current form

 Dependencies:
 none

 Returns:
 n/a

 Change Log:
 2007.04.17    ALP    - Initial version
 2010.12.09  VRB - Documenting previous change: added myFormQuiz optional parameter used by jeopardy COL pages and DIA Task 9 full page final quiz
 */
function formQuizComplete(isCorrect, currForm, myFormQuiz) {
    // called each time form feedback is displayed
    // define on the page
}

function questionChange() {
    // called each time a choice is changed in a question
    // define on the page
}
/*
 Function: createNamedElement
 Needed to add name to radio buttons that are dynamically created.  From http://www.thunderguy.com/semicolon/2005/05/23/setting-the-name-attribute-in-internet-explorer/

 Parameters:
 type - The type of element to create
 name - The name to assign to the element

 Dependencies:
 none

 Returns:
 n/a

 Change Log:
 2007.04.22    ALP    - Initial version

 */
function createNamedElement(type, name) {
    var element = null;
    // Try the IE way; this fails on standards-compliant browsers
    try {
        element = document.createElement('<' + type + ' name="' + name + '">');
    } catch (e) {
    }
    if (!element || element.nodeName != type.toUpperCase()) {
        // Non-IE browser; use canonical method to create named element
        element = document.createElement(type);
        element.name = name;
    }
    return element;
}

/*
 Function: checkConflict
 Function to check whether two drop down boxes have the same choice. If they do, it resets the previous box to empty. Select elements must have ids that are in sequence.

 Parameters:
 prefix - The prefix of the id for each select element
 start  - The first number of the sequence
 end    - The last number of the sequence
 caller - The id of the select element that called the function

 Dependencies:
 none

 Returns:
 n/a

 Change Log:
 2007.06.26    ALP    - Initial version
 */
function checkConflict(prefix, start, end, caller) {
    var range = end - start;
    for ( var i = 0; i <= range; i++) {
        myNum = start + i;
        currElId = prefix + myNum;
        currEl = document.getElementById(currElId);
        callerEl = document.getElementById(caller);

        if ((callerEl.value == currEl.value) && (callerEl != currEl)) {
            currEl.value = '';
        }
    }
}

/*
 Function: initDND
 Function that makes list items draggable for ordering drag and drops. Called by FormQuiz.

 Parameters:
 list - The id of the list
 itemPrefix - The prefix for the list item ids
 total - The total number of items in the list

 Dependencies:
 <YAHOO.util.DragDropMgr>; <YAHOO.util.Dom>;<YAHOO.util.Event>;

 Returns:
 n/a

 Change Log:
 2007.06.28    ALP    - Initial version
 */
function initDND(list, itemPrefix, total) {
    var listTotal = total;
    new YAHOO.util.DDTarget(list);
    for ( var i = 0; i < listTotal; i++) {
        new YAHOO.example.DDList(itemPrefix + i, "ul1");
    }
}

/**
 * Removes DND
 */
function removeDND() {
    DDM.unregAll();
}

/*
 Method: initJQueryDialogs
 Method to initialize the jQuery Dialog box

 Parameters:
 formNum - The number of the form

 Change Log: 
 2010.12.09 VRB - modified to be a FormQuiz Object Method
 2012.10.22	ALP - Modified to account for imgMc forms that do not have a submit button.
 */
FormQuiz.prototype.initJQueryDialogs = function(formNum) {
    //function initJQueryDialogs(QfbElArray, FfbELArray, feedbackPosition, feedbackPositionOffset, feedbackX, feedbackY) {
    //this.qFbEl, this.formFbEl, this.feedbackPosition, this.feedbackPositionOffset, this.feedbackX, this.feedbackY
    var x, y;
	var currForm = this.quizData.forms[formNum];
    if (!isNaN(this.feedbackY)) { // if y is a number
        var curleft = curtop = 0;
        var obj;
		var objHeight = 0;
		// If this form has a Submit button
		if (currForm.formType != "imgMc") {
			obj = document.getElementById('submitBtn');
		} else {
			// Grab the first answer option
			obj = document.getElementById('f'+formNum+'_q0_li0');
			objHeight = obj.offsetHeight + 5;
		}
        if (obj.offsetParent) { // Find x and y position of item.
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        x = curleft + 100;
        var scrOfY = 0;
        if (typeof (window.pageYOffset) == 'number') {
            //Netscape compliant
            scrOfY = window.pageYOffset;
        } else if (document.body
                && (document.body.scrollLeft || document.body.scrollTop)) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
        } else if (document.documentElement
                && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
        }
		
        y = curtop - scrOfY + objHeight;
    }

    if (this.feedbackPosition) {
        y = this.feedbackY;
        x = this.feedbackX;
    } else if (this.feedbackPositionOffset) {
        y += this.feedbackY;
        x += this.feedbackX;
    }

    if (getInternetExplorerVersion() < 7 && getInternetExplorerVersion() > 0) {
        // IE 6
        this.initJQueryDialogsIE6Setup(x, y, formNum);
    } else {
        // All other browsers
        this.initJQueryDialogsModernBrowserSetup(x, y, formNum);
    }
}
/*
 Method: initJQueryDialogsModernBrowserSetup
 Method to initialize the jQuery Dialog box in modern browsers

 Parameters:
 none

 Change Log: 
 2010.12.09 VRB - modified to be a FormQuiz Object Method
 2012.11.07	ALP - Added shell.formQuiz.fbId = myId + "wrap" so that the shell can keep track of open FB boxes and close before moving to the next page
 2013.01.07 ALP	- Modified positioning code to use jQuery positioning widget
 */
FormQuiz.prototype.initJQueryDialogsModernBrowserSetup = function(x, y, currForm) {
    var start, stop;
    for (formNum = 0; formNum < this.qFbEl.length; formNum++) {
        if (this.quizType == 'branching') {
            start = this.currentQuestion;
            stop = this.currentQuestion + 1;
        } else {
            start = 0; // default type quizzes start from the 0 index on each form.
            stop  = this.qFbEl[formNum].length
        }
        if ( start < 0 ) return;
        
        for (qNum = start; qNum < stop; qNum++) {
            var myId = this.qFbEl[formNum][qNum].id;
            this.dialogIds[this.dialogIds.length] = myId;
            $('#' + myId + "wrap").dialog(
                    {
                        autoOpen : true,
                        resizable : true,
                        width : 450,
                        minHeight : 120,
                        title : 'Feedback',
                        dialogClass : 'fbpop',
                        open : function() {
                            //if(!isNaN(y)) // if y is a number
                            //    y += 25; // offset for height of header
                            $(this).css("maxHeight", 400);
							//console.log($('#' + myId + "wrap"));
                            $('#' + myId + "wrap").dialog('widget').position({my:shell.popUp.dialogPosition, at: shell.popUp.parentPosition, of: shell.popUp.elementOfPosition, collision:"none"});
							//$('#' + myId + "wrap").dialog("option", "position",[ x, y ]);
							shell.formQuiz.fbId = myId + "wrap";
                        }
                    });
        }
    }
    for (formNum = 0; formNum < this.formFbEl.length; formNum++) {
        var myId = this.formFbEl[formNum].id;
        this.dialogIds[this.dialogIds.length] = myId;
        $('#' + myId + "wrap").dialog({
            autoOpen : true,
            resizable : true,
            width : 450,
            minHeight : 120,
            title : 'Feedback',
            dialogClass : 'fbpop',
            open : function() {
                //if(!isNaN(y)) // if y is a number
                //    y += 25; // offset for height of header
                $(this).css("maxHeight", 400);
                $('#' + myId + "wrap").dialog('widget').position({my:shell.popUp.dialogPosition, at: shell.popUp.parentPosition, of: shell.popUp.elementOfPosition, collision:"none"});
				shell.formQuiz.fbId = myId + "wrap";
            }
        });
    }
}

FormQuiz.prototype.destroyJQueryDialogs = function(x, y, currForm) {
    var myId;
    for ( var dNum = 0, dLength = this.dialogIds.length; dNum < dLength; dNum++ ) {
        myId = this.dialogIds[dNum];
        $('#' + myId + "wrap").dialog("destroy");
    }
    this.dialogIds = new Array();
}
/*
 Method: initJQueryDialogsIE6Setup
 Method to initialize the jQuery Dialog box in IE6 and below

 Parameters:
 none

 Change Log: 
 2010.12.09 VRB - modified to be a FormQuiz Object Method
 */
FormQuiz.prototype.initJQueryDialogsIE6Setup = function(x, y, currForm) {
    //function initJQueryDialogsIE6Setup(qFbEl, formFbEl, x, y) {
    for (formNum = 0; formNum < this.qFbEl.length; formNum++) {
        var start;
        var stop;
        if (this.quizType == 'branching') {
            start = this.currentQuestion;
            stop = this.currentQuestion + 1;
        } else {
            start = 0; // default type quizzes start from the 0 index on each form.
            stop = this.qFbEl[formNum].length;
        }
        
        for (qNum = start; qNum < stop; qNum++) {
            var myId = this.qFbEl[formNum][qNum].id;
            $('#' + myId + "wrap").dialog({
                autoOpen : true,
                resizable : false,
                width : 422,
                height : 172,
                title : 'Feedback',
                dialogClass : 'fbpop-ie6',
                position : [ x, y ],
                open : function(event, ui) {
                    $('select').css({
                        visibility : "hidden"
                    });
                },
                close : function() {
                    $('select').css({
                        visibility : "visible"
                    });
                }
            });
        }
    }
    for (formNum = 0; formNum < this.formFbEl.length; formNum++) {
        var myId = this.formFbEl[formNum].id;
        $('#' + myId + "wrap").dialog({
            autoOpen : true,
            resizable : false,
            width : 422,
            height : 172,
            title : 'Feedback',
            dialogClass : 'fbpop-ie6',
            position : [ x, y ],
            open : function(event, ui) {
                $('select').css({
                    visibility : "hidden"
                });
            },
            close : function() {
                $('select').css({
                    visibility : "visible"
                });
            }
        });
    }
}

/**
 * Hides the FormQuiz DOM element
 */
FormQuiz.prototype.hideQuiz = function() {
    var temp;
    for ( var formNum = 0; formNum < this.numForms; formNum++) {
        temp = document.getElementById('quiz' + formNum);
        temp.style.display = 'none';
    }
    $(function() {
        $('#pageScrollbar').jScrollPane({
            scrollbarWidth : 14,
            scrollbarMargin : 5,
            dragMinHeight : 23,
            dragMaxHeight : 23,
            topCapHeight : 5,
            bottomCapHeight : 5
        });
    });
}

/**
 * Makes the quiz DOM element visible
 */
FormQuiz.prototype.showQuiz = function() {
    var temp;
    for ( var formNum = 0; formNum < this.numForms; formNum++) {
        temp = document.getElementById('quiz' + formNum);
        temp.style.display = 'block';
    }
    $(function() {
        $('#pageScrollbar').jScrollPane({
            scrollbarWidth : 14,
            scrollbarMargin : 5,
            dragMinHeight : 23,
            dragMaxHeight : 23,
            topCapHeight : 5,
            bottomCapHeight : 5
        });
    });
}

/**
 * Method to determine the IE version
 */
function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}