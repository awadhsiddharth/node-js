var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password'
});

conn.connect((err){
    if (err) {
        throw err;
        console.log("Connected!");
        conn.query("CREATE DATABASE mydb", (err, result) => {
            if (err) {
                throw err;
                console.log("Database Connected!!");
            }
        });
    }
});