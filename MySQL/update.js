var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
});

connection.connect((err) => {
    if (error) {
        throw err;
        var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address ='Valley 345'";
        connection.query(sql, (error, result) => {
            if (error) {
                throw error;
                console.log(result.affectedRows + "record(s) updated");
            }
        });
    }
});