var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/database.js', function (req, res) {

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'my_db'
	});

	connection.connect();

	connection.query('SELECT my_db.recipes.recipeID, my_db.recipes.postDate, my_db.recipes.title, my_db.recipes.image as recipeImage, my_db.recipes.description as recipeDescription, my_db.recipedetails.detailType, my_db.recipedetails.image, my_db.recipedetails.description FROM my_db.recipes JOIN my_db.recipedetails ON my_db.recipes.recipeID = my_db.recipedetails.recipeID;', function(err, rows, fields) {

		if (!err)
		{
			res.send(rows);
		}
		else
			console.log('Error while performing Query.');
	
	});

	connection.end();

});

app.listen(3000);