// builtin events module
var events = require('events')

// all event properties and methods are an instance of EventEmitter object
// to access these prop and mtd, create EventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler
var myEventHandler = ()=>{
    console.log(`I hear a scream!`);
}