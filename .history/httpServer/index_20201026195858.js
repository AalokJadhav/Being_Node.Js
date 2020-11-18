const http = require('http');

const  server = http.createServer((req, res) => {
res.end('Hello From The Other Side.....!');
})