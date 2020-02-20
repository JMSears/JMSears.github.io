var SCOContent =  {
	pages: [
		{
			id:"00_00_000",
			templateId: "homepage",
			content:{
				title: "",
				customHTML:"",
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"01_01_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 1</h1><h2>Lesson 1 - Introduction</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"01_01_010",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_010.png",
				altText: "Course mentor sitting at her desk",
				text:"<h2 class='group1' style='opacity: 0;'>Career Development Facilitators (CDFs):</h2><ul><li class='group2' style='opacity: 0;'>Build a culture of career development.</li><li class='group3' style='opacity: 0;'>Promote employee engagement, morale, and productivity.</li><li class='group4' style='opacity:0;'>Help provide better service to Veterans and their families.</li></ul>",
				timedEvents: {
					events: [
						{
							time: 8.2,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 13.5,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 22,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/01_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Thank you for your interest in becoming a Career Development Facilitator, or CDF, at the Department of Veterans Affairs, or VA!</p>"
					},
					{
						time: 8,
						html: "<p>As a CDF, you will personally help build a culture of career development at VA that improves engagement, morale, productivity, and motivation across the organization.  All of these are critical because they help VA employees provide better service to Veterans and their families.</p>"
					},
					{
						time: 27,
						html: "<p>This course was designed to build your career development knowledge and facilitation skills so that you can provide personalized support to help VA employees accomplish their career goals.</p>"
					},
					{
						time: 38,
						html: "<p>In this lesson, we will review the course objectives and the basics of navigating this Web-based training. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"01_01_020",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText tac'>Review the important aspects of the course below, then select the \"Next\" button to continue.</p><div class='courseFunc'><div class='tac'><div class='wrap1'><a href='#trigger1' id='trigger1' title='Audio'><span>Audio</span></a><a href='#trigger2' id='trigger2' title='Time'><span>Time</span></a><a href='#trigger3' id='trigger3' title='Knowledge Checks'><span>Knowledge Checks</span></a><a href='#trigger4' id='trigger4' title='Resources' style='margin-right:0;'><span>Resources</span></a></div><div class='wrap2'><a href='#trigger5' id='trigger5' title='Credit/Certificate'><span>Credit/Certificate</span></a><a href='#trigger6' id='trigger6' title='Survey'><span>Survey</span></a><a href='#trigger7' id='trigger7' title='Tutorial'><span>Tutorial</span></a><a href='#trigger8' id='trigger8' title='Accessibility' style='margin-right:0;'><span>Accessibility</span></a></div></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "480",
								height: "190"
							},
							popUpPos: {
								popUpPosition: "left top",
								parentPosition: "left bottom",
								elementOfPosition: "#trigger1"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Audio",
									text:"<p>You can turn this course's narration on or off by selecting the \"Audio\" button in the Navigation Bar. Please turn your speakers on and adjust the volume on your computer as necessary, or listen through headphones for the comfort of others. You can also select the \"Closed Captioning\" button on the Navigation Bar to read any accompanying narration. You may reposition the Closed Captioning window at any time by clicking and dragging the blue header.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "left top",
								parentPosition: "left bottom",
								elementOfPosition: "#trigger2"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Time",
									text:"<p>This course will take you approximately 5 hours to complete.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "right top",
								parentPosition: "right bottom",
								elementOfPosition: "#trigger3"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Knowledge Checks",
									text:"<p>This course contains opportunities to apply what you have learned. You need to complete all Knowledge Checks to receive credit.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "right top",
								parentPosition: "right bottom",
								elementOfPosition: "#trigger4"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Resources",
									text:"<p>This course contains additional resources that you can download and print during or after the course. The Resources will be listed on the final screen of the course, or you can select the \"Resources\" button in the Navigation Bar to access resources relevant to this course at any time.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "left bottom",
								parentPosition: "left top",
								elementOfPosition: "#trigger5"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Credit/Certificate",
									text:"<p>You will receive Talent Management System (TMS) credit and a certificate of completion after finishing all of the lessons in this course.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "left bottom",
								parentPosition: "left top",
								elementOfPosition: "#trigger6"
							},
							tlgr: {
								trigger: "6",
								content:{
									layoutClass:"",
									title:"Survey",
									text:"<p>We value your feedback! Once you have finished the course, you will be asked to complete a survey. Please complete this survey to promote high quality training.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "right bottom",
								parentPosition: "right top",
								elementOfPosition: "#trigger7"
							},
							tlgr: {
								trigger: "7",
								content:{
									layoutClass:"",
									title:"Tutorial",
									text:"<p>The help tutorial features a brief walkthrough of the functionality of this course as well as some important accessibility information. Please select the \"Resources\" button in the Navigation Bar to access this information.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "670",
								height: "240"
							},
							popUpPos: {
								popUpPosition: "right bottom",
								parentPosition: "right top",
								elementOfPosition: "#trigger8"
							},
							tlgr: {
								trigger: "8",
								content:{
									layoutClass:"",
									title:"Accessibility",
									text:"<p><strong>Course Transcript:</strong> This course includes a transcript that you can use to review the text of the lesson at your own pace or keep for your personal reference. Select the \"Resources\" button in the Navigation Bar to access unit transcripts.</p><p><strong>Closed Captions:</strong> This course contains a synchronized text version of the audio narration. Select the \"CC\" button in the Navigation Bar to manage closed captions. You may reposition the Closed Captioning window at any time by clicking and dragging the blue header at the top.</p><p><strong>Screen Readers:</strong> For slides that may require additional information to be used accessibly, instructions readable only to screen readers are included. These instructions are intended to provide additional context for animation or specific activities that the user may be called upon to do.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/01_01_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to review some important information about course functionality. Select each image to learn more. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"01_01_030",
			templateId: "columns",
			content:{
				title: "Course Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Course Overview:</h2><p>In this course, you will learn how to provide personalized career development support to VA employees as they pursue their career goals. Each unit will focus on developing your proficiency in a core competency area and prepare you to act as a MyCareer@VA Career Development Facilitator at VA.</p><p>To help build these skills, this course is broken into the following units:</p><ul><li>Unit 1: Career Development Theory & Practice</li><li>Unit 2: Facilitation Skills</li><li>Unit 3: Ethical Behavior in Career Development</li></ul><p>Each unit is composed of lessons that address related concepts and competencies.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
							customHTML: "<h2>Learning Objectives</h2><p>After completing all of the units in this course, you should be able to:</p><ul><li>Define the role of Career Development Facilitators at VA.</li><li>Define important career development theories.</li><li>Apply core career development best practices.</li><li>Identify facilitation skills necessary to provide career development support.</li><li>Identify ethical behaviors for a CDF.</li></ul>"

						}
					]
				},
				audio:"audio/01_01_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Course Overview and Learning Objectives. If you have questions about the content of this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen of the lesson.</p>"
					},
					{
						time: 15,
						html: "<p>When you are finished reading, please select the \"Next\" button to start learning about the important role you will play as a CDF at VA.</p>"
					}
				]
			}
		},
		{
			id:"01_01_040",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_040.png",
				altText: "Course mentor speaking to a female employee",
				text:"<p>Career Development Facilitators (CDFs) provide one-on-one support to VA employees to help them accomplish their career goals.</p><div class='group1' style='opacity: 0;'><h2>Some possible CDF activities:</h2><ul><li>Holding conversations to help employees identify their career goals.</li><li>Helping employees develop plans to achieve their goals.</li><li>Identifying and encouraging the use of available career resources.</li><li>Providing feedback on employee career actions, such as goals, resumes, and interviews.</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 29.5,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/01_01_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Since you are interested in becoming a CDF, you are likely already passionate about helping others and promoting employee development at VA. As a CDF, you will continue to provide such valuable support, but now in the important area of career development.</p>"
					},
					{
						time: 15,
						html: "<p>The goal of the CDF program is to provide one-on-one support to VA employees to help them accomplish their career goals.  As a CDF, you will empower employees to take charge of their careers, not do the work for them.</p>"
					},
					{
						time: 28,
						html: "<p>Please read the list of possible career activities you might engage in with employees.</p>"
					},
					{
						time: 33,
						html: "<p>By helping VA employees grow and develop in their careers, you are helping them do their jobs better. This in turn allows them to provide even better service to Veterans and their families. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"01_01_050",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText'><h2>Organizations that provide career development opportunities & support:</h2><ul><li>Are <strong>6X</strong> more likely to engage employees than those that don't.</li><li>Are <strong>2.5X</strong> more productive.</li><li>Are <strong>4X</strong> less likely to lose employees in the next year.</li></ul></div>", // Anything that should be displayed on the whiteboard
				audio: "audio/01_01_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>Review these facts about the impact career development programs can have on any organization. As a CDF, you will help employees find their right career path, which in turn promotes engagement, productivity, and retention.</p>"
					},
					{
						time: 13,
						html: "<p>By building a stronger workforce, you are directly helping VA provide the highest quality services and support to Veterans and their families. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"01_01_060",
			templateId: "columns",
			content:{
				title: "Learning Objectives",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the Introduction lesson.</p>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<h2>Learning Objectives</h2><p>After completing all of the lessons in this course, you will be able to:</p><ul class='learningObj'><li>Define the role of Career Development Facilitators at VA.</li><li>Define important career development theories.</li><li>Apply core career development best practices.</li><li>Identify facilitation skills necessary to provide career development support.</li><li>Identify ethical behaviors for a CDF.</li></ul>"
						}

					]
				},
				audio:"audio/01_01_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the Introduction lesson. All of the lessons in this course will give you the knowledge and skills to help VA employees develop themselves and accomplish their career goals.</p>"
					},
					{
						time: 12,
						html: "<p>Please review the learning objectives covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"02_01_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 2</h1><h2>Lesson 1 - Career Development Theory</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"02_01_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' style='opacity: 0;' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='opacity: 0;' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='opacity: 0;' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='opacity: 0;' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='opacity: 0;' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='opacity: 0;' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='opacity: 0;' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='opacity: 0;' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='opacity: 0;'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='opacity: 0;' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='opacity: 0;' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group0'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 2,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 4,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 6,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 8,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 12,
							contentId: ['.group6'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 14,
							contentId: ['.group7'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 16,
							contentId: ['.group8'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 18,
							contentId: ['.group9'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 20,
							contentId: ['.group10'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Career Development Theory for Career Development Facilitators, or CDFs. As a CDF, you are part of an elite community that shares a passion for supporting employee development.</p>"
					},
					{
						time: 12,
						html: "<p>This lesson will help you understand foundational career development theories to better help you perform important activities associated with being a CDF. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_020",
			templateId: "columns",
			content:{
				title: "Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>In this lesson, you will learn about the foundational components of career development theory.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
							customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you will be able to:</p><ul><li>Define the importance of career development (for both individuals and VA).</li><li>List key career development theories.</li><li>List elements of career development.</li><li>Define VA's career development foundation.</li><li>Describe why MyCareer@VA was developed.</li></ul>"

						}
					]
				},
				audio:"audio/02_01_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Lesson Overview and Learning Objectives.</p>"
					},
					{
						time: 5,
						html: "<p> If you have questions about the content in this lesson, please consult the accompanying resources available under the \"Resources\" button or on the final screen of the lesson. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_030",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_030_1.png' class='group1' style='opacity: 0;' alt='An arrow that says \"Then: Single Career\"' /><img src='images/CDF_02_01_030_2.png' class='group2' style='opacity: 0;' alt='a six-segmented arrow, that says \"Now: A new job every 4.4 years\"' /><img src='images/CDF_02_01_030_3.png' class='group3' style='opacity: 0;' alt='60% leave in 3 years; 80% open to new jobs' /><img src='images/CDF_02_01_010.png' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' class='group4' style='opacity: 0;' /><img src='images/CDF_collage_1.png' class='group4' style='opacity: 0;' alt='' /><img src='images/CDF_collage_2.png' class='group5' style='opacity: 0;' alt='' /><img src='images/CDF_collage_3.png' class='group6' style='opacity: 0;' alt='' /><img src='images/CDF_collage_4.png' class='group7' style='opacity: 0;' alt='' /><img src='images/CDF_collage_5.png' class='group8' style='opacity: 0;' alt='' /><img src='images/CDF_collage_6.png' class='group9' style='opacity: 0;' alt='' /><img src='images/CDF_collage_7.png' class='group10' style='opacity: 0;' alt='' /><img src='images/CDF_collage_8.png' class='group11' style='opacity: 0;'alt='' /><img src='images/CDF_collage_9.png' class='group12' style='opacity: 0;' alt='' /><img src='images/CDF_collage_10.png' class='group13' style='opacity: 0;' alt='' /></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 4,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 9,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 15.5,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 23,
							contentId: ['.group4','.group1','.group2','.group3'],
							displayType: ['toggleV','toggleV','toggleV','toggleV'],
							speed: [400,0,0,0]
						},
						{
							time: 25,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 27,
							contentId: ['.group6'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 29,
							contentId: ['.group7'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 31,
							contentId: ['.group8'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 33,
							contentId: ['.group9'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 35,
							contentId: ['.group10'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 37,
							contentId: ['.group11'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 39,
							contentId: ['.group12'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 41,
							contentId: ['.group13'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_01_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>In recent years, career trends have changed significantly. Previously, employees would spend an entire career at a single organization. Today, the average employee holds several jobs throughout a career, spending about four years in each position.</p>"
					},
					{
						time: 14,
						html: "<p>At any given time, most employees are open to discussing a new job opportunity even though less than half are actively job hunting.</p>"
					},
					{
						time: 23,
						html: "<p>These changing employment trends significantly impact VA. Tight budgets, increased competition, and changing career trends underscore the importance of recruiting and retaining top talent. The VA is also affected anytime our employees consider external opportunities.</p>"
					},
					{
						time: 40,
						html: "<p>Therefore, VA considers employee development one of our most effective retention strategies. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_040",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_040_4.png' class='group1' style='opacity: 0;' alt='A collage of various VA employees performing their jobs with the VA.' /><img src='images/CDF_02_01_040_5.png' class='group2' style='opacity: 0;' alt='' /><img src='images/CDF_02_01_040_6.png' class='group3' style='opacity: 0;' alt='' /><img src='images/CDF_02_01_040_7.png' class='group4' style='opacity: 0;' alt='' /><a href='#' id='trigger1' class='group5 p02_01_040' style='opacity: 0;'><span>Career Development Button</span></a></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1','.group5'],
							displayType: ['toggleV','toggleV'],
							speed: [800,800]
						},
						{
							time: 8,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 16,
							contentId: ['.group3','.group2'],
							displayType: ['toggleV','toggleV'],
							speed: [400,400]
						},
						{
							time: 24,
							contentId: ['.group4','.group3'],
							displayType: ['toggleV','toggleV'],
							speed: [400,400]
						},
						{
							time: 29,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "300",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center",
								elementOfPosition: "#trigger1"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Career Development",
									text:"<p>Career development is the lifelong planning and implementation of action steps toward an individual's career goals.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/02_01_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Most employees directly serve Veterans and their families, and they are passionate about their work. However, whenever employees are not fully engaged or lack developmental opportunities, overall performance decreases, which directly impacts our service to Veterans.</p>"
					},
					{
						time: 15.8,
						html: "<p>This is where career development comes in. It helps employees find greater engagement, challenge, and ultimately meaning at work.</p>"
					},
					{
						time: 23.5,
						html: "<p>Select the \"Career Development\" button to read how VA defines career development. After you have read the definition of career development, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_050",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				text: "<p class='actionText halfWidth'>Select the option or options that best answer the question, and then select \"Submit.\"</p>",
				customClass: "threeQuarterWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"It is important for VA to provide career development opportunities because:", 
									qType: "mc",
									choices: [
										"VA needs to compete against top organizations for recruitment of top talent",
										"Career development promotes employee engagement",
										"Career development serves as a key retention tool for top talent",
										"Career development enhances employee performance",
										"All of the above"
									],
									answers: [0,0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p>All of these statements reflect the importance of providing career development opportunities.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, 'All of the above' is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_01_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's quickly review what we have discussed so far. Please read the question, select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_060",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<div class='p02_01_060'><div class='base'><img src='images/CDF_02_01_060.png' alt='The words Psychology, Anthropology, Sociology at the top of a funnel that feeds into a timeline' /><p class='actionText tac'>Select each date along the timeline to read more.</p><a href='#trigger1' id='trigger1'><span>Early 1900s: Trait-Based</span></a><a href='#trigger2' id='trigger2'><span>Early 1940s: Needs-Based</span></a><a href='#trigger3' id='trigger3'><span>Early 1950s: Developmental</span></a><a href='#trigger4' id='trigger4'><span>Early 1960s: Psychological</span></a><a href='#trigger5' id='trigger5'><span>Early 1970s: Sociological</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "500",
								height: "130"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Trait-Based",
									text:"<p>In the early 1900s, Frank Parsons noted that individuals have unique characteristics and are most satisfied when there is a good match between those characteristics and the characteristics of their jobs (Parsons, 1909).</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "500",
								height: "340"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Needs-Based",
									text:"<p>In the 1940s, Abraham Maslow focused on a needs-based approach to career development, noting that motivation is based on progressing through a hierarchy of needs:</p><ul><li>Psychological Needs</li><li>Safety Needs</li><li>Social Needs</li><li>Esteem Needs</li><li>Self-Actualization</li></ul><p>Once basic needs are met (psychological and safety), individuals can really start to develop at work, eventually reaching self-actualization (Maslow, 1943).</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "500",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Developmental",
									text:"<p>In the 1950s, Donald Super proposed that career development was a function of an individual's level of career maturity or the degree to which an individual can manage tasks focused on professional development  (Super, 1957).</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "620",
								height: "400"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Psychological",
									text:"<p>In the 1960s, John Holland produced one of the most widely held career development theories to date. His six personality types are said to influence career choice.</p><p>Holland's six types:</p><ul><li>Realistic: systemic work, such as working with tools, machines, or animals</li><li>Investigative: acquisition of knowledge, such as data analysis</li><li>Artistic: manipulation of physical, verbal, or human materials, such as creative jobs</li><li>Social: working with others, such as teaching or training</li><li>Enterprising: working to attain economical gain, frequently found in leadership positions</li><li>Conventional: systematic work, such as record keeping or organizing information (Holland, 1969)</li></ul><p>Holland has played a significant role in shaping career development theory, research, and practice as we know it today.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "500",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Sociological",
									text:"<p>Albert Bandura provided a sociological perspective to career choice as it relates to one's own self-efficacy. Bandura says that motivation for career development is derived from the belief in one's capabilities to organize and execute actions required for development (Bandura, 1986).</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/02_01_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a CDF, it's useful to have a basic understanding of career development theory and concepts. Theory is drawn from several social science disciplines, including Psychology, Anthropology, and Sociology.</p>"
					},
					{
						time: 14,
						html: "<p>Let's begin with the theories associated with career development that have evolved over the past century. They fall into five key schools of thought: Trait-based, Needs-based, Developmental, Psychological, and Sociological.</p>"
					},
					{
						time: 28.2,
						html: "<p>Each school informs how we practice career development. For example, coaching and mentoring programs stem from developmental and sociological theories, while job fit assessments and strengths-based development stem from trait-based and psychological theories.</p>"
					},
					{
						time: 44.2,
						html: "<p>Select each date along the timeline for a brief introduction of each theory. If you want to learn more, please select the \"Resources\" button and choose \"Further Reading.\" After you have read about all the theories, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_070",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				customClass: "threeQuarterWidth",
				knowledgeCheck: {
					forms: [
						{
							formLegend: "Select the school of thought that matches the description below, and then select the \"Submit\" button.",
							questions: [
								{
									stimulus:"Employees are most satisfied when their personal traits match the characteristics of their jobs.", 
									qType: "dd",
									choices: [
										"Select...",
										"Sociological",
										"Psychological",
										"Needs-Based",
										"Trait-Based",
										"Developmental"
									],
									answers: [0,0,0,0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"Motivation for career development is based on meeting individual needs.", 
									qType: "dd",
									choices: [
										"Select...",
										"Sociological",
										"Psychological",
										"Needs-Based",
										"Trait-Based",
										"Developmental"
									],
									answers: [0,0,0,1,0,0],
									ddExclusive:false
								},
								{
									stimulus:"Career development is a function of an individual's ability to manage career-related tasks, or career maturity.", 
									qType: "dd",
									choices: [
										"Select...",
										"Sociological",
										"Psychological",
										"Needs-Based",
										"Trait-Based",
										"Developmental"
									],
									answers: [0,0,0,0,0,1],
									ddExclusive:false
								},
								{
									stimulus:"Career fit and satisfaction are a function of the extent to which an individual's personality matches their career environment.", 
									qType: "dd",
									choices: [
										"Select...",
										"Sociological",
										"Psychological",
										"Needs-Based",
										"Trait-Based",
										"Developmental"
									],
									answers: [0,0,1,0,0,0],
									ddExclusive:false
								},
								{
									stimulus:"Motivation for career development is derived from the belief in one's capabilities to accomplish actions required for development.", 
									qType: "dd",
									choices: [
										"Select...",
										"Sociological",
										"Psychological",
										"Needs-Based",
										"Trait-Based",
										"Developmental"
									],
									answers: [0,1,0,0,0,0],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Sorry, your answers are incorrect.</span></p><p>The correct order is: 1. Trait-Based, 2. Needs-Based, 3. Developmental, 4. Psychological, 5. Sociological.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_01_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review the important theories that helped shape career development. Please read each statement and select the school of thought from the drop-down menu that matches the description. Then select the \"Submit\" button.</p>"
					},
					{
						time: 12,
						html: "<p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_080",
			templateId: "tlgr",
			content:{
				title: "",
				image:"images/CDF_02_01_080.png",
				altText:"Course mentor meeting with an employee at her desk",
				imageStyle:"margin-top:-24px; margin-right:-16px;",
				text:"<div class='fullScreen'><div class='group1' style='opacity: 0;'><h2>Successful Career Development Programs:</h2><ul><div class='group2' style='opacity: 0;'><li>Are integrated and strategic</li></div><div class='group3' style='opacity: 0;'><li>Provide career development tools </li></div><div class='group4' style='opacity: 0;'><li>Are intentional and comprehensive</li></div><div class='group5' style='opacity: 0;'><li>Provide a \"human touch\" </li></div></ul></div></div>",
				timedEvents: {
					events: [
						{
							time: 9.2,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 13,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 15.5,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 18,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 22,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_01_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Career development has a rich theoretical history, but how do these theories translate practically into the career development programs in the workplace?</p>"
					},
					{
						time: 8,
						html: "<p>According to best practices, we know that successful career development programs: are integrated and strategic, provide employees with career development tools through the adoption of an intentional and comprehensive system, and provide a \"human touch.\"</p>"
					},
					{
						time: 23,
						html: "<p>Select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_085",
			templateId: "popUp",
			content:{
				title: "",
				customClass: "fullScreen",
				customHTML:"<div class='p02_01_085'><p class='actionText' style='width:391px;float:right;'>Select each part of the circle to see some examples of the different ways VA promotes career development across the organization, and then select \"Next\" to continue.</p><div class='bases2'><img class='bases' src='../course/images/CDF_02_01_085_BG.png' alt=\"A circle with Career Development in the center and arrows pointing to the categories listed on this page.\" /></div><div class='base'><a href='#trigger1' id='trigger1'><span>Career Development Portals</span></a><a href='#trigger2' id='trigger2'><span>Onboarding Programs</span></a><a href='#trigger3' id='trigger3'><span>Career Coaching/Mentoring</span></a><a href='#trigger4' id='trigger4'><span>Formal Training</span></a><a href='#trigger5' id='trigger5'><span>Leadership Development</span></a><a href='#trigger6' id='trigger6'><span>Career Resources</span></a><a href='#trigger7' id='trigger7'><span>Performance Management</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "300",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Career Development Portals",
									text:"<ul><li>MyCareer@VA website</li><li>VA for Vets website</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Onboarding Programs",
									text:"<ul><li>Central Office Human Resources Services' (COHRS) New Employee Orientation</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Career Coaching/Mentoring ",
									text:"<ul><li>VA's Coaching and Mentoring Programs</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Formal Training",
									text:"<ul><li>VALU's Talent Management System (TMS)</li><li>VA eHealth University</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Leadership Development",
									text:"<ul><li>VA's Aspiring Leaders Program</li><li>Leadership VA (LVA)</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "6",
								content:{
									layoutClass:"",
									title:"Career Resources",
									text:"<ul><li>MyCareer@VA website</li><li>VA for Vets website</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "7",
								content:{
									layoutClass:"",
									title:"Performance Management",
									text:"<ul><li>VA's All-Employee and Leadership Competencies</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/02_01_085",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a CDF, you provide that \"human touch\" in your one-on-one career interactions with VA employees. Because that support is multifaceted, you may need to tailor it based on the employee's immediate need.</p>"
					},
					{
						time: 13.4,
						html: "<p>Select the different types of career development support to see specific ways VA promotes career development. This list does not cover every program at VA, but is meant to get you thinking about different ways VA supports employee growth.</p>"
					},
					{
						time: 27,
						html: "<p>If you want to learn more, please select the \"Resources\" button and choose \"Further Reading.\" After you have read about each type of support, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_090",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_mentor3.png",
				altText: "Course mentor smiling",
				text: "<p class='actionText threeQuarterWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which of the following is a characteristic of a successful career development program?", qType: "mc",
									choices: [
										"It focuses on a single part of the organization",
										"It focuses only on formal training opportunities within the organization",
										"It is integrated and comprehensive",
										"It is implemented in-person, only"
									],
									answers: [0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Integrated and comprehensive\" is the correct answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_01_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's quickly review some of the concepts we have discussed. From the list, please select the statement that best answers the question, and then select the \"Submit\" button. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
				{
			id:"02_01_100",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<div class='p02_01_100'><p class='actionText' style='width:391px;float:right;'>Select each function to read more about it, and then select \"Next\" to continue.</p><div class='bases2'><img class='bases' src='../course/images/CDF_02_01_100_BG.png' alt=\"Levels of Career Development. A circle with MyCareer@VA in the center with puzzle piece openings for the functions listed on this page.\" /></div><div class='base'><a href='#trigger1' id='trigger1'><span>Inform</span></a><a href='#trigger2' id='trigger2'><span>Connect</span></a><a href='#trigger3' id='trigger3'><span>Train</span></a><a href='#trigger4' id='trigger4'><span>Mentor</span></a><a href='#trigger5' id='trigger5'><span>Coach</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "300",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Inform",
									text:"<p>Letting people in the organization know what a career system is and what it can do for them.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Connect",
									text:"<p>Opening doors to key resources within the organization and its community as well as those external to the organization.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Train",
									text:"<p>Assisting employees to develop competencies, identify and clarify their goals, values, and interests through career training designs, and meaningful dialogue facilitation.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Mentor",
									text:"<p>Providing access to voluntary relationships to integrate individuals into various career situations, and helping them to connect, grow, and access resources.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Coach",
									text:"<p>Providing the opportunity for employees to engage in meaningful career conversations with professional career counselors, coaches, mentors, supervisors, and managers.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/02_01_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>Because it is VA's premier career development resource, you will likely use the MyCareer@VA resource often. MyCareer@VA is an example of a real-world application of the career development theories you've learned earlier.</p>"
					},
					{
						time: 15,
						html: "<p>MyCareer@VA's career development model is an intentional, integrated career development system. The model consists of five levels of assistance that organizations should offer in career development programs, including: informing, connecting, training, mentoring, and coaching.</p>"
					},
					{
						time: 33,
						html: "<p>So where do you, as a CDF, fit in this model? Everywhere! </p>"
					},
					{
						time: 38,
						html: "<p>CDFs inform employees about career development. You connect employees to resources that can assist them in developing career competency, provide them with opportunities to engage in career development activities, and you serve as an ongoing mentor to employees.</p>"
					},
					{
						time: 53.8,
						html: "<p>Select each function to read more about it. After you have read each explanation, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_110",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				customClass: "threeQuarterWidth",
				knowledgeCheck: {
					forms: [
						{
							formLegend: "Select the method that best matches the definition, and then select \"Submit.\"",
							questions: [
								{
									stimulus:"Letting people in the organization know what a career system is and what it can do for them.", 
									qType: "dd",
									choices: [
										"Select...",
										"Coaching ",
										"Connecting",
										"Informing ",
										"Mentoring",
										"Training"
									],
									answers: [0,0,0,1,0,0],
									ddExclusive:false
								},
								{
									stimulus:"Opening doors to key resources within the organization and its community as well as those external to the organization.", 
									qType: "dd",
									choices: [
										"Select...",
										"Coaching ",
										"Connecting",
										"Informing ",
										"Mentoring",
										"Training"
									],
									answers: [0,0,1,0,0,0],
									ddExclusive:false
								},
								{
									stimulus:"Assisting employees to develop competencies, identify and clarify their goals, values and interests through career training designs and meaningful dialogue facilitation.", 
									qType: "dd",
									choices: [
										"Select...",
										"Coaching ",
										"Connecting",
										"Informing ",
										"Mentoring",
										"Training"
									],
									answers: [0,0,0,0,0,1],
									ddExclusive:false
								},
								{
									stimulus:"Providing the opportunity for employees to engage in meaningful career conversations with professional career counselors, coaches, mentors, supervisors, and managers.", 
									qType: "dd",
									choices: [
										"Select...",
										"Coaching ",
										"Connecting",
										"Informing ",
										"Mentoring",
										"Training"
									],
									answers: [0,1,0,0,0,0],
									ddExclusive:false
								},
								{
									stimulus:"Identifying learning needs.", 
									qType: "dd",
									choices: [
										"Select...",
										"Coaching ",
										"Connecting",
										"Informing ",
										"Mentoring",
										"Training"
									],
									answers: [0,0,0,0,1,0],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>Sorry, your answers are incorrect. The correct order is: 1. Informing; 2. Connecting; 3. Training; 4. Coaching; and 5. Mentoring.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_01_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review the key programs organizations can implement to facilitate employee career development. Please read each statement and select the program that best matches it from the drop-down menu.</p>"
					},
					{
						time: 11,
						html: "<p>Then select the \"Submit\" button. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_120",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"What levels of career development support do CDFs provide VA employees?", qType: "mc",
									choices: [
										"Informing ",
										"Connecting",
										"Training",
										"Mentoring",
										"Coaching",
										"All of the above"
									],
									answers: [0,0,0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry</span></p><p>While that is partially correct, \"All of the above\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_01_120",
				closedCaption: [
					{
						time: 0,
						html: "<p>From the list, select the option that best answers the question, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_130",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='tac group1' style='position: absolute;margin-left:266px;'><img src='images/CDF_02_01_130.png' alt='Three business professionals smiling' style='margin-top:-24px;position:absolute;top:0px;' /></div><div class='group2' style='position: absolute;opacity: 0; margin-left:-16px;' ><img src='images/CDF_02_01_130_1.png' alt='MyCareer@VA homepage' style='margin-top:-24px' /></div><div class='group3' style='opacity: 0;'><img src='images/CDF_02_01_130.png' alt='Three business professionals smiling' style='margin-top:-24px; margin-right:-16px;' class='fr' /><h2>MyCareer@VA:</h2><ul><li>Supports career development</li><li>Develops skills, abilities, and competencies</li><li>Creates career possibilities</li><li>Connects effort to long-term goals</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 10.5,
							contentId: ['.group1','.group2'],
							displayType: ['toggleV','toggleV'],
							speed: [0,400]
						},
						{
							time: 27.5,
							contentId: ['.group2','.group3'],
							displayType: ['toggleV','toggleV'],
							speed: [0,400]
						}
					]
				},
				audio: "audio/02_01_130",
				closedCaption: [
					{
						time: 0,
						html: "<p>VA and VALU wanted to give employees access to VA's extensive interactive and cutting-edge career development tools and resources in a single location. The result was the MyCareer@VA website.</p>"
					},
					{
						time: 13.9,
						html: "<p>The MyCareer@VA website became the first-of-its-kind Federal government collection of career management resources, programs, and training. It is changing the way VA employees manage their long-term VA careers.</p>"
					},
					{
						time: 27,
						html: "<p>It promotes engagement by connecting employees and managers to MyCareer@VA to support career development, fully develop their personal array of skills, abilities, and competencies, broaden their horizon of career possibilities, and connect everyday efforts to long-term goals.</p>"
					},
					{
						time: 44.9,
						html: "<p>Through MyCareer@VA, employees can achieve greater job satisfaction by envisioning and planning a future at VA.</p>"
					},
					{
						time: 52.2,
						html: "<p>Throughout the other lessons in this course, you will learn more about MyCareer@VA and how you can use it as a CDF to support employee development. Select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_135",
			templateId: "tlgr",
			content:{
				title: "Bibliography",
				image: "",
				altText: "",
				text:"<ul><li>Bandura, A. (1986) <em>Social foundations of thought  and action: A social-cognitive theory. </em>Upper Saddle River, NJ: Prentice  Hall.</li><li>Buckingham,  Marcus &amp; Clifton, Donald. <em>Now, Discover Your Strengths. </em>New York: The Free Press, 2001.</li><li>Health  Careers Network (2014). <em>2014 Healthcare  Hiring Outlook. </em>Retrieved from <a href='http://www.healthecareers.com/article/2014-healthcare-hiring-outlook/174051' target='_blank'>http://www.healthecareers.com/article/2014-healthcare-hiring-outlook/174051</a></li><li>Holland,  J.L., Whitney, D.R., Cole, N.S., &amp; Richards, J.M., Jr. (1969). <em>An empirical occupational classification  derived from a theory of personality and intended for practice and research. </em>ACT  Research Report 29. Iowa City, IA: American College Testing Program.</li><li>Maslow, A. H. (1943).&nbsp;A Theory of Human Motivation.&nbsp;<em>Psychological Review</em>, 50(4), 370-96.</li><li>Meister,  Jeanne (2012). <em>Job Hopping Is the 'New  Normal' for Millennials: Three Ways to Prevent a Human Resource&nbsp;Nightmare. </em>Retrieved from <a href='http://www.forbes.com/sites/jeannemeister/2012/08/14/job-hopping-is-the-new-normal-for-millennials-three-ways-to-prevent-a-human-resource-nightmare/' target='_blank'>http://www.forbes.com/sites/jeannemeister/2012/08/14/job-hopping-is-the-new-normal-for-millennials-three-ways-to-prevent-a-human-resource-nightmare/</a></li><li>Parsons,  F. (1909). <em>Choosing a Vocation.</em>&nbsp;Boston: Houghton Mifflin Co.</li><li>Super, D.E. (1957). <em>The psychology of careers</em>. New York:  Harper &amp; Row. </li><li>Taylor, Kate (2013). <em>Why Millenials are ending the 9 to 5. </em>Retrieved from <a href='http://www.forbes.com/sites/katetaylor/2013/08/23/why-millennials-are-ending-the-9-to-5/' target='_blank'>http://www.forbes.com/sites/katetaylor/2013/08/23/why-millennials-are-ending-the-9-to-5/</a></li></ul>",
				audio: "",
				closedCaption: []
			}
		},
		{
			id:"02_01_140",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the lesson on Career Development Theory.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Define the importance of career development (for both individuals and VA).</li><li>List key career development theories.</li><li>List elements of career development.</li><li>Define VA's career development foundation.</li><li>Describe why MyCareer@VA was developed.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resource:</p><ul><li><a href='../resources/Importance_of_Career_Development_Talking_Points_Supervisors.pdf' target='_blank'>Key Career Development Talking Points Job Aid (PDF)</a></li></li></ul>"
						}

					]
				},
				audio:"audio/02_01_140",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the Career Development Theory lesson. In other lessons, you will learn how to put these theories into practice and expand your skills in facilitating employee development.</p>"
					},
					{
						time: 13.0,
						html: "<p>Please review the Learning Objectives again and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"02_02_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 2</h1><h2>Lesson 2 - Career Development Practice</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"02_02_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='opacity: 0;' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='opacity: 0;' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='opacity: 0;' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='opacity: 0;' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='opacity: 0;' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='opacity: 0;' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='opacity: 0;' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='opacity: 0;'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='opacity: 0;' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='opacity: 0;' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 3,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 4.5,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 6,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 7.5,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 9,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 10.5,
							contentId: ['.group6'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 12,
							contentId: ['.group7'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 13.5,
							contentId: ['.group8'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 15,
							contentId: ['.group9'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 16.5,
							contentId: ['.group10'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_02_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Career Development Practice for Career Development Facilitators, or CDFs. In this lesson, you will put career development theories into practice using the MyCareer@VA career planning process. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>In this lesson, you will learn how to put career development theory into practice. Specifically, you will learn about MyCareer@VA's four-phase career planning process and what activities should occur in each phase to help employees grow and advance their careers.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
							customHTML: "<h2>Learning Objective</h2><p>After completing this lesson, you should be able to:</p><ul><li>Define the four phases of the MyCareer@VA career planning process.</li></ul>"

						}
					]
				},
				audio:"audio/02_02_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Lesson Overview and Learning Objective. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen of the lesson.</p>"
					},
					{
						time: 14,
						html: "<p>When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_030",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text:"<div class='fullScreen'><div class='group1' style='opacity: 0;'><h2>Career development is best when it is:</h2><ul><li>Intentional or Proactive</li><li>Dynamic</li><li>Interactive</li><li>Contextual</li><li>Relational</li><li>Ongoing</li></div></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 18.5,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_02_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Career development is a multi-faceted, continuous process where both employees and employers work together to achieve mutually beneficial objectives. For the employee, that includes advancement and opportunities; for the employer, it's higher productivity and mission-achievement.</p>"
					},
					{
						time: 18,
						html: "<p>Career development for employees works best when it is intentional or proactive, dynamic, interactive, contextual, and relational allowing individuals the flexibility to adapt their approach based on their needs and goals. It is a life-long process and an ongoing conversation, not a one-time event.</p>"
					},
					{
						time: 37,
						html: "<p>To support career development, VA created the MyCareer@VA program to connect employees and managers to career development tools and resources. Let's explore this resource in greater detail. Select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_040",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText' style='z-index:500; margin-bottom:0;' >Select each phase to learn more, and then select \"Next\" to continue.</p><div class='cdFramework'><div style='position: absolute; left: 3px; top: 0px;'><a href='#trigger1' id='trigger1'><span>Assess</span></a></div><div style='position: absolute; right: 0px; top: 3px;'><a href='#trigger2' id='trigger2'><span>Explore</span></a></div><div style='position: absolute; right: 3px; bottom: 0px;'><a href='#trigger3' id='trigger3'><span>Plan</span></a></div><div style='position: absolute; left: 0px; bottom: 3px;'><a href='#trigger4' id='trigger4'><span>Take Action</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "400",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Assess",
									text:"<p>During the \"Assess\" phase, it is important for employees to learn more about themselves, their interests, values, strengths, limitations, and (most importantly) their personal career goals.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Explore",
									text:"<p>During the \"Explore\" phase, employees are figuring out their options for achieving their personal career goals. It is during this phase that they are researching new opportunities at VA and identifying the challenges that may prevent them from getting where they want to go.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "190"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Plan",
									text:"<p>During the \"Plan\" phase, employees have an understanding of themselves and the landscape in front of them. They have narrowed down their options and are identifying concrete, actionable steps to achieve their goals. Once complete, their plan will help them close the gaps between where they currently are and where they want to go.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Take Action",
									text:"<p>In the \"Take Action\" phase, employees are now implementing their development plan. They are either applying for a new job within VA or taking advantage of VA's many available learning resources to grow their skills.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/02_02_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>MyCareer@VA has identified a process to help employees easily understand the four phases of career development. The actions associated with each phase serve as a guide to help you lead your employee through each career development phase.</p>"
					},
					{
						time: 14,
						html: "<p>Select each phase to learn more.  When you are finished reading, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_050",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='p02_02_050'><div class='group1' style='opacity: 0;'><img src='images/CDF_02_02_050_1.png' alt='Map that shows Enter the Workforce, Assess, Explore, Plan, Take Action, and Leave the Workforce' /></div><div class='group2 fl' style='opacity: 0;'><img src='images/CDF_02_02_050_2.png' alt='Alex, a VA employee' /></div><div class='group3 assess slide1' style='opacity: 0;'></div><div class='group4 explore slide1' style='opacity: 0;'></div><div class='group5 plan slide1' style='opacity: 0;'></div><div class='group6 takeAction slide1' style='opacity: 0;'></div><div class='fullWhtbrdDesc'><a href='#' id='trigger1'>Text Description of Image or Animation</a><div id='popUp_1' title='Long Description'>The screen displays a circuitous path depicting non-linear progression in a civilian's career. The career path starts with a box labeled \"Enter the Workforce\" and ends with another box labeled \"Leave the Workforce.\" Between these two points are signs that indicate the four phases of career development, including \"Assess,\" \"Explore,\" \"Plan,\" and \"Take Action.\" Each phase is highlighted as the narrator advances through the scenario. Select the close button to exit this description.</div></div></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					description: { // Section 508 pop-up text description of the animation/time content
						id: 'popUp_1',
						width: 600,
						height: 200
					},
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 5,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 13.5,
							contentId: ['.group3','.group1','.group2'],
							displayType: ['toggleV','toggleV','toggleV'],
							speed: [0,0,0]
						},
						{
							time: 23,
							contentId: ['.group3','.group3'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide1']
						},
						{
							time: 24,
							contentId: ['.group3','.group3'],
							displayType: ['addClass','removeClass'],
							speed: ['slide1','slide2']
						},
						{
							time: 25,
							contentId: ['.group3','.group3'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide1']
						},
						{
							time: 40,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [0]
						},
						{
							time: 45,
							contentId: ['.group3','.group3','.group3'],
							displayType: ['toggleV','addClass','removeClass'],
							speed: [0,'slide1','slide2']
						},
						{
							time: 55,
							contentId: ['.group4','.group4'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 56,
							contentId: ['.group4','.group4'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide3']
						},
						{
							time: 57,
							contentId: ['.group4','.group4'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 70,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [0]
						},
						{
							time: 75,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [0]
						},
						{
							time: 83,
							contentId: ['.group5','.group5'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 84,
							contentId: ['.group5','.group5'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide3']
						},
						{
							time: 85,
							contentId: ['.group5','.group5'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 92,
							contentId: ['.group6'],
							displayType: ['toggleV'],
							speed: [0]
						},
						{
							time: 100,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [0]
						},
						{
							time: 110,
							contentId: ['.group6','.group6'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 111,
							contentId: ['.group6','.group6'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide3']
						},
						{
							time: 112,
							contentId: ['.group6','.group6'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						}
					]
				},
				audio: "audio/02_02_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's explore the four phases of career development using a case study. Meet Alex. Alex works as a medical administration specialist at an Ohio medical center. He began working at VA two years ago. As a Veteran himself, Alex is very passionate about VA's mission.</p>"
					},
					{
						time: 18,
						html: "<p>Alex wants to change careers, but he isn't exactly sure what he wants to do. We would consider Alex to be in Phase 1: Assess. In this phase, you should help Alex understand his interests and possibilities. You should ask open-ended questions such as: Why do you think you need a career change?  What type of work do you enjoy? What do you do well?</p>"
					},
					{
						time: 39.9,
						html: "<p>The answers to these questions will help both you and him more clearly define his goals. In conversation with Alex, he reveals that he accepted the medical administration position just to get into the Agency. He wants to try something that better matches his work interests.</p>"
					},
					{
						time: 55.8,
						html: "<p>Alex is now in Phase 2: Explore. He wants to continue working for VA, just in a different career field. Luckily for Alex, there are a lot of other career options that could be a better fit. Alex can continue to work for the mission he is passionate about while finding fulfillment in his job.</p>"
					},
					{
						time: 73,
						html: "<p>In this phase, you should be helping Alex explore available jobs at VA using tools like the My Career Fit Tool. Alex used the My Career Mapping Tool to explore jobs and found an interest in Finance. He mapped a career path from his current job to an accounting position and was able to identify new skills he needed. Alex is now in Phase 3: Plan.</p>"
					},
					{
						time: 95.5,
						html: "<p>In this phase you help Alex develop his plan. He should create SMART goals or an Individual Development Plan (IDP). Now that all the pieces are in place, the only thing left for Alex to do is to implement his plan in the next phase: Take Action.</p>"
					},
					{
						time: 110.5,
						html: "<p>In this phase you help Alex commit to his development. Have regular check-ins with him to ensure he's progressing toward his career goals. For example, Alex should begin taking courses towards an accounting certificate and add his new certification to his resume.</p>"
					},
					{
						time: 125.8,
						html: "<p>A good CDF understands each phase, helps employees identify the stage they are in, and helps them navigate next steps to meet their career goals. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_060",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				text: "<p class='actionText threeQuarterWidth'>Select the phase during which the following task should occur, and then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							customClass: "threeQuarterWidth",
							questions: [
								{
									stimulus:"Identify the knowledge and experience an employee needs to accomplish his/her career goals.", qType: "mc",
									choices: [
										"Assess",
										"Explore",
										"Plan",
										"Take Action"
									],
									answers: [0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>That is correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Plan\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_02_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review what we have discussed so far. Please read the question, select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_070",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				text: "<p class='actionText threeQuarterWidth'>Select the phase during which the following task should occur, and then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Research specific jobs and career fields an employee is interested in.", 
									qType: "mc",
									choices: [
										"Assess",
										"Explore",
										"Plan",
										"Take Action"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>That is correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Explore\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_080",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				text: "<p class='actionText threeQuarterWidth'>Select the phase during which the following task should occur, and then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							customClass: 'threeQuarterWidth',
							questions: [
								{
									stimulus:"Apply for jobs and prepare for interviews.", qType: "mc",
									choices: [
										"Assess",
										"Explore",
										"Plan",
										"Take Action"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>That is correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Take Action\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_090",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				text: "<p class='actionText threeQuarterWidth'>Select the phase during which the following task should occur, and then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							customClass: 'threeQuarterWidth',
							questions: [
								{
									stimulus:"Identify areas of professional strength.", qType: "mc",
									choices: [
										"Assess",
										"Explore",
										"Plan",
										"Take Action"
									],
									answers: [1,0,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>That is correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. \"Assess\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_110",
			templateId: "columns",
			content:{
				title: "Learning Objectives",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><h2>Learning Objective</h2><p>You should now be able to:</p><ul class='learningObj'><li>Define the phases of the MyCareer@VA career planning process.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resource:</p><ul><li><a href='../resources/Career_Planning_Process_Quick_Reference_Guide.pdf' target='_blank'>Career Planning Process Cheat Sheet (PDF)</a></li></ul>"
						}

					]
				},
				audio:"audio/02_02_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on Career Development Practice. Please review the Learning Objective and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"02_03_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 2</h1><h2>Lesson 3 - Diverse Populations</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"02_03_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' style='opacity: 0;' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='opacity: 0;' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='opacity: 0;' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='opacity: 0;' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='opacity: 0;' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='opacity: 0;' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='opacity: 0;' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='opacity: 0;' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='opacity: 0;'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='opacity: 0;' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='opacity: 0;' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group0'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 2,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 4,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 6,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 8,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 12,
							contentId: ['.group6'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 14,
							contentId: ['.group7'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 16,
							contentId: ['.group8'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 18,
							contentId: ['.group9'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 19.5,
							contentId: ['.group10'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_03_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson about diversity in career development for Career Development Facilitators, or CDFs.</p>"
					},
					{
						time: 6,
						html: "<p>This lesson will provide you with the knowledge, skills, and tools to help you more effectively relate to, communicate with, and support employees with diverse backgrounds. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>In this lesson, you will learn about the unique needs of VA's diverse populations and explore specialized career development approaches necessary to provide one-on-one support to VA's diverse workforce.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
							customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul><li>Define the importance of diversity and inclusion in the workplace.</li><li>Assess how your own background influences your work as a CDF.</li><li>Define VA's diverse populations.</li><li>Identify career development barriers that VA's diverse populations may experience.</li><li>Identify potential solutions for overcoming career development barriers.</li></ul>"

						}
					]
				},
				audio:"audio/02_03_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Lesson Overview and Learning Objectives.</p>"
					},
					{
						time: 5,
						html: "<p>If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_030",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_03_030.png",
				altText: "Image of four employees: Alex (male in business attire), Anthony (male in a wheelchair holding two American flags), Carl (male with a patriotic shirt and a hat with military pins), Maria (female in casual attire)",
				text: "<p class='actionText halfWidth'>Please read the question, review the images of VA employees, and select the employee you think best fits the description, then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which employee is a woman?", 
									qType: "mc",
									choices: [
										"Alex",
										"Anthony",
										"Carl",
										"Maria"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Maria is a woman.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_03_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's begin our discussion of diversity by meeting some of your colleagues at VA. Please read each question, select the employee you think best fits the description, then select the \"Submit\" button.</p>"
					},
					{
						time: 12,
						html: "<p>Which employee is a woman?</p><p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_040",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_03_030.png",
				altText: "Image of four employees: Alex (male in business attire), Anthony (male in a wheelchair holding two American flags), Carl (male with a patriotic shirt and a hat with military pins), Maria (female in casual attire)",
				text: "<p class='actionText halfWidth'>Please read the question, review the images of VA employees, and select the employee you think best fits the description, then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which employee is of Hispanic descent?", qType: "mc",
									choices: [
										"Alex",
										"Anthony",
										"Carl",
										"Maria"
									],
									answers: [1,0,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct.</span> However, Alex is also of Scottish and German descent. Maria is Hispanic, too, but she self-identifies as Latino since her family is from South America.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Alex is Hispanic. He is also of Scottish and German descent. Maria is Hispanic, too, but she self-identifies as Latino since her family is from South America.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_03_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Which employee is of Hispanic descent?</p><p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_050",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_03_030.png",
				altText: "Image of four employees: Alex (male in business attire), Anthony (male in a wheelchair holding two American flags), Carl (male with a patriotic shirt and a hat with military pins), Maria (female in casual attire)",
				text: "<p class='actionText halfWidth'>Please read the question, review the images of VA employees, and select the employee you think best fits the description, then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which employee has a disability?", qType: "mc",
									choices: [
										"Alex",
										"Anthony",
										"Carl",
										"Maria"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>Yes,</span> Anthony is physically disabled, but did you consider other types of disabilities—ones you may not see. For example, Maria is hearing impaired.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p>This employee might have a disability that is not visible to you. For example, Maria is hearing impaired.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_03_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>Which employee has a disability?</p><p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_060",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_03_030.png",
				altText: "Image of four employees: Alex (male in business attire), Anthony (male in a wheelchair holding two American flags), Carl (male with a patriotic shirt and a hat with military pins), Maria (female in casual attire)",
				text: "<p class='actionText halfWidth'>Please read the question, review the images of VA employees, and select the employee you think best fits the description, then select the \"Submit\" button.</p>",
				customClass: "noCorrect",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which employee is a military Veteran?", 
									qType: "mc",
									choices: [
										"Alex",
										"Anthony",
										"Carl",
										"Maria",
										"All of the above"
									],
									answers: [0,0,0,0,1],
									fbType: "pn",
									feedback: {
										positive: ["<p><span class='posFb'>You are correct.</span></p><p>Anthony, Alex, Maria, and Carl are all Veterans. Carl served in WWII, and Anthony, Alex, and Maria served in the Iraq war.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='posFb'>Incorrect.</span></p><p>While that answer is partially correct, all of the employees are Veterans. Alex is a Veteran who served in Afghanistan. Anthony, Carl, and Maria are Iraq war Veterans.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_03_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Which employee is a military Veteran?</p><p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_070",
			templateId: "tlgr",
			content:{
				title: "",
				image:"images/CDF_mentor5.png",
        		altText: "Course mentor, gesturing to the picture of the 4 employees",
				imageStyle:"margin-top:-24px; margin-right:-16px;",
				text:"<img src='images/CDF_02_03_030.png' alt='Image of four employees: Alex (male in business attire), Anthony (male in a wheelchair holding two American flags), Carl (male with a patriotic shirt and a hat with military pins), Maria (female in casual attire)' style='margin-right:100px;' />",
				audio: "audio/02_03_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>The answers to these questions highlight the fact that we sometimes make assumptions about people that may be incorrect or incomplete. As a CDF, you have the opportunity to get to know each employee who comes to you for career guidance.</p>"
					},
					{
						time: 14,
						html: "<p>By understanding each person's unique background and experiences, you are able to provide personalized support that helps them accomplish their career goals. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_080",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><blockquote><p>\"We define diversity in its broadest context to include all that makes us unique: race, color, gender, sexual orientation, religion, national origin, age, disability, culture, educational background, socioeconomic status, intellectual perspective, organizational level, and so much more.\"</p><p><em> – VA Office of Diversity and Inclusion (ODI)</em></p></blockquote></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 4.5,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we discuss diversity within the context of career development, take a moment to read how VA's Office of Diversity and Inclusion, or ODI, defines diversity. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_090",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText tac'>Please select each seal to learn more, then select the \"Next\" button to continue.</p><div class='p02_03_090'><div class='tac'><div class='wrap1'><a href='#trigger1' id='trigger1' title='Presidential Seal'><span>Presidential Seal</span></a><a href='#trigger2' id='trigger2' title='Veteran Affairs Seal' class='last'><span>Veteran Affairs Seal</span></a></div></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "480",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "center top",
								parentPosition: "center bottom+120",
								elementOfPosition: ".p02_03_090"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"President of the United States",
									text:"<p>Executive Order 13583 (2011):</p><p>\"Federal agencies shall \"identify appropriate practices to improve the effectiveness of each agency's efforts to recruit, hire, promote, retain, develop, and train a diverse and inclusive workforce.\"</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "center top",
								parentPosition: "center bottom+120",
								elementOfPosition: ".p02_03_090"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Department of Veterans Affairs",
									text:"<p>Mission of VA's Office of Diversity and Inclusion (ODI):</p><p>\"To build a diverse workforce and cultivate an inclusive workplace to deliver the best services to our Nation's Veterans, their families, and beneficiaries.\"</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/02_03_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>In an increasingly globalized world, the American workforce is more diverse today than it has ever been. In order to succeed, organizations must develop strategies to recruit, retain, and develop a diverse workforce. Providing equal opportunities for all employees to grow and advance in their careers is a key component of these strategies.</p>"
					},
          {
						time: 23,
						html: "<p>The Federal government and VA, in particular, recognize the importance of diversity and inclusion in the workplace. Please select each seal to learn how the President and VA have reinforced the importance of a diverse workforce. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_100",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<img src='images/CDF_02_03_030.png' alt='Image of four employees: Alex (male in business attire), Anthony (male in a wheelchair holding two American flags), Carl (male with a patriotic shirt and a hat with military pins), Maria (female in casual attire)' style='margin-right:70px; margin-top:0px;' />",
				audio: "audio/02_03_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>A diverse and inclusive workplace is one that reflects all segments of society and equally supports all their members. As a CDF, you will promote diversity and inclusion at VA by working with employees from a range of backgrounds to help them advance their careers.</p>"
					},
					{
						time: 18.5,
						html: "<p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_110",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_010.png",
				altText: "Course mentor sitting at her desk",
				text: "<img src='images/CDF_02_03_030.png' alt='Four VA employees: Alex, Anthony, Carl, and Maria' style='margin-top:-4px; float:none; margin-left:48px;' />",
				audio: "audio/02_03_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before you can recognize and address the special career development needs of diverse individuals, you must first understand yourself. By better understanding yourself, you can work more effectively with people of backgrounds different than your own.<p>"
          },
          {
						time: 14,
						html: "<p>As someone who promotes development and growth in others, you likely have a good degree of self-awareness already.  Still, deliberate self-reflection can help you better understand the values and attitudes you bring to a CDF relationship.</p><p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_120",
			templateId: "kc",
			content:{
				title: "",
				customClass: "dataCollection threeQuarterWidth",
				text: "<p class='actionText'>Please read this list and select the checkbox for each statement that you agree with, then select the \"Submit\" button. Your responses will NOT be recorded—this exercise is solely for self-reflection.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Select each statement that you agree with.",
									qType: "mr2",
									choices: [
										"I can recognize my own biases and assumptions about others.",
                    "I recognize there is more than one way to be successful.",
                    "I consider different styles and cultures in decision-making.",
                    "I know the value of diversity in an organization.",
                    "I can work productively with people from different backgrounds.",
                    "I can create solid relationships with people who think and act differently than me.",
                    "I know how to listen to and motivate diverse individuals and groups.",
                    "I am prepared to mentor and develop people, whatever their backgrounds.",
                    "I can model open communication and collaboration with people from diverse backgrounds."
									],
									answers: [1,1,1,1,1,1,1,1,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'></span></p><p>Please read through your responses and consider ways that your answers may impact your work as a CDF. Also, identify any areas where you would like to develop.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='posFb'></span></p><p>Please read through your responses and consider ways that your answers may impact your work as a CDF. Also, identify any areas where you would like to develop.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 1
				},
				audio: "audio/02_03_120",
				closedCaption: [
					{
						time: 0,
						html: "<p>To increase your own self-awareness, please read this list of diversity perspectives and select the checkbox next to statements that reflect your sentiments. Then, select the \"Submit\" button. Your responses will NOT be recorded—this exercise is solely for self-reflection. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_130",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><p><strong>Cultural competence</strong> refers to a combination of knowledge, skills, and awareness pertaining to cultural differences that enable employees and leaders to work effectively cross-culturally.</p><div class='group2' style='opacity: 0;'><p>A culturally competent CDF:<ul><li>Understands and appreciates diversity</li><li>Does not make assumptions without clarifying understanding</li><li>Challenges any diversity \"blind spots\" they may have</li><li>Provides guidance in a culturally sensitive way</li><li>Is flexible and adaptive</li></ul></p></div></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 6.9,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 33,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_130",
				closedCaption: [
					{
						time: 0,
						html: "<p>In addition to increasing self-awareness, CDFs should also strive to build cultural competence. Cultural competence begins with an awareness of and respect for differences. Competence includes avoiding stereotypes or assumptions that everyone from a particular background holds the same beliefs or behaves the same way.</p>"
					},
					{
						time: 21,
						html: "<p>Gerard Egan, an expert in the field of counseling and facilitating, proposed a series of competencies that are important for CDFs to learn when working with people from a range of backgrounds. Please take a moment to review the list and assess your level of cultural competency.</p>"
					},
					{
						time: 38,
						html: "<p>If you want to learn more about building your cultural competence, please consult the \"Further Reading\" section by selecting the \"Resources\" button. Effective CDFs understand both their own background and the backgrounds of each individual with whom they work.</p>"
					},
					{
						time: 53,
						html: "<p>When you are finished reading, please select the \"Next\" button to begin learning about VA's diverse populations.</p>"
					}
				]
			}
		},
		{
			id:"02_03_140",
			templateId: "popUp",
			content:{
				title: "",
				customClass: "fullScreen",
				customHTML:"<div class='p02_03_140'><p class='actionText fr'>Please select each piece of the circle to learn more about some of the diverse populations at VA, and then select \"Next\" to continue.</p><div class='bases2'><img class='bases' src='../course/images/CDF_02_03_140_BG.png' alt=\"A circle with VA's Diverse Workforce in the center and arrows pointing to the categories listed on this page.\" /></div><div class='base'><a href='#trigger1' id='trigger1'><span>Race</span></a><a href='#trigger2' id='trigger2'><span>Culture & Ethnicity</span></a><a href='#trigger3' id='trigger3'><span>Generations</span></a><a href='#trigger4' id='trigger4'><span>Occupational Category</span></a><a href='#trigger5' id='trigger5'><span>LGBT</span></a><a href='#trigger6' id='trigger6'><span>People w/ Disabilities</span></a><a href='#trigger7' id='trigger7'><span>Veterans</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "360",
								height: "420"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Race",
									text:"<p>VA defines race as the \"personal characteristics associated with race (such as hair texture, skin color, or certain facial features).\"</p><p>Most common racial groups at VA:<ul><li>White</li><li>Black or African American</li><li>Hispanic or Latino</li><li>Asian</li><li>Native Hawaiian or Pacific Islander</li><li>American Indian or Alaskan native</li></ul></p><p>If employees believe race is an obstacle in their careers, try to understand their experiences by asking open-ended questions. Help individuals identify resources and develop strategies to overcome these obstacles. For questions about how to best support these employees, ODI and the Office of Resolution Management are a great place to start.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "360",
								height: "260"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Culture & Ethnicity",
									text:"<p>VA defines an ethnic group as \"a group of people whose members may identify with each other through a common heritage, a common language, a common culture, or a shared religion.\"</p><p>Respect all backgrounds and never make assumptions about employees based on their heritage. Remember that every culture has its own values and norms, and that people from a different culture may approach career development from a different perspective.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "360",
								height: "310"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Generations",
									text:"Today's workforce is made up of people from multiple generations:<ul><li>Veterans (born 1922–1945)</li><li>Baby Boomers (born 1946–1960)</li><li>Generation X (born 1961–1980)</li><li>Millennials (born 1981–2000)</li></ul><p>Members of each generation bring their own attitudes, expectations, and preferences to the workplace. Employees may feel that they are treated differently than others because of their age. Be prepared to help identify strategies to overcome actual or imagined barriers.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "360",
								height: "260"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Occupational Category",
									text:"<p>In the 2013 Federal Employee Viewpoint Survey, only 36% of VA employees indicated they were satisfied with the opportunity to get a better job in the organization.</p><p>Be prepared to recommend leadership, skill-building, and certificate programs that can help employees at GS Level 9 and below, and the wage grade equivalent move to the next grade.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "360",
								height: "360"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"LGBT",
									text:"<p>VA defines sexual orientation as \"a person's permanent emotional, romantic, or sexual feelings toward certain other people.\"<p></p>LGBT is an abbreviation for Lesbian, Gay, Bisexual, and Transgender (though being transgender does not imply any specific sexual orientation).</p><p>LGBT employees experience real and perceived fear that they will be rejected, harassed, or threatened by other employees, or denied opportunities to advance in their careers because of their sexual orientation or identity. Do not ask or make assumptions about an employee's sexual orientation or identity. Familiarize yourself with your state's legislation related to LGBT employees as well as the resources available through VA's ODI.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "360",
								height: "360"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "6",
								content:{
									layoutClass:"",
									title:"People w/ Disabilities",
									text:"<p>There are many types of disabilities: physical, cognitive, mental, emotional, learning, developmental, or some combination thereof.</p><p>13.6% of people 18–44 years old have a disability.</p><p>29.2% of people 45–64 years old have a disability.</p><p>People with disabilities may face career challenges because of misperceptions that they are incapable or unqualified to perform certain tasks, that accommodations are too costly, or due to general discomfort with disabled persons. Do not assume to know what someone needs based solely on a disability. To help support all employees, be familiar with VA's robust resources for employees with disabilities.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "360",
								height: "420"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".base"
							},
							tlgr: {
								trigger: "7",
								content:{
									layoutClass:"",
									title:"Veterans",
									text:"<p>Outside of the Department of Defense, VA employs the highest number of Veterans in the Federal government. </p><p>In 2011:</p><ul><li>The national unemployment rate was 8.6%</li><li>The unemployment rate for Veterans was 12% </li><li>The unemployment rate for Veterans between the ages of 18 and 24 was 30%</li></ul><p>Veterans sometimes need assistance translating their valuable military experience and training into civilian workplace skills. Veterans may have physical or mental injuries resulting from their service that require special consideration or accommodation. At VA, there are extensive resources available to support Veterans in their transition to and development in a civilian career. </p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/02_03_140",
				closedCaption: [
					{
						time: 0,
						html: "<p>VA prides itself on its diverse and inclusive workforce. As a CDF, you will get to know each employee as an individual, but in order to understand the needs of people with whom you may work, it is helpful to understand the dynamics of the VA workforce.</p>"
					},
					{
						time: 15,
						html: "<p>Please select each piece of the circle to learn more about some of the diverse populations at VA. Note that these groups do not represent the full range of diversity at VA, but they can act as a starting point towards establishing understanding and sensitivity.</p>"
					},
					{
						time: 31,
						html: "<p>When you are finished reading about each group, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_150",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' style='opacity: 0;' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='opacity: 0;' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='opacity: 0;' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='opacity: 0;' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='opacity: 0;' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='opacity: 0;' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='opacity: 0;' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='opacity: 0;' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='opacity: 0;'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='opacity: 0;' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='opacity: 0;' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group0'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 2.5,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 5,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 7.5,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 12.5,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 15,
							contentId: ['.group6'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 17.5,
							contentId: ['.group7'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 20,
							contentId: ['.group8'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 22.5,
							contentId: ['.group9'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 25,
							contentId: ['.group10'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_03_150",
				closedCaption: [
					{
						time: 0,
						html: "<p>While keeping in mind the needs of these diverse groups, you must also try to understand how an individual's background and experiences have shaped their professional and life experiences.</p>"
					},
					{
						time: 11,
						html: "<p>Regardless of the demographic group to which they belong, each person is an individual with unique preferences, strengths, and perspectives. As a CDF, keep an open mind and respect the diverse backgrounds of all employees.</p>"
					},
					{
						time: 26,
						html: "<p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_160",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text: "<h2 class='actionText halfWidth'>Please read each employee's statement, select the best possible CDF responses from the list, and then select the \"Submit\" button.</h2><p>Two years ago, I developed a rare disease that caused me to go blind. I now use assistive technology to complete my work. My supervisor says that I am doing a great job, and she can see me in this role for a long time. I want to move up in the organization but am unsure of how to start this conversation with her.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"As a CDF, how would you respond?", 
									qType: "mc",
									choices: [
										"A) Do you think your blindness has impacted your performance?",
										"B) Do you feel that your supervisor and VA have provided you with suitable accommodations?",
										"C) What do you mean by \"move up\"? What type of role or position are you looking for?",
										"D) Do you think you just should feel lucky to have a job given your condition?"
									],
									answers: [0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>C is the only response that falls within a CDF's area of expertise.<p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>C is the only response that falls within a CDF's area of expertise.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_03_160",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now let's apply some of the concepts we have discussed to potential scenarios you might encounter as a CDF. Please read each employee's statement, select the best possible CDF responses from the list, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_170",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text: "<h2 class='actionText halfWidth'>Please read each employee's statement, select the best possible CDF responses from the list, and then select the \"Submit\" button.</h2><p>I was recently passed over for an opportunity to lead a team. I suspect it's because I am Hispanic. I sometimes hear my supervisor tell or laugh at inappropriate jokes, and I can't help but wonder about his racial bias. I have received positive feedback and above satisfactory ratings on my recent performance reports. I have also clearly expressed interest in leadership opportunities.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"As a CDF, how would you respond?", 
									qType: "mr",
									choices: [
										"A) What were the qualifications for the team lead? Do you feel that you met them?",
										"B) Can you find opportunities to exercise leadership in your current role so you'll be able to demonstrate your ability?",
										"C) Do you have leadership experience? Can you tell me about that experience?",
										"D) Are there any other opportunities for leadership on your team or in your organization?"
									],
									answers: [1,1,1,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>That is correct.</span></p><p>In fact, all of the questions are appropriate responses.<p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='posFb'>That is correct.</span></p><p>In fact, all of the questions are appropriate responses.<p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 1
				},
				audio: "audio/02_03_170",
				closedCaption: [
					{
						time: 0,
						html: "<p>Read the employee's statement, select the best possible CDF responses from the list, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_180",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><p>A barrier is <strong>\"any employment policy, procedure, practice, or condition, or facet thereof, that limits or tends to limit employment opportunities for members\"</strong> of a particular group.</p><p><em> – VA Office of Diversity and Inclusion (ODI)</em></p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 9.5,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_180",
				closedCaption: [
					{
						time: 0,
						html: "<p>In addition to better understanding yourself and VA employees, it is important that you are able to identify career progression barriers people may face. By calling attention to potential career obstacles and helping employees develop strategies to overcome them, you are empowering individuals to take charge of their careers.</p>"
					},
					{
						time: 19,
						html: "<p>Take a moment to read VA's definition of a career barrier. When you are finished reading, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_190",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'>Please select each type of barrier to learn more, then select the \"Next\" button to continue.</p><div class='p02_03_190'><a href='#trigger1' id='trigger1' title='Institutional'><span>Institutional</span></a><a href='#trigger2' id='trigger2' title='Individual' class='last'><span>Individual</span></a><a href='#trigger3' id='trigger3' title='Physical'><span>Physical</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "480",
								height: "220"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Institutional",
									text:"<p>Institutional barriers are organizational challenges that affect employment, development, retention, and promotion of individuals in the workplace. These can take the form of:</p><ul><li>Discriminatory Policies (when anti-discriminatory policies are not enforced)</li><li>Discriminatory Attitudes (widespread discriminatory beliefs held by colleagues or leaders)</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "260"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Individual",
									text:"<p>Individual barriers are obstacles individuals experience that prevent them from reaching their full career potential. These can take the form of:</p><ul><li>Low self-esteem or self-doubt</li><li>Lack of career planning</li><li>Insufficient education or skill development</li><li>Internalization of stereotypes</li><li>Fear of failure or fear of success</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "200"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Physical",
									text:"<p>Physical barriers refer to workplaces that may be physically inaccessible or limiting to some employees. These can take the form of:</p><ul><li>Lack of reasonable accommodation</li><li>Inaccessible buildings or workspaces</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/02_03_190",
				closedCaption: [
					{
						time: 0,
						html: "<p>Barriers can take many forms. For example, barriers can be institutional, individual, or physical. Please select each barrier to learn more. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_200",
			templateId: "tlgr",
			content:{
				title: "",
				image:"images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				imageStyle:"margin-top:-24px; margin-right:-16px;",
        text:"<h2>Overcoming barriers:</h2><div class='fullScreen'><div class='group1' style='opacity: 0;text-indent: 20px;'><p>1. Thoroughly understand the employee</p></div><div class='group2' style='opacity: 0;text-indent: 20px;'><p>2. Direct employee to resources</p></div><div class='group3' style='opacity: 0;text-indent: 20px;'><p>3. Provide support and encouragement</p></div></div>",
				timedEvents: {
					events: [
            {
							time: 2,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 26,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 41,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_200",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a CDF, getting to know the employees with whom you work will better equip you to help them identify and overcome career development barriers. To get to know a person, you must ask them good questions.</p>"
					},
					{
						time: 12.5,
						html: "<p>The \"Holding Helping Conversations\" lesson reviews skills that can help you ask effective questions, listen actively, and respond effectively to gather as much information as possible from the employees with whom you work.</p>"
					},
					{
						time: 25,
						html: "<p>Then, follow-up by directing them to appropriate resources within the organization. The \"Career Development Practice\" and \"Referral Acumen\" lessons teach you about valuable VA resources that can help employees in various stages of their career development.</p>"
					},
					{
						time: 41,
						html: "<p>Finally, providing employees with the support and encouragement they need to overcome obstacles can be incredibly helpful. The 'Building Rapport and Trust' lesson builds on your existing experience and will provide you with new tools to support employees in the context of career development.</p>"
					},
					{
						time: 57,
						html: "<p>Select the \"Next\" button to continue.</p>"
					}
				]
			}
    },
		{
			id:"02_03_210",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				customClass: "threeQuarterWidth",
				knowledgeCheck: {
					forms: [
						{
							formLegend: "Please read each employee statement. Use the drop-down menus to indicate whether each employee statement can be considered a career barrier. When you are finished, select the \"Submit\" button.",
							questions: [
								{
									stimulus:"I don't know how to take my career to the next level.", 
									qType: "dd",
									choices: [
										"Select...",
										"Yes",
										"No"
									],
									answers: [0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"I am afraid that I might fail if I take on new responsibilities.", 
									qType: "dd",
									choices: [
										"Select...",
										"Yes",
										"No"
									],
									answers: [0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"My supervisor says that the accommodations I need are not reasonable.", 
									qType: "dd",
									choices: [
										"Select...",
										"Yes",
										"No"
									],
									answers: [0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"I don't think I deserve to be successful.", 
									qType: "dd",
									choices: [
										"Select...",
										"Yes",
										"No"
									],
									answers: [0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"I'm not sure how to explain the skills I developed in the military.", 
									qType: "dd",
									choices: [
										"Select...",
										"Yes",
										"No"
									],
									answers: [0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"I am African American and my supervisor makes frequent derogatory statements about black people.", 
									qType: "dd",
									choices: [
										"Select...",
										"Yes",
										"No"
									],
									answers: [0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"I don't have the skills I need to do the job that I want.", 
									qType: "dd",
									choices: [
										"Select...",
										"Yes",
										"No"
									],
									answers: [0,1,0],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct</span>—all of the statements reflect potential career barriers.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.</p>","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, this is not correct. ALL of the statements reflect potential career barriers.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_03_210",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now, lets' try to identify some potential career barriers that might come up in your work as a CDF. Use the drop-down menus to indicate whether each employee's statement can be considered a career barrier. Then select the \"Submit\" button.</p>"
					},
					{
						time: 13,
						html: "<p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_215",
			templateId: "tlgr",
			content:{
				title: "Bibliography",
				image: "",
				altText: "",
				text:"<ul><li>Association for Multicultural Counseling and Development. <em>Multicultural Counseling Competencies</em>. <a href='http://www.counseling.org/Resources/Competencies/Multcultural_Competencies.pdf' target='_blank'>http://www.counseling.org/Resources/Competencies/Multcultural_Competencies.pdf</a></li><li>Executive Order No. 13583, 76 C.F.R. 52847-49 (2011).</p><p>Hoffman, Michael. \"VA Unveils Website in Push to Hire More Vets.\" <a href='http://www.military.com/veteran-jobs/career-advice/job-hunting/va-unveils-website-in-push-to-hire-more-vets.html' target='_blank'>http://www.military.com/veteran-jobs/career-advice/job-hunting/va-unveils-website-in-push-to-hire-more-vets.html</a> </li><li>Suddarth, Barbara, and Reile, David. <em>Facilitating Career Development: An Instructional Program for Career Development Facilitators and Other Career Development Providers</em>. Broken Arrow, OK: National Career Development Association, 2012.</li><li>U.S. Department of Veterans Affairs. <em>2013 Federal Employee Viewpoint Survey Results</em>. <a href='http://www.va.gov/OHRM/docs/2013FEVSReportVA.pdf' target='_blank'>http://www.va.gov/OHRM/docs/2013FEVSReportVA.pdf</a></li><li>U.S. Department of Veterans Affairs, Office of Diversity and Inclusion. <em>Barrier Analysis From the Ground Up</em>. <a href='http://www.diversity.va.gov/training/files/barrier-analysis.pptx' target='_blank'>http://www.diversity.va.gov/training/files/barrier-analysis.pptx</a></li><li>U.S. Department of Veterans Affairs, Office of Diversity and Inclusion. <em>Diversity and Inclusion Strategic Plan, FY 2012-2016</em>. <a href='http://www.diversity.va.gov/products/files/StrategicPlan.pdf' target='_blank'>http://www.diversity.va.gov/products/files/StrategicPlan.pdf</a></li><li>U.S. Department of Veterans Affairs, Office of Diversity and Inclusion. <em>Generations in the Workplace: Key Considerations for an Inclusive VA Workforce</em>. <a href='http://www.diversity.va.gov/training/files/generations-workplace.ppt' target='_blank'>http://www.diversity.va.gov/training/files/generations-workplace.ppt</a></li><li>U.S. Department of Veterans Affairs, Office of Diversity and Inclusion. <em>LGBT: Key Considerations and Awareness for an Inclusive Workforce</em>. <a href='http://www.diversity.va.gov/training/files/lgbt-awareness.ppt' target='_blank'>http://www.diversity.va.gov/training/files/lgbt-awareness.ppt</a></li></ul>",
				audio: "",
				closedCaption: []
			}
		},
		{
			id:"02_03_220",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the lesson on supporting career development for VA's diverse workforce.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Define the importance of diversity and inclusion in the workplace.</li><li>Assess how your own background influences your work as a CDF.</li><li>Define VA's diverse populations.</li><li>Identify career development barriers that VA's diverse populations may experience.</li><li>Identify potential solutions for overcoming career development barriers.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='http://www.diversity.va.gov/' target='_blank'>VA ODI Webpage</a></li><li>Recommended TMS courses:<ul><li>Workplace Diversity Awareness</li><li>Diversity on the Job: The Importance of Diversity and the Changing Workplace</li><li>Understanding Workplace Diversity</li></ul></li></ul>"
						}
					]
				},
				audio:"audio/02_03_220",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on supporting career development for VA's diverse workforce. Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson.</p>"
					},
					{
						time: 14,
						html: "<p>Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"03_01_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 3</h1><h2>Lesson 1 - Helping Skills - Attending</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"03_01_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio: "audio/03_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on attending, one of the most important helping skills you will use in your work as a Career Development Facilitator, or CDF. Attending means listening to someone and making them feel heard and cared for. </p>"
					},
					{
						time: 13.5,
						html: "<p>This lesson will provide you with the knowledge, skills, and tools to demonstrate attending behavior and begin building productive helping relationships with VA employees.</p>"
					},
					{
						time: 26,
						html: "<p>Along with the other facilitation skills you build in this unit, this lesson will serve as an important foundation for your work as a CDF. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>This lesson will discuss how to build an effective helping relationship with VA employees and will focus on the important skill of Attending.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
              customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you will be able to:</p><ul><li>Define a helping relationship.</li><li>Identify the core helping skills.</li><li>Define the SOLER method.</li></ul>"

						}
					]
				},
				audio:"audio/03_01_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please take a moment to read the Lesson Overview and Learning Objectives.</p>"
					},
					{
						time: 3.5,
						html: "<p>If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_030",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_010.png",
				altText: "Course mentor sitting at her desk",
				text:"<h2>Career Reflection</h2><ul><li>When have you needed help from someone to deal with a difficult career-related problem?</li><li>How did that problem make you feel?</li><li>How did you feel asking someone for help?</li><li>What characteristics made you feel comfortable seeking help from that person?</li></ul>",
				audio: "audio/03_01_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>To begin, please think about a time in your life when you needed help from someone to deal with a difficult career-related problem. Reflecting on a time in your own career when you needed help will allow you to better identify with the needs of those employees seeking your assistance.</p>"
					},
					{
						time: 16.5,
						html: "<p>When you are finished reflecting, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_040",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
        text:"<div class='group1 keyText' style='opacity: 0;'><p>A <strong>helping relationship</strong> is one in which two or more people work toward finding a solution to a problem or set of problems.</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 22,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_01_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a CDF, it is critical for you to recognize and understand how employees feel and how to make them comfortable so you can work together effectively. Attending behavior allows people to feel comfortable and supported, and forms the basis of a helping relationship.</p>"
					},
					{
						time: 18,
						html: "<p>You may be asking yourself, what do you mean by a helping relationship?  Helping is first and foremost about the person seeking assistance, and the purpose of a helping relationship is to help this individual find a solution to a problem.</p>"
					},
					{
						time: 32,
						html: "<p>Please select the \"Next\" button to learn about the elements of a helping relationship.</p>"
					}
				]
			}
		},
		{
			id:"03_01_050",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'>Please select each characteristic of a helping relationship to learn more, then select the \"Next\" button to continue.</p><div class='p02_03_190'><a href='#trigger1' id='trigger1' title='Acceptance & Respect'><span>Acceptance & Respect</span></a><a href='#trigger2' id='trigger2' title='Understanding & Empathy' class='last'><span>Understanding & Empathy</span></a><a href='#trigger3' id='trigger3' title='Trust'><span>Trust</span></a><a href='#trigger4' id='trigger4' title='Warmth & Genuineness'><span>Warmth & Genuineness</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "400",
								height: "300"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Acceptance & Respect",
									text:"<p>It is important to accept and respect all employees. Because navigating one's career can be stressful, some individuals may be frustrated and anxious. When interacting with an employee:</p><ul><li>Demonstrate <strong>acceptance</strong> by remaining nonjudgmental.</li><li>Show <strong>respect</strong> by treating each individual with dignity.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "330"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Understanding & Empathy",
									text:"<p>You do not need to agree with each employee, but you do need to make sure each person feels heard, understood, and appreciated. When interacting with an employee:</p><ul><li>Demonstrate <strong>understanding</strong> by listening thoughtfully to others and clarifying the interpretation of their experiences.</li><li>Show <strong>empathy</strong> by trying to experience another person's life or feelings as they experience them.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "240"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Trust",
									text:"<ul><li>Earning each individual's <strong>trust</strong> by maintaining confidentiality, making them feel safe, and keeping their best interests in mind  is an essential component of the CDF-employee relationship. </li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "150"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Warmth & Genuineness",
									text:"<ul><li>Show <strong>warmth</strong> by being kind and attending fully to what others are saying.</li><li>Demonstrate <strong>genuineness</strong> by being authentic and sincere.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/03_01_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>Gerard Egan, an expert in counseling, identified four basic elements of a helping relationship.</p>"
					},
					{
						time: 6.5,
						html: "<p>Please select each skill to learn more. When you are finished reading all four, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_060",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				customClass: "halfWidth",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"From the list, please select the term that is NOT one of the basic characteristics of a helping relationship:", 
									qType: "mc",
									choices: [
										"Understanding & Empathy",
										"Acceptance & Respect",
										"Warmth & Genuineness",
										"Trust",
										"Influence"
									],
									answers: [0,0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>Influence is NOT one of the basic ingredients of a helping relationship.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. All of these answers are basic elements of a helping relationship EXCEPT \"Influence.\"<p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_01_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's quickly review some of the information we have discussed so far. From the list, please select the term that is NOT one of the basic elements of a helping relationship, and then select the \"Submit\" button. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_070",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
        text:"<div class='group1 keyText' style='opacity: 0;'><h2>Career Reflection</h2><p>Can you think of a time in your life when you felt that someone was not truly paying attention to you?</p><p>How did that make you feel?</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 20.4,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_01_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now that we have reviewed the core elements of a helping relationship, let's focus on one of the most important helping skills: Attending. Good Attending behavior demonstrates that you respect a person and are genuinely interested in them. It involves giving someone your full attention and noticing what they say and how they say it.</p>"
					},
					{
						time: 20.5,
						html: "<p>Please think of a time when you felt that someone was not paying attention to you. How did that make you feel? Chances are, you felt that what you had to say was unimportant. When you demonstrate effective Attending skills, employees will have a different experience.  They will feel heard, valued, and supported.</p>"
					},
					{
						time: 40.5,
						html: "<p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_080",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'>Please select each letter to learn more, then select the \"Next\" button to continue.</p><div class='p03_01_080'><a href='#trigger1' id='trigger1' title='S'><span>S</span></a><a href='#trigger2' id='trigger2' title='O'><span>O</span></a><a href='#trigger3' id='trigger3' title='L'><span>L</span></a><a href='#trigger4' id='trigger4' title='E'><span>E</span></a><a href='#trigger5' id='trigger5' title='R'><span>R</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "400",
								height: "250"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Squarely",
									text:"<ul><li>Face the client <strong>S</strong>quarely.</li><li>Facing an individual directly conveys that you respect what they have to say and that you are focusing on them.</li><li>Facing away from an individual sends the message that you are not interested in what they have to say.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "260"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Open Posture",
									text:"<ul><li>Adopt an <strong>O</strong>pen posture.</li><li>An open posture conveys that you are available and receptive to what an individual has to say.</li><li>Hunching over or crossing your arms and legs can send a message that you are distancing yourself.</li><li>Of course you should be comfortable, but it is important to consider whether your posture communicates openness to others.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "240"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Lean Toward the Employee",
									text:"<ul><li><strong>L</strong>ean toward the employee.</li><li>Hinging forward a bit while still respecting an individual's personal space conveys that you are interested and engaged.</li><li>Leaning backwards may convey that you are disinterested in what someone has to say.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "250"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Maintain Good Eye Contact",
									text:"<ul><li>Maintain good <strong>E</strong>ye contact.</li><li>Holding eye contact sends the message that you are interested in an individual and what they have to say. Your focus is on them, not anything else.</li><li>Looking around the room, checking electronic devices, or failing to make eye contact conveys that someone does not have your full attention.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "240"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+50 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Try to be Relaxed",
									text:"<ul><li>Try to be <strong>R</strong>elaxed.</li><li>Set the tone for your sessions by appearing comfortable and relaxed.</li><li>If you convey a feeling of ease, the employees with whom you work will be more likely to feel comfortable too.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/03_01_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>You demonstrate attending in the way you orient yourself toward another person. Gerard Egan created a model to help counselors attend to their clients. You can remember this model by its mnemonic, SOLER, and use each element to build stronger helping relationships with VA employees!</p>"
					},
					{
						time: 17.5,
						html: "<p>Please select each letter to learn how this model can help you build effective Attending skills. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_090",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				audio: "audio/03_01_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>Keeping the SOLER method in mind will help you build effective helping skills and better attend to employees' career needs. However, it is important to note that this model was designed to align with North American cultural norms, so you should consider whether this will be effective with employees on an individual basis.</p>"
					},
					{
						time: 18.5,
						html: "<p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_100",
			templateId: "cust",
			content:{
				title: "",
				customHTML: "<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor2.png' alt='Course mentor smiling' style='margin-top:-24px' /></div>",
				audio: "audio/03_01_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's use the SOLER method to assess whether our CDF Erika is using good attending skills and orienting herself appropriately to employees. On the following screens, please examine each picture of Erika and determine if she is adhering to the specified SOLER skill. Select the \"Next\" button to get started.</p>"
					}
				]
			}
		},
		{
			id:"03_01_105",
			templateId: "kc",
			content:{
				title: "", 
				image: "images/CDF_03_01_100_2.png",
				altText: "Course mentor Erika sitting calmly with hands placed in her lap",
				text: "<p class='actionText threeQuarterWidth'>Please select the best answer, and then select \"Submit.\"</p><p><span id='p03_01_105_link' tabindex='-1'><a href='#p03_01_105_link' onclick='javascript:$(\"#p03_01_105_link\").html(\"S = Sit Squarely\");$(\"#p03_01_105_link\").focus();'>Select here for a hint</a>.</span></p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Does Erika reflect the \"S\" in SOLER?", 
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>If you are the employee with whom she is meeting, Erika is sitting squarely toward you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. If you are the employee with whom she is meeting, Erika is sitting squarely toward you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_01_105",
				closedCaption: [
					{
						time: 0,
						html: "<p>Does Erika reflect the \"S\" in SOLER? Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_110",
			templateId: "kc",
			content:{
				title: "", // Simple jquery replace text hint link
				image: "images/CDF_03_01_110.png",
				altText: "Course mentor Erika sitting with arms crossed and frustrated expression",
				text: "<p class='actionText threeQuarterWidth'>Please select the best answer, and then select \"Submit.\"</p><p><span id='p03_01_110_link' tabindex='-1'><a href='#p03_01_110_link' onclick='javascript:$(\"#p03_01_110_link\").html(\"O = Open Posture\");$(\"#p03_01_110_link\").focus();'>Select here for a hint</a>.</span></p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Does Erika reflect the \"O\" in SOLER?", 
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>Erika's posture sends the message that she is shut off or unapproachable, not open.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is not correct.</span></p><p>Erika's posture sends the message that she is shut off or unapproachable, not open.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_01_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Does Erika reflect the \"O\" in SOLER? Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_120",
			templateId: "kc",
			content:{
				title: "", 
				image: "images/CDF_03_01_120.png",
				altText: "Course mentor Erika sitting upright, smiling, and leaning forward with hands in her lap",
				text: "<p class='actionText threeQuarterWidth'>Please select the best answer, and then select \"Submit.\"</p><p><span id='p03_01_120_link' tabindex='-1'><a href='#p03_01_120_link' onclick='javascript:$(\"#p03_01_120_link\").html(\"L = Lean Toward Employee\");$(\"#p03_01_120_link\").focus();'>Select here for a hint</a>.</span></p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Does Erika reflect the \"L\" in SOLER?", 
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>Erika is leaning in to show that she is interested.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Erika is leaning in to show that she is interested.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_01_120",
				closedCaption: [
					{
						time: 0,
						html: "<p>Does Erika reflect the \"L\" in SOLER? Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_130",
			templateId: "kc",
			content:{
				title: "", 
				image: "images/CDF_03_01_130.png",
				altText: "Course mentor Erika sitting calmly with hands folded in her lap and looking forward with a pleased expression",
				text: "<p class='actionText threeQuarterWidth'>Please select the best answer, and then select \"Submit.\"</p><p><span id='p03_01_130_link' tabindex='-1'><a href='#p03_01_130_link' onclick='javascript:$(\"#p03_01_130_link\").html(\"E = Good Eye Contact\");$(\"#p03_01_130_link\").focus();'>Select here for a hint</a>.</span></p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Does Erika reflect the \"E\" in SOLER?", 
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>If you are the employee with whom she is meeting, Erika is making direct eye contact with you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. If you are the employee with whom she is meeting, Erika is making direct eye contact with you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 1
				},
				audio: "audio/03_01_130",
				closedCaption: [
					{
						time: 0,
						html: "<p>Does Erika reflect the \"E\" in SOLER? Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_140",
			templateId: "kc",
			content:{
				title: "", 
				image: "images/CDF_03_01_140.png",
				altText: "Course mentor Erika sitting turned to the side, with her arms crossed and an angry expression",
				text: "<p class='actionText threeQuarterWidth'>Please select the best answer, and then select \"Submit.\"</p><p><span id='p03_01_140_link' tabindex='-1' ><a href='#p03_01_140_link' onclick='javascript:$(\"#p03_01_140_link\").html(\"R = Relaxed\"); $(\"#p03_01_140_link\").focus();'>Select here for a hint</a>.</span></p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Does Erika reflect the \"R\" in SOLER?", 
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>Erika seems tense and angry, not relaxed.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Erika seems tense and angry, not relaxed.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 1
				},
				audio: "audio/03_01_140",
				closedCaption: [
					{
						time: 0,
						html: "<p>Does Erika reflect the \"R\" in SOLER? Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_145",
			templateId: "tlgr",
			content:{
				title: "Bibliography",
				image: "",
				altText: "",
				text:"<ul><li>Egan, Gerard. <em>The Skilled Helper: A Problem Management and Opportunity Development Approach to Helping</em>. Belmont, CA: Brooks Cole, 2009.</li><li>Suddarth, Barbara, and Reile, David. <em>Facilitating Career Development: An Instructional Program for Career Development Facilitators and Other Career Development Providers</em>. Broken Arrow, OK: National Career Development Association, 2012.</li></ul>",
				audio: "",
				closedCaption: []
			}
		},
		{
			id:"03_01_150",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the lesson on helping skills and the importance of Attending.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Define a helping relationship.</li><li>Identify the core helping skills.</li><li>Define the SOLER method.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='http://www.eganconsultants.com/models/model-c' target='_blank'>Egan's SOLER Model</a></li></ul>"
						}
					]
				},
				audio:"audio/03_01_150",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on Attending, one of the most important helping skills.</p>"
					},
					{
						time: 6.5,
						html: "<p>Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"03_02_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 3</h1><h2>Lesson 2 - Building Trust and Rapport</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"03_02_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='opacity: 0;' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='opacity: 0;' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='opacity: 0;' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='opacity: 0;' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='opacity: 0;' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='opacity: 0;' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='opacity: 0;' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='opacity: 0;'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='opacity: 0;' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='opacity: 0;' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 2,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 4,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 6,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 8,
							contentId: ['.group5'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group6'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 12,
							contentId: ['.group7'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 14,
							contentId: ['.group8'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 16,
							contentId: ['.group9'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 18,
							contentId: ['.group10'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio:"audio/03_02_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on building trust and rapport. One of the most important factors in becoming a successful CDF is establishing trust and rapport with employees. Without these factors, you cannot effectively empower others.</p>"
					},
					{
						time: 14.5,
						html: "<p>This lesson will review strategies and tools for building trust and rapport so you can form effective and productive helping relationships. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>In this lesson you will learn the key components of building trust and rapport with employees.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
							customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul><li>Discuss the importance of establishing trust and building rapport.</li><li>List the key components of being a trusted helper.</li><li>Practice building trust and rapport.</li></li></ul>"

						}
					]
				},
				audio:"audio/03_02_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Lesson Overview and Learning Objectives. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen of the lesson. When finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_030",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><p>Please think about someone you trust and would go to for help. Why do you trust them?</p><h2>Trust:</h2><ul><li>Increases employee commitment</li><li>Supports communication and collaboration </li><li>Allows the employee to be more open and honest</li></ul></div><div class='group2 keyText' style='opacity: 0;'><h2>Trustworthiness = Credibility + Reliability + Intimacy</h2><span class='group25 keyText' style='opacity: 0;'><p>Where,</p><p><strong>Credibility</strong> = expertise</p></span><p class='group3 keyText' style='opacity: 0;'><strong>Reliability</strong> = ability to get the work done</p><p class='group4 keyText' style='opacity: 0;'><strong>Intimacy</strong> = caring about others' needs</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 32.5,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 40,
							contentId: ['.group25'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 58.5,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 70.5,
							contentId: ['.group4'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_02_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Many times when we think of trusting relationships, we think of individuals we already know. So how do you become a trusted helper to employees who do not know you?</p>"
					},
					{
						time: 10,
						html: "<p>Being a trusted helper is critical to your success as a CDF because it increases employee commitment to the career development process, supports communication and collaboration between you and the employee, and allows the employee to be more open and honest.</p>"
					},
					{
						time: 26.5,
						html: "<p>The first step to becoming a trusted helper is building a trustworthy relationship. Trustworthiness is a function of three critical factors: credibility, reliability, and intimacy.</p>"
					},
					{
						time: 39.5,
						html: "<p>Credibility relates to expertise. An essential element in trust is having faith that the person in whom you place your trust has the skills and knowledge to assist you. In helping relationships, you can easily lose credibility if you claim to be capable in areas where you have little experience.</p>"
					},
					{
						time: 58,
						html: "<p>Reliability relates to your ability to get the work done. Employees need to be confident that they can depend on you and you can easily lose or damage trust if you don't fulfill your promises.</p>"
					},
					{
						time: 70.2,
						html: "<p>Intimacy represents the degree to which a person cares about another's needs. In helping relationships, if you appear aloof and detached from the situation, you will find a lack of openness and trust. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_040",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				customClass: "halfWidth",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"As a CDF, your ability to be seen as a trusted helper:", 
									qType: "mc",
									choices: [
                    "Facilitates an open and honest conversation between you and the employee",
                    "Establishes your credibility so that employees see you as a main source of support for their development",
                    "Increases employee commitment to the career development process",
                    "All of the above"
									],
									answers: [0,0,0,1],
									fbType: "rs",
									feedback: [
										["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, \"All of the above\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>\"All of the above\" is the best answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, \"All of the above\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									]
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_02_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review what we have discussed so far. Please read the question, select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_050",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><h2>Best practices for building rapport:</h2><ul><li>Be open and honest</li><li>Seek to understand</li><li>Ask questions</li><li>Be empathetic (through verbal and non-verbal cues)</li><li>Find common ground</li><li>Establish yourself as a credible source of career development information</li><li>Be flexible in your behavior</li></ul></div><div class='group2 keyText' style='opacity: 0;'><h2>Common barriers to building rapport:</h2><ul><li>Disagreeing</li><li>Talking too much</li><li>Criticizing others</li><li>Negative comments</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 88,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_02_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>So now that you know the key components of building trust, how can you use trust to build rapport? Rapport is a relationship that consists of mutual trust or emotional affinity. There are some best practices for building rapport. Be open and honest. This helps employees know you are someone they can trust. </p>"
					},
					{
						time: 18.5,
						html: "<p>Seek to understand. You must first work to understand an employee's current situation and career goals. When employees see that you understand their current situations, they will be more open to sharing and communicating with you.</p>"
					},
					{
						time: 33,
						html: "<p>Ask questions. This way, employees can see that you care about what they are saying, which in turn fosters trust. Be empathetic (through verbal and non-verbal cues). When employees think that you know what matters to them, rapport will follow.</p>"
					},
					{
						time: 48.5,
						html: "<p>Find common ground. This will help you relate to employees and them to you. Establish yourself as a credible source of career development information. This will help employees trust the guidance you provide and be more committed to the process.</p>"
					},
					{
						time: 63.5,
						html: "<p>Be flexible in your behavior. Each individual is different, and you need to be flexible in your communication style in order to be effective. You will learn more about how to respond to employees in the lesson on holding helping conversations.</p>"
					},
					{
						time: 78.5,
						html: "<p>Building rapport can have valuable long-lasting effects on a career. But that relationship can also be quickly and easily destroyed. Try to avoid these barriers to building rapport, including strongly or frequently disagreeing with an employee about trivial matters and talking too much—remember you are trying to develop a two-way conversation, not give a speech.</p>"
					},
					{
						time: 101.5,
						html: "<p>The last two barriers are criticizing others and making negative comments. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_053",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group3 keyText'><h2>Your opening statement should include:</h2><ul><li>An introduction of yourself.</li><li>A brief synopsis of your career story and why you chose to be a CDF.</li><li>A discussion of ways you can help and support the employee.</li></ul><p><strong>Do not forget to tailor your statement to the person you are speaking with!</strong></p></div>", // Anything that should be displayed on the whiteboard
				audio: "audio/03_02_053",
				closedCaption: [
					{
						time: 0,
						html: "<p>One important step is to initiate your conversations effectively.  You should develop an opening statement using the following techniques. Your statement should match your personality and style. </p>"
					},
					{
						time: 10,
						html: "<p>It could include an introduction of yourself, a brief synopsis of your career story and why you chose to be a CDF, and a discussion of ways you can help and support the employee.</p>"
					},
					{
						time: 21.5,
						html: "<p>Remember to tailor your statement to the person with whom you are speaking. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_056",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/03_02_056",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's apply trust and rapport building skills to scenarios you might face while working with VA employees. On the following screens, please read the description of an interaction with an employee, and then answer the question that follows. Select the \"Next\" button when you're ready to begin.</p>"
					}
				]
			}
		},
		{
			id:"03_02_060",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_03_02_050.png",
				altText: "Course mentor speaking to an employee, Rich",
				customClass: "halfWidth",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p><p>Rich schedules a meeting with you. When he walks in, he appears nervous and closed off. How should you approach this meeting with Rich?</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which is the best tactic for beginning your meeting with Rich?", 
									qType: "mc",
									choices: [
                    "A) Use open body language, and smile",
                    "B) Ask open-ended questions",
                    "C) Share your career story",
                    "D) Talk the majority of the time since Rich seems uncomfortable",
                    "E) Answers A, B, and C"
									],
									answers: [0,0,0,0,1],
									fbType: "rs",
									feedback: [
											["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.</p>","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. While that is partially correct, \"Answers A, B, and C\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
											["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.</p>","<p><span class='negFb'>Incorrect.</span></p><p>While that is partially correct, \"Answers A, B, and C\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
											["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.</p>","<p><span class='negFb'>Incorrect.</span></p><p>While that is partially correct, \"Answers A, B, and C\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
											["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.</p>","<p><span class='negFb'>Incorrect.</span></p><p>\"Answers A, B, and C\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
											["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	
									]
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_02_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Rich schedules a meeting with you. When he walks in, he appears nervous and closed off. How should you approach this meeting with Rich? Select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_070",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_03_02_060.png",
				altText: "Course mentor speaking to a female employee, Samantha",
				customClass: "halfWidth",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p><p>You and Samantha sit down to discuss her career goals. Samantha shares several goals that she would like to accomplish. While these goals are eventually attainable, they are unrealistic at this point in Samantha’s career. How should you approach Samantha about her goals?</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which tactic is best used when approaching Samantha about her career goals?", 
									qType: "mc",
									choices: [
                    "A) Tell Samantha that she is the expert on her development and that she should set goals that she believes are best",
                    "B) Be honest and inform Samantha that her career goals may be unrealistic at this point in her career",
                    "C) Ask one of Samantha's supervisors to weigh in on the probability of Samantha achieving her career goals",
                    "D) All of the above"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is not correct.</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_02_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>You and Samantha sit down to discuss her career goals. Samantha shares several goals that she would like to accomplish. While these goals are eventually attainable, they are unrealistic at this point in Samantha's career.</p>"
					},
					{
						time: 13,
						html: "<p>How should you approach Samantha about her goals? Select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue. </p>"
					}
				]
			}
		},
		{
			id:"03_02_080",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the Building Trust and Rapport lesson.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Discuss the importance of establishing trust and building rapport.</li><li>List the key components of being a trusted helper.</li><li>Practice building trust and rapport.</li></li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='http://www.mindtools.com/pages/article/building-rapport.htm' target='_blank'>Building Rapport</a></li><li><a href='http://agilecoach.typepad.com/agile-coaching/2010/08/building-trust.html' target='_blank'>Building Trust</a></li><li>Recommended TMS Courses:<ul><li>Building Trust</li><li>Building Trust Incrementally</li></ul></li></ul>"
						}
					]
				},
				audio:"audio/03_02_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the Building Trust and Rapport lesson. Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"03_03_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 3</h1><h2>Lesson 3 - Holding Helping Conversations</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"03_03_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/03_03_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Holding Helping Conversations. The foundation of your work as a CDF will be holding meaningful and productive conversations with VA employees to help them accomplish their career goals.</p>"
					},
					{
						time: 13.5,
						html: "<p>This lesson will focus on Active Listening and Effective Responding, two of the most important skills needed to hold a helping conversation. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>This lesson will build your skills in Active Listening and Effective Responding so you can hold productive and healthy helping conversations with VA employees.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
              customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul><li>Identify the elements of a productive helping conversation.</li><li>Define Active Listening.</li><li>Apply Active Listening strategies.</li><li>Identify Effective Responding strategies.</li><li>Apply Effective Responding strategies.</li></ul>"
						}
					]
				},
				audio:"audio/03_03_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please take a moment to read the Lesson Overview and Learning Objectives. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen. When you are finished reading, please select the \"Next\" button to continue. </p>"
					}
				]
			}
		},
		{
			id:"03_03_030",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><p>A <strong>helping conversation</strong> is a discussion between two or more people in which a particular problem or set of problems is addressed.</p></div><div class='group2 keyText' style='opacity: 0;'><p>As a CDF, you should:</p><ul><li>Listen Actively</li><li>Respond Effectively</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 19,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 25.5,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_03_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Your role as a CDF is to help employees identify ways to accomplish their career goals, not do the work for them. Therefore, a large part of your work will be performed by holding helping conversations with the individuals who come to you for guidance.</p>"
					},
					{
						time: 16,
						html: "<p>So what is a helping conversation? Essentially, a helping conversation is any discussion that seeks to resolve a problem or issue. To facilitate effective helping conversations, CDFs must engage in Active Listening and Effective Responding.</p>"
					},
					{
						time: 32.5,
						html: "<p>You likely already apply these skills in your daily work at VA, but this lesson will help you further build these abilities in the context of career development. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_040",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><p>People remember only <strong>25%–50%</strong> of what they hear.</p><p>What do YOU remember when listening to others?<p></p>What do people remember when listening to YOU?</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 4.5,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_03_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Active Listening is an essential component of effective communication. Research indicates that most of us remember only about half of what we hear, sometimes less.</p>"
					},
					{
						time: 11,
						html: "<p>Think about a recent conversation you had—how much time did you spend listening rather than talking? What new information did you learn? As a CDF, be prepared to tailor career advice based on what you know about each employee's unique situation.  Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_050",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText' style='opacity: 0;'><p><strong>Active Listening</strong> is a technique that involves not only listening to the words someone uses but also taking into account their tone of voice, their body language, and other non-verbal signs in order to gain a fuller understanding of what they are actually communicating.</p></div><div class='group2 keyText' style='opacity: 0;'><h2>Active Listening:</h2><ul><li>A thorough understanding for the CDF</li><li>A feeling of trust, support, and ease for the employee</li></ul></div>",
				timedEvents: {
					events: [
						{
							time: 18.8,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						},
						{
							time: 27,
							contentId: ['.group2'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_03_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>In today's increasingly connected world, we communicate with others more than ever. However, effective listening is much more complex than it may seem. It requires that you verbally engage with others while also sensing, interpreting, and responding to their non-verbal cues.</p>"
					},
					{
						time: 18.8,
						html: "<p>As a CDF, Active Listening helps you gain the fullest possible understanding of an employee's career experiences and goals. For employees who seek your guidance, Active Listening builds trust and creates an environment in which they feel heard, supported, and at ease.</p>"
					},
					{
						time: 36.5,
						html: "<p>All of these factors help build productive working relationships with employees. Please select the \"Next\" button to learn about the core elements of Active Listening.</p>"
					}
				]
			}
		},
		{
			id:"03_03_060",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'>Please select each Active Listening skill to learn more, then select the \"Next\" button to continue.</p><div class='p02_03_190'><a href='#trigger1' id='trigger1' title='Self-Awareness'><span>Self-Awareness</span></a><a href='#trigger2' id='trigger2' title='Attention to Verbal Communication' class='last'><span>Attention to Verbal Communication</span></a><a href='#trigger3' id='trigger3' title='Attention to Non-Verbal Communication' class='twoLines'><span>Attention to Non-Verbal Communication</span></a><a href='#trigger4' id='trigger4' title='Non-Judgment'><span>Non-Judgment</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "400",
								height: "220"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Self-Awareness",
									text:"<p>Self-awareness will allow you to provide better support to all VA employees.</p><ul><li>Listen to how you respond: the tone of your voice, the language you use, etc.</li><li>Take note of your thoughts and how you feel about what the employee is saying.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "270"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Attention to Verbal Communication",
									text:"<p>Listening to what an employee has to say is a critical way to gather information and gain clarity about an individual. Whether listening for explicit (what someone says) or implicit (what someone implies) meaning, you should seek to identify:</p></ul><ul><li>Identify:</li><ul><li>Experiences</li><li>Thoughts</li><li>Behaviors</li><li>Tone</li></ul></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "240"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Attention to Non-Verbal Communication",
									text:"<p>Individuals convey important messages through non-verbal communication. Non-verbal communication may convey a message that conflicts with what an individual says; in such cases, it is important to clarify how that employee actually feels. Pay attention to:<ul><li>Body positioning or movement</li><li>Facial expressions</li><li>Attitude</li><li>Conflicting messages</li></ul></p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "230"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Non-Judgment",
									text:"<p>Create an environment that allows individuals to develop their own careers. </p><ul><li>Do not interrupt with suggestions or counter-arguments.</li><li>Set aside your judgment and focus on the messages conveyed.</li><li>Assert your opinions and guidance respectfully.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/03_03_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Active Listening is much more than just hearing what someone has to say. It includes a few critical elements that should be used to develop your listening skills, allowing you to be a more impactful CDF. Please select each skill to learn more. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_070",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/03_03_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's apply some Active Listening skills to a scenario you might face while working with VA employees. On the following screens, please read the description of an interaction with an employee, and then answer the question that follows. Select the \"Next\" button when you're ready to begin.</p>"
					}
				]
			}
		},
		{
			id:"03_03_075",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_03_03_070.png",
				altText: "Anthony sitting slumped in his chair, with his arms crossed",
				customClass: "halfWidth",
				text: "<p class='halfWidth'>Anthony comes to speak with you and slumps down in his chair, crosses his arms, and sighs loudly. He says: \"Two weeks ago I took an online training course about how to format my resume. I then updated my resume and applied for a job but have not been invited for an interview. Things never work out for me—I should just give up.\"</p><p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"What behaviors can you identify in Anthony's statement?", 
									qType: "mc",
									choices: [
                    "A)	He took an online training course",
                    "B)	He updated his resume",
                    "C)	He applied for a job",
                    "D)	He did not get the job",
                    "E)	A, B, and C",
                    "F)	All of the above"
									],
									answers: [0,0,0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>The behaviors evident in Anthony's response are that he took a course, updated his resume, and applied for a job.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_080",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_03_03_070.png",
				altText: "Anthony sitting slumped in his chair, with his arms crossed",
				customClass: "halfWidth",
				text: "<p class='halfWidth'>Anthony comes to speak with you and slumps down in his chair, crosses his arms, and sighs loudly. He says: \"Two weeks ago I took an online training course about how to format my resume. I then updated my resume and applied for a job but have not been invited for an interview. Things never work out for me—I should just give up.\"</p><p class='actionText halfWidth'>Select the option or options that best answer the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"What thoughts or feelings can you identify in Anthony's statement and body language?", 
									qType: "mc",
									choices: [
                    "A)	Anthony is optimistic he will get the job ",
                    "B)	Anthony feels he often encounters obstacles",
                    "C)	Anthony feels frustrated",
					"D) B and C"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
										positive: ["<p><span class='posFb'>You are correct!</span><p>Anthony's language and body language convey that he feels he often encounters obstacles and is frustrated.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.</p>","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Anthony's language and body language convey that he feels he often encounters obstacles and is frustrated.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_03_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please read the scenario one more time and answer another question. Select the option that best answers the question, and then select the \"Submit\" button. When you're finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_090",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				text:"<div class='group1 keyText'><p><strong>Effective Responding</strong> increases and clarifies your understanding of an individual. It also makes that person feel heard and supported.</p></div>", // Anything that should be displayed on the whiteboard
				audio: "audio/03_03_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>The second component of having productive helping conversations is Effective Responding. Responding is the act of clarifying, communicating, and confirming a clear understanding of what someone else says. It also makes that person feel heard and supported.</p>"
					},
					{
						time: 16.5,
						html: "<p>Please select the \"Next\" button to learn about the core elements of Effective Responding.</p>"
					}
				]
			}
		},
		{
			id:"03_03_100",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'>Please select each Effective Responding skill to learn more, then select the \"Next\" button to continue.</p><div class='p02_03_190'><a href='#trigger1' id='trigger1' title='Ask Powerful Questions'><span>Ask Powerful Questions</span></a><a href='#trigger2' id='trigger2' title='Reflect'><span>Reflect</span></a><a href='#trigger3' id='trigger3' title='Restate'><span>Restate</span></a><a href='#trigger4' id='trigger4' title='Summarize'><span>Summarize</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "400",
								height: "280"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Ask Powerful Questions",
									text:"<p>When asking questions:</p><ul><li>Wait until the individual pauses; do not interrupt!</li><li>Ask close-ended questions to test your understanding.</li><li>Ask open-ended questions to gather more detail and insight into experiences or feelings.</li></ul><p>For a list of questions you can use in career development conversations, please consult the handout on the final screen of this lesson.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Reflect",
									text:"<ul><li>Mirror an individual's message and emotions.</li><li>Share your understanding of what an individual thinks and feels.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Restate",
									text:"<ul><li>Confirm your understanding.</li><li>Allow an individual to hear and assess your reiteration of what they have said.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "170"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Summarize",
									text:"<ul><li>Share your interpretation of an individual's thoughts and feelings.</li><li>Allow an individual to correct misunderstandings.</li><li>Clarify mutual responsibilities and next steps.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/03_03_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>Effective Responding entails a few critical skills that should be used during helping conversations, allowing you to be a more impactful CDF. Please select each skill to learn more. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_110",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_03_03_110.png",
				altText: "Image employee sitting in a chair",
				text: "<p class='actionText threeQuarterWidth'>Read the employee's statement and the CDF's response. Then, select the method of Responding that best describes the CDF's reply and select \"Submit.\"</p><p><strong>Employee:</strong> \"Everyone around me is successful at work and makes a lot of money. I want to get there too.\"</p><p><strong>CDF:</strong> \"So, you feel that you are surrounded by successful people who earn a lot of money, and you would like to get there too.\"</p>",
				customClass: "threeQuarterWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"What method of responding did the CDF use?", qType: "mc",
									choices: [
                    "Asking Powerful Questions",
                    "Reflecting",
                    "Restating",
                    "Summarizing"
									],
									answers: [0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>The CDF's response is an example of Restating.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>The CDF's response is an example of Restating.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_03_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's take a moment to apply what we have discussed about Effective Responding to scenarios you might face in your work as a CDF. Read the employee's statement and the CDF's response. Then, select the method of Responding that best describes the CDF's reply and select \"Submit.\" When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_120",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_03_03_120.png",
				altText: "Image of employee standing with arm crutches.",
				text: "<p class='actionText threeQuarterWidth'>Read the employee's statement and the CDF's response. Then, select the method of Responding that best describes the CDF's reply and select \"Submit.\"</p><p><strong>Employee:</strong> \"Since the accident, I seem to have lost a lot of my self-confidence. I'm really scared that I won't be able to succeed now that I have returned to work. My supervisor has provided me with reasonable accommodations to do my job, but I am nervous that I am going to mess up and get fired.\"</p><p><strong>CDF:</strong> \"What I hear you saying is that you're feeling some self-doubt lately, and you are scared the accident will have an impact on your ability to perform your job duties.\"</p>",
				customClass: "threeQuarterWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"What method of responding did the CDF use?", qType: "mc",
									choices: [
                    "Asking Powerful Questions",
                    "Reflecting",
                    "Restating",
                    "Summarizing"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>The CDF's response is an example of Summarizing.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>The CDF's response is an example of Summarizing.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_03_120",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please select the method that best describes this CDF's response. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_130",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_03_03_130.png",
				altText: "Image of a male employee sitting with his arms open and bent at the elbow, palms face-up.",
				text: "<p class='actionText threeQuarterWidth'>Please read the employee's statement and the list of possible questions you could ask in response. Select the checkbox next to each question that can be considered open ended, and then select \"Submit.\"</p><p><strong>Employee:</strong> \"I can't decide whether to go back to school to finish my bachelor's degree in electrical engineering. I completed two years of college but had to drop out to take care of my family when my mother got sick. I have worked as an electrician for five years, but I am starting to think about my long-term career. I want to be able to provide for my family, and I think I could be a good manager.\"</p>",
				customClass: "threeQuarterWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which of the following questions would be considered open ended?", qType: "mr",
									choices: [
                    "1. Where did you attend college?",
                    "2. What do you like most about being an electrician and why?",
                    "3. How do you contribute to your current team?",
                    "4. How big is your family?",
					"5. What would make you feel like you had a successful long-term career?",
					"6. Why do you think you would be a good manager?",
					"7. How can you develop the skills you need to accomplish your goals?"
									],
									answers: [0,1,1,0,1,1,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>Questions 1 and 4 are NOT open ended.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Only questions 1 and 4 are NOT open ended.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_03_130",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now let's identify some powerful questions you can ask employees. Please read the employee's statement followed by the list of possible questions you could ask in response. Select the checkbox next to each question that can be considered open-ended, and then select \"Submit.\" When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_135",
			templateId: "tlgr",
			content:{
				title: "Bibliography",
				image: "",
				altText: "",
				text:"<ul><li>Agile Coach (2010). <em>Building Trust on Agile Teams.</em> Retrieved from <a href='http://agilecoach.typepad.com/agile-coaching/2010/08/building-trust.html' target='_blank'>http://agilecoach.typepad.com/agile-coaching/2010/08/building-trust.html</a></li><li>Egan, Gerard. <em>The Skilled Helper: A Problem Management and Opportunity Development Approach to Helping</em>. Belmont, CA: Brooks Cole, 2009.</li><li>Mindtools. <em>Building Rapport: Establishing bonds</em>. Retrieved from  <a href='http://www.mindtools.com/pages/article/building-rapport.htm' target='_blank'>http://www.mindtools.com/pages/article/building-rapport.htm</a></li><li>Niles, Spencer and Harris-Bowlsbey, JoAnn. <em>Career Development Interventions in the 21st Century</em>. Upper Saddle River, NJ: Pearson, 2009.</li></ul>",
				audio: "",
				closedCaption: []
			}
		},
		{
			id:"03_03_140",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the Holding Helping Conversations lesson.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Identify the elements of a productive helping conversation.</li><li>Define active listening.</li><li>Apply active listening strategies.</li><li>Identify effective responding strategies.</li><li>Apply effective responding strategies.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='http://www.mindtools.com/pages/article/newTMC_88.htm' target='_blank'>Questioning Techniques</a></li><li><a href='../resources/Powerful_Questions.pdf' target='_blank'>Asking Powerful Questions</a></li><li><a href='https://ode.hr.gwu.edu/active-listening' target='_blank'>George Washington University Active Listening Inventory</a></li><li><a href='http://mycareeratva.va.gov/Develop/supervisors/Pages/tipsfortalking.aspx' target='_blank'>MyCareer@VA Tips for Talking with Employees about Career Development</a></li><li>Recommended TMS Courses:<ul><li>Listening Essentials: The Basics of Listening</li><li>Interpersonal Communication: Listening Essentials</li></ul></li></ul>"
						}
					]
				},
				audio:"audio/03_03_140",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on Holding Helping Conversations that focuses on Active Listening and Effective Responding. Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"03_04_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 3</h1><h2>Lesson 4 - Referral Acumen</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"03_04_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/03_04_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Referral Acumen, which brings together all of the skills covered in previous lessons.</p>"
					},
					{
						time: 6.5,
						html: "<p>This lesson will provide you with the knowledge, skills, and tools to effectively connect VA employees to the career development resources that best meet their needs. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>This lesson will help you leverage your career development knowledge and helping skills to effectively connect employees to the tools and resources that meet their needs.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
              customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul><li>Define the process of referring.</li><li>Discuss the key components of employee commitment to career development.</li><li>Practice referring employees at any career development phase.</li></ul>"
						}
					]
				},
				audio:"audio/03_04_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please take a moment to read the Lesson Overview and Learning Objectives. If you have questions about the content of this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_030",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a female employee",
				text:"<div class='tac halfWidth'><p class=' keyText' style='margin-top:30px;'><strong>Career Development Theory and Practice</strong></p><p><strong> + </strong></p><p class=' keyText'><strong>Helping Skills</strong></p><p><strong>=</strong></p><p class=' keyText'><strong>Referral Acumen</strong></p></div>",
				audio:"audio/03_04_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>You are well on your way to making a difference in employee development. In other lessons, you applied the building blocks of career development theory in real-world scenarios and learned how to expand helping skills to better connect and mentor others.</p>"
					},
					{
						time: 15.5,
						html: "<p>Now, you will learn how to develop your referral acumen so you can match each MyCareer@VA tool and resource to an employee's specific career development need. Please select the \"Next\" button to learn about the referral process.</p>"
					}
				]
			}
		},
		{
			id:"03_04_040",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'>Select each step to read more about the different stages of the referral process, then select the \"Next\" button to continue.</p><div class='p02_03_190'><a href='#trigger1' id='trigger1' title='Step 1: Discuss the employee's current situation and career goals with him/her' class='threeLines'><span>Step 1: Discuss the employee's current situation and career goals with him/her.</span></a><a href='#trigger2' id='trigger2' title='Step 2: Brainstorm potential tools and resources that could benefit the employee' class='threeLines'><span>Step 2: Brainstorm potential tools and resources that could benefit the employee.</span></a><a href='#trigger3' id='trigger3' title='Step 3: Empower the employee to use the appropriate tools and resources' class='threeLines'><span>Step 3: Empower the employee to use the appropriate tools and resources.</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "480",
								height: "260"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Step 1",
									text:"<p>Understand the employee's current work situation and future goals. Think about:</p><ul><li>In which phase of the career development process is the employee currently?</li><li>What is the employee's current situation?</li><li>What are the employee's goals?</li><li>How will you know if these goals are reached?</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "220"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Step 2",
									text:"<p>Think about:</p><ul><li>What tools and resources on MyCareer@VA could help the employee meet his/her goals?</li><li>What tools and resources on VA's Talent Management System (TMS) could help the employee reach these goals?</li><li>Are there any barriers or obstacles that could stand in the way?</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "280"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Step 3",
									text:"<p>Think about:</p><ul><li>What career development actions should the employee take?</li><li>Have they used MyCareer@VA before?</li><li>Do they work with a mentor or meet regularly with their supervisor?</li><li>What goals can the employee set to maintain commitment?</li></ul><p>Select the \"Resources\" button to view tools and resources that can support your referral acumen</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/03_04_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a Career Development Facilitator, you will actively work with employees to connect them to career development tools and resources. As employees become better connected to the right tools and resources, they can make more and better informed choices about their own careers.</p>"
					},
					{
						time: 16.5,
						html: "<p>Select each step to read more about the different stages of the referral process. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_050",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a female employee",
				text:"<h2>Empowering Questions:</h2><ul><li>What will you do starting now?</li><li>When will you do it?</li><li>What could stop you from moving forward? How will you overcome this?</li><li>How can you keep yourself motivated?</li><li>What will you do one day from now, one week from now, one month from now? </li></ul>",
				audio:"audio/03_04_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>As you grow your referral acumen, you may also see employee commitment and excitement grow. We'll use Alex, the medical administrator's case study to show you how this referral process can work. Let's first review the four phases of the career development process. Select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_060",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText' style='z-index:500; margin-bottom:0;' >Select each phase to learn more, and then select \"Next\" to continue.</p><div class='cdFramework'><div style='position: absolute; left: 3px; top: 0px;'><a href='#trigger1' id='trigger1'><span>Assess</span></a></div><div style='position: absolute; right: 0px; top: 3px;'><a href='#trigger2' id='trigger2'><span>Explore</span></a></div><div style='position: absolute; right: 3px; bottom: 0px;'><a href='#trigger3' id='trigger3'><span>Plan</span></a></div><div style='position: absolute; left: 0px; bottom: 3px;'><a href='#trigger4' id='trigger4'><span>Take Action</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "400",
								height: "270"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Assess",
									text:"<p>During the \"Assess\" phase, it is important for employees to learn more about themselves, their interests, values, strengths, limitations, and (most importantly) their personal career goals.</p><p>Recommended MyCareer@VA Tool:</p><ul><li>My Career Fit Tool</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "270"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Explore",
									text:"<p>During the \"Explore\" phase, employees are figuring out their options for achieving their personal career goals. It is during this phase that they are researching new opportunities at VA and identifying the challenges that may prevent them from getting where they want to go.</p><p>Recommended MyCareer@VA Tools:</p><ul><li>VA Career Guides</li><li>My Career Mapping Tool</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "270"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Plan",
									text:"<p>During the \"Plan\" phase, employees have an understanding of themselves and the landscape in front of them. They have narrowed down their options and are identifying concrete, actionable steps to achieve their goals. Once complete, their plan will help them close the gaps between where they currently are and where they want to go.</p><p>Recommended MyCareer@VA Tool:</p><ul><li>MyCareer@VA's IDP and Goal Setting Resources</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "270"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Take Action",
									text:"<p>In the \"Take Action\" phase, employees are now implementing their development plan. They are either applying for a new job within VA or taking advantage of VA's many available learning resources to grow their skills.</p><p>Recommended MyCareer@VA Tools:</p><ul><li>CareerPrep: Interview Preparation and Elevator Pitch</li><li>My Federal Resume Builder</li><li>VA's TMS</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						}
					]
				},
				audio:"audio/03_04_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select each phase to read more about each Phase. When you are finished reading, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
				{
			id:"03_04_065",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor meeting with a female employee",
				text: "<p class='actionText halfWidth'>Select the option that best completes the sentence, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"The referral process:", 
									qType: "mc",
									choices: [
										"Helps CDFs connect employees to appropriate career development tools and resources.",
										"Is the implementation of career development practice and helping skills.",
										"Serves as a tool to gain employee commitment to the career development process.",
										"All of the above"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>That is correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is only partially correct.</span></p><p>\"All of the above\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_02_kc",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review what we have discussed so far. Please read the question, select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_070",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p><p class='halfWidth'>You meet with Alex for the first time. Alex holds an entry-level position as medical administrator. He says he loves working for VA, but medical administration is not something he is passionate about. He doesn't know what he wants to do.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"In which phase of the career development process is Alex?", qType: "mc",
									choices: [
                    "Assess",
                    "Explore",
                    "Plan",
                    "Take Action"
									],
									answers: [1,0,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>Alex is in the \"Assess\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Alex is in the \"Assess\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_080",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				customClass: "halfWidth",
				text: "<p class='halfWidth'>You meet with Alex for the first time. Alex holds an entry-level position as medical administrator. He says he loves working for VA, but medical administration is not something he is passionate about. He doesn't know what he wants to do.</p>",
				knowledgeCheck: {
					forms: [
						{
							formLegend: "Read the list of actions. Then, from the dropdown menu, identify the order in which these actions should be taken, and then select the \"Submit\" button.",
							questions: [
								{
									stimulus:"Encourage Alex to use the MyCareer Fit Tool to identify a job at VA that meets his interests.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"Ask Alex questions to get a better understanding of where he is in his career.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,1,0,0],
									ddExclusive:false
								},
								{
									stimulus:"Work with Alex so he understands that there are jobs at VA that would be a good fit, and encourage him to use the MyCareer Fit Tool to help him pinpoint which jobs best match his work interests.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,0,1],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>You know that Alex is in the \"Assess\" phase. Which referral actions should you take? Make your selections and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_090",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p><p class='halfWidth'>During your information-gathering session, you show Alex how to use the MyCareer Fit Tool. When you examine his results, you see that his work interests align strongly with budgeting and finance. He knows very little about the field or the requirements needed for this VA job, but ultimately he would like to become an accounting technician.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"In which phase of the career development process is Alex?", qType: "mc",
									choices: [
                    "Assess",
                    "Explore",
                    "Plan",
                    "Take Action"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>Alex is in the \"Explore\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Alex is in the \"Explore\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_100",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text: "<p class='halfWidth'>During your information-gathering session, you show Alex how to use the MyCareer Fit Tool. When you examine his results, you see that his work interests align strongly with budgeting and finance. He knows very little about the field or the requirements needed for this VA job, but ultimately he would like to become an accounting technician.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							formLegend: "Read the list of actions. Then, from the dropdown menu, identify the order in which these actions should be taken, and then select the \"Submit\" button.",
							questions: [
								{
									stimulus:"Encourage Alex to explore the VA Career Guides to learn more about budgeting and finance jobs at VA.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,0,1],
									ddExclusive:false
								},
								{
									stimulus:"Identify 3–5 jobs that are a good fit for Alex.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"Work with Alex to interpret his MyCareer Fit Tool results.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,1,0,0],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>You know that Alex is in the \"Explore\" phase. Which referral actions should you take? Make your selections and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_110",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p><p class='halfWidth'>After reviewing Alex's MyCareer Fit Tool results, you both look up four budget and finance jobs using the VA Career Guides. Alex is excited about them all, but isn't sure how to successfully make the leap from his current medical administrator job.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"In which phase of the career development process is Alex?", 
									qType: "mc",
									choices: [
                    "Assess",
                    "Explore",
                    "Plan",
                    "Take Action"
									],
									answers: [0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>Alex is in the \"Plan\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Alex is in the \"Plan\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_120",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text: "<p class='halfWidth'>After reviewing Alex's MyCareer Fit Tool Results, you both look up four budget and finance jobs using the VA Career Guides. Alex is excited about them all, but isn't sure how to successfully make the leap from his current medical administrator job.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							formLegend: "Read the list of actions. Then, from the dropdown menu, identify the order in which these actions should be taken, and then select the \"Submit\" button.",
							questions: [
								{
									stimulus:"Use the MyCareer Mapping Tool to identify skill gaps between Alex's current job and target job.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,1,0,0],
									ddExclusive:false
								},
								{
									stimulus:"Work with Alex to identify specific activities that will help him meet his goals.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,0,1],
									ddExclusive:false
								},
								{
									stimulus:"Work with Alex to set SMART goals (Specific, Measurable, Achievable, Realistic, and Time-Bound) for closing skill gaps.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,1,0],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_120",
				closedCaption: [
					{
						time: 0,
						html: "<p>You know that Alex is in the \"Plan\" phase. Which referral actions should you take? Make your selections and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_130",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p><p>Through the VA Job Finder, Alex found a budget technician position vacancy at his facility. He wants to apply. Use the referral process to empower Alex to use career development to get the job.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"In which phase of the career development process is Alex?", qType: "mc",
									choices: [
                    "Assess",
                    "Explore",
                    "Plan",
                    "Take Action"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>Alex is in the \"Take Action\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Alex is in the \"Take Action\" phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Select the option that best answers the question, and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_140",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_02_02_030.png",
				altText: "Course mentor speaking to an employee, Alex",
				text: "<p class='halfWidth'>Through the VA Job Finder, Alex found a budget technician position vacancy at his facility. He wants to apply. Use the referral process to empower Alex to use career development to get the job.</p>",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							customClass: "wider",
							formLegend: "Read the list of actions. Then, from the dropdown menu, identify the order in which these actions should be taken, and then select the \"Submit\" button.",
							questions: [
								{
									stimulus:"Help Alex identify what preparation will be needed to apply for the budget technician job (e.g., updating his resume and cover letter).", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"Encourage Alex to use career preparation tools and resources on MyCareer@VA, like the Resume Builder and CareerPrep.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,0,0,1],
									ddExclusive:false
								},
								{
									stimulus:"Work with Alex to understand the specific aspects of the job and how to communicate his relevant skills in his resume.", 
									qType: "dd",
									choices: [
										"Select...",
										"1",
										"2",
										"3"
									],
									answers: [0,1,0,0],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_04_140",
				closedCaption: [
					{
						time: 0,
						html: "<p>You know that Alex is in the \"Take Action\" phase. Which referral actions should you take? Make your selections and then select \"Submit.\" When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_150",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/03_04_150",
				closedCaption: [
					{
						time: 0,
						html: "<p>Thanks to your excellent referral work, Alex got his target job as an entry-level budget technician. While he adjusts to his new job, it is important for you to emphasize that his career development is not over; he must set new career goals and begin working now to achieve them.</p>"
					},
					{
						time: 16.5,
						html: "<p>Even if Alex is not currently looking for a new job, he can focus on building skills or making valuable professional connections that will further advance his career.</p>"
					},
					{
						time: 25.5,
						html: "<p>Keep in mind that each employee is different and will have different needs. Some may be just like Alex, while others may have vastly different career goals and needs.</p>"
					},
					{
						time: 36.5,
						html: "<p>It's important that you approach each employee with a clean slate and an open mind. Use your helping skills to gain understanding and perspective as well as your career development knowledge to connect employees to tools and resources that best meet their needs. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_04_160",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the Referral Acumen lesson.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Define the process of referring.</li><li>Discuss the key components of employee commitment to career development.</li><li>Practice referring employees at any career development phase.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resource:</p><ul><li><a href='../resources/MyCareerVA_Tools_and_Resources_Inventory.pdf' target='_blank'>Catalog of MyCareer@VA Tools & Resources (PDF)</a></li></ul>"
						}
					]
				},
				audio:"audio/03_04_160",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on Referral Acumen. Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"03_05_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 3</h1><h2>Lesson 5 - Building Coalitions and Raising Awareness</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"03_05_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/03_05_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on building coalitions and raising awareness. You will learn how to maximize your impact as a CDF by building strong support systems across VA. Please select the \"Next\" button to continue..</p>"
					}
				]
			}
		},
		{
			id:"03_05_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>In this lesson you will learn how building coalitions and communities of practice in your organization will further strengthen your role as a CDF.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
              customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul><li>Discuss the importance of building coalitions at VA.</li><li>List ways to build coalitions with VA learning leaders.</li><li>Discuss ways to communicate your role to key stakeholders.</li></ul>"
						}
					]
				},
				audio:"audio/03_05_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Lesson Overview and Learning Objectives. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen of the lesson.</p>"
					},
					{
						time: 15.5,
						html: "<p>When you are finished reading, please select the \"Next\" button to start learning about building coalitions and communities of practice.</p>"
					}
				]
			}
		},
		{
			id:"03_05_030",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor4.png' alt='Course mentor sitting in a chair and talking' style='margin-top:-48px;' /></div>",
				audio: "audio/03_05_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Think about your professional network, especially those who like you share a common passion for employee development. It may include education managers, training officers, mentors, coaches, and supervisors.</p>"
					},
					{
						time: 14.5,
						html: "<p>Work with other CDFs to expand your network community to be able to help more employees. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_033",
			templateId: "cust",
			content:{
				title: "",
				customHTML: "<div class='group1 tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px' /></div><div class='group2' style='opacity: 0;'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' class='fr' style='margin-top:-24px; margin-right:-18px;' /><h2>Coalitions:</h2><ul><li>Enable dialogue</li><li>Increase efficiency and reduce redundancy</li><li>Spark new ideas</li><li>Create a unified approach</li><li>Streamline information</li></ul></div>",
				timedEvents: {
					events: [
						{
							time: 14.5,
							contentId: ['.group1','.group2'],
							displayType: ['toggleV','toggleV'],
							speed: [0,400]
						}
					]
				},
				audio: "audio/03_05_033",
				closedCaption: [
					{
						time: 0,
						html: "<p>As you share your network with other CDFs and they with you, you create a coalition. A coalition is an alliance of people who work together for a common purpose and they can accomplish much more than working alone.</p>"
					},
					{
						time: 14.5,
						html: "<p>Coalitions support employee development by creating an environment that facilitates open dialogue about career development and talent engagement, increasing information sharing while reducing redundancy, and creating a unified approach to development across your workplace.</p>"
					},
					{
						time: 30,
						html: "<p>And employees will reap the benefits. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_036",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_mentor3.png",
				altText: "Course mentor smiling",
				text: "<div class='group1'><h2>Building Coalitions:</h2><ul><li>Increases your marketability and employability</li><li>Enhances your professional reputation</li><li>Strengthens your sense of professional identity</li></ul></div>",
				audio: "audio/03_05_036",
				closedCaption: [
					{
						time: 0,
						html: "<p>Not only does building a coalition further support your goal of employee development, but it also helps you with your own development by increasing your marketability and employability by expanding your skill set and knowledge, enhancing your professional reputation, and strengthening your sense of professional identity.</p>"
					},
					{
						time: 19.5,
						html: "<p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_040",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_03_05_040.png",
				altText: "Course mentor smiling, with three other employees, part of her coalition, standing in the background.",
				text: "<div class='group1' style='position:absolute;'><h2>Potential partners in employee development:</h2><ul><li>Designated Learning Officers</li><li>Education Managers</li><li>Education Program Specialists</li><li>MyCareer@VA Super Users </li></ul></div><div class='group2' style='opacity: 0;'><h2>Build your employee development community:</h2><ul><li>Identify individuals</li><li>Introduce yourself</li><li>Explain your role </li><li>Offer to partner together</li><li>Ask questions about their work</li></ul></div>",
				timedEvents: {
					events: [
						{
							time: 29.5,
							contentId: ['.group1','.group2'],
							displayType: ['toggleV','toggleV'],
							speed: [0,400]
						}
					]
				},
				audio: "audio/03_05_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Besides your fellow CDFs, there are many other individuals at VA with whom you could connect and collaborate. There also may be others in your workplace that could help.</p>"
					},
					{
						time: 10.5,
						html: "<p>Take a moment to think about any specific employees in your workplace that play a similar career development role. These individuals could serve as excellent partners in employee development.</p>"
					},
					{
						time: 22,
						html: "<p>While it might be easy to identify members of the employee development community, how do you start the collaboration process?</p>"
					},
					{
						time: 28.5,
						html: "<p>There are many ways you can build your employee development community - go meet people who work in a different office or career field. Explain your CDF role, learn more about their work, and then offer to partner together on learning activities. Afterwards, resolve to stay in touch.</p>"
					},
					{
						time: 46.5,
						html: "<p>For more guidance on building and sustaining professional relationships, select the \"Resources\" button to find TMS courses about networking. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_050",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				customClass: "halfWidth",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"A community of practice benefits its members by:", 
									qType: "mc",
									choices: [
                    "Facilitating a dialogue exclusively between the individuals within the community",
                    "Increasing redundancy of processes and information",
                    "Continuing to leverage old ideas for employee development",
                    "Creating a unified approach to employee development"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry.</span></p><p>That is not correct.</p><p>The correct answer is \"Creating a unified approach to employee development.\"</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_05_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review what we have discussed so far. Please read the question, select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_060",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				customClass: "halfWidth",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"Which of the following are potential partners for employee development coalitions?", 
									qType: "mc",
									choices: [
                    "Designated Learning Officers",
                    "MyCareer@VA Super Users",
                    "Other CDFs",
                    "All of the above"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, \"All of the above\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_05_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please read the question, select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_070",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/03_05_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>After completing this course, it is time to share your skills and role with stakeholders. After all, this is what being a CDF is all about. So how can you inform facility leaders, employees, and those in your professional network of your new role as a CDF?</p>"
					},
					{
						time: 16.5,
						html: "<p>It is the skillful presentation of your capabilities that can provide the broadest number of opportunities for you as a CDF. When done well, it allows for the transition from being \"informed,\" to \"understanding.\"</p>"
					},
					{
						time: 30.5,
						html: "<p>Your role will mean different things to different stakeholders. To facility leadership, CDFs are a key employee development and engagement resource. They may call on you to support the implementation of employee development initiatives and other programs.</p>"
					},
					{
						time: 46.5,
						html: "<p>To those in your professional network, CDFs offer opportunities for collaboration and information sharing. To employees, CDFs are a valuable career development resource that will be instrumental in their engagement in the career development process.</p>"
					},
					{
						time: 63,
						html: "<p>The first step to raising stakeholder awareness of a valuable career resource: you. While sending emails and having direct conversations with stakeholders seems obvious, there is more to effective communication than that. Select the \"Next\" button to learn more.</p>"
					}
				]
			}
		},
		{
			id:"03_05_075",
			templateId: "popUp",
			content:{
				title: "",
				customHTML: "<img src='images/CDF_mentor3.png' alt='Course mentor smiling' class='fr' style='margin-top:-24px;' /><div class='group1'><h2>Communicating your role:</h2><ul><li class='group2' style='opacity: 0;'><a href='#trigger1' id='trigger1'>Package yourself</a></li><li class='group3' style='opacity: 0;'><a href='#trigger2' id='trigger2'>Build your brand</a></li><li class='group4' style='opacity: 0;'><a href='#trigger3' id='trigger3'>Market yourself</a></li></ul></div>",
				timedEvents: {
					events: [
						{
							time: 3,
							contentId: ['.group2'],
							displayType: ['onV'],
							speed: [400]
						},
						{
							time: 4,
							contentId: ['.group3'],
							displayType: ['onV'],
							speed: [400]
						},
						{
							time: 5.5,
							contentId: ['.group4'],
							displayType: ['onV'],
							speed: [400]
						}
					]
				},
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "480",
								height: "260"
							},
							popUpPos: {
								popUpPosition: "top center",
								parentPosition: "center bottom+50",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Package Yourself",
									text:"<p>Understand what key skills you want to communicate and to whom you want to communicate them. For example:</p><p><strong>Leadership:</strong></p><p>CDFs promote employee engagement and retention by helping VA employees successfully navigate their own career paths.</p><p><strong>Employees:</strong></p><p>CDFs serve as a partner to provide you with personalized support and guidance to help you achieve your career goals.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "230"
							},
							popUpPos: {
								popUpPosition: "top center",
								parentPosition: "center bottom+50",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Build Your Brand",
									text:"<p><strong>Elements of a Personal Brand:</strong></p><p>The value you create + who you're creating it for + the expected outcome.</p><p>For example: I use my passion and expertise in employee development to work one-on-one with employees to facilitate the career development process. As a CDF, what is your mission statement?</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "480",
								height: "230"
							},
							popUpPos: {
								popUpPosition: "top center",
								parentPosition: "center bottom+50",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Market Yourself To",
									text:"<p>Communicate your role to all key individuals in your facility:</p><ol><li>Your supervisors and managers</li><li>Facility leadership</li><li>Other education leaders (e.g., Mentors, Education Managers, DLOs)</li><li>Employees</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/03_05_075",
				closedCaption: [
					{
						time: 0,
						html: "<p>To raise awareness of your CDF role, you should package yourself, build your brand, and market yourself. Select each link to learn more and then select the \"Resources\" button to view a sample messaging to get you started. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_080",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				customClass: "halfWidth",
				text: "<p class='actionText halfWidth'>Select the option that best answers the question, and then select \"Submit.\"</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"You have completed the CDF training course and are ready to begin your role as a CDF. You should:", 
									qType: "mc",
									choices: [
                    "Hold a briefing for all facility employees explaining your role",
                    "Send email messages to facility leadership informing them of your role and how you can support employees",
                    "Meet with other employee development stakeholders to identify opportunities for partnership",
                    "All of the above"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, \"All of the above\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/03_05_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review ways to communicate your role to key stakeholders. Please read the question, select the best answer, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_05_090",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the Building Coalitions and Raising Awareness lesson.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Discuss the importance of building coalitions at VA.</li><li>List ways to build coalitions with VA learning leaders.</li><li>Discuss ways to communicate your role to key stakeholders.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='../resources/Communicating_Your_Role_Sample_Messages.pdf' target='_blank'>Sample Messages (PDF)</a></li><li>Recommended TMS Courses:<ul><li>Managing your Career: Professional Networking Essentials</li></ul></li></ul>"
						}
					]
				},
				audio:"audio/03_05_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the Building Coalitions and Raising Awareness lesson. As a CDF, you are a very valuable asset not only to the employees in your workplace but also to your employee development colleagues and leadership.</p>"
					},
					{
						time: 16.5,
						html: "<p>Leveraging those relationships and communicating your role will present you with countless opportunities to take what you have learned in this course and turn it into fruitful action!</p>"
					},
					{
						time: 27,
						html: "<p>Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"04_01_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 4</h1><h2>Lesson 1 - Career Development Ethics</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"04_01_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<span class='sect508'>This screen has no text content.</span><div class='tac'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div>",
				audio:"audio/04_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the Career Development Ethics lesson that highlights ethical guidelines that you should follow in your work as a Career Development Facilitator, or CDF.</p>"
					},
					{
						time: 9.5,
						html: "<p>This lesson will provide you with an understanding of the ethical considerations in career development facilitation, and it will give you strategies for dealing with ethical dilemmas that may arise in your work with VA employees. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_020",
			templateId: "columns",
			content:{
				title: "Lesson Overview & Learning Objectives",
				customClass: "objectives",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "350", //The width to give to the column
							customHTML: "<h2>Lesson Overview:</h2><p>This lesson will increase your awareness of ethical issues related to career development, and it will provide you with tools and resources to help you respond to ethical issues you may encounter.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
              customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul><li>Define the importance of ethics for a CDF.</li><li>Identify the I CARE core values.</li><li>Define the major points of the NCDA Code of Ethics.</li><li>Identify strategies for solving ethical questions.</li></ul>"
						}
					]
				},
				audio:"audio/04_01_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please take a moment to read the Lesson Overview and Learning Objectives. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" button or on the final screen. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_030",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<div class='tac group1' style='position:absolute; margin-left:321px;'><img src='images/CDF_mentor3.png' alt='Course mentor smiling' style='margin-top:-24px;' /></div><div class='group2 p04_01_030' style='opacity: 0;padding-right: 20px; position: absolute;'><p class='actionText'>Please select each employee to read about a situation that involves an ethical decision. When you are finished, select the \"Next\" button to continue.</p><div class='tac'><div class='wrap'><a href='#trigger1' id='trigger1' title='Employee 1'><span>Employee 1</span></a><a href='#trigger2' id='trigger2' title='Employee 2'><span>Employee 2</span></a><a href='#trigger3' id='trigger3' title='Employee 3' class='last'><span>Employee 3</span></a></div></div></div>",
				timedEvents: {
					events: [
						{
							time: 29,
							contentId: ['.group1','.group2'],
							displayType: ['toggleV','toggleV'],
							speed: [0,400]
						}
					]
				},
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "380",
								height: "230"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center center-20",
								elementOfPosition: "#trigger2"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Employee 1 - Ani",
									text:"<p>You are working with an employee who happens to be a supervisor. In one conversation, she mentions that she is in the middle of hiring a new employee. She expresses frustration at having to take the time to review resumes and conduct interviews because she plans on hiring her friend's husband for the position.  They are having a hard time and need the money.</p><p>What would you do?</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "380",
								height: "190"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center center-20",
								elementOfPosition: "#trigger2"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Employee 2 - Peter",
									text:"<p>A supervisor in your division tells you that he has heard about the great work you are doing as a CDF. He then mentions that everyone in the group seems a bit stressed lately and asks you to provide general counseling services to help reduce stress.</p><p>What would you do?</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "380",
								height: "190"
							},
							popUpPos: {
								popUpPosition: "center",
								parentPosition: "center center-20",
								elementOfPosition: "#trigger2"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Employee 3 - Jeff",
									text:"<p>A CDF you know has started a home renovation business with an employee who came to him for career development guidance.  The CDF seems to work harder to support that employee than all the other individuals with whom he works.</p><p>What would you do?</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/04_01_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>As you know, VA is committed to building and maintaining an ethical workforce and offers a wide-range of trainings and programs on this topic. However, ethical behavior in the area of career development is a unique issue that deserves consideration in its own right.</p>"
					},
					{
						time: 17.5,
						html: "<p>It may seem obvious that you should always act ethically in your work as a CDF. However, these issues can be complicated, and the right solution is not always clear.</p>"
					},
					{
						time: 28.5,
						html: "<p>Let's examine some ethical issues you may come across in your work as a CDF. Please select each employee to read about a situation that involves an ethical decision. As you read each scenario, consider what you would do in that situation.</p>"
					},
					{
						time: 43.5,
						html: "<p>The rest of this lesson will focus on strategies for handling such ethical questions. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_040",
			templateId: "tlgr",
			content:{
				title: "",
				image:"images/CDF_01_01_050.png",
				altText:"Course mentor meeting with a female employee",
				text:"<div class='fullScreen'><div class='group1'><h2>Acting in an ethical manner ensures:</h2><ul><li>You act in the best interest of VA employees</li><li>You protect yourself and VA</li></ul></div></div>",
				audio: "audio/04_01_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>These scenarios demonstrate some of the ethical questions you may encounter as a CDF. They also highlight the importance of understanding the ethical codes that apply to your work as a CDF and how you can apply these guidelines to find the best solutions.</p>"
					},
					{
						time: 15.5,
						html: "<p>When you do, you protect yourself and VA from involvement in ethical disputes. Please select the \"Next\" button to begin learning about the ethical codes that apply to your work at VA.</p>"
					}
				]
			}
		},
		{
			id:"04_01_050",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'><span class='group2'>Please select each word to learn more, then select the \"Next\" button to continue.</span>&nbsp;</p><img src='images/CDF_04_01_050.png' alt='I CARE logo' style='float:left;' /><div class='group2' style='float:left; width: 300px;'><div class='p03_01_080'><a href='#trigger1' id='trigger1' title='Integrity'><span><strong>I</strong>ntegrity</span></a><a href='#trigger2' id='trigger2' title='Commitment'><span><strong>C</strong>ommitment</span></a><a href='#trigger3' id='trigger3' title='Advocacy'><span><strong>A</strong>dvocacy</span></a><a href='#trigger4' id='trigger4' title='Respect'><span><strong>R</strong>espect</span></a><a href='#trigger5' id='trigger5' title='Excellence'><span><strong>E</strong>xcellence</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "250",
								height: "200"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+10 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Integrity",
									text:"<p>Act with high moral principle. Adhere to the highest professional standards. Maintain the trust and confidence of those whom you engage.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "250",
								height: "200"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+10 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Commitment",
									text:"<p>Work diligently to serve Veterans and other beneficiaries. Be driven by an earnest belief in VA's mission. Fulfill both your individual and organizational responsibilities.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "250",
								height: "200"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+10 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Advocacy",
									text:"<p>Be truly Veteran-centric by identifying, fully considering, and appropriately advancing the interests of Veterans and other beneficiaries.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "250",
								height: "200"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+10 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Respect",
									text:"<p>Respect the backgrounds, goals, and choices of all employees who seek your assistance. Show respect to earn it.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "250",
								height: "200"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "right+10 center",
								elementOfPosition: ".p03_01_080"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Excellence",
									text:"<p>Strive for the highest quality performance as well as continuous improvement. Be thoughtful and decisive in leadership, accountable for your own actions, willing to admit mistakes, and rigorous in correcting them.</p>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: ""
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/04_01_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>As we mentioned earlier, ethical questions are often complicated. There are multiple codes of ethical behavior that can help you make the most appropriate decision in complex CDF situations. As a CDF at VA, the first code that should guide your behavior is I CARE.</p>"
					},
					{
						time: 17.5,
						html: "<p>As you may already know, I CARE is an acronym for the attributes that VA promotes. I CARE helps guide the execution of VA's mission, shapes its strategy, and impacts key decisions made within the Department.</p>"
					},
					{
						time: 31,
						html: "<p>These core values should serve as the basis for your work as a CDF. They should shape your behavior and decision-making whenever working with employees on their career development.</p>"
					},
					{
						time: 42.5,
						html: "<p>Please select each word to learn more about the attributes of I CARE. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_060",
			templateId: "tlgr",
			content:{
				title: "",
				image:"images/CDF_01_01_050.png",
				altText:"Course mentor meeting with a female employee",
				text:"<div class='fullScreen'><div class='group1' style='opacity: 0;'><p>\"The primary responsibility of career professionals is to respect the dignity and to promote the welfare of the individuals to whom they provide service.\"</p><p><em>—NCDA Code of Ethics</em></p></div>",
				timedEvents: {
					events: [
						{
							time: 12,
							contentId: ['.group1'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/04_01_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a CDF at VA, I CARE serves as a critical guide for your work with employees. As with every profession, though, there are organizing principles that help inform decision-making.</p>"
					},
					{
						time: 11.5,
						html: "<p>For CDFs, the National Career Development Association, or NCDA, has created a Code of Ethics. The NCDA Code of Ethics should complement the I CARE values and provide you further guidance for your work with VA employees.</p>"
					},
					{
						time: 27.5,
						html: "<p>We encourage you to read the entire NCDA Code of Ethics, which you can access on the last page of this lesson. Please select the \"Next\" button to learn more about the NCDA Code of Ethics.</p>"
					}
				]
			}
		},
		{
			id:"04_01_070",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<img src='images/CDF_01_01_050.png' alt='Course mentor meeting with a female employee' class='fr' style='margin-top:-23px; margin-right:-17px;' /><p class='actionText'>Please select each guideline to learn more, then select the \"Next\" button to continue.</p><div class='btnMed'><a href='#trigger1' id='trigger1' title='Offer only support and services that you are trained to provide' class='twoLines'><span>Offer only support and services that you are trained to provide</span></a><a href='#trigger2' id='trigger2' title='If you are unable to assist an employee, refer them to other resources' class='twoLines'><span>If you are unable to assist an employee, refer them to other resources</span></a><a href='#trigger3' id='trigger3' title='Respect and value individual differences'><span>Respect and value individual differences</span></a><a href='#trigger4' id='trigger4' title='Treat information shared by employees as confidential' class='twoLines'><span>Treat information shared by employees as confidential</span></a><a href='#trigger5' id='trigger5' title='Do not engage in any behavior that may impair your objectivity or the welfare of the employee' class='twoLines'><span>Do not engage in any behavior that may impair your objectivity or the welfare of the employee</span></a><p style='margin-top:15px;'>Adapted from Spencer Niles and JoAnn Harris-Bowlsbey’s Career Development Interventions in the 21st Century.</p></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "430",
								height: "410"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+215",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Only offer what you are trained to provide",
									text:"<ul><li>In your work with employees, you may be asked to provide support that you are not trained or certified to provide.<ul><li>For example, an employee may ask you to interpret the results of their performance review.</li></ul></li><li>You also may determine that an employee needs counseling that you are not trained or certified to provide.<ul><li>For example, an employee may demonstrate behaviors that make you think they need professional, psychological, or behavioral counseling.</li></ul></li><li>Acting ethically means you only offer the career development support and services you are competent to provide.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "290"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+215",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Refer to other resources",
									text:"<ul><li>If you are not trained to provide the support that an employee needs, there are a range of resources available to both you and the individual.</li><li>Consider the information covered in both the Referral Acumen and Career Development Practice lessons to identify potential career development resources.</li><li>You should also be aware of the different support services across VA to which you can refer an employee.</li><li>In referring employees to the services they need, you are being an ethical CDF.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "280"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+215",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Respect and value individual differences",
									text:"<ul><li>Respecting the background, values, and choices of each individual who seeks your assistance is critical to maintaining a productive and ethical CDF relationship.</li><li>Please review the information covered in the Diverse Populations lesson to reinforce your understanding of the importance of respecting differences in your work as a CDF. </li><li>You are acting ethically when you recognize and appreciate the diverse backgrounds of the employees with whom you work.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "310"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+215",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Treat information shared by employees as confidential",
									text:"<ul><li>Trust forms the basis of a productive helping relationship, so it is critical that you treat employee-shared information as confidential.</li><li>You should not share any information without an employee's permission unless it is required by law.</li><li>Please consult with VA's legal department if you have any questions about whether you are obligated to disclose information.</li><li>By keeping the information employees share with you confidential, you are acting in an ethical manner.</li><li>Please review the \"Building Trust and Rapport\" lesson if you have any questions about this issue.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "240"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+215",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Do not impair your objectivity",
									text:"<ul><li>Because your first priority is to protect the welfare of VA employees, you should not do anything to impair your objectivity.</li><li>This includes but is not limited to personal, emotional, physical, and financial relationships.</li><li>An ethical CDF engages only in activities that help VA employees accomplish their career goals within the boundaries of a productive and healthy helping relationship.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p></p>"
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/04_01_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>Abiding by the NCDA Code of Ethics will help you act in an ethical way and protect the welfare of VA employees. Spencer Niles and JoAnn Harris-Bowlsbey developed a succinct summary of these standards that should guide your CDF practice.</p>"
					},
					{
						time: 15.5,
						html: "<p>Please select each guideline to read more. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_080",
			templateId: "kc",
			content:{
				title: "",
				customClass: "fullWidth",
				text: "<p class='actionText'>Select the checkboxes next to each guideline that you should follow in your work as a CDF, and then select the \"Submit\" button.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"",
									qType: "mr",
									choices: [
										"Openly share details about an employee's career to get another perspective ",
										"Avoid behavior that may impair your objectivity or the welfare of the employee",
										"Do whatever it takes to help employees, no matter the situation or circumstances",
										"Respect and value individual differences",
										"Offer only support and services that you are trained to provide",
										"If you are unable to assist an employee, refer them to other resources",
										"Treat information shared by employees as confidential ",
										"Tell employees what you have done to develop your career, and suggest they take the same steps"
									],
									answers: [0,1,0,1,1,1,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>Correct!</span></p><p>As a CDF you should avoid behavior that may impair your objectivity or the welfare of the employee, respect and value individual differences, only offer support and services that you are trained to provide, treat information shared by employees as confidential, and refer employees to other resources if you are unable to assist them.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.</p>","<p><span class='negFb'>Incorrect.</span></p><p>As a CDF you should avoid behavior that may impair your objectivity or the welfare of the employee, respect and value individual differences, only offer support and services that you are trained to provide, treat information shared by employees as confidential, and refer employees to other resources if you are unable to assist them.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/04_01_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now let's review the I CARE and NCDA standards for ethical behavior. Select the checkbox next to each guideline that you should follow, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_090",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<img src='images/CDF_01_01_050.png' alt='Course mentor meeting with a female employee' style='margin-top:-23px; margin-right:-16px;' class='fr' /><h2>A Decision-Making Process for Solving Ethical Issues</h2><p class='actionText'>Please select each step to learn more, then select the \"Next\" button to continue.</p><div class='btnMed'><a href='#trigger1' id='trigger1' title='Define the problem and ethical issues involved' ><span>Define the problem and ethical issues involved</span></a><a href='#trigger2' id='trigger2' title='Consult various resources'><span>Consult various resources</span></a><a href='#trigger3' id='trigger3' title='Identify and assess options for action'><span>Identify and assess options for action</span></a><a href='#trigger4' id='trigger4' title='Consider your feelings and emotions'><span>Consider your feelings and emotions</span></a><a href='#trigger5' id='trigger5' title='Take action'><span>Take action</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "430",
								height: "380"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+220",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Define the problem and ethical issues involved",
									text:"<ul><li>The first step in addressing ethical issues is understanding as much as possible about the situation.</li><li>If an ethical dilemma arises, ask yourself the following questions:<ul><li>What is going on?</li><li>Who is involved?</li><li>Who is impacted by the situation?</li><li>What are the ethical issues involved?</li><li>What resources are available to resolve this situation?</li></ul></li><li>Note that these questions probably can't be answered immediately—solving ethical issues takes time.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p>The first step in addressing ethical issues is to understand as much as possible about the situation. If an ethical dilemma arises, ask yourself the following questions:</p>"
										},
										{
											time: 11.7,
											html: "<p>What is going on? Who is involved? Who is impacted by the situation? What are the ethical issues involved? Note that these questions probably can't be answered immediately—solving ethical issues takes time.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "410"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+220",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Consult various resources",
									text:"<ul><li>The second step is to continue gathering information to help you make an informed decision.</li><li>Review relevant ethical codes and standards<ul><li>When questions arise, refer to the I CARE values or NCDA Code of Ethics to determine exactly what ethical issues are involved.</li><li>You also may need to meet with someone from VA's legal department to identify relevant legal or policy guidelines.</li></ul><li>Seek Consultation<ul><li>In addition to reviewing relevant codes, you can also reach out to the CDF network or a trusted advisor to ask how other people have handled similar issues.</li><li>You are not alone—seek guidance before acting.</li></ul></li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p>When questions arise, refer to the I CARE values or NCDA Code of Ethics to determine exactly what ethical issues are involved. You also may need to meet with someone from VA's legal department to identify relevant legal or policy guidelines.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "200"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+220",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Identify and assess options for action",
									text:"<ul><li>Once you have a complete understanding of the situation and have considered relevant codes, you should detail possible options for action and predict the outcome of each.</li><li>You should also consider the risks associated with each option and determine if they are worth the outcome.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p>Once you have a complete understanding of the situation and have considered relevant codes, you should detail possible options for action and predict the outcome of each. You should also consider the risks associated with each option and determine if they are worth the outcome.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "210"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+220",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "4",
								content:{
									layoutClass:"",
									title:"Consider your feelings and emotions",
									text:"<ul><li>In complex situations such as ethical dilemmas, it is important to not act solely on emotions.</li><li>CDFs should consider the practical elements of a situation and the reality of an action's consequences.</li><li>You should not ignore your emotions, but you should seek to balance them with your practical assessment.</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p>In complex situations such as ethical dilemmas, it is important to not act solely on emotions. CDFs should consider the practical elements of a situation and the reality of an action's consequences. You should not ignore your emotions, but you should seek to balance them with your practical assessment.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "430",
								height: "140"
							},
							popUpPos: {
								popUpPosition: "left center",
								parentPosition: "center+10 top+220",
								elementOfPosition: "#popUpContainer"
							},
							tlgr: {
								trigger: "5",
								content:{
									layoutClass:"",
									title:"Take action",
									text:"<ul><li>Once you have thoroughly assessed the situation by completing all of the previously listed steps, you will be ready to make an informed decision and take action!</li></ul>",
									image: [],
									altText:"",
									audioId:"",
									closedCaption: [
										{
											time: 0,
											html: "<p>In addition to reviewing relevant codes, you can also reach out to the CDF network or a trusted advisor to ask how other people have handled similar issues. You are not alone—seek guidance before acting.</p>"
										}
									]
								}
							}
						}
					]
				},
				audio: "audio/04_01_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>Adhering to the guiding principles we just reviewed will help you act in an ethical way. However, what should you do if more questions or issues arise? NCDA has developed a decision-making process to help you make the right choices when faced with ethical situations. Please select each step to learn more.</p>"
					},
					{
						time: 19.5,
						html: "<p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_100",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_04_01_100.png",
				altText: "Image of a female employee sitting in a chair",
				customClass: "threeQuarterWidth",
				text: "<p class='actionText threeQuarterWidth'>Read the scenario, determine the appropriate next step, and select the \"Submit\" button.</p><p class='threeQuarterWidth'>You have been working with Shelly for over a year and have developed a very productive helping relationship. She has actually been promoted as a result of your work together. Your bachelor's degree is in psychology, but you are an HR supervisor at VA, not a counselor. Shelly trusts you and often tells you about other issues in her life that are outside your role as a CDF, including problems with substance abuse. Based on your psychology coursework and general helping skills, you have been able to offer Shelly some general support, but her problems are getting worse and are clearly starting to impact her job performance. You are invested in Shelly's success and are considering whether or not to offer her more substantive counseling.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"What is the first step you should take?", 
									qType: "mc",
									choices: [
                    "Identify and assess options for action",
                    "Define the problem and the ethical issues involved",
                    "Consult various resources",
                    "Take action"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>The first thing you should always do is define the problem and ethical issues involved. This scenario involves support that you are not trained to provide.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is incorrect. The first step you should take is to define the problem and ethical issues involved. This scenario involves support that you are not trained to provide.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/04_01_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's apply the decision-making process we just reviewed to a scenario you may encounter as a CDF. Please read the scenario, determine the appropriate next step, and select the \"Submit\" button. When you are finished, select \"Next\" to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_110",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_04_01_100.png",
				altText: "Image of a female employee sitting in a chair",
				customClass: "threeQuarterWidth",
				text: "<p class='actionText threeQuarterWidth'>Read the scenario, determine the appropriate next step, and select the \"Submit\" button.</p><p class='threeQuarterWidth'>You have been working with Shelly for over a year and have developed a very productive helping relationship. She has actually been promoted as a result of your work together. Your bachelor's degree is in psychology, but you are an HR supervisor at VA, not a counselor. Shelly trusts you and often tells you about other issues in her life that are outside your role as a CDF, including problems with substance abuse. Based on your psychology coursework and general helping skills, you have been able to offer Shelly some general support, but her problems are getting worse and are clearly starting to impact her job performance. You are invested in Shelly's success and are considering whether or not to offer her more substantive counseling.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"After defining the problem and ethical issues involved, what should you do?", 
									qType: "mc",
									choices: [
                    "Take action",
                    "Consider your feelings and emotions",
                    "Consult various resources",
                    "Identify and assess options for action"
									],
									answers: [0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>The second step is to consult various resources such as relevant ethical codes, other standards, and your network.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is incorrect. The second step is to consult various resources such as relevant ethical codes, other standards, and your network.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/04_01_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please determine the appropriate next step and select the \"Submit\" button. When you are finished, select \"Next\" to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_120",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_04_01_100.png",
				altText: "Image of a female employee sitting in a chair",
				customClass: "threeQuarterWidth",
				text: "<p class='actionText threeQuarterWidth'>Read the scenario, determine the appropriate next step, and select the \"Submit\" button.</p><p class='threeQuarterWidth'>You have been working with Shelly for over a year and have developed a very productive helping relationship. She has actually been promoted as a result of your work together. Your bachelor's degree is in psychology, but you are an HR supervisor at VA, not a counselor. Shelly trusts you and often tells you about other issues in her life that are outside your role as a CDF, including problems with substance abuse. Based on your psychology coursework and general helping skills, you have been able to offer Shelly some general support, but her problems are getting worse and are clearly starting to impact her job performance. You are invested in Shelly's success and are considering whether or not to offer her more substantive counseling.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"After consulting various resources, what should you do?", 
									qType: "mc",
									choices: [
                    "Define the problem and ethical issues involved",
                    "Identify and assess options for action",
                    "Consider your feelings and emotions",
                    "Take action"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>The next step is to identify and assess options for action. It is important to think about possible actions and consequences before moving forward.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is incorrect. The next step is to identify and assess options for action. It is important to think about possible actions and consequences before moving forward.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/04_01_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please determine the appropriate next step and select the \"Submit\" button. When you are finished, select \"Next\" to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_130",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_04_01_100.png",
				altText: "Image of a female employee sitting in a chair",
				customClass: "threeQuarterWidth",
				text: "<p class='actionText threeQuarterWidth'>Read the scenario, determine the appropriate next step, and select the \"Submit\" button.</p><p class='threeQuarterWidth'>You have been working with Shelly for over a year and have developed a very productive helping relationship. She has actually been promoted as a result of your work together. Your bachelor's degree is in psychology, but you are an HR supervisor at VA, not a counselor. Shelly trusts you and often tells you about other issues in her life that are outside your role as a CDF, including problems with substance abuse. Based on your psychology coursework and general helping skills, you have been able to offer Shelly some general support, but her problems are getting worse and are clearly starting to impact her job performance. You are invested in Shelly's success and are considering whether or not to offer her more substantive counseling.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"After identifying and assessing options for action, what should you do?", 
									qType: "mc",
									choices: [
                    "Take action",
                    "Define the problem and ethical issues involved",
                    "Consult various resources",
                    "Consider your feelings and emotions"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>After identifying options, you should consider your feelings about the issue. You need to make sure you are considering realistic facts and consequences as well as how you will react emotionally.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is incorrect. The next step is to consider your feelings and emotions. You need to make sure you are considering realistic facts and consequences as well as how you will react emotionally.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/04_01_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please determine the appropriate next step and select the \"Submit\" button. When you are finished, select \"Next\" to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_140",
			templateId: "kc",
			content:{
				title: "",
				image: "images/CDF_04_01_100.png",
				altText: "Image of a female employee sitting in a chair",
				customClass: "threeQuarterWidth",
				text: "<p class='actionText threeQuarterWidth'>Read the scenario, determine the appropriate next step, and select the \"Submit\" button.</p><p class='threeQuarterWidth'>You have been working with Shelly for over a year and have developed a very productive helping relationship. She has actually been promoted as a result of your work together. Your bachelor's degree is in psychology, but you are an HR supervisor at VA, not a counselor. Shelly trusts you and often tells you about other issues in her life that are outside your role as a CDF, including problems with substance abuse. Based on your psychology coursework and general helping skills, you have been able to offer Shelly some general support, but her problems are getting worse and are clearly starting to impact her job performance. You are invested in Shelly's success and are considering whether or not to offer her more substantive counseling.</p>",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"After considering your feelings and emotions, what should you do?", 
									qType: "mc",
									choices: [
                    "Define the problem and ethical issues involved",
                    "Take action",
                    "Identify and assess options for action",
                    "Consult various resources"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>Having completed all of the previous steps, you are ready to take action.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is incorrect. The next step is to take action. Having completed all of the previous steps, you are ready to make a decision and act.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					],
					maxAttempts: 2
				},
				audio: "audio/04_01_KC",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please determine the appropriate next step and select the \"Submit\" button. When you are finished, select \"Next\" to continue.</p>"
					}
				]
			}
		},
		{
			id:"04_01_145",
			templateId: "tlgr",
			content:{
				title: "Bibliography",
				image: "",
				altText: "",
				text:"<ul><li>National Career Development Association. <em>Code of Ethics</em>. Broken Arrow, OK: Author. <a href='http://www.ncda.org/aws/NCDA/asset_manager/get_file/3395' target='_blank'>http://www.ncda.org/aws/NCDA/asset_manager/get_file/3395</a></li><li>Niles, Spencer and Harris-Bowlsbey, JoAnn. <em>Career Development Interventions in the 21st Century</em>. Upper Saddle River, NJ: Pearson, 2009.</li><li>Suddarth, Barbara, and Reile, David. <em>Facilitating Career Development: An Instructional Program for Career Development Facilitators and Other Career Development Providers</em>. Broken Arrow, OK: National Career Development Association, 2012.</li><li>U.S. Department of Veteran Affairs, I CARE Values. <a href='http://www.va.gov/icare/' target='_blank'>http://www.va.gov/icare/</a></li></ul>",
				audio: "",
				closedCaption: []
			}
		},
		{
			id:"04_01_150",
			templateId: "columns",
			content:{
				title: "Conclusion",
				customClass: "summary",
				customHTML:"", // Anything that should be displayed before the columns begin
				columns:{
					col:[
						{
							customClass: "col1", // optional. If a class should be added to the column div
							width: "450", //The width to give to the column
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the Career Development Ethics lesson.</p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Define the importance of ethics for a CDF.</li><li>Identify the I CARE core values.</li><li>Define the major points of the NCDA Code of Ethics.</li><li>Identify strategies for solving ethical questions.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='http://www.ncda.org/aws/NCDA/asset_manager/get_file/3395' target='_blank'>National Career Development Association Code of Ethics</a></li><li><a href='http://www.va.gov/icare/' target='_blank'>VA's ICARE</a></li><li><a href='http://www.oge.gov/' target='_blank'>U.S. Office of Government Ethics</a></li></ul>"
						}
					]
				},
				audio:"audio/04_01_150",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on Career Development Ethics, which highlights ethical guidelines that you should follow in your work as a CDF.</p>"
					},
					{
						time: 10.5,
						html: "<p>Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson. Select the \"Next\" button to return to the course homepage.</p>"
					}
				]
			}
		},
		{
			id:"05_01_000",
			templateId: "title",
			content:{
				title: "",
				customHTML:"<div class='titlePage titleBgImage'><h1>Unit 5</h1><h2>Lesson 1 - Conclusion</h2><p class='actionText'>This course contains audio. Please turn on your speakers or enable the Closed Captioning (CC) at the bottom of the page. Click Next at the bottom of the page to begin.</p><p class='tac'><a href='../resources/help.html' class='introBtn' target='_blank'>If you've never taken a MyCareer@VA web-based training course, click here to view a brief tutorial before you get started.</a></p></div>", // Anything that should be displayed on the whiteboard
				audio:"",
				closedCaption: [
					{
						time: 0,
						html: ""
					}
				]
			}
		},
		{
			id:"05_01_010",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_mentor5.png",
				altText: "Course mentor standing and holding her arm out to gesture toward the left side of the screen",
				text:"<h2>Having completed all the lessons in this course, you should be able to:</h2><ul><li>Define the role of Career Development Facilitators, or CDFs, at VA.</li><li>Define important career development theories.</li><li>Apply core career development best practices.</li><li>Identify and apply facilitation skills necessary for a CDF.</li><li>Identify ethical CDF behaviors.</li></ul><span class='group2' style='opacity: 0;'><img src='images/CDF_05_01_010_1.png' alt='A computer screen displaying the MyCareer@VA homepage' style='float: left;' /></span><div class='group3 fl' style='opacity: 0; margin-top:55px; margin-right:0'><p class='keyText'><strong>Contact Us:</strong> VAMyCareer@va.gov</p></div>",
				timedEvents: {
					events: [
						{
							time: 40,
							contentId: ['.group2','.group1'],
							displayType: ['toggleV', 'toggleV'],
							speed: [400, 0]
						},
						{
							time: 53,
							contentId: ['.group3'],
							displayType: ['toggleV'],
							speed: [400]
						}
					]
				},
				audio: "audio/05_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have completed all of the lessons in this course and are now prepared to begin serving as a VA Career Development Facilitator, or CDF!</p>"
					},
					{
						time: 9.5,
						html: "<p>You should now be able to define the role of CDFs at VA, define important career development theories, apply core career development best practices, identify and apply facilitation skills necessary for a CDF, and identify ethical CDF behaviors.</p>"
					},
					{
						time: 26.5,
						html: "<p>In the upcoming weeks and months, you will receive information from the MyCareer@VA team about ongoing educational opportunities, CDF events, and other program news.</p>"
					},
					{
						time: 39,
						html: "<p>In the meantime, we encourage you to log on to the MyCareer@VA website to explore new resources, build relationships with other CDFs, and begin working with VA employees to accomplish their career goals. If you have any questions, please email us at VAMyCareer@VA.gov. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"05_01_020",
			templateId: "tlgr",
			content:{
				title: "Survey and Certificate",
				image: "images/CDF_05_01_020.png",
				altText: "The course mentor sitting with a male employee",
				text: "<p>Please provide us your feedback by completing a brief survey:</p><div class='surveyCert'><a href='https://mycareeratva.va.gov/career-development-facilitator-course-feedback-form' id='survey' onclick='enableCert();' target='_blank'><span>Survey*</span></a><a href='#cert' id='cert' onclick='openCertificate(\"CD101\"); return false;' class='dim'><span>Certificate</span></a></div><p class='cl' style='margin-top:12px'><em>*Note: survey will open in a new window. Return to this window when you are finished with the survey.</em></p><script>makeRequired();</script>",
				lastPage: true,
				audio:"audio/05_01_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Thank you in advance for all of the valuable support you will provide VA employees in your role as a CDF. We would greatly appreciate your feedback on this course. Please select the \"Survey\" button to complete a brief questionnaire.</p>"
					},
					{
						time: 14.5,
						html: "<p>Once you complete the survey, you will be able to select the \"Certificate\" button to print a certificate of completion for your records. Select the \"Next\" button to return to the course homepage to review any lesson.</p>"
					},
					{
						time: 27,
						html: "<p>Thank you again for completing this course and helping VA employees achieve their career goals!</p>"
					}
				]
			}
		}
	],
	templates: [
		{
			id:"fullImg",
			url: "template_fullImage.html"
		},
		{
			id:"tlgr",
			url: "template_textLeftGraphicRight.html"
		},
		{
			id:"trgl",
			url: "template_textRightGraphicLeft.html"
		},
		{
			id:"tlvr",
			url: "template_textLeftVideoRight.html"
		},
		{
			id:"cust",
			url: "template_custom.html"
		},
		{
			id:"kc",
			url: "template_knowledgeCheck.html"
		},
		{
			id:"score",
			url: "template_score.html"
		},
		{
			id:"popUp",
			url: "template_popUp.html"
		},
		{
			id:"contentSwap",
			url: "template_contentSwap.html"
		},
		{
			id:"columns",
			url: "template_columns.html"
		},
		{
			id:"whtbrd",
			url: "template_VAwhiteboard.html"
		},
		{
			id: "bsp",
			url: "template_branchStartPage.html"
		},
		{
			id:"title",
			url: "template_titleScreen.html"
		},
		{
			id:"homepage",
			url: "template_homepage.html"
		}
	]
}
