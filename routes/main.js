
/*
 * GET main page.
 */

var data =require("../userData.json");

exports.view = function(req, res){

  var nameMenu = req.params.name;

  var categories;
  for(var index in data.users){
  	//so this takes the 0 1 2 index and looks for an id
  	//console.log("user is "+ data.users[user].id);
  	var id=data.users[index].id
  	if((id==nameMenu || id==nameMenu)&&id!=undefined){
  		categories=data.users[index].categories;
  		//console.log("categories is")
  		//console.log(categories)
  		break;
  	}
  }

  //Gets the default main page exercise and activity
  var defaultCategory;
  var defaultActivity;
  for(var x in categories){
  	if(categories[x].activities.length !== 0){
  		defaultCategory = categories[x];
  		defaultActivity = categories[x].activities[0];
  		break;
  	}
  }

  res.render('main',{'categorie':categories, 'defaultCategory':defaultCategory, 
  					'defaultActivity':defaultActivity, 'name':nameMenu});
};


