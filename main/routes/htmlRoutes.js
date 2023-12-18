// creating path
const path = require('path');

module.exports = (app) => {

    // creating the routes and notes should return into a html file.
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // * return the index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};