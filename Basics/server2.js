var http = require('http');
var dateTime = require('./module')

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type" : "text/html"});
  res.write('Hello World!'); //write a response to the client
  res.write("The current date and time are : " +dateTime.myDateAndTime())
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080