const fs = require('fs')

// Non blocking IO model
// fs.readFile('js.log','utf8',(err,data)=>{
//     console.log(err,data);
// })

// console.log("Finished reading file");

// const a = fs.readFileSync('js.log')
// console.log(a);
// to read content of file,use toString() method
// console.log(a.toString());

// fs.writeFile("file2.txt","This is a data",()=>{
//     console.log("Written to the file");
// });

const b = fs.writeFileSync('file2.txt',"This is a data2");
console.log(b);


console.log("Finished reading file");