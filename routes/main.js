var data = require(../data.json);

exports.viewMain = function(req, res){
	//controller goes here
	var name = req.params.name;
	console.log('The main person\'s name is: ' + name);
	res.render('main', data);
}