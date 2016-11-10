
/*
 * GET main page.
 */

var data =require("../userData.json");

exports.view = function(req, res){
  console.log("Called main!")
  var nameMenu = req.params.name;
  var actName = req.params.activityName;

  var categories;
  for(var index in data.users){
  	//so this takes the 0 1 2 index and looks for an id
  	//console.log("user is "+ data.users[user].id);
  	var id=data.users[index].id
  	if((id==nameMenu)&&id!=undefined){
  		categories=data.users[index].categories;
  		//console.log("categories is")
  		//console.log(categories)
  		break;
  	}
  }

  //Gets the default main page exercise and activity
  var currentActivity=req.params.defaultActivity
  var currentCategory=req.params.defaultCategory
  var defaultActivityArray=req.params.defaultActivityArray
  var defaultLabelArray=req.params.defaultLabelArray
  console.log("current activity is" +currentActivity);
  if(currentActivity ==null){

    console.log("no current activity!")
    var defaultCategory;
    var defaultActivity;
    for(var x in categories){
      if(categories[x].activities.length !== 0){
        currentCategory = categories[x];
        defaultActivity = categories[x].activities[0];
        defaultActivityArray=categories[x].activities[0].data;

        break;
      }
    }
    currentActivity=defaultActivity
    defaultActivity = categories[x].activities[0];
    defaultActivityArray=categories[x].activities[0].data;
  }
  else{
    console.log("else, " +currentActivity)
    console.log("currentCategory "+currentCategory)
    for(var x in categories){
      //console.log("categories["+x+"].categoryName is "+categories[x].categoryName)
      if(categories[x].categoryName==currentCategory){
        //console.log("matched!" );
       // console.log(categories[x].activities)
        for(var y in categories[x].activities){
        //  console.log(categories[x].activities[y]);
          if(categories[x].activities[y].activityName==currentActivity){
            defaultLabelArray=categories[x].activities[y].dates;
            defaultActivityArray=categories[x].activities[y].data
            console.log("found data for the currentActivity");
            console.log(defaultActivityArray);
            break;
          }
        }
      }
      if(defaultActivityArray==null){
        defaultActivityArray=[]
      }
      if(defaultLabelArray==null){
        defaultActivityArray=[]
      }
    }

  }
  
  // console.log(categories)
  res.render('main',{'categorie':categories, 'defaultCategory':currentCategory, 
  					'defaultActivity':currentActivity, 'name':nameMenu,'dataArray':defaultActivityArray,'labelArray':defaultLabelArray});
};


