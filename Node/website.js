const http = require('http')

const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    // console.log(req);
  
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>This is Rahul</h1> <p> Hey! Welcome to coding ki duniya</p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Rahul</h1> <p> Hey! Welcome to coding ki nayi duniya</p>');
    }
    else{
        // res.rahul();
        res.statusCode = 404
        res.end('<h1>Not Found!</h1> <p> Hey! This page was not found on the server</p>');
    }

})
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});