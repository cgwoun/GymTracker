
/*
 * GET main page.
 */

var data =require("../userData.json");

exports.view = function(req, res){
  //console.log(req);
  //console.log(req.url);
  var nameToShow	=	req.query["uname"];	
  console.log(data.users)
  //user is an iterator, 0 1 2 etc...
  var categories;
  for(var index in data.users){
  	//so this takes the 0 1 2 index and looks for an id
  	//console.log("user is "+ data.users[user].id);
  	var id=data.users[index].id
  	if(id==nameToShow&&id!=undefined){
  		categories=data.users[index].categories;
  		console.log("categories is")
  		console.log(categories)
  		break;
  	}
  	
  }
  res.render('main',{'categories':categories});

};
