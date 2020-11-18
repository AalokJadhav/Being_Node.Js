const EventEmitter = require('events');

const event = new EventEmitter();

event.on('SayMyname', () =>{
    console.log('Your Name is Alok Jadhav');
})

event.emit('SayMyname');