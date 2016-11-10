var data =require("../userData.json");

exports.view = function(req, res){
  //console.log(req);
  // var nameMenu = req.params.name;
  var nameToShow	=	req.query["uname"];	
  // console.log('nameMenu: ' + nameMenu);
  // console.log('nameToShow: ' + nameToShow);


  var categories;
  for(var index in data.users){
  	var id=data.users[index].id
  	if((id==nameToShow)&&id!=undefined){
  		categories=data.users[index].categories;
  		break;
  	}
  }

  
  //Gets the default main page exercise and activity
  var defaultCategory;
  var defaultActivity;
  var defaultActivityArray;
  var defaultLabelArray;
  for(var x in categories){
  	if(categories[x].activities.length !== 0){
  		defaultCategory = categories[x].categoryName;
  		defaultActivity = categories[x].activities[0].activityName;
      defaultActivityArray=categories[x].activities[0].data;
      defaultLabelArray=categories[x].activities[0].dates;
  		break;
  	}
  }

  // console.log(defaultActivity);
  // console.log(defaultCategory);

  // var query = JSON.stringify(req.query);

  res.render('motivate',{'categorie':categories, 'defaultCategory':defaultCategory, 
  					'defaultActivity':defaultActivity, 'name':nameToShow,'dataArray':defaultActivityArray,'labelArray':defaultLabelArray});
};
