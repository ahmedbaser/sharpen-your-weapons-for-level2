const fs = require('fs');

const output = fs.readFileSync(__dirname + '/hello.txt', 'utf-8');
console.log(output);

const text = 'Hello Level2';
console.log('I am number 1')
fs.writeFileSync('./write.txt', text);
console.log('I am number 2')