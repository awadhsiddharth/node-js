var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
});

// con.conn((err) => {
//     if (err) {
//         throw err;
//         console.log("Connected!");
//         var sql = "CREATE TABLE customers (id INT, name VARCHAR(255),address VARCHAR(255))";
//         con.query(sql, (err, result) => {
//             if (err) {
//                 throw err;
//                 console.log("Table Created!!");
//             }
//         });
//     }
// });

con.conn((err) => {
    if (err) {
        throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),address VARCHAR(255))";
        con.query(sql, (err, result) => {
            if (err) {
                throw err;
                console.log("Table Created with ID as primary key!!");
            }
        });
    }
});
