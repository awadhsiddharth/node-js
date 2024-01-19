var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
});

connection.connect((err) => {
    if (err) {
        throw err;
        var sql = "SELECT * FROM customers LIMIT 5";
        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
                console.log(result);
            }
        });
    }
});


// start from another position 3, return the next 5 records
// use OFFSET keyword

connection.connect((err) => {
    if (err) {
        throw err;
        var sql = "SELECT * FROM customers LIMIT 5 OFFSET 3";
        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
                console.log(result);
            }
        });
    }
});