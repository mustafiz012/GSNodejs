// ==>> Creating a Http Server using Http module
const http = require('http');
/*const server = http.createServer((req, res) => {
    //hello world for http server
    /!*res.write('Hello from server end');
    res.end();*!/

    if (req.url === '/') {
        res.write('Hello from server end');
    } else {
        res.write('404 not found');
    }
    res.end();
});

server.listen('3000');*/

// ==>> Serving static files with http and file system modules
const fs = require('fs');
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/xb_dancing.mp4');
    // res.writeHead(200, {'Content-type': 'text/html'});
    // res.writeHead(200, {'Content-type': 'application/json'});
    // res.writeHead(200, {'Content-type': 'image/jpeg'});
    res.writeHead(200, {'Content-type': 'video/mp4'});
    readStream.pipe(res);
}).listen(3000);