var data =require("../userData.json");

exports.view = function(req, res){

  var name = req.params.name;

  //Gets the categories for the specific user
  var categories;
  for(var index in data.users){
  	var id=data.users[index].id
  	if((id==name)&&id!=undefined){
  		categories=data.users[index].categories;
  		break;
  	}
  }

  //Gets the default main page exercise and activity
  var defaultCategory;
  var defaultActivity;
  var defaultArray;
  for(var x in categories){
  	if(categories[x].activities.length !== 0){
  		defaultCategory = categories[x].categoryName;
  		defaultActivity = categories[x].activities[0].activityName;
      defaultArray = categories[x].activities[0].data;
      defaultLabelArray=categories[x].activities[0].dates;
  		break;
  	}
  }



  res.render('activity',{'defaultCategory':defaultCategory,
  					'defaultActivity':defaultActivity, 'defaultArray':defaultArray, 'name':name,'labelArray':defaultLabelArray});
};