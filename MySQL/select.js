// var mysql = require('mysql')

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'username',
//     password: 'password',
//     database: "mydb"
// });

// select all
// con.connect((err) => {
//     if (err) {
//         throw err;
//         con.query("SELECT * FROM customers", (err, result, fields) => {
//             if (err) {
//                 throw err;
//                 console.log(result);
//             }
//         });
//     }
// });


// selecting columns

var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
});

con.connect((error) => {
    if (err) {
        throw err;
        con.query("SELECT name, address FROM cutomers", (error, result, fields) => {
            if (error) {
                throw err;
                console.log(result);
            }
        });
    }
});


// selecting fields object

var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
});

con.connect((error) => {
    if (err) {
        throw err;
        con.query("SELECT name, address FROM cutomers", (error, result, fields) => {
            if (error) {
                throw err;
                console.log(fields);
            }
        });
    }
});