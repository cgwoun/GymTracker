var data =require("../userData.json");

exports.view = function(req, res){
  //console.log(req);
  // var nameMenu = req.params.name;
  var nameToShow	=	req.query["uname"];	
  // console.log('nameMenu: ' + nameMenu);
  // console.log('nameToShow: ' + nameToShow);

  //console.log(data.users)
  //user is an iterator, 0 1 2 etc...
  var categories;
  for(var index in data.users){
  	//so this takes the 0 1 2 index and looks for an id
  	//console.log("user is "+ data.users[user].id);
  	var id=data.users[index].id
  	if((id==nameToShow)&&id!=undefined){
  		categories=data.users[index].categories;
  		//console.log("categories is")
  		//console.log(categories)
  		break;
  	}
  }

  //console.log(categories);
  // console.log(categories);
  // console.log('break');
  
  //Gets the default main page exercise and activity
  var defaultCategory;
  var defaultActivity;
  for(var x in categories){
  	if(categories[x].activities.length !== 0){
  		defaultCategory = categories[x].categoryName;
  		defaultActivity = categories[x].activities[0].activityName;
      defaultActivityArray=categories[x].activities[0].data;

  		break;
  	}
  }

  // console.log(defaultActivity);
  // console.log(defaultCategory);

  // var query = JSON.stringify(req.query);

  res.render('motivate',{'categorie':categories, 'defaultCategory':defaultCategory, 
  					'defaultActivity':defaultActivity, 'name':nameToShow,'dataArray':defaultActivityArray});
};
