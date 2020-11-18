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

event.on('CheckPage', (sc, msg) => {
    console.log(`Status Code Is ${sc} and page is ${msg}`);
})
event.emit('CheckPage', 200, 'OK');