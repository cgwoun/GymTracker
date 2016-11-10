var data = require("../userData.json");

exports.addActivities = function(req, res) {

	// Your code goes here
  console.log("yay, addActivity just ran!");

  //var userName = req.query.name;
  var userName = req.query.myName;
  console.log(userName);

  var catName = req.query.categ;
  var actName = req.query.actName;

  var defaultArray = req.query.data;
  var defaultCategory = req.query.category;
  var defaultActivity = req.query.activity;
  var defaultLabelArray = req.query.dates;
  var newActivity =
  {
      "activityName": actName,
      "dates" : [],
      "data": []
  }

  // console.log(userName);
  // console.log(categ);
  //console.log(newActivity);

  for(i=0; i<data.users.length; i++){
    if(data.users[i].id === userName){
      for(j=0; j<data.users[i].categories.length; j++){
        if(data.users[i].categories[j].categoryName === catName){
          var temp = data.users[i].categories[j].activities;
          temp.push(newActivity);
          console.log(temp);
          break;
        }
      }
    }
  }
  console.log('break');


  // res.render('activity',{'defaultCategory':defaultCategory, 
  //           'defaultActivity':defaultActivity, 'defaultArray':defaultArray, 'name':name});
  res.render('activity',{'defaultCategory':defaultCategory, 
      'defaultActivity':defaultActivity, 'name':userName, 'defaultArray':defaultArray,'labelArray':defaultLabelArray});
}