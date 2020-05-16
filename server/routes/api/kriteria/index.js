const express = require('express');
const router = express.Router();
const kriteriaController = require('./kriteria.controller')
const { schema } = require('./kriteria.validation')
const { protect, checkQuery, checkSchema, checkId, validationResult } = require('../../helpers')

router.get('/', checkQuery, kriteriaController.findAll)
router.get('/:id', checkId, kriteriaController.findById)
router.get('/page/:page', checkQuery, kriteriaController.findAll)
router.post('/', checkSchema(schema), validationResult, kriteriaController.insert)
router.put('/:id', checkId, kriteriaController.updateById)
router.delete('/:id', checkId, kriteriaController.removeById)

module.exports = router