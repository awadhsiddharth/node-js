const mysql = require('mysql2');

var conn = mysql.createConnection({
    // host: "127.0.0.1",
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    database: 'blog_app_apis'

});

conn.connect((err) => {
    if (err) {
        throw err;
        // console.log("Error found", err);
    }
    else {
        console.log("Connected!");
    }
});