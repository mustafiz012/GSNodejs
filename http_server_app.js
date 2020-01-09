// ==>> Creating a Http Server using Http module
const http = require('http');
const server = http.createServer((req, res) => {
    //hello world for http server
    /*res.write('Hello from server end');
    res.end();*/

    if (req.url === '/') {
        res.write('Hello from server end');
    } else {
        res.write('404 not found');
    }
    res.end();
});

server.listen('3000');