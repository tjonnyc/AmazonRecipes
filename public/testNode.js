console.log('called');

var mysql      = require('mysql');
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : 'password',
database : 'my_db'
});

connection.connect();

connection.query('SELECT * FROM TEST', function(err, rows, fields) {
if (!err)
	res.send(rows);
else
	console.log('Error while performing Query.');
});

connection.end();