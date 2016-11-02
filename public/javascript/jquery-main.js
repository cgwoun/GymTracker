var ctx;
var currentActivity="";


$(document).ready(function()
{
	$("#addCategory").click(addACategory);
	$(".addActivity").click(addAnActivity);
	$(".activity").click(changedActivity);
	$("#graph-button").click(addtoGraph);
	ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    data: {
        labels: ["Red", "Blue", "Green"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3]
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

