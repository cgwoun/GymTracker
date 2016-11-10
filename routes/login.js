/*
 * GET main page.
 */
exports.view = function(req, res){

  // console.log("from login");
  // console.log(req.params);
  // console.log(req.query)	
  res.render('login',{});
};

