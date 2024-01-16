// module is sm as js library(set of fucntions)
// to include module use require() function alongwith name of module

// var http = require("http");
// // now we have access to http module

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hey there! Siddharth here');
//   }).listen(8080);


  // creating own module

  exports.myDateAndTime = (()=>{
    return Date();
  });



