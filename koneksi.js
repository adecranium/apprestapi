var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_restapi',
    debug: false,
});

connection.connect(function(err) {
    if (err) {
        console.error('Error:- ' + err.stack);
        return;
    }
    console.log('Connected Id:- ' + connection.threadId);
});

// connection.end();

module.exports = connection;