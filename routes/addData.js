var data = require("../userData.json");

exports.addValue = function(req, res){
	console.log("adding new data!");
	var userName = req.query.myName;
	var actName = req.query.activity;
  var catName = req.query.category;
  var aNumber = req.query.number;
  var categories=req.query.categories;

  // console.log("userName is "+userName);
  // console.log(actName);
  // console.log(catName);
  // console.log(aNumber);
  // console.log(categories);
  //var catName = req.query.categ;

  // console.log(userName);
  // console.log(categ);
  //console.log(newActivity);
  // var aNumber = 3;

   
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

  res.render('main',{'categorie':categories, 'defaultCategory':catName, 
            'defaultActivity':actName, 'name':userName,'dataArray':temp});

  //Why is this line here?
  //data.users.push(newUser);
}