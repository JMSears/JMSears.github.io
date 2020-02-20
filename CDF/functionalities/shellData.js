var PPS = false; // Set to true to track pages when reviewing on PPS. Set to false all other times.
var isMobileLMS = false; // Set to true when the course is being delivered to the JKO mLearnning suite.
var isScreenReader = false;

var shell = { // hello
	courseVersion  : "VA_CDF_20140929",
	scormVersion   : "1.2",     //specify the SCORM version for the course (1.2 or 2004)
	classification : "",
	onMobileDevice : false,      //Shell will auto-detect whether it is on a mobile device, and will update this variable
	menuJSONName   : 'SCOPages', // 'name' property of the root JSON object in scoMenu.js, which should match the name of the JSON object variable
	div            : '#outerWrap',
	limits: {				// Shell will auto-size
		minWidth:  990,		// Minimum width to allow for the shell, after which scrollbars appear
		minHeight: 680,		// Minimum height to allow for the shell, after which scrollbars appear
		maxWidth:  970,		// Maximum width to allow for the shell
		maxHeight: 680,		// Maximum height to allow for the shell
		bottomEmpty: 20		// The number of pixels along the bottom that can be cut off (e.g., if there is a drop shadow, etc.)
	},
	storage: {
	    enable: true // set to true or false depending on if you want the course progress to be saved.
	},
	widthPadding: 40,
	header: {
		div: 'headerWrap',
		series: 'seriesTitle',
		course: 'courseTitle',
		height: 124,
		exitLink: 'exitLink'
	},
	clickableCover: {
		id: '#clickableCover'
	},
	footer: {
		div: 'footer', // content area of the footer
		height: 62, // The height of the footer div (id specified below)
		outerWrap: 'footerOuterWrap' // outermost div wrapping the footer
	},
	breadcrumb: {
		div: '#breadcrumbText'	// The id of the DOM element to write the breadcrumb to.
	},
	content: {
		wrap: '#contentWrap',
		contentDiv: 'mainFrame'		// The id of the div to write the page content to (used to be an iFrame)
	},
	page: {
		div: '#mainFrame',
		marginBottom: 10,
		marginLeft:   10, // Spacing between shell.page.div and shell.div
		marginRight:  10, // Spacing between shell.page.div and shell.div
		marginTop:    0
	},
	audio: {
		audioEnabled: true, // whether the course has audio
		playerDiv: '#audio_jplayer', // the id of the audio player div, which is invisible
		solution: 'html,flash', // which method (HTML or flash) to use. Tries first listed, and if not available, tries second.
		audioFlashPath: '../functionalities/jPlayer', // the relative path to the Jplayer.swf file for flash fallback
		audioFileType: 'mp3', // the supplied audio filetype. Can use a comma between to list multiples (m4a (.m4a), webmv (.webm), oga (.ogg), fla (.flv), wav (.wav))
		audioControlContainer: 'audio_container', // the id of the outermost container with the audio controls
		play: '#playPause', // the id of the play button
		pause: '#pause', // the id of the pause button
		rewind: '#rewind', // the id of the rewind button. Leave empty (i.e., '') if no rewind button
		volume: '#volLink', // the id of the volume button. Leave empty (i.e., '') if no volume button
		width: '1px', // the width of the audio controls
		height: '1px', // the height of the audio controls
		defaultVolume: 0.4, // the initial volume for the audio (ranges from 0 to 1)
		debug: false, // whether to show error alerts for debugging
		wmode: 'window', // Allows the wmode of the Flash fallback to be set. Note that audio players in Firefox 3.6 using the Flash solution will require that the {wmode:"window"} option is set. 
		currentTime: 0
	},
	video: {
		width:560,
		height:420,
		autoPlay: true
	},
	caption: {
		isEnabled: true,	// Whether there is an audio caption/transcript present
		isATab:    true,
		mainEl: 'ccDialog',	// The id of the DOM element that becomes the jQuery CC dialog
		textEl:   'ccText',	// The id of the DOM element to write the CC text
		btnId: 'ccLink', // The id of the button that opens and closes the caption
		name: 'Closed Captioning', // The title for the tooltip on the button
		width: 925,
		height: 118,
		minHeight: 60,
		fromBottom: 65,		// The distance the bottom of the CC dialog should be placed from the bottom of the shell when first opened
		leftMargin: 32,
		positionMy:"center bottom",
		positionAt:"center top",
		positionWRT: '#footerOuterWrap', // The element to position the CC dialog is relation to
		isTimedCC: true,				// Set to true if there is timed CC text (i.e., CC text designated at any time other than 0 in scoContent.js)
		data: new Array(),
		currPosition: 0,
		onSubPage: false,
		subPageNum: 0,
		onSubSubPage: false,
		subSubPageNum:0
	},
	timedContent: {
		isEnabled: true, // Set to true only if there are pages with timed content outside of timed CC text.
		data: new Array(),
		currPosition: 0,
		onSubPage: false,
		subPageNum: 0,
		onSubSubPage: false,
		subSubPageNum:0
	},
	pageNav: {
		backBtn: '#navBack',
		nextBtn: '#navNext'
	},
	courseNav: [
		{
			button: 'helpLink',
			url: '../resources/help.html',
			name: 'Help_Tutorial'
		},
		{
			button: 'glossaryLink',
			url: '../resources/glossary.html',
			name: 'Glossary'
		},
		{
			button: 'readLink',
			url: '../resources/furtherReading.html',
			name: 'Further_Reading'
		},
		{
			button: 'transcriptLink',
			url: '../resources/transcript.html',
			name: 'Transcript'
		},
		{
			button: 'certLink',
			url: '../resources/certificate.html',
			name: 'Certificate'
		},
		{
			button: 'contactLink',
			url: '../resources/contact.html',
			name: 'Contact_Us'
		}
	],
	progress: {
		type: 'both', // could be 'bar', 'text', or 'both'
		textDiv: 'lessonProgress',  // the id of the DOM element to write the X of Y text to
		barOuter: 'outerProgressWrap',	// the id of the outermost DOM element containing the progress bar (three nested elements are needed)
		barInner: 'innerProgressWrap',	// the id of the middle DOM element containing the progress bar (three nested elements are needed)
		barDiv: 'progress',				// the id of the innermost DOM element containing the progress bar (three nested elements are needed)
		barMinWidth: 5, // should match the width of the left chunk of the progress bar image
		barWidth: 123 // width of the progress bar itself
	},
	currPageNum: -1, // Used by shell.js and MenuObject.js to store the current page number
	currPageId: "1_1",  // Used to store the id of teh current page; initialize with the first page
	tracking: {
		pageCompletion: [],
		pagesVisited: [],	// Used by each SCO to track the pages in the SCO that have been visited
		pageScores: [],		// Used by the shell to track scores for any pages scoredActivities
		firstVisit: true // Used by FormQuiz to not mark page complete unless the question is answered, and to not disable next if a question has already been completed.
	},
	formQuiz: {
		fbId: "",
		numAttempts: 2 	//The default number of attempts for the questions	
	},
	popUp:{
		isEnabled: true,
		isRequired: false,
		width: 700,
		height: 450,
		minHeight: 450,
		maxHeight: 450,
		left:0,
		dialogPosition: "center",
		parentPosition: "center",
		elementOfPosition: "#mainFrame",
		lastFocusEl: ''
	},
	contentSwap: {
		isRequired: true,
		width: 400,
		height: 300
	},
	tabs: {
		isRequired: true
	},
	keyboardShortcuts: {
		isEnabled: true,
		keys: [
			{name: 'next', id: '#navNext', key: 'alt+ctrl+n'},
			{name: 'back', id: '#navBack', key: 'alt+ctrl+b'},
			{name: 'play', id: '#playPause', key: 'alt+ctrl+p'},
			{name: 'rewind', id: '#rewind', key: 'alt+ctrl+r'},
			{name: 'volume', id: '#volLink', key: 'alt+ctrl+m'},
			{name: 'menu', id: '#menuLink', key: 'm'},
			{name: 'cc', id: '#ccLink', key: 'alt+ctrl+c'},
			{name: 'print', id: '#printLink', key: 'alt+ctrl+o'}
		]
	},
	branchStartPages: {
		BSPArray: [],
		BSPInitArray: [],
		BSPReqArray: [],
		BSPReplayAudioArray: []
	}
}
var resources = {
	resLink: '#resourcesLink',
	resWrapEl: '#outerResWrap',
	focusEl: '#resContent',
	resClose: '#resClose'	
}

var menu = {
	alwaysOpen: false,
	addDividers: false,
	addBranchImage: false,
	forceInOrder: false,							// Whether pages in the menu should be disabled until visited, forcing learners to go in order
	scrollDiv: 'menuScrollWrap',
	toggleButtons: ['#menuLink','#menuClose'],
	closeMenuElements: [shell.header.div, shell.content.wrap], // DOM elements that, when clicked, should trigger the menu to close (not including the menu close button)
	menuBtn: "#menuLink", 						// The id of the menu button li.
	menuClose: "#menuClose",                     // The id of the menu CLOSE button.   
	menuWrapEl: 'outerMenuWrap',                 // The id of the menu wrapper
	menuOnClass: 'on',                           // The class to turn the menu on
	menuOffClass: 'off',                         // The class to turn the menu off
	menuContentEl: 'menu',                       // The id of the menu content div
	menuListId: 'menuList',                      // The id to give to the outermost menu ul. Needed for currentHighlight to work in IE
	currentClass: 'current',                     // The class to give the current section/page
	branchOpenClass: 'open',                     // The class to give a section header that is open
	branchClosedClass: 'closed',                 // The class to give to a section header that is closed
	branchOpenImage: '../images/menu_minus.png', // open branch image
	branchClosedImage: '../images/menu_plus.png',// closed branch image
	branchImageWidth: '11',                      // branch image width
	branchImageHeight: '10',                     // branch image height
	branchExpandableClass: '',         // The class to give a section header that is expandable but closed
	branchNoExpandClass: 'noExpand',             // The class to give a section header that does not expand
	menuLevelTags: ['H3','H4','H5','H6'],        // The tags to use for each level of the menu
	topBranchName: 'Unit'                      // The heading to put in front of the top-level lists
};