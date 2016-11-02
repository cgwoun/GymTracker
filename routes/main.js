
/*
 * GET main page.
 */

var data = require('../userData.json');

exports.view = function(req, res){
  res.render('main',data);
};

