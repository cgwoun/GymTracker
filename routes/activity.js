exports.view = function(req, res){
  var name = req.params.name;

  console.log(req.query);
  console.log(res);

  res.render('activity', {
  	'uname': name,
  });
};