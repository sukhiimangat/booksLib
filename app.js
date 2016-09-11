'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views','./src/views');

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index',{title: 'Hello', list: ['a','b']});
});

app.listen(port, function (err) {
    console.log('App running on port ' + port);
});