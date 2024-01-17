// to include the url module, use the require() method

var url = require("url")

var add = 'http;//localhost:8080/default.htm?year=2017&month=february'

// parse an address with url.parse() , it will return a URL obj with each part of address as properties
var q = url.parse(add,true)

console.log(q.host);    // returns 'localhost:8080'
console.log(q.pathname);  //returns '/default.htm'
console.log(q.search);   // returns '?year=2017&month=february'

var qdata = q.query;  // returns an object: {year: 2017, month:'february'}
console.log(qdata.month);   // returns 'february'