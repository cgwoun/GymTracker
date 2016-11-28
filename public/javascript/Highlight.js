function renderTable(array,labelArray){
	var iter=1;
	console.log("in renderTable "+array)

	for(element=0; element < array.length; element++){

		label=String(labelArray[element])
		console.log("Label is "+label);
		console.log("Type is  " +typeof(label));
		//var html="<tr><td style='cursor:pointer;' onclick='setDate("+String(label)+")'>"+labelArray[element]+"</td><td>"+array[element]+"</td></tr>";
		var html="<tr><td id='"+labelArray[element]+"' style='cursor:pointer;' onclick='setDate("+'"'+labelArray[element]+'"'+")'>"+labelArray[element]+"</td><td>"+array[element]+"</td></tr>";


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
var oldColor;
var oldHighlighted;
var alreadyHighlight=false;
function setDate(label){
    myString=String(label);
 	//idMe=$(myString);
 	idMe=document.getElementById(myString);
 	console.log(idMe);
 	//oldColor=idMe.style.backgroundColor;
 	

 	if(alreadyHighlight==false){
 		oldColor=idMe.style.backgroundColor;
 		oldHighlighted=label;
 		idMe.style.backgroundColor="yellow";
 		alreadyHighlight=true;
 	}
 	else{
 		//Set the old highlighted to it's original color
 		document.getElementById(oldHighlighted).style.backgroundColor=oldColor;
 		oldColor=idMe.style.backgroundColor;
 		oldHighlighted=label;
 		idMe.style.backgroundColor="yellow";

 	}

    $("#editDay").val(label);
}