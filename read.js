var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_restapi'

});
connection.query('SELECT * FROM distrik', function(err, results, fields) {
    if (err) {
        throw err;
    }

    console.log(results);
    // console.log(fields);
});

// connection.end();