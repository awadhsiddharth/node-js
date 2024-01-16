var http = require('http')
var dateTime = require('./module')

http.createServer( (req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("\n");
    res.end("Hey There!");
}).listen(8080);