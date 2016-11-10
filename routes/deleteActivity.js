var data = require("../userData.json");

exports.deleteActivities = function(req, res) {

  // Your code goes here
  console.log("yay, deleteActivity just ran!");

  //var userName = req.query.name;
  var userName = req.query.myName;
  //console.log(userName);

  var catName = req.query.category;
  //console.log(catName);

  var actName = req.query.activity;
  //console.log(actName);

  var defaultArray;
  var defaultCategory;
  var defaultActivity;
  var defaultLabelArray;

  var categories;
  for(var index in data.users){
    var id=data.users[index].id
    if((id==userName)&&id!=undefined){
      categories=data.users[index].categories;
      break;
    }
  }

  //Find and delete activity
  var v;
  var z;
  var exit=false;
  console.log("here1");
  for(v in categories){
    //console.log(categories[v].activities);
    for(z=0; z<categories[v].activities.length; z++){
      console.log(categories[v].activities[z]);
      if(categories[v].activities[z].activityName === actName){
        exit = true;
        break;
      }
    }
    if(exit){
      break;
    }
  }
  console.log("here");
  categories[v].activities.splice(z, 1);


  //Set default activity and default category to go back to main
  var exitFlag=false;
  for(var x in categories){
    for(var y in categories[x].activities){
    console.log('test');
    console.log(categories[x].activities[y].activityName);
      if(categories[x].categoryName != catName && categories[x].activities.length !== 0 && categories[x].activities[y].activityName != actName){
        defaultCategory = categories[x].categoryName;
        console.log(defaultCategory);
        defaultActivity = categories[x].activities[y].activityName;
        console.log(defaultActivity);
        defaultArray=categories[x].activities[y].data;
        console.log(defaultArray);
        defaultLabelArray=categories[x].activities[y].dates;
        console.log(defaultLabelArray);
        exitFlag=true;
        break;
      }
    }
    if(exitFlag)
      break;
  }

  console.log('break')

  res.render('main',{'categorie':categories, 'defaultCategory':defaultCategory, 'currentCategory':catName, 'currentActivity':actName,
      'defaultActivity':defaultActivity, 'name':userName, 'dataArray':defaultArray,'labelArray':defaultLabelArray});
}