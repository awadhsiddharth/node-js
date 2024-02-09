// const EventEmitter = require('events');
// const emitter = new EventEmitter();

var url = 'http:mylogger.io/log';

class Logger extends EventEmitter {

    log(msg) {
        // Send an HTTP request 
        console.log(msg);
        // Raise an event 
        this.emit('messageLogged', { id: 1, url: 'https://cricbuzz.com' });

    }
}



module.exports = log


