var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    username: 'yourusername',
    password: 'yourpassword',
    database: 'mydb'
});

connection.connect((err) => {
    if (error) {
        throw error;
        var sql = "SELECT uers.name AS uer, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
        connection.query(sql, (error, result) => {
            if (error) {
                throw error;
                console.log(result);
            }
        });
    }
});