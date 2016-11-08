var ctx;
var currentActivity="";
var daysArray = [1, 2, 3, 4];


$(document).ready(function()
{
	$("#addCategory").click(addACategory);
	$(".addActivity").click(addAnActivity);
	$(".activity").click(changedActivity);
	// $("#graph-button").click(addtoGraph);
	$("#addData-button").click(addData);

	var array=$("#array").text();
	var parsedArray=parseToArray(array);
	renderTable(parsedArray);
	var labelArray=createLabelArray(parsedArray);
	ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    data: {
        labels: labelArray,
        datasets: [{
            label: 'Progression',
            data: parsedArray
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
function renderTable(array){
	var iter=1;
	//console.log("in renderTable "+array)
	for(element in array){
		//console.log("element is "+ array[element]);
		var html="<tr><td>"+iter+"</td><td>"+array[element]+"</td></tr>";
		//console.log(html);
		$("#tableBody").append (html);
		//console.log($("#tableBody"));
		iter++;
	}

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
	//console.log("in renderTable "+array)
	for(element in array){
		labelArray.push(("Day"+iter))
		iter++;
	}
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

