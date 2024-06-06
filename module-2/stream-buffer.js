const fs = require('fs');
// fs.readFile(__dirname + '/hello.txt', 'utf-8', (err, data) => {
//     if(err) {
//         throw new Error('Error! readig file!')
//     }

const { create } = require("domain");


//     fs.writeFile(__dirname + '/write.txt', data,(err) => {
//     if(err) {
//         throw new Error('Error')
//     }
// });
// });


// create a readable stream 

const readableStream = fs.createReadStream( 
    __dirname + '/hello.txt', 'utf-8'
)
//    create a writeable stream 

const writeableStream = fs.createWriteStream(__dirname + '/hello-write.txt')

readableStream.on('data', (data) => {
    console.log(data);


// writeableStream.write(data, (err) => {
//     if(err) {
//         throw new Error('Error');
//     }
// })
readableStream.pipe(writeableStream);

});  
readableStream.on('error', (err) => {
    throw new Error(err);
});

writeableStream.on('error', (err) => {
    throw new Error(err);
})

writeableStream.on('finish', () => {
    console.log('Finished writing file!')
})

