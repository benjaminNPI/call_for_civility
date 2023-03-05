const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

import Welcome from './src/pages/Welcome/index'

app.use(express.static('public'));


app.get('/welcome', (req, res) =>
    res.sendFile(path.join(__dirname, <Welcome />))
);