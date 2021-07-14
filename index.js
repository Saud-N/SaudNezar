const express = require('express');
const app = express(); // web server
const port = process.env.PORT || 8000;

app.use(express.static('build')) 

app.listen(port)