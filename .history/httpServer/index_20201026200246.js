const http = require('http');

const  server = http.createServer((req, res) => {
res.end('Hello From The Other Side.....!');
});

server.listen(8000, '127.0.0.1', ( ) => {
    console.log('listening to the port 8000');
});