// event- every action on computer is an event
// like a connection is made or a file is opened

// object in node can fire events, like readStream 
// object fires events when opening and closing a file


var fs = require('fs')
var rs = fs.createReadStream('./demofile.txt')
rs.on('open',()=>{
    console.log(`The file is open`);
});