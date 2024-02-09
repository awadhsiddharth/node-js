const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http:mylogger.io/log';

function log(msg) {
    // Send an HTTP request 
    console.log(msg);
}

// Raise an event 
emitter.emit('messageLogged', { id: 1, url: 'https://cricbuzz.com' });

module.exports = log


