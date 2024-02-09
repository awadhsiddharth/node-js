// (function (exports, require, module, __filename, __dirname){)


    console.log(__dirname);
    console.log(__filename);
// var x=;
var url = 'http:mylogger.io/log';

function log(msg){
    // Send an HTTP request 
    console.log(msg);
}

module.exports.log = log;
exports.log = log;
module.exports.endPoint = url;
// });
