const fs = require('fs');
const http = require('http');

const  server = http.createServer((req, res) => {
    console.log(req.url);

    if(req.url == '/') {
        res.end('Hello From The Home Side.....!');
    } else if (req.url == '/about') {
        res.end('Hello From The AboutUs Side.....!');
    } else if (req.url == '/contact') {
        res.end('Hello From The ContactUS Side.....!');
    } else if (req.url == '/userapi') {
        fs.readFile(`${__dirname}/USerAPI/UserAPI,json`, 'utf-8', (err, data) => {
            console.log(data);
        })
        res.end('Hello From The UserAPI Side.....!');
    } else {
        res.writeHead(404, { "Content-Type": "text/html"});
        res.end ('<h1> 404 error... Page does not exit...!</h1>');
    }
// res.end('Hello From The Other Side.....!');
});

server.listen(8000, '127.0.0.1', ( ) => {
    console.log('listening to the port 8000');
});