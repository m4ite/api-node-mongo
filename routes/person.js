const express = require('express');
const router = express.Router();

const PersonController = require('../controller/PersonController')

router
    .get('/getPerson', PersonController.getAll)
    .get('/:id', PersonController.getById)

    .post('/', PersonController.createPerson)

    .patch('/:id', PersonController.updateById)

    .delete('/:id', PersonController.deleteById)


module.exports = router