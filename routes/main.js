
/*
 * GET main page.
 */
var data =require("../userData.json");
var dict={}

exports.view = function(req, res){
  var nameToShow	=	req.params.uName;	

  for(var users in data){
  	var user = data[users][0];
  	console.log("user is");
  	console.log(user);
  	console.log("user categories is")
  	console.log(user.categories)
  	for(var category in user.categories){
  		console.log(category);
  	}
  }



  console.log("dict is")
//  console.log(dict)

  res.render('main');
};
