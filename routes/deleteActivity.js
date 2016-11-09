var data = require("../userData.json");

exports.deleteActivities = function(req, res) {

  // Your code goes here
  console.log("yay, deleteActivity just ran!");

  //var userName = req.query.name;
  var userName = req.params.name;
  console.log(userName);

  var catName = req.params.defaultCategory;
  console.log(catName);

  var actName = req.params.defaultActivity;
  console.log(actName);

  var defaultArray = req.query.data;
  var defaultCategory = req.query.category;
  var defaultActivity = req.query.activity;
  var defaultLabelArray = req.query.dates;

  // console.log(userName);
  // console.log(categ);
  //console.log(newActivity);

  // for(i=0; i<data.users.length; i++){
  //   if(data.users[i].id === userName){
  //     for(j=0; j<data.users[i].categories.length; j++){
  //       if(data.users[i].categories[j].categoryName === catName){
  //         var temp = data.users[i].categories[j].activities;
  //         temp.push(newActivity);
  //         console.log(temp);
  //         break;
  //       }
  //     }
  //   }
  // }
  console.log('break');


  // res.render('activity',{'defaultCategory':defaultCategory, 
  //           'defaultActivity':defaultActivity, 'defaultArray':defaultArray, 'name':name});
  res.render('deleteActivity',{'defaultCategory':defaultCategory, 'currentCategory':catName, 'currentActivity':actName,
      'defaultActivity':defaultActivity, 'name':userName, 'defaultArray':defaultArray,'labelArray':defaultLabelArray});
}