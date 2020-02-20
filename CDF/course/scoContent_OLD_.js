var SCOContent =  {
	pages: [
		{
			id:"01_01_010",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_010.png",
				altText: "Course mentor sitting at her desk",
				text:"<h2 class='group1' style='display: none;'>Career Development Facilitators (CDFs):</h2><ul><li class='group2' style='display: none;'>Build a culture of career development.</li><li class='group3' style='display: none;'>Promote employee engagement, morale, and productivity.</li><li class='group4' style='display: none;'>Help provide better service to Veterans and their families.</li></ul>",
				timedEvents: {
					events: [
						{
							time: 8,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 14,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 22.5,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
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
						html: "<p>As a CDF, you will personally help build a culture of career development at VA, which in turn improves engagement, morale, productivity, and motivation across the organization. All of these are critical because they help VA employees provide better service to Veterans and their families. </p>"
					},
					{
						time: 28,
						html: "<p>This course was designed to build your career development knowledge and facilitation skills so you can provide personalized support to help VA employees accomplish their career goals.</p>"
					},
					{
						time: 39.5,
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
									text:"<p>You can turn this course's narration on or off by selecting the \"Audio\" button in the Play Bar. Please turn your speakers on and adjust the volume on your computer as necessary, or listen through headphones for the comfort of others. You can also select the \"Closed Captioning\" button on the Play bar to read any accompanying narration. You may reposition the Closed Captioning window at any time by clicking and dragging the blue header.</p>",
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
									text:"<p>Each lesson in this course will take you about 15 minutes to complete.</p>",
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
									text:"<p>You will receive TMS credit and a certificate of completion after finishing all of the lessons in this course.</p>",
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
								width: "580",
								height: "230"
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
									text:"<p><strong>Course Transcript:</strong> This course includes a transcript that you can use to review the text of the lesson at your own pace or keep for your personal reference.</p><p><strong>Closed Captions:</strong> This course contains a synchronized text version of the audio narration. Select the \"CC\" button to manage closed captions.</p><p><strong>Screen Readers:</strong> For slides that may require additional information to be used accessibly, instructions readable only to screen readers are included. These instructions are intended to provide additional context for animation or specific activities that the user may be called upon to do.</p>",
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
							customHTML: "<h2>Course Overview:</h2><p>In this course, you will learn how to provide personalized career development support to VA employees as they pursue their career goals. Each lesson will focus on developing your proficiency in a core competency area and prepare you to act as a MyCareer@VA Career Development Facilitator at VA.</p><p>To help build these skills, this course is broken into the following units:</p><ul><li>Unit 1: Career Development Theory & Practice</li><li>Unit 2: Facilitation Skills</li><li>Unit 3: Ethical Behavior in Career Development</li></ul><p>Each unit is composed of lessons that address related concepts and competencies.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
							customHTML: "<h2>Learning Objectives</h2><p>After completing all of the lessons in this course, you should be able to:</p><ul><li>Define the role of Career Development Facilitators at VA.</li><li>Define important career development theories.</li><li>Apply core career development best practices.</li><li>Identify facilitation skills necessary to provide career development support.</li><li>Identify ethical behaviors for a CDF.</li></ul>"

						}
					]
				},
				audio:"audio/01_01_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Course Overview and Learning Objectives.</p>"
					},
					{
						time: 6,
						html: "<p>If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" tab or on the final screen of the lesson.</p>"
					},
					{
						time: 16.5,
						html: "<p>When you are finished reading, please select the \"Next\" button to start learning more about the important role you will play as a CDF at VA.</p>"
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
				text:"<p>Career Development Facilitators provide one-on-one support to VA employees to help them accomplish their career goals.</p><div class='group1' style='display: none;'><h2>Some possible CDF activities:</h2><ul><li>Holding conversations to help employees identify their career goals.</li><li>Helping employees develop plans to achieve their goals.</li><li>Identifying and encouraging the use of available career resources.</li><li>Providing feedback on employee career actions, such as goals, resumes, and interviews.</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 26.5,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
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
						time: 17.5,
						html: "<p>The goal of the CDF program is to provide one-on-one support to VA employees to help them accomplish their career goals. As a CDF, you will empower employees to take charge of their careers, not do the work for them. Please read the list of possible career activities you might engage in with employees. </p>"
					},
					{
						time: 39,
						html: "<p>As a CDF, you are not only helping individual employees; you will also directly help VA accomplish its critical mission! By helping VA employees grow and develop in their careers, you are helping them do their jobs better. This in turn allows them to provide even better service to Veterans and their families.</p>"
					},
					{
						time: 60,
						html: "<p>Please select the \"Next\" button to continue.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><h2>Organizations that provide career development opportunities & support:</h2><ul><li>Are <strong>6X</strong> more likely to engage employees than those that don't.</li><li>Are <strong>2.5X</strong> more productive.</li><li>Are <strong>4X</strong> less likely to lose employees in the next year.</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 8,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/01_01_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>In addition to already valuing and promoting growth, you likely also already know the importance of career development. Career development is not only critical to individuals but also VA as a whole. Review these facts about the impact that career development programs can have on an organization.</p>"
					},
					{
						time: 19.8,
						html: "<p>As a CDF, you will help employees find their right career path, which in turn promotes engagement, productivity, and retention.  By building a stronger workforce, you are directly helping VA provide the highest quality services and support to Veterans and their families. Please select the \"Next\" button to continue.</p>"
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
						time: 15,
						html: "<p>Please review the learning objectives and access any resources to reinforce the information covered in this lesson. To return to the Course Menu and select another lesson, please select the \"Return to Course Menu\" button.</p>"
					}
				]
			}
		},
		{
			id:"02_01_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' style='display: none' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='display: none' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='display: none' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='display: none' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='display: none' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='display: none' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='display: none' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='display: none' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='display: none'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='display: none' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group0'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 6.5,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 9.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 12.5,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 15.5,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 18.5,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 21.5,
							contentId: ['.group6'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 24.5,
							contentId: ['.group7'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 27.5,
							contentId: ['.group8'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 30.5,
							contentId: ['.group9'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 33.5,
							contentId: ['.group10'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Career Development Theory for Career Development Facilitators, or CDFs.</p>"
					},
					{
						time: 6.5,
						html: "<p>As a CDF, you are part of an elite community that shares a passion for supporting employee development and helping VA reach its strategic goal of providing the highest quality service to our nation's Veterans and their families.</p>"
					},
					{
						time: 22,
						html: "<p>This lesson will provide you with an understanding of foundational career development theories so you can better perform the various activities associated with being a CDF.</p>"
					},
					{
						time: 32,
						html: "<p>Please select the \"Next\" button to continue.</p>"
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
						time: 6,
						html: "<p>If you have questions about the content in this lesson, please consult the accompanying resources available under the \"Resources\" tab or on the final screen of the lesson. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_030",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_030_1.png' class='group1' style='display: none' alt='An arrow that says \"Then: Single Career\"' /><img src='images/CDF_02_01_030_2.png' class='group2' style='display: none' alt='three-headed arrow, each of which says \"Now: Job 4.4 years\"' /><img src='images/CDF_02_01_030_3.png' class='group3' style='display: none' alt='60% leave in 3 years; 80% open to new jobs' /><img src='images/CDF_collage_1.png' class='group4' style='display: none' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_2.png' class='group5' style='display: none' alt='' /><img src='images/CDF_collage_3.png' class='group6' style='display: none' alt='' /><img src='images/CDF_collage_4.png' class='group7' style='display: none' alt='' /><img src='images/CDF_collage_5.png' class='group8' style='display: none' alt='' /><img src='images/CDF_collage_6.png' class='group9' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='display: none' alt='' /><img src='images/CDF_collage_8.png' class='group11' style='display: none'alt='' /><img src='images/CDF_collage_9.png' class='group12' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group13' style='display: none' alt='' /></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 9.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 15.5,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 32.5,
							contentId: ['.group4','.group1','.group2','.group3'],
							displayType: ['fadeIn','addClass','addClass','addClass'],
							speed: [400,'off','off','off']
						},
						{
							time: 37,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 41.5,
							contentId: ['.group6'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 46,
							contentId: ['.group7'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 50.5,
							contentId: ['.group8'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 55,
							contentId: ['.group9'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 59.5,
							contentId: ['.group10'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 64,
							contentId: ['.group11'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 68.5,
							contentId: ['.group12'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 73,
							contentId: ['.group13'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_01_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>In recent years, career trends have changed significantly. In the past, employees spent their entire career at a single organization. Now, the average employee will stay in his or her job for only 4.4 years.</p>"
					},
					{
						time: 15,
						html: "<p>Employees will have many jobs throughout their careers—60% leave within three years at their place of employment. At any given time, 80% of employed professionals are open to discussing the possibility of a new job—44% of whom aren't even looking.</p>"
					},
					{
						time: 33,
						html: "<p>These changing employment trends have a significant impact on VA. With tight budgets, increased competition, and changing career trends, it is important to recruit and retain top talent. For example, as healthcare jobs continue to reign as one of the fastest growing professions, competition for talent increases. Therefore, VA needs to do everything it can to develop and retain these and all employees.</p>"
					},
					{
						time: 62,
						html: "<p>Providing career development support and opportunities will help VA accomplish this goal. As a CDF, you will help employees build a long and meaningful career at VA, even if their work interests change. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_040",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_040_4.png' class='group1' style='display: none' alt='A collage of various VA employees performing their jobs with the VA.' /><img src='images/CDF_02_01_040_5.png' class='group2' style='display: none' alt='' /><img src='images/CDF_02_01_040_6.png' class='group3' style='display: none' alt='' /><img src='images/CDF_02_01_040_7.png' class='group4' style='display: none' alt='' /><a href='#' id='trigger1' class='group5 p02_01_040' style='display: none'><span>Career Development Button</span></a></div>",
				timedEvents: {
					events: [
						{
							time: 0.5,
							contentId: ['.group1','.group5'],
							displayType: ['fadeIn','fadeIn'],
							speed: ['slow','slow']
						},
						{
							time: 10,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 20,
							contentId: ['.group3','.group2'],
							displayType: ['fadeIn','fadeOut'],
							speed: [400]
						},
						{
							time: 30,
							contentId: ['.group4','.group3'],
							displayType: ['fadeIn','fadeOut'],
							speed: [400]
						},
						{
							time: 40,
							contentId: ['.group4'],
							displayType: ['fadeOut'],
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
						html: "<p>Most employees begin a career at VA to serve Veterans and their families, and they are passionate about their work. However, when employees are not actively engaged in the work, they cannot do their jobs to the best of their abilities. This, of course, ultimately impacts the Veterans they serve.</p>"
					},
					{
						time: 19.5,
						html: "<p>This is where career development comes in. Employees primarily leave organizations because of lack of engagement or developmental opportunities. By equipping employees to find greater challenge and meaning in their work, career development promotes engagement and enhances the performance of individuals and the organization alike.</p>"
					},
					{
						time: 41,
						html: "<p>Select the \"Career Development\" button to read how VA defines career development. After you have read the definition of career development, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_050",
			templateId: "kc",
			content:{
				title: "Select the option or options that best answer the question, and then select \"Submit.\"",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>It is important for VA to provide career development opportunities because:</p>",
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
									    	negative: ["<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, 'All of the above' is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_01_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's quickly review what we have discussed so far. Please read the question, select the best answer, then select the \"Submit\" button.</p>"
					},
					{
						time: 9,
						html: "<p>When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_060",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<div class='p02_01_060'><div class='base'><img src='images/CDF_02_01_060_1.png' alt='Psychology, Anthropology, Sociology' /><p class='actionText tac'>Select each date along the timeline to read more.</p><a href='#trigger1' id='trigger1'><span>Early 1900s: Trait-Based</span></a><a href='#trigger2' id='trigger2'><span>1940s: Needs-Based</span></a><a href='#trigger3' id='trigger3'><span>1950s: Developmental</span></a><a href='#trigger4' id='trigger4'><span>1960s: Psychological</span></a><a href='#trigger5' id='trigger5'><span>1970s: Sociological</span></a></div></div>",
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
						html: "<p>As a CDF, it is important to have a basic understanding of how theory has shaped our concept of career development.  Theory provides the conceptual framework for all career development activities and processes. This science is drawn from several traditional disciplines of social science: Psychology, Anthropology, and Sociology.</p>"
					},
					{
						time: 23.5,
						html: "<p>While the concept of career development is based in traditional thinking, its theories have evolved greatly over the last century. These career development theories fall into five key schools of thought: Trait-based, Needs-based, Developmental, Psychological, and Sociological.</p>"
					},
					{
						time: 42,
						html: "<p>Each of these schools of thought contribute to how we see career development practiced in our world today. For example, coaching and mentoring programs stem from developmental and sociological theories, while career fit assessments and strengths-based development stem from trait-based and psychological theories.</p>"
					},
					{
						time: 62,
						html: "<p>Select each date along the timeline to read more about the foundational theories of career development. If you want to learn more about each theory, please consult the \"Further Reading\" section by selecting the \"Resources\" button.</p>"
					},
					{
						time: 82.5,
						html: "<p>After you have read about all the theories, please select the \"Next\" button to continue. </p>"
					}
				]
			}
		},
		{
			id:"02_01_070",
			templateId: "kc",
			content:{
				title: "Select the scholar that best matches the school of thought described below, and then select the \"Submit\" button.",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				knowledgeCheck: {
					forms: [
						{
							customClass: "wider",
							questions: [
								{
									stimulus:"<p>Employees are most satisfied when their personal traits match the characteristics of their jobs.</p>",
									qType: "dd",
									choices: [
										"Select...",
										"Bandura",
										"Holland",
										"Maslow",
										"Parson",
										"Super"
									],
									answers: [0,0,0,0,1,0],
									ddExclusive:false
								},
								{
									stimulus:"<p>Motivation for career development is based on meeting individual needs.</p>",
									qType: "dd",
									choices: [
										"Select...",
										"Bandura",
										"Holland",
										"Maslow",
										"Parson",
										"Super"
									],
									answers: [0,0,0,1,0,0],
									ddExclusive:false
								},
								{
									stimulus:"<p>Career development is a function of an individual's level of career maturity.</p>",
									qType: "dd",
									choices: [
										"Select...",
										"Bandura",
										"Holland",
										"Maslow",
										"Parson",
										"Super"
									],
									answers: [0,0,0,0,0,1],
									ddExclusive:false
								},
								{
									stimulus:"<p>An individual's personality type influences career choice.</p>",
									qType: "dd",
									choices: [
										"Select...",
										"Bandura",
										"Holland",
										"Maslow",
										"Parson",
										"Super"
									],
									answers: [0,0,1,0,0,0],
									ddExclusive:false
								},
								{
									stimulus:"<p>Career choice relates to one's own beliefs about self-efficacy.</p>",
									qType: "dd",
									choices: [
										"Select...",
										"Bandura",
										"Holland",
										"Maslow",
										"Parson",
										"Super"
									],
									answers: [0,1,0,0,0,0],
									ddExclusive:false
								}
							],
							buttonText: 'Submit',
							fbType: "pn",
							feedback: {
								positive: ["<p><span class='posFb'>You are correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>I'm sorry, that is not correct. Please try again.","<p><span class='negFb'>Incorrect.</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_01_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review the important theories that helped shape career development as we know it today. Please read each statement and select the scholar associated with that theory from the drop-down menu. Then select the \"Submit\" button.</p>"
					},
					{
						time: 15,
						html: "<p>When you are finished, please select the \"Next\" button to continue</p>"
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
				text:"<div class='fullScreen'><div class='group1' style='display: none;'><h2>Successful Career Development Programs:</h2><ul><div class='group2' style='display: none;'><li>Are integrated and strategic</li></div><div class='group3' style='display: none;'><li>Provide career development tools </li></div><div class='group4' style='display: none;'><li>Are intentional and comprehensive</li></div><div class='group5' style='display: none;'><li>Provide a \"human touch\" </li></div></ul></div></div>",
				timedEvents: {
					events: [
						{
							time: 9.2,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 13,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 15.5,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 18,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 22,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_01_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Career development has a rich theoretical history, but how do these theories translate into the career development programs we see in the workplace?</p>"
					},
					{
						time: 9.2,
						html: "<p>Best practices tell us that successful career development programs: are integrated and strategic, provide employees with career development tools through the adoption of an intentional and comprehensive system, and provide a \"human touch\" to career development.</p>"
					},
					{
						time: 25.2,
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
				customHTML:"<div class='p02_01_085'><div class='base'><a href='#trigger1' id='trigger1'><span>Career Development Portals</span></a><a href='#trigger2' id='trigger2'><span>Onboarding Programs</span></a><a href='#trigger3' id='trigger3'><span>Career Coaching/Mentoring</span></a><a href='#trigger4' id='trigger4'><span>Formal Training</span></a><a href='#trigger5' id='trigger5'><span>Leadership Development</span></a><a href='#trigger6' id='trigger6'><span>Career Resources</span></a><a href='#trigger7' id='trigger7'><span>Performance Management</span></a></div><p class='actionText'>Select each part of the circle to see some examples of the different ways VA promotes career development across the organization, and then select \"Next\" to continue.</p></div>",
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
									text:"<ul><li>MyCareer@VA</li><li>VA for Vets</li></ul>",
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
									text:"<ul><li>COHRS' New Employee Orientation</li></ul>",
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
									text:"<ul><li>VALU's Talent Management System</li><li>VA eHealth University</li></ul>",
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
						html: "<p>As a CDF, you will be providing one-on-one support to VA employees; this is just one of the many forms of career guidance VA employees may receive. It is important to understand career development's various forms so you can have a complete picture of all potential career development activities employees are engaging in.</p>"
					},
					{
						time: 20.5,
						html: "<p>Select the different types of career development support to see specific ways VA promotes career development. This list does not cover every program at VA, but is meant to get you thinking about different ways VA supports employee growth.</p>"
					},
					{
						time: 37,
						html: "<p>After you have read about each type of support, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_090",
			templateId: "kc",
			content:{
				title: "Select the option that best answers the question, and then select \"Submit.\"",
				image: "images/CDF_mentor3.png",
				altText: "Course mentor smiling",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Which of the following is a characteristic of a successful career development program?</p>",
									qType: "mc",
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
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Integrated and comprehensive\" is the correct answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_01_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's quickly review some of the concepts we have discussed. From the list, please select the statement that best answers the question, then select the \"Submit\" button. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
				{
			id:"02_01_100",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<div class='p02_01_100'><div class='base'><a href='#trigger1' id='trigger1'><span>Inform</span></a><a href='#trigger2' id='trigger2'><span>Connect</span></a><a href='#trigger3' id='trigger3'><span>Train</span></a><a href='#trigger4' id='trigger4'><span>Mentor</span></a><a href='#trigger5' id='trigger5'><span>Coach</span></a></div><p class='actionText'>Select each function to read more about it, and then select \"Next\" to continue.</p></div>",
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
						html: "<p>As VA's premier career development resource, MyCareer@VA, is the tool you will likely use the most as a CDF. MyCareer@VA is a real-world application of the career development theories mentioned earlier.</p>"
					},
					{
						time: 15,
						html: "<p>MyCareer@VA's career development model is an intentional, integrated career development system. Each component of MyCareer@VA has been developed as part of a larger career development system.</p>"
					},
					{
						time: 29,
						html: "<p>The model consists of five levels of help that organizations can provide in its career development programs: informing, connecting, training, mentoring, and coaching. So where do CDFs fit in to this model? Everywhere!</p>"
					},
					{
						time: 45,
						html: "<p>CDFs inform employees about career development. You connect employees to resources that can assist them in developing career competency, provide them with opportunities to engage in career development activities, and you serve as an ongoing mentor to their employees.</p>"
					},
					{
						time: 63,
						html: "<p>Select each function to read more about it. After you have read each explanation, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_110",
			templateId: "kc",
			content:{
				title: "Select the method that best matches the definition, and then select \"Submit.\"",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				knowledgeCheck: {
					forms: [
						{
							customClass: "wider",
							questions: [
								{
									stimulus:"<p>Letting people in the organization know what a career system is and what it can do for them.</p>",
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
									stimulus:"<p>Opening doors to key resources within the organization and its community as well as those external to the organization.</p>",
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
									stimulus:"<p>Assisting employees to develop competencies, identify and clarify their goals, values and interests through career training designs and meaningful dialogue facilitation.</p>",
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
									stimulus:"<p>Providing the opportunity for employees to engage in meaningful career conversations with professional career counselors, coaches, mentors, supervisors, and managers.</p>",
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
									stimulus:"<p>Identifying learning needs.</p>",
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
								negative: ["<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>Please try again.","<p><span class='negFb'>Incorrect.</span></p><p>Sorry, your answers are incorrect. The correct order is: 1. Informing; 2. Connecting; 3. Training; 4. Coaching; and 5. Mentoring.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 2
				},
				audio: "audio/02_01_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review the key methods organizations can implement to facilitate employee career development.</p>"
					},
					{
						time: 5,
						html: "<p>Please read each statement and select the method that best matches it from the drop-down menu. Then select the \"Submit\" button. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_120",
			templateId: "kc",
			content:{
				title: "Select the option that best answers the question, and then select \"Submit.\"",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>What levels of career development support do CDFs provide VA employees?</p>",
									qType: "mc",
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
									    	negative: ["<p><span class='negFb'>I'm sorry</span></p><p>While that is partially correct, 'All of the above' is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_01_120",
				closedCaption: [
					{
						time: 0,
						html: "<p>From the list, select the option that best answers the question, then select the \"Submit\" button.</p>"
					},
					{
						time: 5,
						html: "<p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_01_130",
			templateId: "tlgr",
			content:{
				title: "",
				image:"images/CDF_02_01_130.png",
				altText:"",
				imageStyle:"margin-top:-32px; margin-right:-16px;",
				text:"<div class='group1' style='display: none;'><h2>MyCareer@VA:</h2><ul><li>Supports career development</li><li>Develops skills, abilities, and competencies</li><li>Creates career possibilities</li><li>Connects effort to long-term goals</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 44.3,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_01_130",
				closedCaption: [
					{
						time: 0,
						html: "<p>VA was faced with a challenge, VA employees were offered extensive developmental resources, but without intentional organization of these tools, it was difficult for employees to know how to start accomplishing their career goals.</p>"
					},
					{
						time: 15.3,
						html: "<p>To solve this problem, VA and VALU wanted to give employees interactive and cutting-edge career development tools and resources all in a single location. The result: MyCareer@VA.</p>"
					},
					{
						time: 28.5,
						html: "<p>MyCareer@VA became the first-of-its-kind in the Federal government collection of career management resources, programs, and trainings. MyCareer@VA is changing the way VA employees manage their long-term VA careers.</p>"
					},
					{
						time: 44.3,
						html: "<p>It promotes engagement by connecting employees and managers to MyCareer@VA to support career development, fully develop their personal array of skills, abilities, and competencies, broaden their horizon of career possibilities, and connect everyday efforts to long-term goals.</p>"
					},
					{
						time: 62.5,
						html: "<p>Through MyCareer@VA, employees are happier, and they can both envision and plan their future at VA. Throughout this course, you will learn more about MyCareer@VA and how you can use it as a CDF to support employee development. Select the \"Next\" button to continue.</p>"
					}
				]
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
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li></ul>"
						}

					]
				},
				audio:"audio/02_01_140",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the Career Development Theory lesson.</p>"
					},
					{
						time: 6,
						html: "<p>In other lessons, you will learn how to put these theories into practice and expand your skills in facilitating employee development.</p>"
					},
					{
						time: 14,
						html: "<p>Please review the Learning Objectives again and access any resources to reinforce the information covered in this lesson.</p>"
					},
					{
						time: 22,
						html: "<p>To return to the Course Menu and select another lesson, please select the \"Return to Course Menu\" button.</p>"
					}
				]
			}
		},
		{
			id:"02_02_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='display: none' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='display: none' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='display: none' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='display: none' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='display: none' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='display: none' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='display: none' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='display: none'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='display: none' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 4,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 8,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 12,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 16,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 16,
							contentId: ['.group6'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 20,
							contentId: ['.group7'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 24,
							contentId: ['.group8'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 28,
							contentId: ['.group9'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 32,
							contentId: ['.group10'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_02_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Career Development Practice for Career Development Facilitators, or CDFs. If you have taken the lesson on Career Development Theory, you understand how career development promotes employee engagement thus helping VA employees provide the highest quality of service to our nation's Veterans and their families.</p>"
					},
					{
						time: 21,
						html: "<p>Building on that concept, this lesson will cover how to put career development theory into everyday practice and how you can use MyCareer@VA's four-phase career planning process to help employees grow and advance their careers. Please select the \"Next\" button to continue.</p>"
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
							customHTML: "<h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul><li>Define the four phases of the MyCareer@VA career planning process.</li></ul>"

						}
					]
				},
				audio:"audio/02_02_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we get started, please take a moment to read the Lesson Overview and Learning Objectives. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" tab or on the final screen of the lesson.</p>"
					},
					{
						time: 16.8,
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
				text:"<div class='fullScreen'><div class='group1' style='display: none;'><h2>Career development is best when it is:</h2><ul><li>Intentional or Proactive</li><li>Dynamic</li><li>Interactive</li><li>Contextual</li><li>Relational</li><li>Ongoing</li></div></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 22,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_02_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>As discussed in the lesson on theory, career development is a multi-faceted, continuous process where both employees and employers need to put forth effort to achieve their objectives. As a CDF, it is important that you are an expert on the elements of effective career development so that you can best support VA employees.</p>"
					},
					{
						time: 22,
						html: "<p>Career development is best when it is intentional or proactive, dynamic so that individuals have the flexibility to adapt based on their needs and goals, interactive, contextual, and relational. It is a life-long process and an ongoing conversation, not a one-time event.</p>"
					},
					{
						time: 41,
						html: "<p>So how is the theory of career development turned into practice? Following these best practices and building on extensive career development theory, VA created MyCareer@VA to promote employee engagement by connecting employees and managers to career development tools and resources. </p>"
					},
					{
						time: 61.5,
						html: "<p>MyCareer@VA is how you will empower employees to apply career development theory in your daily practice as a CDF. Let's explore MyCareer@VA in greater detail! Select the \"Next\" button to continue.</p>"
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
									text:"<p>During the \"Assess\" phase, it is most important for employees to learn more about themselves, their interests, values, strengths, limitations, and (most importantly) their personal career goals.</p>",
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
									text:"<p>In the \"Take Action\" phase, employees are now implementing their development plan. They are either applying for a new job within VA or taking advantage of VA's many available learning resources to grow your skills.</p>",
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
						html: "<p>MyCareer@VA has developed a four-phase career planning process to help employees easily understand the phases of career development. The actions associated with each phase serve as a guide and will help you lead your employee from one career development need to the next as well as through each phase.</p>"
					},
					{
						time: 19,
						html: "<p>As employees learn and grow, they may wish to go back to an already-explored phase to research new possibilities that they hadn't considered before or to adjust their plan to reflect a change in priorities as employees progress towards their career goals.</p>"
					},
					{
						time: 35,
						html: "<p>Select each phase to learn more. When you are finished reading, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_050",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='p02_02_050'><div class='group1' style='display: none;'><img src='images/CDF_02_02_050_1.png' alt='Map that shows Enter the Workforce, Assess, Explore, Plan, Take Action, and Leave the Workforce' /></div><div class='group2 fl' style='display: none;'><img src='images/CDF_02_02_050_2.png' alt='Alex, a VA employee' /></div><div class='group3 assess slide1 off'></div><div class='group4 explore slide1 off'></div><div class='group5 plan slide1 off'></div><div class='group6 takeAction slide1 off'></div><div class='fullWhtbrdDesc'><a href='#' id='trigger1'>Text Description of Image or Animation</a><div id='popUp_1' title='Long Description' class='off'>NEED A DESCRIPTION HERE. Click the close button to exit this description.</div></div></div>", // Anything that should be displayed on the whiteboard
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
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 7,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 21,
							contentId: ['.group3','.group1','.group2'],
							displayType: ['removeClass','addClass','addClass'],
							speed: ['off','off','off']
						},
						{
							time: 38.5,
							contentId: ['.group3','.group3'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide1']
						},
						{
							time: 39.5,
							contentId: ['.group3','.group3'],
							displayType: ['addClass','removeClass'],
							speed: ['slide1','slide2']
						},
						{
							time: 40.5,
							contentId: ['.group3','.group3'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide1']
						},
						{
							time: 60.5,
							contentId: ['.group4'],
							displayType: ['removeClass'],
							speed: ['off']
						},
						{
							time: 77.5,
							contentId: ['.group3','.group3','.group3'],
							displayType: ['addClass','addClass','removeClass'],
							speed: ['off','slide1','slide2']
						},
						{
							time: 78.5,
							contentId: ['.group4','.group4'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 79.5,
							contentId: ['.group4','.group4'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide3']
						},
						{
							time: 80.5,
							contentId: ['.group4','.group4'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 120,
							contentId: ['.group5'],
							displayType: ['removeClass'],
							speed: ['off']
						},
						{
							time: 130,
							contentId: ['.group4'],
							displayType: ['addClass'],
							speed: ['off']
						},
						{
							time: 136.5,
							contentId: ['.group5','.group5'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 137.5,
							contentId: ['.group5','.group5'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide3']
						},
						{
							time: 138.5,
							contentId: ['.group5','.group5'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 140,
							contentId: ['.group6'],
							displayType: ['removeClass'],
							speed: ['off']
						},
						{
							time: 150,
							contentId: ['.group5'],
							displayType: ['addClass'],
							speed: ['off']
						},
						{
							time: 159,
							contentId: ['.group6','.group6'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 160,
							contentId: ['.group6','.group6'],
							displayType: ['addClass','removeClass'],
							speed: ['slide2','slide3']
						},
						{
							time: 161,
							contentId: ['.group6','.group6'],
							displayType: ['addClass','removeClass'],
							speed: ['slide3','slide2']
						},
						{
							time: 189,
							contentId: ['.group3','.group6'],
							displayType: ['removeClass','addClass'],
							speed: ['off','off']
						}
					]
				},
				audio: "audio/02_02_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>To explore how the four phases of career development help you put theory into practice, let's examine a case study. Meet Alex. Alex works as a medical administration specialist at a leading facility for Post-Traumatic Stress Disorder (PTSD). He started working at VA two years ago because he is a Veteran and is passionate about VA's mission.</p>"
					},
					{
						time: 21,
						html: "<p>Throughout the remainder of this lesson, you will follow Alex as he uses the career development process to reach his career goals at VA. Alex knows that he wants to change careers, but he doesn't know exactly what he wants to do. </p>"
					},
					{
						time: 38.5,
						html: "<p>Alex is in Phase 1: Assess. In this phase, you should help Alex understand himself and where he wants to go. You should be asking open-ended questions such as the following: Are you ready for a career change?  What type of work do you enjoy? What do you do well? Knowing the answers to these questions will help both you and him identify his career goals.</p>"
					},
					{
						time: 63,
						html: "<p>In your assessment conversation with Alex, you learn that after two years on the job, Alex realizes that medical administration is not something he is passionate about. He wants to try something that better matches his work interests. </p>"
					},
					{
						time: 78,
						html: "<p>Alex is now in Phase 2: Explore. He wants to continue working for VA, just in a different career field. Lucky for Alex, there are plenty of other career options at VA that could be a better fit. This way Alex can continue to work for the mission he is passionate about while also feeling fulfilled at work.</p>"
					},
					{
						time: 99.5,
						html: "<p>In this phase, you should be helping Alex explore available jobs at VA that match his interests through tools and resources like the MyCareer Fit Tool. You will learn more about MyCareer@VA's tools and resources and when they are applicable in Unit 3.</p>"
					},
					{
						time: 116.5,
						html: "<p>After doing some exploring, Alex found the perfect job in budgeting and finance. Alex used MyCareer's Mapping Tool to map his career path from his current job to a job in budgeting and finance. Then, he identified gaps between the skills required for his current job and the skills required for his target job. </p>"
					},
					{
						time: 137.5,
						html: "<p>Alex is now in Phase 3: Plan. In this phase you should help Alex develop his plan. This could include SMART goals or creating an Individual Development Plan (IDP). This plan can change based on what each employee hopes to accomplish.</p>"
					},
					{
						time: 154,
						html: "<p>Now that all the pieces are in place, the only thing left for employees to do is to implement their plan which is Phase 4: Take Action.</p>"
					},
					{
						time: 162.5,
						html: "<p>In this phase you should help Alex initiate and commit to his development. This could include having regular check-ins or taking action to progress toward his career goals. For example, Alex could practice interviewing or create a resume to get his target job. Once Alex gets his target job, his career development is just starting because he eventually wants to work as an accounting technician.</p>"
					},
					{
						time: 189,
						html: "<p>A good CDF understands each phase, helps employees identify which stage they are in, and helps them navigate each step toward meeting their career goals.  Unit 3 on Facilitation will teach you how to identify the phases your employees are in and how to best assist employees in navigating each step.</p>"
					},
					{
						time: 210,
						html: "<p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_060",
			templateId: "kc",
			content:{
				title: "Select the phase during which the following task should occur, and then select the \"Submit\" button.",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Identify the knowledge and experience an employee needs to accomplish his/her career goals.</p>",
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
											positive: ["<p><span class='posFb'>That is correct!</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Plan\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_02_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review what we have discussed so far. Please read the question, select the best answers, then select the \"Submit\" button. When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_070",
			templateId: "kc",
			content:{
				title: "Select the phase during which the following task should occur, and then select the \"Submit\" button.",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Research specific jobs and career fields an employee is interested in.</p>",
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
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Explore\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_02_kc",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please select the option that best answers the question, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_080",
			templateId: "kc",
			content:{
				title: "Select the phase during which the following task should occur, and then select the \"Submit\" button.",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Apply for jobs and prepare for interviews.</p>",
									qType: "mc",
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
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Take Action\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_02_kc",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please select the option that best answers the question, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_02_090",
			templateId: "kc",
			content:{
				title: "Select the phase during which the following task should occur, and then select the \"Submit\" button.",
				image: "images/CDF_CDPhases_KC.png",
				altText: "The four phases of the Career Development process: Assess, Explore, Plan, Take Action",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Identify areas of professional strength.</p>",
									qType: "mc",
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
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>\"Take Action\" is the correct phase.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_02_kc",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please select the option that best answers the question, and then select the \"Submit\" button. When you are finished, select the \"Next\" button to continue.</p>"
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
							customHTML: "<p><strong>Congratulations!</strong></p><h2>Learning Objectives</h2><p>You should now be able to:</p><ul class='learningObj'><li>Define the phases of the MyCareer@VA career planning process.</li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li></ul>"
						}

					]
				},
				audio:"audio/02_02_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on Career Development Practice. Please review the Learning Objective and access any resources to reinforce the information covered in this lesson. To return to the Course Menu and select another lesson, please select the \"Return to Course Menu\" button.</p>"
					}
				]
			}
		},
		{
			id:"02_03_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' style='display: none' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='display: none' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='display: none' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='display: none' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='display: none' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='display: none' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='display: none' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='display: none' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='display: none'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='display: none' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group0'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 2,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 4,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 6,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 8,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 12,
							contentId: ['.group6'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 14,
							contentId: ['.group7'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 16,
							contentId: ['.group8'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 18,
							contentId: ['.group9'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 20,
							contentId: ['.group10'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_03_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on addressing and supporting diversity in career development for Career Development Facilitators, or CDFs.</p>"
					},
					{
						time: 8.5,
						html: "<p>This lesson will provide you with the knowledge, skills, and tools to more effectively relate to, communicate with, and support your co-workers, who come from diverse backgrounds.</p>"
					},
					{
						time: 20,
						html: "<p>Please select the \"Next\" button to continue.</p>"
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
						time: 6,
						html: "<p>If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" tab or on the final screen.</p>"
					},
					{
						time: 16,
						html: "<p>When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_030",
			templateId: "kc",
			content:{
				title: "Please read each question, select the employee you think best fits the description, then select the \"Submit\" button.",
				image: "images/CDF_02_03_030.png",
        altText: "Image of four employees: Alex, Anthony, Carl, Maria",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Which employee is a woman?</p>",
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
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Maria is a woman.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_03_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's begin our discussion of diversity by meeting some potential employees with whom you may work. </p>"
					},
					{
						time: 6,
						html: "<p>Please read each question, select the employee you think best fits the description, then select the \"Submit\" button.</p><p>Which employee is a woman?</p>"
					},
					{
						time: 15.5,
						html: "<p>When you are finished, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_040",
			templateId: "kc",
			content:{
				title: "Please read each question, select the employee you think best fits the description, then select the \"Submit\" button.",
				image: "images/CDF_02_03_030.png",
        altText: "Image of four employees: Alex, Anthony, Carl, Maria",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Which employee is of Hispanic descent?</p>",
									qType: "mc",
									choices: [
										"Alex",
										"Anthony",
										"Carl",
										"Maria"
									],
									answers: [1,0,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct</span>—that is a reasonable assumption. You might like to know that Alex is also of Scottish and German descent. In addition, Maria is Hispanic—she describes her ethnicity as Latino because her family is from South America.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Alex is Hispanic. He is also of Scottish and German descent. Maria is also Hispanic—she describes her ethnicity as Latino because her family is from South America.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
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
				title: "Please read each question, select the employee you think best fits the description, then select the \"Submit\" button.",
				image: "images/CDF_02_03_030.png",
        altText: "Image of four employees: Alex, Anthony, Carl, Maria",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Which employee has a disability?</p>",
									qType: "mc",
									choices: [
										"Alex",
										"Anthony",
										"Carl",
										"Maria"
									],
									answers: [0,1,0,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>Yes,</span> Anthony is physically disabled, but did you consider other types disabilities—ones you may not see? For example, Maria is hearing impaired.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p>This employee might have a disability that is not visible to you. For example, Maria is hearing impaired.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
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
				title: "Please read each question, select the employee you think best fits the description, then select the \"Submit\" button.",
				image: "images/CDF_02_03_030.png",
        altText: "Image of four employees: Alex, Anthony, Carl, Maria",
				customClass: "noCorrect",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Which employee is a military Veteran?</p>",
									qType: "mc",
									choices: [
										"Alex",
										"Anthony",
										"Carl",
										"Maria",
										"All of the above"
									],
									answers: [0,0,0,0,1],
									fbType: "rs",
									feedback: [
										["<p><span class='posFb'>You are correct.</span></p><p>Alex is a Veteran having served in Afghanistan. Anthony, Carl, and Maria are also Veterans.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										["<p><span class='posFb'>You are correct.</span></p><p>Anthony is a Veteran having served in Afghanistan. Alex, Carl, and Maria are also Veterans.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										["<p><span class='posFb'>You are correct.</span></p><p>Carl is a WWII Veteran. Alex, Athony, and Maria are also Veterans, having served in Afghanistan.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										["<p><span class='posFb'>You are correct.</span></p><p>Maria is a Veteran having served in Afghanistan. Alex, Anthony, and Carl are also Veterans.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
										["<p><span class='posFb'>You are correct.</span></p><p>Anthony, Alex, Maria, and Carl are all Veterans. Carl served in WWII, and Anthony, Alex, and Maria served in Afghanistan.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]	
									]						
								}
							],
							buttonText: 'Submit'
						}
					]
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
				text:"<img src='images/CDF_02_03_030.png' alt='Image of four employees: Alex, Anthony, Carl, Maria' style='margin-right:100px;' />",
				audio: "audio/02_03_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>The answers to these questions highlight the fact that we sometimes make assumptions about people that are incorrect or incomplete. As a CDF, you have the opportunity to get to know each employee who comes to you for career guidance.</p>"
					},
					{
						time: 15.5,
						html: "<p>By understanding each person's unique background and experiences, you can provide personalized support to effectively help them accomplish their career goals.</p>"
					},
					{
						time: 25.5,
						html: "<p>Please select the \"Next\" button to continue.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><blockquote><p>\"We define diversity in its broadest context to include all that makes us unique: race, color, gender, sexual orientation, religion, national origin, age, disability, culture, educational background, socioeconomic status, intellectual perspective, organizational level, and so much more.\"</p><p><em> – VA Office of Diversity and Inclusion (ODI)</em></p></blockquote></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 8.5,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before we begin discussing diversity in the context of career development, it is important to understand VA's definition of diversity. Please take a moment to read how VA's Office of Diversity and Inclusion (ODI) defines diversity.</p>"
					},
					{
						time: 15,
						html: "<p>When you are finished reading, please select the \"Next\" button.</p>"
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
									text:"<p>Mission of VA's Office of Diversity and Inclusion (ODI)</p><p>\"To build a diverse workforce and cultivate an inclusive workplace to deliver the best services to our Nation's Veterans, their families, and beneficiaries.\"</p>",
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
						html: "<p>In an increasingly globalized world, the American workforce is more diverse today than it ever has been before. It is becoming clear that in order to succeed, organizations must recruit, retain, and develop a diverse workforce; providing equal opportunities for all employees to grow and advance in their careers is a key component of this strategy.</p>"
					},
          {
						time: 22.5,
						html: "<p>The Federal government and VA in particular recognize the importance of diversity and inclusion in the workplace. Please select each seal to learn how the President and VA have reinforced the importance of a diverse workforce. When you are finished reading, please select the \"Next\" button to continue.</p>"
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
				audio: "audio/02_03_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>A diverse and inclusive workplace is one that reflects all segments of society and equally supports all members.</p><p>As a CDF, you will promote diversity and inclusion at VA by working with employees from a range of backgrounds to help them advance their careers.</p>"
					},
					{
						time: 17.5,
						html: "<p>In doing so, you will also help make VA a higher-performing organization, thus providing better services to Veterans and their families.</p><p>When you are finished reading, please select the \"Next\" button to continue.</p>"
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
				audio: "audio/02_03_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Before understanding how to recognize and address the special career development needs of diverse individuals, it is critical that you have a thorough understanding of yourself.<p>"
          },
          {
						time: 10,
						html: "<p>By better understanding yourself, you can work more effectively with people of backgrounds different than your own.</p><p>As someone who promotes development and growth in others, you likely have a good degree of self-awareness already.</p>"
					},
					{
						time: 24.5,
						html: "<p>Still, deliberate self-reflection can help you better understand the values and attitudes you bring to a CDF relationship.</p><p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_120",
			templateId: "kc",
			content:{
				title: "Please read this list and select the checkbox for each statement that you agree with, then select the \"Submit\" button. Your responses will NOT be recorded—this exercise is solely for self-reflection. ",
				customClass: "dataCollection",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"",
									qType: "mr",
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
									    	negative: ["<p><span class='negFb'></span></p><p>Please read through your responses and consider ways that your answers may impact your work as a CDF. Also, identify any areas where you would like to develop.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_03_120",
				closedCaption: [
					{
						time: 0,
						html: "<p>To increase your own self-awareness, please read this list and select \"true\" for each statement that you agree with, then select the \"Submit\" button. Your responses will NOT be recorded—this exercise is solely for self-reflection. When you are finished, please select the \"Next\" button to continue.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><p><strong>Cultural competence</strong> refers to a combination of knowledge, skills, and awareness pertaining to cultural differences that enable employees and leaders to work effectively cross-culturally.</p><div class='group2' style='display: none;'><p>A culturally competent CDF:<ul><li>Understands and appreciates diversity</li><li>Does not make assumptions without clarifying understanding</li><li>Challenges any diversity \"blind spots\" they may have</li><li>Provides guidance in a culturally sensitive way</li><li>Is flexible and adaptive</li></ul></p></div></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 6.9,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 17.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_130",
				closedCaption: [
					{
						time: 0,
						html: "<p>In addition to increasing their self-awareness, CDFs should also strive to build cultural competence. Cultural competence begins with an awareness of and respect for differences, without assuming that everyone from a particular background holds the same beliefs and practices.</p>"
					},
					{
						time: 17.5,
						html: "<p>Gerard Egan, an expert in the field of counseling and facilitating, proposed a series of competencies that are important for CDFs to have in order to work effectively with people from a range of backgrounds. Please take a moment to review the list and assess your level of cultural competency.</p>"
					},
					{
						time: 30,
						html: "<p>If you want to learn more about building your cultural competence, please consult the \"Further Reading\" section by selecting the \"Resources\" tab. Effective CDFs understand both their own backgrounds and the backgrounds of each individual with whom they work.</p>"
					},
					{
						time: 52,
						html: "<p>Please select the \"Next\" button to begin learning more about VA's diverse populations.</p>"
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
				customHTML:"<div class='p02_03_140'><div class='base'><a href='#trigger1' id='trigger1'><span>Race</span></a><a href='#trigger2' id='trigger2'><span>Culture & Ethnicity</span></a><a href='#trigger3' id='trigger3'><span>Generations</span></a><a href='#trigger4' id='trigger4'><span>Occupational Category</span></a><a href='#trigger5' id='trigger5'><span>LGBT</span></a><a href='#trigger6' id='trigger6'><span>People w/ Disabilities</span></a><a href='#trigger7' id='trigger7'><span>Veterans</span></a></div><p class='actionText'>Please select each piece of the circle to learn more about some of the diverse populations at VA, and then select \"Next\" to continue.</p></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "300",
								height: "320"
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
									text:"<p>VA defines race as the \"personal characteristics associated with race (such as hair texture, skin color, or certain facial features).\"</p><p>Most common racial groups at VA:<ul><li>White</li><li>Black or African American</li><li>Hispanic or Latino</li><li>Asian</li><li>Native Hawaiian or Pacific Islander</li><li>American Indian or Alaskan native</li></ul></p>",
									image: [],
									altText:"",
									audioId:"audio/02_03_140_1",
									closedCaption: [
										{
											time: 0,
											html: "<p>As a CDF, you should respect racial identities and reject racial stereotypes.</p>"
										},
										{
											time: 6,
											html: "<p>If employees mention that they feel race has been an obstacle in their careers, you should try to understand their experiences by asking open-ended questions. You can then help individuals identify resources and develop strategies to overcome these obstacles.</p>"
										},
										{
											time: 23.5,
											html: "<p>If you have any questions about how to best support employees, ODI and the Office of Resolution Management are a great place to start.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "150"
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
									text:"<p>VA defines an ethnic group as \"a group of people whose members may identify with each other through a common heritage, a common language, a common culture, or a shared religion.\"</p>",
									image: [],
									altText:"",
									audioId:"audio/02_03_140_2",
									closedCaption: [
										{
											time: 0,
											html: "<p>As a CDF, you should respect all backgrounds and never make assumptions about employees based on their heritage.</p>"
										},
										{
											time: 7.2,
											html: "<p>You should also remember that every culture has its own values and norms, and that people from a different culture may approach career development from a different perspective than yours.</p>"
										},
										{
											time: 18.2,
											html: "<p>If employees mention that their cultures have impacted their career development, you should try to understand their experiences so you can help them reach their goals.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "220"
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
									text:"Today's workforce is made up of people from multiple generations:<ul><li>Veterans (born 1922–1945)</li><li>Baby Boomers (born 1946–1960)</li><li>Generation X (born 1961–1980)</li><li>Millennials (born 1980–2000)</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/02_03_140_3",
									closedCaption: [
										{
											time: 0,
											html: "<p>Members of each generation bring their own attitudes, expectations, and preferences to the workplace.</p><p>Employees may feel that they are being treated differently than colleagues or that they face challenges because of their age.</p>"
										},
										{
											time: 14.3,
											html: "<p>As a CDF, you will help determine whether generational dynamics are influencing an employee's career progression and help to identify strategies to overcome any barriers.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "150"
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
									text:"<p>In the 2013 Federal Employee Viewpoint Survey, only 36% of VA employees indicated they were satisfied with the opportunity to get a better job in the organization.</p>",
									image: [],
									altText:"",
									audioId:"audio/02_03_140_4",
									closedCaption: [
										{
											time: 0,
											html: "<p>VA's ODI has indicated those employees at GS Level 9 and below, and the wage grade equivalent, sometimes experience career progression barriers. As a CDF, you should be prepared to recommend leadership, skill-building, and certificate programs that can help employees move to the next grade.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "210"
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
									text:"<p>VA defines sexual orientation as \"a person's permanent emotional, romantic, or sexual feelings toward certain other people.\"<p></p>LGBT is an abbreviation for Lesbian, Gay, Bisexual, and Transgender (though being transgender does not imply any specific sexual orientation).</p>",
									image: [],
									altText:"",
									audioId:"audio/02_03_140_5",
									closedCaption: [
										{
											time: 0,
											html: "<p>LGBT employees experience real and perceived fear that they will be rejected, harassed, or threatened by other employees for being who they are in addition to being denied opportunities to advance in their careers. As a CDF, you never should make assumptions or ask employees about their sexual orientation or identity.</p>"
										},
										{
											time: 21.3,
											html: "<p>It will helpful to familiarize yourself with your state's legislation related to LGBT employees as well as the resources available through VA's ODI so you can connect employees to this information and help them accomplish their career goals.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "260"
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
									text:"<p>There are many types of disabilities: physical, cognitive, mental, emotional, learning, developmental, or some combination thereof.</p><p>13.6% of people 18–44 years old have a disability.</p><p>29.2% of people 45–64 years old have a disability.</p>",
									image: [],
									altText:"",
									audioId:"audio/02_03_140_6",
									closedCaption: [
										{
											time: 0,
											html: "<p>As a CDF, you always should focus on the employee with whom you are working and not on their disability. Do not assume that someone has certain needs just because they have a disability.</p>"
										},
										{
											time: 12,
											html: "<p>People with disabilities may face career challenges because of misperceptions that they are incapable or unqualified to perform certain tasks, that accommodations are too costly, or due to general discomfort with disabled persons.</p>"
										},
										{
											time: 27.5,
											html: "<p>To help support all employees, you should familiarize yourself with VA's robust resources for employees with disabilities so you can direct them to appropriate tools and help them advance their careers.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "300",
								height: "260"
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
									text:"In 2011:<ul><li>The national unemployment rate was 8.6%</li><li>The unemployment rate for Veterans was 12% </li><li>The unemployment rate for Veterans between the ages of 18 and 24 was 30%</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/02_03_140_7",
									closedCaption: [
										{
											time: 0,
											html: "<p>Outside of the Department of Defense, VA employs the highest number of Veterans in the Federal government. Veterans sometimes need assistance translating their valuable military experience and training into civilian workplace skills.</p>"
										},
										{
											time: 14.9,
											html: "<p>Veterans may have physical or mental injuries resulting from their service that require special consideration. At VA, there are extensive resources available to support Veterans in their transition to and development in a civilian career.</p>"
										},
										{
											time: 30.3,
											html: "<p>As a CDF, having a thorough understanding of career development and knowledge of all available resources will enable you to help Veterans accomplish their career goals.</p>"
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
						time: 17,
						html: "<p>Please select each piece of the circle to learn more about some of the diverse populations at VA. Note that these groups do not represent the full range of diversity at VA, but they can help begin a conversation about tailoring support for people whose backgrounds might be different than your own.</p>"
					},
					{
						time: 35,
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
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' style='display: none' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='display: none' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='display: none' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='display: none' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='display: none' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='display: none' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='display: none' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='display: none' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='display: none'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='display: none' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group0'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 6.5,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 9.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 12.5,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 15.5,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 18.5,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 21.5,
							contentId: ['.group6'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 24.5,
							contentId: ['.group7'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 27.5,
							contentId: ['.group8'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 30.5,
							contentId: ['.group9'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 33.5,
							contentId: ['.group10'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio:"audio/02_03_150",
				closedCaption: [
					{
						time: 0,
						html: "<p>While keeping in mind the needs of these diverse groups, you must also try to understand how an individual's background and experiences have shaped their professional and life experiences. Regardless of the demographic group to which they belong, each person is an individual with unique preferences, strengths, and perspectives.</p>"
					},
					{
						time: 20,
						html: "<p>As a CDF you must always keep an open mind and respect the diverse backgrounds of the employees with whom you work. Only then can you provide effective support and help them develop plans to accomplish their own unique career goals.</p>"
					},
					{
						time: 35,
						html: "<p>Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_160",
			templateId: "kc",
			content:{
				title: "Please read each employee's statement, select the best possible CDF responses from the list, and then select the \"Submit\" button.",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Two years ago, I developed a rare disease that caused me to go blind. I now use assistive technology to complete my work. My supervisor says that I am doing a great job, and she can see me in this role for a long time. I want to move up in the organization but am unsure of how to start this conversation with her. As a CDF, how would you respond?</p>",
									qType: "mr",
									choices: [
										"A) Do you think your blindness has impacted your performance?",
										"B) Do you feel that your supervisor and VA have provided you with suitable accommodations?",
										"C) What do you mean by \"move up\"? What type of role or position are you looking for?",
										"D) Do you think you just should feel lucky to have a job given your condition?"
									],
									answers: [1,1,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>A, B, and C are all appropriate responses.<p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry,</span> that is not an appropriate response to this employee's situation.</p><p>A, B, and C are all appropriate responses.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/02_03_160",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now let's apply some of the concepts we have discussed to potential scenarios you might encounter as a CDF. Please read each employee's statement, select the best possible CDF responses from the list, and then select the \"Submit\" button.</p>"
					}
				]
			}
		},
		{
			id:"02_03_170",
			templateId: "kc",
			content:{
				title: "Please read each employee's statement, select the best possible CDF responses from the list, and then select the \"Submit\" button.",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				customClass: "halfWidth",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>I was recently passed over for an opportunity to lead a team. I suspect it's because I am Hispanic. I sometimes hear my supervisor tell or laugh at inappropriate jokes, and I can't help but wonder about his racial bias. I have received positive feedback and above satisfactory ratings on my recent performance reports. I have also clearly expressed interest in leadership opportunities. As a CDF, how would you respond?</p>",
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
					]
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
				text:"<div class='group1 keyText' style='display: none;'><p>A barrier is <strong>\"any employment policy, procedure, practice, or condition, or facet thereof, that limits or tends to limit employment opportunities for members\"</strong> of a particular group.</p><p><em> – VA Office of Diversity and Inclusion (ODI)</em></p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 15,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_180",
				closedCaption: [
					{
						time: 0,
						html: "<p>In addition to better understanding yourself and the employees with whom you will work as a CDF, it is important that you are able to identify career progression barriers people may face. By calling attention to potential career obstacles and helping employees develop strategies to overcome them, you are empowering individuals to take charge of their careers.</p>"
					},
					{
						time: 15,
						html: "<p>Please take a moment to read VA's definition of a career barrier. When you are finished reading, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"02_03_190",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText'>Please select each type of obstacle to learn more, then select the \"Next\" button to continue.</p><div class='p02_03_190'><a href='#trigger1' id='trigger1' title='Institutional'><span>Institutional</span></a><a href='#trigger2' id='trigger2' title='Individual' class='last'><span>Individual</span></a><a href='#trigger3' id='trigger3' title='Physical'><span>Physical</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "480",
								height: "180"
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
									text:"<p>Institutional barriers can take the form of:</p><ul><li>Discriminatory Policies (when anti-discriminatory policies are not enforced)</li><li>Discriminatory Attitudes (widespread discriminatory beliefs held by colleagues or leaders)</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/02_03_190_1",
									closedCaption: [
										{
											time: 0,
											html: "<p>Institutional barriers are organizational challenges that affect employment, development, retention, and promotion of individuals in the workplace.</p>"
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
									title:"Individual",
									text:"<p>Individual barriers can take the form of:</p><ul><li>Low self-esteem or self-doubt</li><li>Lack of career planning</li><li>Insufficient education or skill development</li><li>Internalization of stereotypes</li><li>Fear of failure or fear of success</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/02_03_190_2",
									closedCaption: [
										{
											time: 0,
											html: "<p>Individual barriers are obstacles individuals experience that may prevent them from reaching their full career potential.</p>"
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
								popUpPosition: "left center",
								parentPosition: "right+20 center",
								elementOfPosition: ".p02_03_190"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Physical",
									text:"<p>Physical barriers can take the form of:</p><ul><li>Lack of reasonable accommodation</li><li>Inaccessible buildings or workspaces</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/02_03_190_3",
									closedCaption: [
										{
											time: 0,
											html: "<p>Physical barriers refer to workplaces that may be physically inaccessible or limiting to some employees.</p>"
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
						html: "<p>Barriers can take many forms. For example, barriers can be institutional, individual, or physical. Please select each type of barrier to learn more. When you are finished, select the \"Next\" button to continue.</p>"
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
        text:"<div class='fullScreen'><div class='group1' style='display: none;text-indent: 20px;'><p>1. Thoroughly understand the employee</p></div><div class='group2' style='display: none;text-indent: 20px;'><p>2. Direct employee to resources</p></div><div class='group3' style='display: none;text-indent: 20px;'><p>3. Provide support and encouragement</p></div></div>",
				timedEvents: {
					events: [
            {
							time: 12,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 37.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 57.8,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/02_03_200",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a CDF, you will help VA employees identify possible career progression barriers, but more importantly, help them develop strategies and solutions for overcoming these challenges.</p>"
					},
					{
						time: 12,
						html: "<p>Knowing your employees well will better equip you to help them identify and overcome career development barriers. To get to know a person, you must ask them good questions. The \"Holding Helping Conversations\" lesson reviews skills that can help you ask effective questions, listen actively, and respond effectively to gather as much information as possible from the employees with whom you work.</p>"
					},
					{
						time: 37.5,
						html: "<p>A second way you can help VA employees overcome career progression obstacles is by directing them to appropriate resources within the organization. The \"Career Development Practice\" and \"Referral Acumen\" lessons teach you about valuable VA resources that can help employees in various stages of their career development.</p>"
					},
					{
						time: 57.8,
						html: "<p>Finally, providing employees with the support and encouragement they need to overcome obstacles can be incredibly helpful. The \"Building Rapport and Trust\" lesson builds on your existing experience and gain new tools to support employees in the context of career development.</p>"
					},
					{
						time: 75,
						html: "<p>Select the \"Next\" button to continue.</p>"
					}
				]
			}
    },
		{
			id:"02_03_210",
			templateId: "kc",
			content:{
				title: "Please read each employee statement. Use the drop-down menus to indicate whether each employee statement can be considered a career barrier. When you are finished, select the \"Submit\" button.",
				image: "images/CDF_mentor2.png",
				altText: "Course mentor smiling",
				knowledgeCheck: {
					forms: [
						{
							customClass: "wider",
							questions: [
								{
									stimulus:"<p>I don't know how to take my career to the next level.</p>",
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
									stimulus:"<p>I am afraid that I might fail if I take on new responsibilities.</p>",
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
									stimulus:"<p>My supervisor says that the accommodations I need are not reasonable.</p>",
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
									stimulus:"<p>I don't think I deserve to be successful.</p>",
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
									stimulus:"<p>I'm not sure how to explain the skills I developed in the military.</p>",
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
									stimulus:"<p>I am African American and my supervisor makes frequent derogatory statements about black people.</p>",
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
									stimulus:"<p>I don't have the skills I need to do the job that I want.</p>",
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
								positive: ["<p><span class='posFb'>You are correct</span>—all of the statements reflect potential career barriers</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
								negative: ["<p><span class='negFb'>I'm sorry</span>—ALL of the statements reflect potential career barriers.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
							}
						}
					],
					maxAttempts: 3
				},
				audio: "audio/02_03_210",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's now try to identify some potential career barriers that might come up in your work as a CDF. Use the drop-down menus to indicate whether each employee statement can be considered a career barrier. Then select the \"Submit\" button.</p>"
					},
					{
						time: 15.8,
						html: "<p>When you are finished, please select the \"Next\" button to continue</p>"
					}
				]
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
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li></ul>"
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
						time: 16,
						html: "<p>To return to the Course Menu and select another lesson, please select the \"Return to Course Menu\" button.</p>"
					}
				]
			}
		},
		{
			id:"03_01_010",
			templateId: "tlgr",
			content:{
				title: "",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				audio: "audio/03_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Attending, one of the most important helping skills you will use in your work as a Career Development Facilitator, or CDF. This lesson will provide you with the knowledge, skills, and tools to build and maintain productive and effective helping relationships with VA employees.</p>"
					},
					{
						time: 19.5,
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
							customHTML: "<h2>Lesson Overview:</h2><p>This lesson will discuss how to build an effective helping relationship with VA employees and focuses on the important skill of Attending.</p>"
						},
						{
							customClass: "learningObjCol", // optional. If a class should be added to the column div
							width: "340", //The width to give to the column
              customHTML: "<h2>Learning Objectives</h2><ul><li>Define a helping relationship.</li><li>Identify the core helping skills.</li><li>Define the SOLER method.</li></ul>"

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
						time: 4.5,
						html: "<p>If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" tab or on the final screen. When you are finished reading, please select the \"Next\" button to continue.</p>"
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
				text:"<ul><li>When have you needed help from someone to deal with a difficult career-related problem?</li><li>How did that problem make you feel?</li><li>How did you feel asking someone for help?</li><li>What characteristics made you feel comfortable seeking help from that person?</li></ul>",
				audio: "audio/03_01_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>To begin, please think about a time in your life when you needed help from someone to deal with a difficult career-related problem.</p>"
					},
					{
						time: 7.5,
						html: "<p>Reflecting on a time in your own career when you needed help will allow you to better identify with the needs of those employees seeking your assistance. When you are finished reflecting, please select the \"Next\" button to continue.</p>"
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
        text:"<div class='group1 keyText' style='display: none;'><p>A <strong>helping relationship</strong> is one in which two or more people work toward finding a solution to a problem or set of problems.</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 13.5,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_01_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>As a CDF, it is critical for you to recognize and understand how employees feel and how to make them comfortable so you can work together effectively: this is the basis of a helping relationship.</p>"
					},
					{
						time: 12.5,
						html: "<p>You may be asking yourself, what do you mean by a helping relationship? Helping is first and foremost about the person seeking assistance, and the purpose of a helping relationship is to help this individual find a solution to a problem.</p>"
					},
					{
						time: 27.5,
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
				customHTML:"<p class='actionText'>Please select each helping skill to learn more, then select the \"Next\" button to continue.</p><div class='p02_03_190'><a href='#trigger1' id='trigger1' title='Acceptance & Respect'><span>Acceptance & Respect</span></a><a href='#trigger2' id='trigger2' title='Understanding & Empathy' class='last'><span>Understanding & Empathy</span></a><a href='#trigger3' id='trigger3' title='Trust'><span>Trust</span></a><a href='#trigger4' id='trigger4' title='Warmth & Genuineness'><span>Warmth & Genuineness</span></a></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
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
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Acceptance & Respect",
									text:"<ul><li>We demonstrate <strong>acceptance</strong> when we relate to another person without judging him or her.</li><li>We show <strong>respect</strong> when we treat each individual with dignity.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_01_050_1",
									closedCaption: [
										{
											time: 0,
											html: "<p>As a CDF, it is important to accept and respect all employees. You will likely find it easy to accept and respect employees if they are polite, engaged, and appreciative. However, because navigating one's career can be stressful, some individuals may be frustrated and anxious.</p>"
										},
										{
											time: 19.6,
											html: "<p>You can convey acceptance and respect by being consistently open-minded and nonjudgmental.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "180"
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
									text:"<ul><li>We demonstrate <strong>understanding</strong> when we listen thoughtfully to others and clarify our interpretation of their experiences.</li><li>We show <strong>empathy</strong> when we try to experience another person's life or feelings as they experience them.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_01_050_2",
									closedCaption: [
										{
											time: 0,
											html: "<p>As a CDF, it is critical that you try to understand an employee's experiences and feelings—put yourself in their shoes. You do not need to agree with each employee, but you do need to make sure each individual feels heard, understood, and appreciated.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "110"
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
									text:"<ul><li>We <strong>trust</strong> others when we feel that we are safe and that they have our best interests in mind.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_01_050_3",
									closedCaption: [
										{
											time: 0,
											html: "<p>When employees trust you, they will be more open and candid, which will help you better understand their experiences and goals. Confidentiality is an essential component of the CDF relationship and will help you build trust.</p>"
										},
										{
											time: 14.2,
											html: "<p>As you know, trust is earned, not given. Earning each individual's trust should be a major focus as you build relationships with employees.</p>"
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
									text:"<ul><li>We show <strong>warmth</strong> when we are kind and attend fully to what others are saying.</li><li>We demonstrate <strong>genuineness</strong> when we are authentic and sincere.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_01_050_4",
									closedCaption: [
										{
											time: 0,
											html: "<p>You have likely had an interaction with someone who was not warm or genuine; you may have felt patronized or that the person was being fake. More productive and beneficial relationships result when people are kind, sincere, and show you who they really are.</p>"
										},
										{
											time: 16.5,
											html: "<p>As a CDF, treating people with warmth and genuineness will put them at ease, which fosters healthy relationships.</p>"
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
						html: "<p>Please select each piece of the circle to learn more about each element. When you are finished reading all four, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_01_060",
			templateId: "kc",
			content:{
				title: "Select the option best answer the question, and then select \"Submit.\"",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>From the list, please select the term that is NOT one of the basic elements of a helping relationship:</p>",
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
									    	negative: ["<p><span class='negFb'>I'm sorry, that is not correct.</span></p><p>All of these answers are basic elements of a helping relationship EXCEPT \"Influence.\"<p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
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
        text:"<div class='group1 keyText' style='display: none;'><p>Can you think of a time in your life when you felt that someone was not truly paying attention to you?</p><p>How did that make you feel?</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 20.4,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_01_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now that we have reviewed the core elements of a helping relationship, let's discuss one of the most important helping skills: Attending. Good Attending behavior demonstrates that you respect a person and are genuinely interested in them. It involves giving someone your full attention and noticing what they say and how they say it.</p>"
					},
					{
						time: 20.4,
						html: "<p>Please think of a time when you felt that someone was not paying attention to you. How did that make you feel? Chances are, you were left feeling that what you had to say was unimportant. When you demonstrate effective Attending skills, the employees with whom you work will feel heard, valued, and supported.</p>"
					},
					{
						time: 41,
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
									title:"S",
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
									title:"O",
									text:"<ul><li>Adopt an <strong>O</strong>pen posture.</li><li>An open posture conveys that you are available and receptive to what an individual has to say.</li><li>Hunching over or crossing your arms and legs sends the message that you are shut off.</li><li>Of course you should be comfortable, but it is important to consider whether your posture communicates openness to others.</li></ul>",
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
									title:"L",
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
									title:"E",
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
									title:"R",
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
						html: "<p>Since good Attending skills make someone feel heard and valued, an important element of this skill is how you orient yourself toward another person. Gerald Egan created the SOLER model to help counselors attend to their clients; you can use SOLER to build an effective helping relationship with employees at VA!</p>"
					},
					{
						time: 15,
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
						html: "<p>Keeping the SOLER method in mind will help you build effective helping skills and better attend to employees' career needs.  However, it is important to note that this model was designed to align with North American cultural norms, so you should consider whether this will be effective with employees on an individual basis.</p>"
					},
					{
						time: 19,
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
				customHTML: "<div class='tac'><img src='images/CDF_mentor2.png' alt='Course mentor smiling' style='margin-top:-24px' /></div>",
				audio: "audio/03_01_100",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's use the SOLER method to assess whether our CDF Erika is using good attending skills and orienting herself to employees appropriately. On the following screens, please examine each picture of Erika and determine if she is adhering to the specified SOLER skill. Select the \"Next\" button to get started.</p>"
					}
				]
			}
		},
		{
			id:"03_01_105",
			templateId: "kc",
			content:{
				title: " Please select the appropriate answer, and then select \"Submit.\"", // Simple jquery replace text hint link
				image: "images/CDF_03_01_100_2.png",
				altText: "Course mentor Erika sitting calmly with hands placed in her lap",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Does Erika reflect the \"S\" in SOLER?</p><p><br/><span id='p03_01_105_link'><a href='#' onclick='javascript:$(\"#p03_01_105_link\").html(\"S = Sit Squarely\")'>Select here for a hint</a>.</span></p>",
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>If you are the employee with whom she is meeting, Erika is sitting squarely toward you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>If you are the employee with whom she is meeting, Erika is sitting squarely toward you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
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
						html: "<p>Does Erika reflect the \"S\" in SOLER?</p>"
					}
				]
			}
		},
		{
			id:"03_01_110",
			templateId: "kc",
			content:{
				title: "Please select the appropriate answer, and then select \"Submit.\" ", // Simple jquery replace text hint link
				image: "images/CDF_03_01_110.png",
				altText: "Course mentor Erika sitting with arms crossed and frustrated expression",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Does Erika reflect the \"O\" in SOLER?</p><p><br /><span id='p03_01_110_link'><a href='#' onclick='javascript:$(\"#p03_01_110_link\").html(\"O = Open Posture\")'>Select here for a hint</a>.</span></p>",
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>Erika's posture sends the message that she is shut off or unapproachable, not open.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Erika's posture sends the message that she is shut off or unapproachable, not open.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
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
						html: "<p>Does Erika reflect the \"O\" in SOLER?</p>"
					}
				]
			}
		},
		{
			id:"03_01_120",
			templateId: "kc",
			content:{
				title: "Please select the appropriate answer, and then select \"Submit.\"", // Simple jquery replace text hint link
				image: "images/CDF_03_01_120.png",
				altText: "Course mentor Erika sitting upright, smiling, and leaning forward with hands in her lap",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Does Erika reflect the \"L\" in SOLER?</p><p><br/><span id='p03_01_120_link'><a href='#' onclick='javascript:$(\"#p03_01_120_link\").html(\"L = Lean Toward Employee\")'>Select here for a hint</a>.</span></p>",
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>Erika is leaning in to show that she is interested.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Erika is leaning in to show that she is interested.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
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
						html: "<p>Does Erika reflect the \"L\" in SOLER?</p>"
					}
				]
			}
		},
		{
			id:"03_01_130",
			templateId: "kc",
			content:{
				title: " Please select the appropriate answer, and then select \"Submit.\"", // Simple jquery replace text hint link
				image: "images/CDF_03_01_130.png",
				altText: "Course mentor Erika sitting calmly with hands folded in her lap and looking forward with a pleased expression",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Does Erika reflect the \"E\" in SOLER?</p><p><br/><span id='p03_01_130_link'><a href='#' onclick='javascript:$(\"#p03_01_130_link\").html(\"E = Good Eye Contact\")'>Select here for a hint</a>.</span></p>",
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>If you are the employee with whom she is meeting, Erika is making direct eye contact with you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>If you are the employee with whom she is meeting, Erika is making direct eye contact with you.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_01_130",
				closedCaption: [
					{
						time: 0,
						html: "<p>Does Erika reflect the \"E\" in SOLER?</p>"
					}
				]
			}
		},
		{
			id:"03_01_140",
			templateId: "kc",
			content:{
				title: " Please select the appropriate Answer, and then select \"Submit.\"", // Simple jquery replace text hint link
				image: "images/CDF_03_01_140.png",
				altText: "Course mentor Erika sitting turned to the side, with her arms crossed and anangry expression",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Does Erika reflect the \"R\" in SOLER?</p><p><br/><span id='p03_01_140_link'><a href='#' onclick='javascript:$(\"#p03_01_140_link\").html(\"R = Relaxed\")'>Select here for a hint</a>.</span></p>",
									qType: "mc",
									choices: [
										"Yes",
                    "No"
									],
									answers: [0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span></p><p>Erika seems tense and angry, not relaxed.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>Erika seems tense and angry, not relaxed.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_01_140",
				closedCaption: [
					{
						time: 0,
						html: "<p>Does Erika reflect the \"R\" in SOLER?</p>"
					}
				]
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
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li></ul>"
						}
					]
				},
				audio:"audio/03_01_150",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the lesson on helping skills and the importance of Attending. Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson.</p>"
					},
					{
						time: 15,
						html: "<p>To return to the Course Menu and select another lesson, please select the \"Return to Course Menu\" button.</p>"
					}
				]
			}
		},
		{
			id:"03_02_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_02_01_010.png' class='group0' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_1.png' class='group1' style='display: none' alt='' /><img src='images/CDF_collage_2.png' class='group2' style='display: none' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='display: none' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='display: none' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='display: none' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='display: none' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='display: none' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='display: none'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='display: none' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 3,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 6,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 9,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 12,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 15,
							contentId: ['.group6'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 18,
							contentId: ['.group7'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 21,
							contentId: ['.group8'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 24,
							contentId: ['.group9'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 27,
							contentId: ['.group10'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio:"audio/03_02_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Building Trust and Rapport. One of the most important factors in becoming a successful CDF is establishing trust and rapport with employees. Without these factors, you cannot effectively empower others. This lesson will review strategies and tools for building trust and rapport so you can form effective and productive helping relationships.</p>"
					},
					{
						time: 24.5,
						html: "<p>Please select the \"Next\" button to continue.</p>"
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
						html: "<p>Before we get started, please take a moment to read the Course Overview and Learning Objectives. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" tab or on the final screen of the lesson. When you are finished reading, please select the \"Next\" button to start learning about becoming a trusted helper.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><p>Please think about someone you trust and would go to for help. Why do you trust them?</p><h2>Trust:</h2><ul><li>Increases employee commitment</li><li>Supports communication and collaboration </li><li>Allows the employee to be more open and honest</li></ul></div><div class='group2 keyText' style='display: none;'><h2>Trustworthiness = Credibility + Reliability + Intimacy</h2><p>Where,</p><p><strong>Credibility</strong> = expertise</p><p class='group3 keyText' style='display: none;'><strong>Reliability</strong> = ability to get the work done</p><p class='group4 keyText' style='display: none;'><strong>Intimacy</strong> = caring about others' needs</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 34,
							contentId: ['.group1'],
							displayType: ['fadeOut'],
							speed: [400]
						},
						{
							time: 35,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 63.5,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 80,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_02_030",
				closedCaption: [
					{
						time: 0,
						html: "<p>Many times when we think of trusting relationships, we think of individuals we already know. So how do you become a trusted helper to employees who do not know you? Being a trusted helper is critical to your success as a CDF because it: increases employee commitment to the career development process, supports communication and collaboration between you and the employee, and allows the employee to be more open and honest.</p>"
					},
					{
						time: 29,
						html: "<p>The first step to becoming a trusted helper is building a trustworthy relationship. Trustworthiness is a function of three critical factors: credibility, reliability, and intimacy. Credibility relates to expertise. An essential element in trust is having faith that the person you are placing your trust in has the skills and knowledge to assist you.</p>"
					},
					{
						time: 53,
						html: "<p>In helping relationships, we lose credibility when we stretch the truth and claim to be capable in areas in which we don't have experience. Reliability relates to organizational skills to get the work done. Employees need to be confident that they can depend on you to do what you promise. In helping relationships, you lose or damage trust if you don't fulfill your promises.</p>"
					},
					{
						time: 79.5,
						html: "<p>Intimacy represents the degree to which a person cares about another's needs.  In helping relationships, if you appear aloof and detached from the situation, you will find a lack of openness and trust. Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_040",
			templateId: "kc",
			content:{
				title: "Select the option that best answers the question, and then select \"Submit.\"",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>As a CDF, your ability to be seen as a trusted helper:</p>",
									qType: "mc",
									choices: [
                    "Facilitates an open and honest conversation between you and the employee",
                    "Establishes your credibility so that employees see you as a main source of support for their development",
                    "Increases employee commitment to the career development process",
                    "All of the above"
									],
									answers: [0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, \"All of the above\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_02_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's review what we have discussed so far. Please read the question, select the best answer, and then select the \"Submit\" button.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><h2>Best practices for building rapport:</h2><ul><li>Be open and honest</li><li>Seek to understand</li><li>Ask questions</li><li>Be empathetic (through verbal and non-verbal cues)</li><li>Find common ground</li><li>Establish yourself as a credible source of career development information</li><li>Be flexible in your behavior</li></ul></div><div class='group2 keyText' style='display: none;'><h2>Common rapport wreckers:</h2><ul><li>Disagreeing</li><li>Talking too much</li><li>Criticizing others</li><li>Negative comments</li></ul></div><div class='group3 keyText' style='display: none;'><h2>Your opening statement should include:</h2><ul><li>An introduction of yourself.</li><li>A brief synopsis of your career story and why you chose to be a CDF.</li><li>A discussion of ways you can help and support the employee.</li></ul><p><strong>Do not forget to tailor your statement to the person you are speaking with!</strong></p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 86,
							contentId: ['.group1'],
							displayType: ['fadeOut'],
							speed: [400]
						},
						{
							time: 86.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 123,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_02_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>So now that you know the key components of building trust, how can you use trust to build rapport? Rapport is a relationship that consists of mutual trust or emotional affinity. Here are some best practices for building rapport. Be open and honest. This helps employees know you are someone they can trust. </p>"
					},
					{
						time: 22,
						html: "<p>Seek to understand. You must first work to understand an employee's current situation and career goals. When employees see that you understand their current situations, they will be more open to sharing and communicating with you. Ask questions. This way, employees can see that you care about what they are saying, which in turn fosters trust.</p>"
					},
					{
						time: 44,
						html: "<p>Be empathetic (through verbal and non-verbal cues). When employees think you know what matters to them, rapport will follow. Find common ground. This will help both you relate to employees and employees relate to you. Establish yourself as a credible source of career development information. This will help employees trust the guidance you provide and be more committed to the process.</p>"
					},
					{
						time: 69,
						html: "<p>Be flexible in your behavior. Each individual is different, and you need to be flexible in your communication style in order to be effective. You will learn more about how to respond to employees in the lesson on holding helping conversations.</p>"
					},
					{
						time: 86.5,
						html: "<p>Building rapport can take minutes and have a lasting, valuable impact; but destroying it can take seconds. So what are some of the biggest rapport wreckers that should be avoided? Disagreeing with the person you have just met, however trivial the point may be.</p>"
					},
					{
						time: 103.5,
						html: "<p>Talking too much—remember you are trying to develop a two-way conversation, not give a speech! Criticizing others. Any negative comments. One important step is to initiate your conversations effectively. You should develop an opening statement using the above techniques.</p>"
					},
					{
						time: 123,
						html: "<p>Your statement should match your personality and style. It could include: An introduction of yourself. A brief synopsis of your career story and why you chose to be a CDF. A discussion of ways you can help and support the employee.</p>"
					},
					{
						time: 140,
						html: "<p>Do not forget to tailor your statement to the person you are speaking with! Please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_02_060",
			templateId: "kc",
			content:{
				title: "Select the option that best answers the question, and then select \"Submit.\"",
				image: "images/CDF_03_02_050.png",
				altText: "Course mentor speaking to an employee, Rich",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Which is the best tactic for beginning your meeting with Rich?</p>",
									qType: "mc",
									choices: [
                    "A) Use open body language, and smile",
                    "B) Ask open-ended questions",
                    "C) Share your career story",
                    "D) Talk the majority of the time since Rich seems uncomfortable",
                    "E) Answers A, B, and C"
									],
									answers: [0,0,0,0,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry.</span></p><p>While that is partially correct, \"Answers A, B, and C\" is the BEST answer.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_02_060",
				closedCaption: [
					{
						time: 0,
						html: "<p>Now it is time to practice what you have learned. Rich schedules a meeting with you. When he walks in, he appears nervous and closed off. Which is the best tactic for beginning your meeting with Rich? Select the best answer, and then select the \"Submit\" button.</p>"
					}
				]
			}
		},
		{
			id:"03_02_070",
			templateId: "kc",
			content:{
				title: "Select the option that best answers the question, and then select \"Submit.\"",
				image: "images/CDF_03_02_060.png",
				altText: "Course mentor speaking to a female employee, Samantha",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>Which tactic is best used when approaching Samantha about her career goals?</p>",
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
									    	negative: ["<p><span class='negFb'>I'm sorry, that is not correct.</span></p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_02_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>You and Samantha sit down to discuss her career goals. Samantha shares several goals that she would like to accomplish. While at some point in her career, these goals may be attainable, at this point in Samantha's career, they are unrealistic. How should you approach Samantha about her goals? Select the best answer, and then select the \"Submit\" button.</p>"
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
							customHTML: "<p><strong>Congratulations!</strong></p><p>You have successfully completed the Building Trust and Rapport lesson.</p><h2>Learning Objectives</h2><p>After completing this lesson, you should be able to:</p><ul class='learningObj'><li>Discuss the importance of establishing trust and building rapport.</li><li>List the key components of being a trusted helper.</li><li>Practice building trust and rapport.</li></li></ul>"
						},
						{
							customClass: "col2", // optional. If a class should be added to the column div
							width: "300", //The width to give to the column
							customHTML: "<p>To review what you have learned today and plan your next steps, please consult the following resources:</p><ul><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li><li><a href='#'>TBD link</a></li></ul>"
						}
					]
				},
				audio:"audio/03_02_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have successfully completed the Building Trust and Rapport lesson. Please review the Learning Objectives and access any resources to reinforce the information covered in this lesson. To return to the Course Menu and select another lesson, please select the \"Return to Course Menu\" button.</p>"
					}
				]
			}
		},
		{
			id:"03_03_010",
			templateId: "cust",
			content:{
				title: "",
				customHTML:"<div class='fullScreen'><img src='images/CDF_collage_1.png' class='group1' style='display: none' alt='A collage of various VA employees performing their jobs with the VA logo in the center.' /><img src='images/CDF_collage_2.png' class='group2' style='display: none' alt='' /><img src='images/CDF_collage_3.png' class='group3' style='display: none' alt='' /><img src='images/CDF_collage_4.png' class='group4' style='display: none' alt='' /><img src='images/CDF_collage_5.png' class='group5' style='display: none' alt='' /><img src='images/CDF_collage_6.png' class='group6' style='display: none' alt='' /><img src='images/CDF_collage_7.png' class='group7' style='display: none' alt='' /><img src='images/CDF_collage_8.png' class='group8' style='display: none'alt='' /><img src='images/CDF_collage_9.png' class='group9' style='display: none' alt='' /><img src='images/CDF_collage_10.png' class='group10' style='display: none' alt='' /></div>",
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 2.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 5,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 7.5,
							contentId: ['.group4'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 10,
							contentId: ['.group5'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 12.5,
							contentId: ['.group6'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 15,
							contentId: ['.group7'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 17.5,
							contentId: ['.group8'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 20,
							contentId: ['.group9'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 22.5,
							contentId: ['.group10'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio:"audio/03_03_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Welcome to the lesson on Holding Helping Conversations. The foundation of your work as a CDF will be holding meaningful and productive conversations with VA employees to help them accomplish their career goals. This lesson will focus on Active Listening and Effective Responding, two of the most important skills needed to hold a helping conversation.</p>"
					},
					{
						time: 22.5,
						html: "<p>Please select the \"Next\" button to continue.</p>"
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
						html: "<p>Please take a moment to read the Lesson Overview and Learning Objectives. If you have questions about the content in this lesson, please consult the accompanying resources that are available under the \"Resources\" tab or on the final screen of the lesson. When you are finished reading, please select the \"Next\" button to continue.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><p>A helping conversation is a discussion between two or more people in which a particular problem or set of problems is addressed.</p></div><div class='group2 keyText' style='display: none;'><p>As a CDF, you should:</p><ul><li>Listen Actively</li><li>Respond Effectively</li></ul></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 17,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 26.5,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
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
						time: 17,
						html: "<p>So what is a helping conversation? Essentially, a helping conversation is any discussion that seeks to resolve a problem or issue.</p>"
					},
					{
						time: 26.5,
						html: "<p>To facilitate effective helping conversations, CDFs must engage in Active Listening and Effective Responding. You likely already apply these skills in your daily work at VA, but this lesson will help you further build these abilities in the context of career development. Please select the \"Next\" button to continue.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><p>People remember only <br/><strong>25%–50%<strong> <br/>of what they hear.</p><p>What do YOU remember when listening to others?<p></p>What do people remember when listening to YOU?</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 12.5,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_03_040",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's turn our attention to the first component of helping conversations: Active Listening. Active Listening is an essential component of effective communication in both your professional and personal life. </p>"
					},
					{
						time: 12.5,
						html: "<p>Some research indicates that most of us remember only 25% to 50% of what we hear. Think about a recent conversation you had—what do you remember from that conversation? What do you think the other person remembers about what you said? What implications do these facts and questions have for your work as a CDF?</p>"
					},
					{
						time: 35,
						html: "<p>They underscore the importance of building your listening skills so you can truly understand employees and provide them the best career development support possible. Please select the \"Next\" button to continue.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><p><atrong>Active Listening</strong> is a technique that involves not only listening to the words someone uses but also taking into account their tone of voice, their body language, and other non-verbal signs in order to gain a fuller understanding of what they are actually communicating.</p></div><div class='group2 keyText' style='display: none;'><div style='dispaly:block;'><span>Active Listening →</span><span><ul><li>A thorough understanding for the CDF</li><li>A feeling of trust, support, and ease for the employee</span></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 24,
							contentId: ['.group2'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_03_050",
				closedCaption: [
					{
						time: 0,
						html: "<p>In today's increasingly connected world, we communicate with others more than ever. However, listening effectively is much more complex than it may seem, and it is a skill that everyone can benefit from developing. Active Listening is a strategy to improve your understanding of an individual by paying attention and responding to both their verbal and non-verbal communication.</p>"
					},
					{
						time: 24,
						html: "<p>As a CDF, Active Listening helps you gain the fullest possible understanding of an employee's career experiences and goals. For employees who seek your guidance, Active Listening builds trust and creates an environment in which they feel heard, supported, and at ease. All of these factors help build a productive relationship in which you work with employees to help them accomplish their career goals.</p>"
					},
					{
						time: 51,
						html: "<p>Please select the \"Next\" button to learn about the core elements of Active Listening.</p>"
					}
				]
			}
		},
		{
			id:"03_03_060",
			templateId: "popUp",
			content:{
				title: "",
				customHTML:"<p class='actionText' style='z-index:500; margin-bottom:0;' >Select each phase to learn more, and then select \"Next\" to continue.</p><div class='cdFramework'><div style='position: absolute; left: 3px; top: 0px;'><a href='#trigger1' id='trigger1'><span>Self-Awareness</span></a></div><div style='position: absolute; right: 0px; top: 3px;'><a href='#trigger2' id='trigger2'><span>Attention to Verbal Communication</span></a></div><div style='position: absolute; right: 3px; bottom: 0px;'><a href='#trigger3' id='trigger3'><span>Attention to Non-Verbal Communication</span></a></div><div style='position: absolute; left: 0px; bottom: 3px;'><a href='#trigger4' id='trigger4'><span>Non-Judgment</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
						{
							popUpSize: {
								width: "400",
								height: "150"
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
									title:"Self-Awareness",
									text:"<ul><li>Listen to how you respond: the tone of your voice, the language you use, etc.</li><li>Take note of your thoughts and how you feel about what the employee is saying.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_03_060_1",
									closedCaption: [
										{
											time: 0,
											html: "<p>To be an effective CDF, you need to listen not only to VA employees but also to yourself. Paying attention to your own thoughts and responses can help you identify how you feel about the individual and what they are saying. This self-awareness will allow you to provide better support to all VA employees.</p>"
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
									title:"Attention to Verbal Communication",
									text:"<ul><li>Listen for:</li><ul><li>Explicit meaning (what someone says)</li><li>Implicit meaning (what someone implies)</li></ul></ul><ul><li>Identify:</li><ul><li>Experiences</li><li>Thoughts</li><li>Behaviors</li><li>Tone</li></ul></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_03_060_2",
									closedCaption: [
										{
											time: 0,
											html: "<p>Listening to what an employee has to say is a critical way to gather information and gain clarity about an individual. You should listen to what someone says directly, or the explicit meaning of their words. You should also pay attention to their implicit meaning, which means how they feel about or interpret a situation.</p>"
										},
										{
											time: 19,
											html: "<p>Whether listening for explicit or implicit meaning, you should seek to identify: A person's experiences, or what actually happened to them. An individual's thoughts, or what they think about their experiences. A person's behaviors, namely, what they do or don't do. An individual's tone, or the emotions in their voice.</p>"
										}
									]
								}
							}
						},
						{
							popUpSize: {
								width: "400",
								height: "180"
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
									title:"Attention to Non-Verbal Communication",
									text:"<p>Pay attention to:<ul><li>Body positioning or movement</li><li>Facial expressions</li><li>Attitude</li><li>Conflicting messages</li></ul></p>",
									image: [],
									altText:"",
									audioId:"audio/03_03_060_3",
									closedCaption: [
										{
											time: 0,
											html: "<p>Individuals also convey important messages with their non-verbal communication. An individual’s body language, facial expressions, and attitude can convey their feelings just as powerfully as their spoken words. Non-verbal communication may also convey a message that conflicts with what an individual says; in such cases, it is important to clarify how that employee actually feels.</p>"
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
									title:"Non-Judgment",
									text:"<ul><li>Do not interrupt with suggestions or counter-arguments.</li><li>Set aside your judgment and focus on the messages conveyed.</li><li>Assert your opinions and guidance respectfully.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_03_060_4",
									closedCaption: [
										{
											time: 0,
											html: "<p>Active Listening requires an open mind. Your purpose as a CDF is to create an environment that allows individuals to develop their own careers; you should not criticize an individual or insert your personal judgments into their career progression. Even if you disagree with an individual or have strong opinions, you should defer judgment and be open to different perspectives.</p>"
										},
										{
											time: 24.5,
											html: "<p>When you do offer your opinion, do so with respect. Always treat an individual the way you would want to be treated.</p>"
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
						html: "<p>Active Listening is much more than just hearing what someone has to say. It includes a few critical elements that should be used to develop your listening skills, allowing you to be a more impactful CDF. Please select each piece of the circle to learn more about each element of Active Listening.</p>"
					}
				]
			}
		},
		{
			id:"03_03_070",
			templateId: "kc",
			content:{
				title: "Select the option that best answers the question, and then select \"Submit.\"",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>What behaviors can you identify in Anthony's statement? Please select the <br/>best answer, and then select the \"Submit\" button.</p>",
									qType: "mc",
									choices: [
                    "A.	He took an online training course",
                    "B.	He updated his resume",
                    "C.	He applied for a job",
                    "D.	He did not get the job",
                    "E.	A, B, and C",
                    "F.	All of the above"
									],
									answers: [0,0,0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>The behaviors evident in Anthony's response are that he took a course, updated his resume, and applied for a job.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_03_070",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's apply some Active Listening skills to a scenario you might face while working with VA employees. On the following screens, please read the description of an interaction with an employee, and then answer the question that follows. Select the \"Submit\" button when you’re ready to begin.</p>"
					},
					{
						time: 10,
						html: "<p>Anthony comes to speak with you and slumps down in his chair, crosses his arms, and sighs loudly.</p>"
					},
					{
						time: 20,
						html: "<p>Two weeks ago I took an online training course about how to format my resume. I then updated my resume and applied for a job but have not been invited for an interview. Things never work out for me—I should just give up.</p>"
					},
					{
						time: 30,
						html: "<p>Select the option that best answers the question, and then select the \"Submit\" button. When you’re finished, select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_080",
			templateId: "kc",
			content:{
				title: "Select the option that best answers the question, and then select \"Submit.\"",
				image: "images/CDF_01_01_050.png",
				altText: "Course mentor speaking to a second female employee",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>What thoughts or feelings can you identify in Anthony's statement and body language? <br/>Check all options that apply, and then select the \"Submit\" button.</p>",
									qType: "mr",
									choices: [
                    "A.	Anthony feels he is taking steps to advance in his career",
                    "B.	Anthony is confident he has the skills necessary to do this job",
                    "C.	Anthony is optimistic he will get the job ",
                    "D.	Anthony feels he often encounters obstacles",
                    "E.	Anthony feels frustrated"
									],
									answers: [1,0,0,1,1],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>That is a feeling Anthony conveys in his statement and body language. He also conveys that he feels he is taking steps to advance his career and often encounters obstacles.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry,</span> Anthony does not convey these feelings in his statement and body language.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_03_080",
				closedCaption: [
					{
						time: 0,
						html: "<p>Please listen to the scenario one more time and answer another question.</p>"
					},
					{
						time: 10,
						html: "<p>Anthony comes to speak with you and slumps down in his chair, crosses his arms, and sighs loudly.</p>"
					},
					{
						time: 20,
						html: "<p>Two weeks ago I took an online training course about how to format my resume. I then updated my resume and applied for a job but have not been invited for an interview. Things never work out for me—I should just give up.</p>"
					},
					{
						time: 30,
						html: "<p>Select the option that best answers the question, and then select the \"Submit\" button. When you’re finished, select the \"Next\" button to continue.</p>"
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
				text:"<div class='group1 keyText' style='display: none;'><p><strong>Effective Responding</strong> increases and clarifies your understanding of an individual. It also makes that person feel heard and supported.</p></div>", // Anything that should be displayed on the whiteboard
				timedEvents: {
					events: [
						{
							time: 0,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/03_03_090",
				closedCaption: [
					{
						time: 0,
						html: "<p>The second component of having productive helping conversations is Effective Responding. Responding is the act of clarifying, communicating, and confirming a clear understanding of what an individual has said. Effective Responding increases your understanding of the individual with whom you are working, and it makes that individual feel heard and supported.</p>"
					},
					{
						time: 23,
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
				customHTML:"<p class='actionText' style='z-index:500; margin-bottom:0;' >Select each phase to learn more, and then select \"Next\" to continue.</p><div class='cdFramework'><div style='position: absolute; left: 3px; top: 0px;'><a href='#trigger1' id='trigger1'><span>Ask Powerful Questions</span></a></div><div style='position: absolute; right: 0px; top: 3px;'><a href='#trigger2' id='trigger2'><span>Reflect</span></a></div><div style='position: absolute; right: 3px; bottom: 0px;'><a href='#trigger3' id='trigger3'><span>Restate</span></a></div><div style='position: absolute; left: 0px; bottom: 3px;'><a href='#trigger4' id='trigger4'><span>Summarize</span></a></div></div>",
				clickAndLearn:{
					required: true, // whether user must click each pop-up in order to proceed (default defined in shellData.js)
					popUp:[
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
								trigger: "1",
								content:{
									layoutClass:"",
									title:"Ask Powerful Questions",
									text:"<ul><li>Wait until the individual pauses; do not interrupt!</li><li>Ask close-ended questions to test your understanding.</li><li>Ask open-ended questions to gather more detail and insight into experiences or feelings.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_03_100_1",
									closedCaption: [
										{
											time: 0,
											html: "<p>Asking powerful questions increases your understanding of an individual and helps you provide them with more effective career development support. Close-ended questions usually generate brief, factual answers such as \"yes\" and \"no.\" Open-ended questions are thought provoking and require more in-depth reflection. They tend to address an individual's knowledge, opinions, or feelings.</p>"
										},
										{
											time: 25,
											html: "<p>As a CDF, you should not be afraid to ask challenging questions. For a list of powerful questions, please review the handout under the \"Resources\" tab.</p>"
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
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "2",
								content:{
									layoutClass:"",
									title:"Reflect",
									text:"<ul><li>Mirror an individual's message and emotions.</li><li>Share your understanding of what an individual thinks and feels.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_03_100_2",
									closedCaption: [
										{
											time: 0,
											html: "<p>Reflecting both the content and feeling conveyed by an individual shows them that you were paying attention to their words and emotions. Sharing your understanding of what an individual is going through also helps you build empathy, and it makes them feel supported.</p>"
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
								parentPosition: "center",
								elementOfPosition: "#content"
							},
							tlgr: {
								trigger: "3",
								content:{
									layoutClass:"",
									title:"Restate",
									text:"<ul><li>Confirm your understanding.</li><li>Allow an individual to hear and assess your reiteration of what they have said.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_03_100_3",
									closedCaption: [
										{
											time: 0,
											html: "<p>Restating verbatim an individual's main thought or feeling both confirms and enhances your understanding of what they have said. Restating what an individual says also allows them to hear exactly what they are saying and lets them either validate or re-consider their comments.</p>"
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
									title:"Summarize",
									text:"<ul><li>Share your interpretation of an individual's thoughts and feelings.</li><li>Allow an individual to correct misunderstandings.</li><li>Clarify mutual responsibilities and next steps.</li></ul>",
									image: [],
									altText:"",
									audioId:"audio/03_03_100_4",
									closedCaption: [
										{
											time: 0,
											html: "<p>In your own words, summarize the main thoughts or feelings an individual has expressed. This allows you to process, not just recite, what an individual has said, which increases your understanding of their point of view. Hearing your interpretation of their experiences encourages an individual to consider what they have said and correct misunderstandings.</p>"
										},
										{
											time: 22.3,
											html: "<p>Summarizing also gives you the opportunity to clarify next steps and what each individual should do before your next meeting.</p>"
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
						html: "<p>Effective Responding entails a few critical skills that should be used during helping conversations, allowing you to be a more impactful CDF. Please select each piece of the circle to learn more about each element of Effective Responding. When you are finished reading, please select the \"Next\" button to continue.</p>"
					}
				]
			}
		},
		{
			id:"03_03_110",
			templateId: "kc",
			content:{
				title: "Read the employee's statement and the CDF's response. Then, select the method of Responding that best describes the CDF's reply and select \"Submit.\"",
				image: "images/CDF_03_03_110.png",
				altText: "Image with course mentor and and second employee. Employee dialog: “Everyone around me is successful at work and makes a lot of money. I want to get there too.” CDF dialog: “So, you feel that you are surrounded by successful people who earn a lot of money, and you would like to do the same.”",
				knowledgeCheck: {
					forms: [
						{
							questions: [
								{
									stimulus:"<p>What method of responding did the CDF use?</p>",
									qType: "mc",
									choices: [
                    "A)	Asking Powerful Questions",
                    "B)	Reflecting",
                    "C)	Restating",
                    "D)	Summarizing"
									],
									answers: [0,0,1,0],
									fbType: "pn",
									feedback: {
											positive: ["<p><span class='posFb'>You are correct!</span><p>The CDF's response is an example of Restating.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"],
									    	negative: ["<p><span class='negFb'>I'm sorry, that is incorrect.</span></p><p>The CDF's response is an example of Restating.</p><p class='navText'>Select <span class='actionText'>\"Next\"</span> to continue.</p>"]
									}
								}
							],
							buttonText: 'Submit'
						}
					]
				},
				audio: "audio/03_03_110",
				closedCaption: [
					{
						time: 0,
						html: "<p>Let's take a moment to apply what we have discussed about Effective Responding to scenarios you might face in your work as a CDF. Read the employee’s statement and the CDF's response. Then, select the method of Responding that best describes the CDF's reply and select \"Submit.\" When you are finished, please select the \"Next\" button to continue.</p>"
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
				altText: "Course mentor standing and holding her arm out to gesture toward the left side of the ",
				text:"<div class='group1' style='display: none;'><h2>Having completed all the lessons in this course, you should be able to:</h2><ul><li>Define the role of Career Development Facilitators (CDFs) at VA.</li><li>Define important career development theories.</li><li>Apply core career development best practices.</li><li>Identify and apply facilitation skills necessary for a CDF.</li><li>Identify ethical CDF behaviors.</li></ul></div><div class='group2' style='display: none;'><img src='images/CDF_05_01_010_1.png' alt='A computer screen displaying the MyCareer@VA homepage' style='float: none;' /></div><div class='group3' style='display: none;'><p><strong>Contact Us:</strong> VAMyCareer@va.gov</p></div>",
				timedEvents: {
					events: [
						{
							time: 10.2,
							contentId: ['.group1'],
							displayType: ['fadeIn'],
							speed: [400]
						},
						{
							time: 31.2,
							contentId: ['.group2','.group1'],
							displayType: ['fadeIn', 'addClass'],
							speed: [400, 'off']
						},
						{
							time: 58.8,
							contentId: ['.group3'],
							displayType: ['fadeIn'],
							speed: [400]
						}
					]
				},
				audio: "audio/05_01_010",
				closedCaption: [
					{
						time: 0,
						html: "<p>Congratulations! You have completed all of the lessons in this course and are now prepared to begin serving as a VA Career Development Facilitator (CDF)!</p>"
					},
					{
						time: 10.2,
						html: "<p>You should now be able to define the role of Career Development Facilitators (CDFs) at VA, define important career development theories, apply core career development best practices, identify and apply facilitation skills necessary for a CDF, and identify ethical CDF behaviors.</p>"
					},
					{
						time: 31.2,
						html: "<p>In the upcoming weeks and months, you will receive information from the MyCareer@VA team about ongoing educational opportunities, CDF events, and other program news.</p>"
					},
					{
						time: 43.5,
						html: "<p>In the meantime, though, we encourage you to log on to MyCareer@VA, explore the available resources, build relationships with other CDFs, and start working with VA employees to accomplish their career goals. If you have any questions, please email us at VAMyCareer@VA.gov. Please select the \"Next\" button to print a certificate for your records.</p>"
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
				text: "<p>Please provide us your feedback by completing a brief survey:</p><div class='surveyCert'><a href='https://adobeformscentral.com/?f=noNgaLkkNnqq*R76Q35NQg' id='survey' onclick='enableCert();' target='_blank'><span>Survey*</span></a><a href='#cert' id='cert' onclick='openCertificate(\"CD101\"); return false;' class='dim'><span>Certificate</span></a></div><p class='cl' style='margin-top:12px'><em>*Note: survey will open in a new window. Return to this window when you are finished with the survey.</em></p><p><a href='#' id='courseMenu' onclick='alert(\"This button does not work yet.\"); return false;' ><span>Return to Course Menu</span></a></p></div><script>makeRequired();</script>",
				audio:"audio/05_01_020",
				closedCaption: [
					{
						time: 0,
						html: "<p>Thank you in advance for all of the valuable support you will provide VA employees in your role as a CDF. We would greatly appreciate your feedback on this course. Please select the \"Survey\" button to complete a brief questionnaire. Once you complete the survey, you will be able to select the \"Certificate\" button to print a certificate of completion for your records.</p>"
					},
					{
						time: 23.4,
						html: "<p>To return to the Course Menu and review any lesson, please select the \"Return to Course Menu\" button. Thank you again for completing this course and helping VA employees achieve their career goals!</p>"
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
		}
	]
}
