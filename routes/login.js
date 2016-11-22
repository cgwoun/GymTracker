var data =require("../userData.json");

/*
 * GET main page.
 */
exports.view = function(req, res){
  // console.log("from login");
  // console.log(req.params);
  // console.log(req.query)	
  if(data.grid)
  	console.log("yes grid");
  else
  	console.log("no grid");

  res.render('login',{});
};

