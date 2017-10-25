var mysql = require("mysql");
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '1234',
	database : 'sakila',
	charset : 'utf8_general_ci',
	timezone : 'local',
	connectTimeout : 10000});
connection.connect(function(err, rows, fields) {
  if (err) throw err;});

connection.query('SELECT count(film_id) from film', function(err, rows, fields) {
  if (err) throw err;

  console.log(rows[0]['count(film_id)']);
});

connection.ping(function(error){
	console.log("ping")
});
connection.end();