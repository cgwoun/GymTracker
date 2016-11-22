var data =require("../userData.json");
/*
 * GET home page.
 */
exports.view = function(req, res){
	data['grid'] = false;

	console.log('grid is false');
	res.render('index');
};

exports.viewGrid = function (req, res) {
	data['grid'] = true;

	console.log('grid is true');
	res.render('index');
};