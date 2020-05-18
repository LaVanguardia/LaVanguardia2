const  mysql = require('mysql');

const  connection = mysql.createConnection({
  host :  process.env.DB_HOST, // address of the server
  user :  process.env.DB_USER, // username
  password :  process.env.DB_PASSWORD,
  database :  process.env.DB_NAME,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
