
/*
 * GET home page.
 */
var data = require('../userData.json');
exports.view = function(req, res){
  console.log('hahahaha');
  res.render('index');
};