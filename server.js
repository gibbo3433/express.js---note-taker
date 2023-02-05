const express = require('express');
const path = require('path');
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// this gets the route for the notes.hmtl
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// this gets the route for the index.hmtl
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// This will grab all of the notes from the database
app.get("/api/notes", (req, res) => {
    // This will read the db.json file
    console.info(`${req.method} req recieved to get notes`);
    fs.readFile("./db/db.json","utf8",(err, data) => {
    if (err) {
        console.log(err);
    } else {
        // this function will parse the notes into a new const
        const dbNotes = JSON.parse(data);

        // this will display the notes for the client to see
        res.status(200).json(dbNotes);
    }
    });
});

//  This will post a new note to the database
app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    // Makes a new note if the tite and body has been included
    if (req.body) {
      const newNote = {
        // function that creates the ID for us
        id: uuidv4(),
        title,
        text,        
      };
  
      // this will read the current db.json data
      fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // this function will parse the notes into a new const
        const dbNotes = JSON.parse(data);
          // This will add our newNote into the dbNotes database
          dbNotes.push(newNote);
  
          // This will write over the old db file with our new db file which will contain our newly created note
          fs.writeFileSync("./db/db.json", JSON.stringify(dbNotes)); 
          
          // We can now display the updated db.json notes
          res.status(200).json(dbNotes);
        }
      });     
    }
});

app.delete("/api/notes/:id", (req, res) => {
  
    // this will read the current db.json data
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
        // Grab all of the current notes from the db.json file
        const dbNotes = JSON.parse(data);
        // Filter through the notes until the one with the same id as chosen is found
        const filterNotes = dbNotes.filter(
          (note) => note.id !== req.params.id
        );
  
        // This will write over the old db file with our new db file which will not contain our filtered out note
        fs.writeFileSync("./db/db.json", JSON.stringify(filterNotes));
        
        // We can now display the updated db.json notes
        res.status(200).json(filterNotes);
        }
    });
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

module.exports = app;
