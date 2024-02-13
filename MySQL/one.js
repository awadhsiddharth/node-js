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


const { Buffer } = require('buffer');

// const {Buffer} : This line destructure the Buffer property from object exported by buffer module
//  and moreover it only extract specifice properties or methods from an object when importing them from module