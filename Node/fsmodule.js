const fs = require('fs')

fs.readFile('js.log','utf8',(err,data)=>{
    console.log(err,data);
})

console.log("Finished reading file");