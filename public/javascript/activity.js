$(document).ready(function()
{	
	console.log("In activity.js!");
	console.log(document.referrer);
	var stringArray=document.referrer.split("/");
	//console.log(string);
	var whichMain=stringArray[3];
	console.log(whichMain);
	var html=$("#data").text();
	var backURL="/"+whichMain+html;
	console.log(backURL);
	var newHTML="<a id='backButton' href='"+backURL+"'><span class='glyphicon glyphicon-chevron-left'></span></a>"
	console.log(newHTML);
	var target=$("#back").append(newHTML);
	console.log(whichMain+html);
//	$("#back").append(html);
})
