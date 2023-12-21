// path
const express = require('express');
const fs = require('fs');
const path = require('path');
// uses express
const app = express();

// creating port
const PORT = process.env.PORT || 3001
const db = require('./db/db.json')


// use express to create the route to file in the public folder and give it a route.
app.use(express.static('public'));


// express app to handle data and create req.body
app.use(express.json());


// package allow a unique path name to be created   
var uniqid = require('uniqid');

    // A new note is created, then add it to the db.json file which then 
    // returns to the user.

    app.get('api/notes', (req, res) => {
        let db = fs.readFileSync('./db/db.json', (err, data) => {
        if (error) throw error;
        let dbData = JSON.parse(data);
        res.json(dbData);
 });
})


 app.post('/api/notes', (req, res) => {

    // Create a new note
    const userNote = req.body 
    userNote.id = uniqid()
      // The note create
      id: uniqid(),

  // Push created note over to db.json file
  db.push(userNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(db));
  res.json(db);
}) 



        // When using Delete the api notes should get the param to delete a certain name in the note.
        app.delete('/api/notes/:id', (req, res) => {
            // getting the notes from the db.json file
               // removing the name of the file
            const deleteNotes  =  db.filter(item => item.id !== req.params.id);


            // Then write the new notes to the db.json file
            fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
            readFile.json(deleteNotes)

        })

    

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    })

        
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'notes,html'))
    })

    
    // * return the index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    })


    

// create to start server

app.listen(PORT, () => 
    console.log(`Server at localhost:${PORT}`))



