const express = require('express');
const app = express.Router();
const produkControlls = require('./controllers/productControllers');

app.get('/', produkControlls.getAll);
app.get('/:id', produkControlls.getById);
app.post('/create-new', produkControlls.create);
app.patch('/update-produk/:id', produkControlls.update);
app.delete('/:id', produkControlls.deleteByid);

module.exports = app;