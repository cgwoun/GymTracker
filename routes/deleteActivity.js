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

  var defaultArray;
  var defaultCategory;
  var defaultActivity;
  var defaultLabelArray;

  // console.log(userName);
  // console.log(categ);
  //console.log(newActivity);

  var categories;
  for(var index in data.users){
    var id=data.users[index].id
    if((id==userName)&&id!=undefined){
      categories=data.users[index].categories;
      break;
    }
  }

  //Set default activity and default category to go back to main
  var exitFlag;
  for(var x in categories){
    for(y in categories[x].activities){
    console.log('test');
    console.log(categories[x].activities[y].activityName);
      if(categories[x].activities.length !== 0 && categories[x].activities[y].activityName != actName){
        defaultCategory = categories[x].categoryName;
        console.log(defaultCategory);
        defaultActivity = categories[x].activities[x].activityName;
        console.log(defaultActivity);
        defaultArray=categories[x].activities[x].data;
        console.log(defaultArray);
        defaultLabelArray=categories[x].activities[x].dates;
        console.log(defaultLabelArray);
        exitFlag=true;
        break;
      }
    }
    if(exitFlag)
    break;
  }

  console.log('break')


  // res.render('activity',{'defaultCategory':defaultCategory, 
  //           'defaultActivity':defaultActivity, 'defaultArray':defaultArray, 'name':name});
  res.render('deleteActivity',{'defaultCategory':defaultCategory, 'currentCategory':catName, 'currentActivity':actName,
      'defaultActivity':defaultActivity, 'name':userName, 'defaultArray':defaultArray,'labelArray':defaultLabelArray});
}