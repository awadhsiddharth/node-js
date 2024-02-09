// const path = require('path');

// var pathObject = path.parse(__filename);
// console.log(pathObject);

// const os = require('os');
// const { uptime } = require('process');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// var upTime = os.uptime();

// console.log('Total Memory : ' +totalMemory);
// console.log('Free Memory : ' +freeMemory);

// Template String
// ES6(ES2015) :ECMAScript 6

// console.log(`Total Memory : ${totalMemory}`);
// console.log(`Free Memory : ${freeMemory}`);
// console.log(`Up Time is : ${upTime}`);

// const fs = require('fs');

// Synchronous method
// const files = fs.readdirSync('./');
// console.log(files);


// Always prefer to use asynchronous method
// fs.readdir('$', (err, files) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log(`Result`, files);
//     }
// });

// EventEmitter is a class 
const EventEmitter = require('events')
// an instance of class
const emitter = new EventEmitter();

// The order is important
// register a listener
emitter.on('messageLogged', (arg) => { // e, event, eventArg
    console.log(`Listener called`, arg);
});

// to raise the events
// making a noise, produce- signal
// emitter.emit('messageLogged', { id: 1, url: 'http://cricbuzz.com' });

const Logger = require('./logger');
const logger = new Logger();
logger.on('msgLogged', (arg)=>{
    console.log(`Listener called`, arg);
});

logger.log('message')


