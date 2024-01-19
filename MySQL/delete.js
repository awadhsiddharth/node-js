var sql = require('mysql')

var connection = sql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
});

connection.connect((err) => {
    if (err) {
        throw err;
        var my_sql = "DELETE FROM customers WHERE address 'Mountain 21'";
        connection.query(my_sql, (err, result) => {
            if (err) {
                throw err;
                console.log("Number of records deleted: " + result.affectedRows);
            }
        });
    }
});