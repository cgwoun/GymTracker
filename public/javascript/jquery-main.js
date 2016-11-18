var ctx;
var currentActivity="";


$(document).ready(function()
{	
	$("#addCategory").click(addACategory);
	$(".addActivity").click(addAnActivity);
	$(".activity").click(changedActivity);
	// $("#graph-button").click(addtoGraph);
	$("#addData-button").click(addData);
	$("#burgerBar").click(openNav);

	var array=$("#array").text();
	var dateArray=$("#labelArray").text();
	var parsedArray=parseToArray(array);
	var labelArray=createLabelArray(dateArray);
	renderTable(parsedArray,labelArray);

	ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    data: {
        labels: labelArray,
        datasets: [{
            label: 'Progression',
            data: parsedArray,
            backgroundColor:"rgba(75,192,192,0.75)",
            pointHoverBackgroundColor:"Red",
            spanGaps: true
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }




});

});



Chart.defaults.global.responsive = true;

/* Set the width of the side navigation to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function addACategory(event)
{
		alert("This will let you add an category!");
}   
	
function addAnActivity(event)
{
		alert("This will let you add a activity!");
} 

function changedActivity(event)
{
	 var whoCalledMe=$(this).text();
	 console.log("Who called me is '",whoCalledMe,"'");
	 $("#main .text").text(whoCalledMe); 
	 currentActivity=whoCalledMe;
}
function confirmDelete()
{
  var x = confirm("Are you sure you want to delete?");
  if (x)
      return true;
  else
    return false;
}

function confirmEdit()
{
  var x = confirm("Are you sure you want to edit this day?");
  if (x)
      return true;
  else
    return false;
}
function logout()
{
  window.location.href = "/";
}
	// function addtoGraph(event)
	// {
	// 	if(currentActivity=="")
	// 	 {
	// 	 	alert("This button will let you add to the graph for this activity!");
	// 	 }
	// 	 else
	// 	 {
	// 	 	alert("This button will let you add to the graph for activity "+currentActivity);
	// 	 }
	// }
function renderTable(array,labelArray){
	var iter=1;
	console.log("in renderTable "+array)

	for(element=0; element < array.length; element++){

		console.log("label is "+ labelArray[element]);
		console.log("element is "+ array[element]);
		label=String(labelArray[element])
		console.log("Label is "+label);
		console.log("Type is  " +typeof(label));
		//var html="<tr><td style='cursor:pointer;' onclick='setDate("+String(label)+")'>"+labelArray[element]+"</td><td>"+array[element]+"</td></tr>";
		var html="<tr><td style='cursor:pointer;' onclick='setDate("+'"'+labelArray[element]+'"'+")'>"+labelArray[element]+"</td><td>"+array[element]+"</td></tr>";


		// var html = "<tr><td>what up</td><td>"+array[element]+"</td></tr>";


	// for(element in array){
	// 	//console.log("element is "+ array[element]);
	// 	label=labelArray[element].slice(-1);
	//  	var html="<tr><td style='cursor:pointer;' onclick='setDate("+label+")'>"+label+"</td><td>"+array[element]+"</td></tr>";

		//console.log(html);
		$("#tableBody").append (html);
		//console.log($("#tableBody"));
		iter++;
	}

}
function setDate(label){
    var whoCalledMe=$(this);

 //   console.log(whoCalledMe);
 	text=whoCalledMe.text();
    console.log("whoCalled me text"+ text);
  //  console.log($("#editDay"));

    $("#editDay").val(label);
}
function parseToArray(htmlText)
{
	var myArray=htmlText.split(",");
	for(var i=0; i<myArray.length; i++) { myArray[i] = +myArray[i]; } 
	return myArray
}

function createLabelArray(array){
	var iter=1;
	var labelArray=[]
	var myArray	= array;
	var myArray=array.split(",");
	//console.log("in renderTable "+array)
	for(element = 0; element<myArray.length; element++){
		labelArray.push(myArray[element]);
		//console.log(myArray[element]);
		iter++;
	}
	console.log("Label array was "+labelArray);
	return labelArray
}
function addData(event){
	// var value = $("#numRep-Textfield").val();
	// console.log(value);
	// var pathArray = window.location.pathname.split( '/' );
	

	// var userName = pathArray[2];
	// var catName = pathArray[3];
 //  //var catName = req.query.categ;
 //   	pathArray[4].replace(/%20/g, " ");

 //  	var actName = pathArray[4];
	// console.log(userName);
	// console.log(catName);
	// console.log(actName);
 //  // console.log(userName);
 //  // console.log(categ);
 //  //console.log(newActivity);
 //   var aNumber = value;

  //  	var data = require("../userData.json");

  // for(i=0; i<data.users.length; i++){
  // 	if(data.users[i].id === userName){
  // 		for(j=0; j<data.users[i].categories.length; j++){
  // 			if(data.users[i].categories[j].categoryName === catName){
  // 				for(k =0; k<data.users[i].categories[j].activities.length; k++){
		// 			if (activities[k]=== actName)
  // 					var temp = data.users[i].categories[j].activities[i].data;
  // 					temp.push(aNumber);
  // 					console.log(temp);
  // 					break;
  // 				}
  // 			}
  // 		}
  // 	}
  // }
}

