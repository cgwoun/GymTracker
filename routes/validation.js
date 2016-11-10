var data =require("../userData.json");

exports.validate = function(req, res){
	console.log("Check user!");

  var userName = req.query.uname;
  var pass = req.query.psw;
  console.log(userName);
  console.log(pass);
  var falsePass = false;
  for(i=0; i<data.users.length; i++){
  	if(data.users[i].id === userName){
  		if (data.users[i].password === pass){
  			console.log('GOTCHA');

        var categories =  data.users[i].categories;
        console.log(categories);

        // for(j=0;j<data.users.length; j++){
        //   var id=data.users[j].id;
        //   console.log(id);

        //   if((id==userName)&&id!=undefined){
           // break;
       //   }
        //}

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
       res.render('motivate',{'categorie':categories, 'defaultCategory':defaultCategory, 
        'defaultActivity':defaultActivity, 'name':userName,'dataArray':defaultActivityArray,'labelArray':defaultLabelArray});  		
        return;
      }
    }
  }
  console.log("END");
  var status1 = 'Wrong password, re-enter it';
  var status2 = 'Username does not exist, check for typos.';

  if (falsePass){
    console.log('WRONG pass DUDE');
    res.render('login',{'status':status1});
  }
  else{
    console.log('WRONG username DUDE');
    res.render('login',{'status':status2});

  }

  //res.render('login');
}