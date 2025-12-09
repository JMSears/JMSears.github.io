// JavaScript Document

/* **************************************************** */
/*                     N O T I C E                      */
/* **************************************************** */
/*                                                      */
/*            @author Instructus Media, Ltd.            */
/*              @copyright Copyright ©2018              */
/*     Instructus Media, Ltd., All rights reserved.     */
/*               info@instructusmedia.com               */
/*                                                      */
/*   Reuse of this code or any part of this interface   */
/*       other than to develop courseware for the       */
/*    United States Department of Veterans Affairs      */
/*               is strictly prohibited.                */
/*         Use permitted under special license.         */
/*  See the License.txt file for license information.   */
/*               This block must remain.                */
/*                                                      */
/*            Version 1.1.2.11  -  8/2/2018            */
/*                                                      */
/* **************************************************** */

document.write('<script type="text/javascript" src="'+path+'_template/js/jquery-1.12.4.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'_template/js/swfobject.js"></script>');
document.write('<script type="text/javascript" src="'+path+'_template/js/omnimediaplayer.js"></script>');
document.write('<script type="text/javascript" src="'+path+'_template/js/global.js"></script>');
document.write('<script type="text/javascript" src="'+path+'js/addOn_dynaResources.js"></script>');
document.write('<script type="text/javascript" src="'+path+'js/custom.js"></script>');

// **** Begin Course Configuration **** //

var view_mode = "production"; // test, production
var completionRequirements = 0; // 0 uses score to evaluate completion, 1 manually sets completion then submits score
var settingsOpt="1"; // 0 = off and 1 = on
var mainMenuDD = ""; // 0 = disable dropdown for all, 1 = disable dropdown if AT is on, leave blank to enable for all
var imgExt="png";

var titleProgram = ''; //~44 chars before wrap
var titleCourse = 'Article 26: Merit Promotion'; // ~67 chars before wrap

var lesson = new Array();
//	number of pages, assessment type, url of eol/eoc assessment page, lesson title
//	values for assessment type = none (no assessment), eol (end of lesson), eoc (end of course)
lesson[0] =  new Array( 2,"none","#","Lesson Entry");
lesson[1] =  new Array( 8,"none","#","What is Article 26?");
lesson[2] =  new Array( 3,"none","#","Career Ladder Plans at Work");
lesson[3] =  new Array( 8,"none","#","Advancement in a Career Ladder");
lesson[4] =  new Array( 1,"none","#","Competitive Procedures");
lesson[5] =  new Array( 1,"none","#","Lesson Exit");


// **** Begin Contact Configuration **** //

var contact = new Array();
// Role, Name, Title, Location, Email
contact[0] =  new Array("Content Manager","First Last","Education Program Specialist","City, State","VATMSHelp@va.gov");

var helpDesk_contact="<h3>VA TMS Help Desk</h3><p class=\'contactInfo\'>If you have technical problems while in the course, taking a self&ndash;exam, taking the evaluation or printing a certificate of completion, please contact the VA TMS Help Desk via email at: <a href=\'mailto:VATMSHelp@va.gov?subject=Article%2026:%20Merit%20Promotion\'>VATMSHelp@va.gov</a> or call Monday through Friday between 8:00 AM and 10:00 PM EST toll free at: <span style=\"white-space: nowrap;\">1(866) 496&ndash;0463</span>.</p>"


// **** Begin Flash Configuration **** //

var contentVersion = 11;
var flashWarningMsg = "Flash "+contentVersion+" or higher is required for this course. Please contact your local VA IT staff for assistance.";
var flashTestSuccess = "<p><strong>Required Version of Flash Player Found</strong><br />Flash Player "+contentVersion+" has been detected in this browser. You may proceed through the course.</p>"
var flashTestFail = "<p><strong>Required Version of Flash Player Not Found</strong><br />The Flash elements contained within this course require Flash  "+contentVersion+" or higher. Please contact your local IT staff for assistance. Continuing without the required Flash version will result in missing interactions or possibly entire testable content sections. </p>";
var setFlashWMode = "transparent";


// **** Begin Course Messages **** //

var disclaimerInt='You are now leaving the course titled: "'+titleCourse+'". The content manager of this online learning module does not exercise any editorial control over the information you may find at these locations. Such links are consistent with the stated purpose of this VA Internet/Intranet service.';

var disclaimerExt='You are now leaving the course titled: "'+titleCourse+'". The appearance of hyperlinks does not constitute endorsement by the Department of Veterans Affairs of this web site or the information, products or services contained therein. The content manager of this online learning module and VA do not exercise any editorial control over the information you may find at these locations. Such links are consistent with the stated purpose of this VA Internet/Intranet service.';

var footerInfoText=''; // renders message next to date modified

//var msgEOC1='<p>You have completed the online learning module titled: &ldquo;Article 32 - Clinical Research.&rdquo;</p> <p>Select the &ldquo;<a href=\"#\" onclick=\"exitCourse();\" onkeypress=\"exitCourse();\">Exit</a>&rdquo; link <em>(please use the Exit link provided in the course rather than the browser&rsquo;s close button)</em> and return to the Talent Management System (TMS) to access other content objects and/or download your completion certificate once all requirements have been met.</p>'; // no final exam

var msgEOC1='<p>If you have completed this lesson, you may exit now by selecting the "Exit" button located at the top of this screen. You will return to the Talent Management System (TMS) where you can access other content objects, download your completion certificate if all requirements have been met, or both.</p><p>Do not use your browser\'s Close button to exit the lesson or your progress may not be saved to the TMS.</p><p>If you would like to return to a topic in this lesson, select the "Menu" at the top of this screen.</p>'


var msgEOC2='<p>You have completed the online learning module titled: &ldquo;Article 26: Merit Promotion.&rdquo;</p> <p>Select the &ldquo;<a href=\"#\" onclick=\"exitCourse();\" onkeypress=\"exitCourse();\">Exit</a>&rdquo; link <em>(please use the Exit link provided in the course rather than the browser&rsquo;s close button)</em> and return to the Talent Management System (TMS) to access other content objects and/or download your completion certificate once all requirements have been met.</p>'; // with final exam (EOC or EOL)

var pluginsLink="<div class='plugins'>Some files on this page require a plugin or viewer.<br/>These are available as free downloads.  <a href=\'http://www.va.gov/osdbu/help/viewers.asp\' target=\'_blank\' onclick=\"disclaimer(\'int\');\">View Plugin & Viewer List</a></div>";
