var data = require("../userData.json");

exports.deleteActivities = function(req, res) {

	// Your code goes here
  console.log("yay, deleteActivity just ran!");

  var userName = req.query.myName;
  var actName = req.query.activity;
  var catName = req.query.category;
  var aNumber = req.query.number;
  var categories=req.query.categories;

  var defaultArray = req.query.data;
  var defaultCategory = req.query.category;
  var defaultActivity = req.query.activity;

  // var newActivity =
  // {
  //     "activityName": actName,
  //     "dates" : [],
  //     "data": []
  // }

  var deleteIndex;
  for(i=0; i<data.users.length; i++){
    if(data.users[i].id === userName){
      for(j=0; j<data.users[i].categories.length; j++){
        if(data.users[i].categories[j].categoryName === catName){
          var act = data.users[i].categories[j].activities;
          for(k=0; k<act.length; k++){
            if(act[k] == actName){
              deleteIndex = k;
              break;
            }
          }
        }
      }
    }
  }

  console.log(deleteIndex);

  // console.log('break');

  res.render('main',{'defaultCategory':defaultCategory, 
      'defaultActivity':defaultActivity, 'name':userName, 'defaultArray':defaultArray});
}