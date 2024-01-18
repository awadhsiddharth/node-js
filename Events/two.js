// File upload- a module working with file uploads called "Formidable"
// can be downloaded from & installed using npm-npm install formidable

// var fromidable = require('formidable')

// step-1 : create an upload form 
// create a node file that writes an html form with upload field

var http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload">');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);


//Step-2 : Parse the uploaded file
