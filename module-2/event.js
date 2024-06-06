const EventEmitter = require('node:events');
class MyBrithDay extends EventEmitter {};

const MyBrithDay1 = new MyBrithDay();

// creating event Listeners 
MyBrithDay1.on('brithday', () => {
    console.log('Happy Brithday');
})
MyBrithDay1.on('date', (bike) => {
    console.log(`I will send a ${bike} as a gift`)
})

// emitting an events 
MyBrithDay1.emit('brithday');
MyBrithDay1.emit('date', 'bike');
