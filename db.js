var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: 'noderestapi'
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log('connected!');
// });

connection.connect(function (err) {
  if(err){
      console.log("error occured while connecting");
  }
  else{
      console.log("connection created with Mysql successfully");
  }
});

module.exports = connection;
