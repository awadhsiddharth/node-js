// Node Mysql
// npm install mysql

// to include mysql module ,use below code

var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password'
});

con.connect((error) => {
    if (error) {
        throw error;
        console.log("Database Connected Successfully!");
    }
    else {
        console.log("Connection not established!");
    }
})