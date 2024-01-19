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


// add primary key and make it autoincremented
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


// Create primary key on an existing table 
con.conn((err) => {
    if (err) {
        throw err;
        console.log("Connected!");
        var sql = "ALTER TABLE customers ADD COLUMN id int AUTO_INCREMENT PRIMARY KEY";
        con.query(sql, (err, result) => {
            if (err) {
                throw err;
                console.log("Table Created!!");
            }
        });
    }
});

// insert into table

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});


// inserting multiple records
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});