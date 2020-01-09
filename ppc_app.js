// ==> Working with Pipes and Pipe Chaining
const fs = require('fs');
const zlib = require('zlib');   //compression module
/*const gzip = zlib.createGzip();
const readStream = fs.createReadStream('example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt.gz');

// readStream.pipe(writeStream);    //normal piping
readStream.pipe(gzip).pipe(writeStream);    //compressed piping*/

//uncompressed :: this is to extract the compressed file to plain text file
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

// readStream.pipe(writeStream);    //normal piping
readStream.pipe(gunzip).pipe(writeStream);    //compressed piping
