const EventEmitter = require('events');

const event = new EventEmitter();

event.on('SayMyname', () =>{
    console.log('Your Name is Alok');
});

event.on('SayMyname', () =>{
    console.log('Your SurName is Jadhav');
});

event.on('SayMyname', () =>{
    console.log('Your City is Kolhapur');
})

event.emit('SayMyname');

event.emit('CheckPage', 200, 'OK');