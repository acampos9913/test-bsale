const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
    try {
        if (err) {
            console.error(err);
            return;
          } else {
            console.log('db is connected');
          }
    } catch (error) {
        console.log(error);
    }
  
});

module.exports = mysqlConnection;