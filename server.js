// Sets up the linking between all the different files
const express = require('express');
const path = require('path');
const apiRouters = require('./routes/note')
const app = express();

const PORT = process.env.PORT || 3001;

// This will add the express function and tell it where to look when makeing notes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRouters);

// this gets the route for the notes.hmtl
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// this gets the route for the index.hmtl
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });