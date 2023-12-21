// path
const express = require('express');


// uses express
const app = express();

// creating port
const PORT = process.env.PORT || 3001


// use express to create the route to file in the public folder and give it a route.
app.use(express.static('public'));

// path
const path = require('path');
const fs = require('fs');

// package allow a unique path name to be created   
var uniqid = require('uniqid');

module.exports = (app) => {

    app.get('api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, './db/db.json'));
    });

    // A new note is created, then add it to the db.json file which then 
    // returns to the user.

    app.post('api/notes', (req, res) => {
        let db = fs.readFileSync('./db/db.json');
        if (error) throw error;
        let dbData = JSON.parse(data);
        res.json(dbData);
 });
        // Create a new note
          const userNote = req.body 
          userNote.id = uniqid()
            // The note create
            id: uniqid(),
    
        // Push created note over to db.json file
        db.push(userNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json(db);



// express app to handle data and create req.body

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//27000
//require('./routes/apiRoutes.js')(app);
//require('./routes/htmlRoutes.js')(app);

        

        // When using Delete the api notes should get the param to delete a certain name in the note.
        app.delete('/api/notes/:id', (req, res) => {
            // getting the notes from the db.json file
            let db = JSON.parse(fs.readFileSync('./db/db.json'))

            // removing the name of the file

            let deleteNotes = db.filter(item => item.id !== req.params.id);

            // Then write the new notes to the db.json file
            fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
            res.json(deleteNotes);

        })
        // path
const path = require('path');
const fs = require('fs');

// package allow a unique path name to be created   
var uniqid = require('uniqid');

module.exports = (app) => {

    app.get('api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, './db/db.json'));
    });

    // A new note is created, then add it to the db.json file which then 
    // returns to the user.

    app.post('api/notes', (req, res) => {
        let db = fs.readFileSync('./db/db.json');
        if (error) throw error;
        let dbData = JSON.parse(data);
        res.json(dbData);
 });
        // Create a new note
          const userNote = req.body 
          userNote.id = uniqid()
            // The note create
            id: uniqid(),
    
        // Push created note over to db.json file
        db.push(userNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json(db);
        

        // When using Delete the api notes should get the param to delete a certain name in the note.
        app.delete('/api/notes/:id', (req, res) => {
            // getting the notes from the db.json file
            let db = JSON.parse(fs.readFileSync('./db/db.json'))

            // removing the name of the file

            let deleteNotes = db.filter(item => item.id !== req.params.id);

            // Then write the new notes to the db.json file
            fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
            res.json(deleteNotes);

        })

    ;

    

// create to start server

app.listen(PORT, () => {
    console.log(`Server available at localhost:${PORT}`);


})
}
}