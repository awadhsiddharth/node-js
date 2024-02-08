var http = require('http')
// const { hostname } = require('os')

const hostName = '127.0.0.1';
const portNumber = 5500;

const server = http.createServer((req, res) => {
    res.setStatus = 200;
    res.setHeader(`Content-Type`, "text/plain");
    res.end(`Hello from node server`)
});

server.listen(portNumber, hostName, () => {
    console.log(`Server is running at http://${hostName}:${portNumber}`);
});
