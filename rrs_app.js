// ==> working with readable and writable streams
const fs = require('fs');
const readStream = fs.createReadStream('./example/a1.txt', 'utf8');
const writeStream = fs.createWriteStream('./example/b1.txt');
readStream.on('data', (chunk) => {
    //read data from a1.txt and write to b1.txt
    writeStream.write(chunk);
});

//use stream to read large file which is literally impossible by readFile() method
//this is to read a chunk of the whole file at a time but not whole file at once
/*
const readStream1 = fs.createReadStream('largefile.txt', 'utf8');
readStream1.on('data', (chunk) => {
    console.log(chunk);
});*/
