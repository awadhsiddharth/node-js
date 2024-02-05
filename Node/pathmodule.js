const path = require('path');

const a = path.basename("C:\\temp\\myfile.html")
const a1 = path.dirname("C:\\temp\\myfile.html")
const a2 = path.extname("C:\\temp\\myfile.html")
console.log(a)
console.log(a1)
console.log(a2)

const a3 = path.extname(__filename)
console.log(__filename,a3);

