var data = require("../userData.json");

exports.addUsers = function(req, res){
	console.log("adding new user!");

  var userName = req.params.uname;
	var newUser = {
		"id": name,
		"password": pass,
		"categories": [
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
					"activities": []
				}

		]
	}

	data.users.push(newUser);
}