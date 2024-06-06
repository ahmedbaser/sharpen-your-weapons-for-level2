const fs = require('fs');
const text = 'hello  level2';
console.log('i am number 1')
fs.readFile(__dirname + '/hello.txt', 'utf-8', (err, data) => {
    if(err) {
        throw new Error('Error! readig file!')
    }
    console.log(data);
});
fs.writeFile(__dirname + './write.txt', 'Hi Developer',
(err) => {
    if(err) {
        throw new Error('Error')
    }
});
console.log('I am number 2')