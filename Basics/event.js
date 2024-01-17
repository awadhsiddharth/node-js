// event- every action on computer is an event
// like a connection is made or a file is opened

var fs = require('fs')
var rs = fs.createReadStream('./demofile.txt')
rs.on('open',()=>{
    console.log(`The file is open`);
});