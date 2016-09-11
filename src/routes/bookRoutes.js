var express = require('express');

var books = [{
    title: 'Sholay',
    genre: 'Classic',
    author: 'Sippy',
    read: false
}, {
    title: 'Deewar',
    genre: 'Action',
    author: 'Amit',
    read: false
}, {
    title: 'Barfi',
    genre: 'Comedy',
    author: 'Ranbeer',
    read: false
}];

var bookRouter = express.Router();

var router = function (nav) {
    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Hello title',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Hello title',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;

}


module.exports = router;