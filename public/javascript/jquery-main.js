var data = require("../userData.json");
var ctx;
var currentActivity="";
var daysArray = [1, 2, 3, 4];


$(document).ready(function()
{
	$("#addCategory").click(addACategory);
	$(".addActivity").click(addAnActivity);
	$(".activity").click(changedActivity);
	$("#graph-button").click(addtoGraph);
	var array=$("#array").text();
	var parsedArray=parseToArray(array);
	renderTable(parsedArray);
	ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    data: {
        labels: ["Day1", "Day2", "Day3","Day4"],
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

function addtoGraph(event)
{
	if(currentActivity=="")
	 {
	 	alert("This button will let you add to the graph for this activity!");
	 }
	 else
	 {
	 	alert("This button will let you add to the graph for activity "+currentActivity);
	 }
}
function renderTable(array){
	var iter=1;
	console.log("in renderTable "+array)
	for(element in array){
		console.log("element is "+ array[element]);
		var html="<tr><td>"+iter+"</td><td>"+array[element]+"</td></tr>";
		console.log(html);
		$("#tableBody").append (html);
		console.log($("#tableBody"));
		iter++;
	}

}

function parseToArray(htmlText)
{
	var myArray=htmlText.split(",");
	for(var i=0; i<myArray.length; i++) { myArray[i] = +myArray[i]; } 
	return myArray
}

