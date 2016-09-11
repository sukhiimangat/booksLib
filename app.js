'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

var nav = [{
                link: '/Books',
                Text: 'Book'
            }, {
                link: '/Authors',
                Text: 'Author'
            }];
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');
app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello title',
        nav: [{
            link: '/Books',
            Text: 'Books'
        }, {
            link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.listen(port, function (err) {
    console.log('App running on port ' + port);
});