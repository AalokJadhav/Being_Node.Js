const http = require('http');

const  server = http.createServer((req, res) => {
    console.log(req.url);

    if(req.url == '/') {
        res.end('Hello From The Home Side.....!');
    } else if (req.url == 'About') {
        res.end('Hello From The AboutUs Side.....!');
    }
// res.end('Hello From The Other Side.....!');
});

server.listen(8000, '127.0.0.1', ( ) => {
    console.log('listening to the port 8000');
});