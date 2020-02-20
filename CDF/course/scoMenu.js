var SCOData = {
    seriesTitle:'',
    courseTitle:'Career Development Facilitator',
    moduleTitle:'Module Title',
	SCOPrefix: 'CDF'
};
// Any SCO-specific files to be linked to the in resources library. Property name must match "name" field of shellData shell.courseNav object.
var SCOResources = {
	Transcript: "transcript.html"
}
/* Properties ***************************************************************************************************************

// MANDATORY PROPERTIES
id			- A UNIQUE id for the node. If the node is a page, this id must match exactly the id specified in the pages array in scoContent.js
name		- The title of the node, which will be displayed in the menu and on the next/back tooltips

// SOMETIMES MANDATORY PROPERTIES TO DEFINE SPECIFIC BEHAVIOR
isPage		- Must be present and set to false for any node that does not have a corresponding page in the scoContent.js file

// OPTIONAL PROPERTIES
branches		- An array of additional nodes that should be children of the current node.
hideFromMenu	- Whether to hide the node and all of it's descendents from the menu. Can be applied to a parent node or a single child node.
isNumbered		- Whether to dynamically add a number and topBranchName (e.g., "Lesson") in front of the page title, as defined in
			  	shellData.js, menu.topBranchName. By default, all nodes on the first level are numbered.

*****************************************************************************************************************************/

var SCOPages = {
    name    : "SCOPages", // This name must match the actual object var name
	isPage	: false,			// Always set to false for the root node
    path   	: "",			// The path to the HTML files referenced in scoContent.js. Must be blank or in a subfolder to work with the JS Template shell
							// for browser cross-domain security reasons
    isNumbered: false,
		branches : [
        {
			name 	: "Course Homepage",
			id    	: "00_00_000",
			isNumbered: false
		},
		{
			name 		: "Unit 1",
			id        	: "01",
			isNumbered: false,
			isPage		: false,
			branches   	: [
				{
					name 		: "Lesson 1 - Introduction",
					id        	: "01_01",
					isPage		: false,
					branches   	: [
						{
							name 	: "Title Screen",
							id    	: "01_01_000"
						},
						{
							name 	: "Welcome",
							id    	: "01_01_010"
						},
						{
							name  	: "Course Functionality",
							id      : "01_01_020"
						},
						{
							name   	: "Course Overview & Learning Objectives",
							id     	: "01_01_030"
						},
						{
							name  	: "Role of CDFs at VA",
							id     	: "01_01_040"
						},
						{
							name  	: "Importance of Career Development at VA",
							id     	: "01_01_050"
						},
						{
							name   	: "Conclusion",
							id      : "01_01_060"
						}
					]
				}
			]
        },
		{
			name 		: "Unit 2",
			id        	: "02",
			isNumbered: false,
			isPage		: false,
			branches   	: [
				{
					name 		: "Lesson 1 - Career Development Theory",
					id        	: "02_01",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "02_01_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "02_01_000"
								},
								{
									name 	: "Welcome",
									id    	: "02_01_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id      : "02_01_020"
								}
							]
						},
						{
							name 		: "The Importance of Career Development",
							id        	: "02_01_02",
							isPage		: false,
							branches   	: [
								{
									name   	: "Career Trends ",
									id     	: "02_01_030"
								},
								{
									name  	: "What Is Career Development?",
									id     	: "02_01_040"
								},
								{
									name  	: "Knowledge Check",
									id     	: "02_01_050"
								}
							]
						},
						{
							name 		: "Key Career Development Theories",
							id        	: "02_01_03",
							isPage		: false,
							branches   	: [
								{
									name   	: "History of Career Development",
									id      : "02_01_060"
								},
								{
									name  	: "Knowledge Check",
									id     	: "02_01_070"
								}
							]
						},
						{
							name 		: "Elements of Career Development",
							id        	: "02_01_04",
							isPage		: false,
							branches   	: [
								{
									name  	: "Successful Career Development Programs",
									id     	: "02_01_080"
								},
								{
									name  	: "Career Development at VA",
									id     	: "02_01_085"
								},
								{
									name  	: "Knowledge Check",
									id     	: "02_01_090"
								}
							]
						},
						{
							name 		: "VA's Career Development Foundation",
							id        	: "02_01_05",
							isPage		: false,
							branches   	: [
								{
									name  	: "Career Development System",
									id     	: "02_01_100"
								},
								{
									name  	: "Knowledge Check 1 of 2",
									id     	: "02_01_110"
								},
								{
									name  	: "Knowledge Check 2 of 2",
									id     	: "02_01_120"
								}
							]
						},
						{
							name 		: "MyCareer@VA Meets VA's Strategic Goals",
							id        	: "02_01_06",
							isPage		: false,
							branches   	: [
								{
									name  	: "Overview of MyCareer@VA",
									id     	: "02_01_130"
								},
								{
									name  	: "Bibliography",
									id     	: "02_01_135"
								},
								{
									name  	: "Conclusion",
									id     	: "02_01_140"
								}
							]
						}
					]
				},
				{
					name 		: "Lesson 2 - Career Development Practice",
					id        	: "02_02",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "02_02_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "02_02_000"
								},
								{
									name 	: "Welcome",
									id    	: "02_02_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id      : "02_02_020"
								},
								{
									name   	: "Career Development",
									id     	: "02_02_030"
								}
							]
						},
						{
							name 		: "The Career Planning Process",
							id        	: "02_02_02",
							isPage		: false,
							branches   	: [
								{
									name  	: "Process Overview",
									id     	: "02_02_040"
								},
								{
									name  	: "Scenario",
									id     	: "02_02_050"
								},
								{
									name   	: "Knowledge Check 1 of 4",
									id      : "02_02_060"
								},
								{
									name  	: "Knowledge Check 2 of 4",
									id     	: "02_02_070"
								},
								{
									name  	: "Knowledge Check 3 of 4",
									id     	: "02_02_080"
								},
								{
									name  	: "Knowledge Check 4 of 4",
									id     	: "02_02_090"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "02_02_03",
							isPage		: false,
							branches   	: [
								{
									name  	: "Conclusion",
									id     	: "02_02_110"
								}
							]
						}
					]
				},
				{
					name 		: "Lesson 3 - Diverse Populations",
					id        	: "02_03",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "02_03_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "02_03_000"
								},
								{
									name 	: "Welcome",
									id    	: "02_03_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id      : "02_03_020"
								}
							]
						},
						{
							name 		: "Diversity at VA",
							id        	: "02_03_02",
							isPage		: false,
							branches   	: [
								{
									name  	: "Employee Scenario 1",
									id     	: "02_03_030"
								},
								{
									name  	: "Employee Scenario 2",
									id     	: "02_03_040"
								},
								{
									name   	: "Employee Scenario 3",
									id      : "02_03_050"
								},
								{
									name  	: "Employee Scenario 4",
									id     	: "02_03_060"
								},
								{
									name  	: "Employee Scenario Summary",
									id     	: "02_03_070"
								},
								{
									name  	: "Defining Diversity",
									id     	: "02_03_080"
								},
								{
									name  	: "Federal Commitment to Diversity",
									id     	: "02_03_090"
								},
								{
									name  	: "The Role of CDFs",
									id     	: "02_03_100"
								}
							]
						},
						{
							name 		: "Working as a CDF",
							id        	: "02_03_03",
							isPage		: false,
							branches   	: [
								{
									name  	: "Understanding Yourself",
									id     	: "02_03_110"
								},
								{
									name  	: "Self-Assessment",
									id     	: "02_03_120"
								},
								{
									name   	: "Cultural Competence",
									id      : "02_03_130"
								},
								{
									name  	: "VA’s Diverse Populations",
									id     	: "02_03_140"
								},
								{
									name  	: "Understanding Individuals",
									id     	: "02_03_150"
								},
								{
									name  	: "Scenario Exercise 1",
									id     	: "02_03_160"
								},
								{
									name  	: "Scenario Exercise 2",
									id     	: "02_03_170"
								}
							]
						},
						{
							name 		: "Career Progression Barriers",
							id        	: "02_03_04",
							isPage		: false,
							branches   	: [
								{
									name  	: "Identifying Barriers",
									id     	: "02_03_180"
								},
								{
									name  	: "Types of Barriers",
									id     	: "02_03_190"
								},
								{
									name   	: "Overcoming Barriers",
									id      : "02_03_200"
								},
								{
									name  	: "Knowledge Check",
									id     	: "02_03_210"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "02_03_05",
							isPage		: false,
							branches   	: [
								{
									name  	: "Bibliography",
									id     	: "02_03_215"
								},
								{
									name  	: "Conclusion",
									id     	: "02_03_220"
								}
							]
						}
					]
				}
			]
		},
		{
			name 		: "Unit 3",
			id        	: "03",
			isNumbered: false,
			isPage		: false,
			branches   	: [
				{
					name 		: "Lesson 1 - Helping Skills - Attending",
					id        	: "03_01",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "03_01_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "03_01_000"
								},
								{
									name 	: "Welcome",
									id    	: "03_01_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id      : "03_01_020"
								}
							]
						},
						{
							name 		: "Helping Skills",
							id        	: "03_01_02",
							isPage		: false,
							branches   	: [
								{
									name   	: "Self-Reflection",
									id     	: "03_01_030"
								},
								{
									name  	: "Defining a Helping Relationship",
									id     	: "03_01_040"
								},
								{
									name  	: "Elements of a Helping Relationship",
									id     	: "03_01_050"
								},
								{
									name  	: "Knowledge Check",
									id     	: "03_01_060"
								}
							]
						},
						{
							name 		: "Attending",
							id        	: "03_01_03",
							isPage		: false,
							branches   	: [
								{
									name  	: "Defining Attending",
									id     	: "03_01_070"
								},
								{
									name  	: "SOLER Method",
									id     	: "03_01_080"
								},
								{
									name  	: "SOLER Considerations",
									id     	: "03_01_090"
								},
								{
									name  	: "SOLER Knowledge Checks",
									id     	: "03_01_100"
								},
								{
									name  	: "Knowledge Check 1 of 5",
									id     	: "03_01_105"
								},
								{
									name  	: "Knowledge Check 2 of 5",
									id     	: "03_01_110"
								},
								{
									name  	: "Knowledge Check 3 of 5",
									id     	: "03_01_120"
								},
								{
									name  	: "Knowledge Check 4 of 5",
									id     	: "03_01_130"
								},
								{
									name  	: "Knowledge Check 5 of 5",
									id     	: "03_01_140"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "03_01_04",
							isPage		: false,
							branches   	: [
								{
									name  	: "Bibliography",
									id     	: "03_01_145"
								},
								{
									name  	: "Conclusion",
									id     	: "03_01_150"
								}
							]
						}
					]
				},
				{
					name 		: "Lesson 2 - Building Trust and Rapport",
					id        	: "03_02",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "03_02_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "03_02_000"
								},
								{
									name  	: "Welcome",
									id    	: "03_02_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id    	: "03_02_020"
								}
							]
						},
						{
							name 		: "Importance of Building Trust and Rapport",
							id        	: "03_02_02",
							isPage		: false,
							branches   	: [
								{
									name  	: "Role of CDFs at VA",
									id      : "03_02_030"
								}
							]
						},
						{
							name 		: "Building Trust and Rapport",
							id        	: "03_02_03",
							isPage		: false,
							branches   	: [
								{
									name   	: "Knowledge Check",
									id     	: "03_02_040"
								}
							]
						},
						{
							name 		: "Practice Building Trust and Rapport",
							id        	: "03_02_04",
							isPage		: false,
							branches   	: [
								{
									name  	: "Best Practices for Building Rapport",
									id     	: "03_02_050"
								},
								{
									name  	: "Common Barriers to Building Rapport",
									id     	: "03_02_053"
								},
								{
									name  	: "Scenario Introduction",
									id     	: "03_02_056"
								},
								{
									name  	: "Practice Scenario 1",
									id     	: "03_02_060"
								},
								{
									name   	: "Practice Scenario 2",
									id      : "03_02_070"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "03_02_05",
							isPage		: false,
							branches   	: [
								{
									name  	: "Conclusion",
									id     	: "03_02_080"
								}
							]
						}
					]
				},
				{
					name 		: "Lesson 3 - Holding Helping Conversations",
					id        	: "03_03",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "03_03_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "03_03_000"
								},
								{
									name 	: "Welcome",
									id    	: "03_03_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id      : "03_03_020"
								}
							]
						},
						{
							name 		: "Helping Conversations",
							id        	: "03_03_02",
							isPage		: false,
							branches   	: [
								{
									name  	: "Defining Helping Conversations",
									id     	: "03_03_030"
								}
							]
						},
						{
							name 		: "Active Listening",
							id        	: "03_03_03",
							isPage		: false,
							branches   	: [
								{
									name  	: "Introduction",
									id     	: "03_03_040"
								},
								{
									name   	: "Defining Active Listening",
									id      : "03_03_050"
								},
								{
									name  	: "Elements of Active Listening",
									id     	: "03_03_060"
								},
								{
									name  	: "Knowledge Check Introduction",
									id     	: "03_03_070"
								},
								{
									name  	: "Knowledge Check 1 of 2",
									id     	: "03_03_075"
								},
								{
									name  	: "Knowledge Check 2 of 2",
									id     	: "03_03_080"
								}
							]
						},
						{
							name 		: "Responding",
							id        	: "03_03_04",
							isPage		: false,
							branches   	: [
								{
									name  	: "Defining Responding",
									id     	: "03_03_090"
								},
								{
									name  	: "Elements of Effective Responding",
									id     	: "03_03_100"
								},
           					    {
									name  	: "Knowledge Check 1 of 3",
									id     	: "03_03_110"
								},
								{
									name  	: "Knowledge Check 2 of 3",
									id     	: "03_03_120"
								},
								{
									name   	: "Knowledge Check 3 of 3",
									id      : "03_03_130"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "03_03_05",
							isPage		: false,
							branches   	: [
								{
									name  	: "Bibliography",
									id     	: "03_03_135"
								},
								{
									name  	: "Conclusion",
									id     	: "03_03_140"
								}
							]
						}
					]
				},
				{
					name 		: "Lesson 4 - Referral Acumen",
					id        	: "03_04",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "03_04_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "03_04_000"
								},
								{
									name 	: "Welcome",
									id    	: "03_04_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id      : "03_04_020"
								}
							]
						},
						{
							name 		: "Referral Acumen",
							id        	: "03_04_02",
							isPage		: false,
							branches   	: [
								{
									name 	: "Introduction",
									id    	: "03_04_030"
								},
								{
									name  	: "Referral Process",
									id      : "03_04_040"
								},
								{
									name  	: "Employee Commitment",
									id      : "03_04_050"
								},
								{
									name  	: "Career Development Refresher",
									id      : "03_04_060"
								},
								{
									name  	: "Knowledge Check 1 of 9",
									id      : "03_04_065"
								},
								{
									name  	: "Knowledge Check 2 of 9",
									id      : "03_04_070"
								},
								{
									name  	: "Knowledge Check 3 of 9",
									id      : "03_04_080"
								},
								{
									name  	: "Knowledge Check 4 of 9",
									id      : "03_04_090"
								},
								{
									name  	: "Knowledge Check 5 of 9",
									id      : "03_04_100"
								},
								{
									name  	: "Knowledge Check 6 of 9",
									id      : "03_04_110"
								},
								{
									name  	: "Knowledge Check 7 of 9",
									id      : "03_04_120"
								},
								{
									name  	: "Knowledge Check 8 of 9",
									id      : "03_04_130"
								},
								{
									name  	: "Knowledge Check 9 of 9",
									id      : "03_04_140"
								},
								{
									name  	: "Summary",
									id      : "03_04_150"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "03_04_03",
							isPage		: false,
							branches   	: [
								{
									name 	: "Conclusion",
									id    	: "03_04_160"
								}
							]
						}
					]
				},
				{
					name 		: "Lesson 5 - Building Coalitions and Raising Awareness",
					id        	: "03_05",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "03_05_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "03_05_000"
								},
								{
									name 	: "Welcome",
									id    	: "03_05_010"
								},
								{
									name  	: "Lesson Overview & Learning Objectives",
									id      : "03_05_020"
								}
							]
						},
						{
							name 		: "Building Coalitions",
							id        	: "03_05_02",
							isPage		: false,
							branches   	: [
								{
									name 	: "Introduction",
									id    	: "03_05_030"
								},
								{
									name 	: "Coalitions",
									id    	: "03_05_033"
								},
								{
									name 	: "Coalitions (Continued)",
									id    	: "03_05_036"
								},
								{
									name  	: "Best Practices",
									id      : "03_05_040"
								},
								{
									name  	: "Knowledge Check 1 of 2",
									id      : "03_05_050"
								},
								{
									name  	: "Knowledge Check 2 of 2",
									id      : "03_05_060"
								}
							]
						},
						{
							name 		: "Raising Awareness",
							id        	: "03_05_03",
							isPage		: false,
							branches   	: [
								{
									name  	: "Best Practices",
									id      : "03_05_070"
								},
								{
									name  	: "Best Practices (Continued)",
									id      : "03_05_075"
								},
								{
									name  	: "Knowledge Check",
									id      : "03_05_080"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "03_05_04",
							isPage		: false,
							branches   	: [
								{
									name 	: "Conclusion",
									id    	: "03_05_090"
								}
							]
						}
					]
				}
			]
		},
		{
			name 		: "Unit 4",
			id        	: "04",
			isNumbered: false,
			isPage		: false,
			branches   	: [
				{
					name 		: "Lesson 1 - Career Development Ethics",
					id        	: "04_01",
					isPage		: false,
					branches   	: [
						{
							name 		: "Introduction",
							id        	: "04_01_01",
							isPage		: false,
							branches   	: [
								{
									name 	: "Title Screen",
									id    	: "04_01_000"
								},
								{
									name 	: "Welcome",
									id    	: "04_01_010"
								},
								{
									name 	: "Lesson Overview & Learning Objectives",
									id    	: "04_01_020"
								}
							]
						},
						{
							name 		: "Ethics in Career Development",
							id        	: "04_01_02",
							isPage		: false,
							branches   	: [
								{
									name 	: "Possible Scenarios",
									id    	: "04_01_030"
								},
								{
									name 	: "Importance of Ethical Behavior",
									id    	: "04_01_040"
								}
							]
						},
						{
							name 		: "Codes of Ethics",
							id        	: "04_01_03",
							isPage		: false,
							branches   	: [
								{
									name 	: "I CARE",
									id    	: "04_01_050"
								},
								{
									name 	: "Intro to NCDA Code of Ethics",
									id    	: "04_01_060"
								},
								{
									name 	: "NCDA Guiding Principles",
									id    	: "04_01_070"
								},
								{
									name 	: "Knowledge Check",
									id    	: "04_01_080"
								}
							]
						},
						{
							name 		: "Solutions for Ethical Issues",
							id        	: "04_01_04",
							isPage		: false,
							branches   	: [
								{
									name 	: "NCDA Decision-Making Process",
									id    	: "04_01_090"
								},
								{
									name 	: "Knowledge Check 1",
									id    	: "04_01_100"
								},
								{
									name 	: "Knowledge Check 2",
									id    	: "04_01_110"
								},
								{
									name 	: "Knowledge Check 3",
									id    	: "04_01_120"
								},
								{
									name 	: "Knowledge Check 4",
									id    	: "04_01_130"
								},
								{
									name 	: "Knowledge Check 5",
									id    	: "04_01_140"
								}
							]
						},
						{
							name 		: "Conclusion",
							id        	: "04_01_05",
							isPage		: false,
							branches   	: [
								{
									name 	: "Bibliography",
									id    	: "04_01_145"
								},
								{
									name 	: "Conclusion",
									id    	: "04_01_150"
								}
							]
						}
					]
				}
			]
		},
		{
			name 		: "Unit 5",
			id        	: "05",
			isNumbered: false,
			isPage		: false,
			branches   	: [
				{
					name 		: "Lesson 1 - Conclusion",
					id        	: "05_01",
					isPage		: false,
					branches   	: [
						{
							name 	: "Title Screen",
							id    	: "05_01_000"
						},
						{
							name 	: "Welcome",
							id    	: "05_01_010"
						},
						{
							name 	: "Survey and Certificate",
							id    	: "05_01_020"
						}
					]
				}
			]
		}
    ]
}
