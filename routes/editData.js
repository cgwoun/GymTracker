var data = require("../userData.json");

exports.editValue = function(req, res){
  console.log("editting new data!");
  var userName = req.query.myName;
  var actName = req.query.activity;
  var catName = req.query.category;
  var day = req.query.day;
  var edit = req.query.edit;
  var categories=req.query.categories;

   console.log("userName is "+userName);
   console.log(actName);
   console.log(catName);
   console.log(edit);
   console.log(categories);
  //var catName = req.query.categ;

  // console.log(userName);
  // console.log(categ);
  //console.log(newActivity);
  // var aNumber = 3;
  var editComplete=false;
  var newData;
  for(i=0; i<data.users.length; i++){
    if(data.users[i].id === userName){
      for(j=0; j<data.users[i].categories.length; j++){
        if(data.users[i].categories[j].categoryName === catName){
          console.log(data.users[i].categories[j].categoryName);
          console.log(data.users[i].categories[j].activities);
          for(k =0; k<data.users[i].categories[j].activities.length; k++){
            // console.log("the thing is ");
            // console.log(data.users[i].categories[j].activities[k])
            console.log("Inner loop, k is "+k);
            if(data.users[i].categories[j].activities[k].activityName==actName){
             console.log("In the if");
             var temp = data.users[i].categories[j].activities[k];
             var dates = data.users[i].categories[j].activities[k].dates;
             if(!(day<1||day>dates.length)){
                newData=editDay(day,edit,temp);
                //dates=data.users[i].categories[j].activities[k].dates;
             }
             else{
              console.log("Value of out range!")
              newData=temp.data;
             }
             editComplete=true;
            // console.log("ret was "+ret);
             break;
            }
            if(editComplete==true)
              break;
            
          }
          if(editComplete==true)
              break;
        }
        if(editComplete==true)
              break;
      }
      if(editComplete==true)
              break;
    }
  }
  console.log("categories is ");
  console.log(categories);

  for(var index in data.users){
    //so this takes the 0 1 2 index and looks for an id
    //console.log("user is "+ data.users[user].id);
    var id=data.users[index].id
    if((id==userName)&&id!=undefined){
      categories=data.users[index].categories;
      //console.log("categories is")
      //console.log(categories)
      break; 
    }
  }
 
  console.log("About to call render main!");
  console.log("newData is "+newData);
  console.log("labelArray is "+dates);
  res.render('main',{'categorie':categories, 'defaultCategory':catName, 
            'defaultActivity':actName, 'name':userName,'dataArray':newData,'labelArray':dates});
}

function editDay(day,edit,activity){
  console.log("in editDay");
  var dates=activity.dates;
  console.log("day is "+ day+ " edit is "+ edit + " activity is "+activity);
  for(i in dates){
    if(dates[i]==day){
      /*
      if(edit==-1){
       
        console.log("array was ");
        console.log(activity.data);
        var removed=activity.data.splice(i,1);
        activity.dates.splice(i,1);
        console.log("Just removed "+removed);
        return activity.data;
      }
      else{
        */
        console.log("array was ");
        console.log(activity.data);
        var editted=activity.data.splice(i,1,parseInt(edit));

        console.log("Editted to "+edit +"array is now");
        console.log(activity.data);
        return activity.data;
      //}
    }
  }

}