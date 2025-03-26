const express = require('express');
const route = express.Router()
const Controllers = require('../controllers/mahasiswaController') //import semua controllers

route.get('/', Controllers.getAll)
route.get('/:id', Controllers.getById)
route.post('/', Controllers.postData)
route.put('/:id', Controllers.updateData)
route.delete('/:id', Controllers.deleteData)

module.exports = route;