// Sets up the linking between all the different files
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/routes')
const app = express();

const PORT = process.env.PORT || 3001;

