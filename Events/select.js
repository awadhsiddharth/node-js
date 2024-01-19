var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: "mydb"
});

con.connect((err) => {
    if (err) {
        throw err;
        con.query("SELECT * FROM customers", (err, result, fields) => {
            if (err) {
                throw err;
                console.log(result);
            }
        });
    }
});