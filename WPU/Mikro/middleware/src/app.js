const express = require('express');
const app = express();

const route = require('./routes/mahasiswa');

app.use('/mahasiswa', route)

module.exports = app;