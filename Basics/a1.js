const fs = require('fs')

// blocks here until file is read
const data = fs.readFileSync('./file2.txt')
console.log(data);

function moreWork(){
    console.log("Following Synchronous architecture");
}
moreWork();
// first data will be printed then method moreWork will be called

// non-blocking 
fs.readFile('./file2.txt', (err, data) => {
    if (err) throw err;
    console.log("Hey there!");
  });
  function moreWork(){
    console.log("Following ASynchronous architecture");
}
moreWork();
// 

