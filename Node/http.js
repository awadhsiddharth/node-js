const http = require('http');
// const server = http.createServer();

// // server.on('connection', (socket) => {
// //     console.log(`New Connection..`)
// // });

// const portNumber = server.listen(3000);

// console.log(`Listening on port 3000...`);

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end();
    }
});

const portNumber = server.listen(3000);

console.log(`Listening on port 3000...`);