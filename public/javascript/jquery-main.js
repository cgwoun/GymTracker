var ctx;
var currentActivity="";


$(document).ready(function()
{
	$("#addCategory").click(addACategory);
	$(".addActivity").click(addAnActivity);
	$(".activity").click(changedActivity);
	$("#graph-button").click(addtoGraph);
	var array=$("#array").text();
	var parsedArray=parseToArray(array);
	ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    data: {
        labels: ["Day1", "Day2", "Day3","Day4"],
        datasets: [{
            label: '# of Votes',
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

function parseToArray(htmlText)
{
	var myArray=htmlText.split(",");
	for(var i=0; i<myArray.length; i++) { myArray[i] = +myArray[i]; } 
	return myArray
}
