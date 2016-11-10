var data = require("../userData.json");

exports.addUsers = function(req, res){
	console.log("adding new user!");

  var userName = req.query.name;
  var pass = req.query.pass;
	var newUser = {
		"id": userName,
		"password": pass,
		"categories": [
				{
					"categoryName": "Abs",
					"activities": []
				},		
				{
					"categoryName": "Chest",
					"activities": []

				},
				{
					"categoryName": "Shoulders",
					"activities": []

				},
				{
					"categoryName": "Triceps",
					"activities": []

				},
				{
					"categoryName": "Back",
					"activities": []

				},
				{
					"categoryName": "Biceps",
					"activities": []

				},
				{
					"categoryName": "Cardio",
					"activities": []

				},
				{
					"categoryName": "Other",
					"activities": [
						{
							"activityName": "Sample Graph",
							"dates" : [1, 2, 3, 4, 5, 6],
							"data": [2, 0, 5, 0, 7, 14]
						}
					]
				}

		]
	}
	data.users.push(newUser);
    res.render('login');
}