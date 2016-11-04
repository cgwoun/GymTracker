var data = require("../userData.json");

exports.addData = function(req, res){
	console.log("adding new data!");
	var userName = req.params.uname;
	var catName = req.query.categ;
  //var catName = req.query.categ;
  	var actName = req.query.actName;

  // console.log(userName);
  // console.log(categ);
  //console.log(newActivity);
   var aNumber = 3;

   
  for(i=0; i<data.users.length; i++){
  	if(data.users[i].id === userName){
  		for(j=0; j<data.users[i].categories.length; j++){
  			if(data.users[i].categories[j].categoryName === catName){
  				for(k =0; k<data.users[i].categories[j].activities.length; k++)){
					if (activities[k]=== actName)
  					var temp = data.users[i].categories[j].activities[i].data;
  					temp.push(aNumber);
  					console.log(temp);
  					break;
  				}
  			}
  		}
  	}
  }

  data.users.push(newUser);
}