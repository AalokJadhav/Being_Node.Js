var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.get('/', function(req, res) {

});
var server = app.listen(3000, function() {

});


var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});
var server=app.listen(3000,function() {});