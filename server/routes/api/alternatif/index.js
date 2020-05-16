const express = require('express');
const router = express.Router();
const alternatifController = require('./alternatif.controller')
const { schema } = require('./alternatif.validation')
const { protect, checkQuery, checkSchema, checkId, validationResult } = require('../../helpers')

router.get('/', checkQuery, alternatifController.findAll)
router.get('/:id', checkId, alternatifController.findById)
router.get('/page/:page', checkQuery, alternatifController.findAll)
router.post('/', checkSchema(schema), validationResult, alternatifController.insert)
router.put('/:id', checkId, alternatifController.updateById)
router.delete('/:id', checkId, alternatifController.removeById)

module.exports = router