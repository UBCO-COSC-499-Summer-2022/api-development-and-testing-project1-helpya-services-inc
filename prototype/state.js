var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res){
    res.cookie('cookie123','Getting the cookie');
    res.end('finishing');
});

app.get('/remove', function(req, res){
    res.clearCookie('cookie123');
});

app.listen(1234, function(){
    console.log('Starting ...');
});