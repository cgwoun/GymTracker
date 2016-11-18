var data = require("../userData.json");

exports.addValue = function(req, res){
	console.log("adding new data!");
  var main = req.query.main;
	var userName = req.query.myName;
	var actName = req.query.activity;
  var catName = req.query.category;
  var aNumber = req.query.number;
  var categories=req.query.categories;


  var today;
  for(i=0; i<data.users.length; i++){
  	if(data.users[i].id === userName){
  		for(j=0; j<data.users[i].categories.length; j++){
  			if(data.users[i].categories[j].categoryName === catName){
  				for(k =0; k<data.users[i].categories[j].activities.length; k++){
            // console.log("the thing is ");
            // console.log(data.users[i].categories[j].activities[k])

            if(data.users[i].categories[j].activities[k].activityName==actName){
  					 var temp = data.users[i].categories[j].activities[k].data;
  					 temp.push(parseInt(aNumber));

             var date= data.users[i].categories[j].activities[k].dates;
             var dateLength=date.length;

             today = dateToString();
             console.log("The DATE: " + today);

             dateLength++;
             // date.push(dateLength);
             date.push(today);
  					 console.log(temp);
  					 break;
            }
  				}
  			}
  		}
  	}
  }

  for(var index in data.users){
    //so this takes the 0 1 2 index and looks for an id
    //console.log("user is "+ data.users[user].id);
    var id=data.users[index].id
    if((id==userName)&&id!=undefined){
      categories=data.users[index].categories;
      //console.log("categories is")
      //console.log(categories)
      break; 
    }
  }
  // console.log(categories);
  if(main === 'main'){
      res.render('main',{'categorie':categories, 'defaultCategory':catName, 
            'defaultActivity':actName, 'name':userName,'dataArray':temp,'labelArray':date});
  }
  else{
      res.render('main2',{'categorie':categories, 'defaultCategory':catName, 
            'defaultActivity':actName, 'name':userName,'dataArray':temp,'labelArray':date});
  }


  //Why is this line here?
  //data.users.push(newUser);
  
}

function dateToString(){

  var fullDate;
  var today = new Date();
  var year;
  var monthInteger, monthString;
  var date;

  year = today.getFullYear();
  monthInteger = today.getMonth();
  date = today.getDate();

  monthInteger++;

  // console.log(year + ' ' + ++monthInteger + ' ' + date);

  switch(monthInteger){
    case 1:
        monthString = "Jan";
        break;
    case 2:
        monthString = "Feb";
        break;
    case 3:
        monthString = "Mar";
        break;
    case 4:
        monthString = "Apr";
        break;
    case 5:
        monthString = "May";
        break;
    case 6:
        monthString = "Jun";
        break;
    case 7:
        monthString = "Jul";
        break;
    case 8:
        monthString = "Aug";
        break;
    case 9:
        monthString = "Sep";
        break;
    case 10:
        monthString = "Oct";
        break;
    case 11:
        monthString = "Nov";
        break;
    default:
        monthString = "Dec";
        break;
  }

  fullDate = monthString  + '. ' + date + ' ' + year;

  return fullDate;

}