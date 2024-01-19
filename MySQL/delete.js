var sql = require('mysql')

var connection = sql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
});

// delete a few records

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

// delete a table

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE customers";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });

  // drop only if exists

  con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
