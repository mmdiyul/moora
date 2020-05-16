const express = require('express');
const router = express.Router();
const bobotKriteriaController = require('./bobotKriteria.controller')
const { schema } = require('./bobotKriteria.validation')
const { protect, checkQuery, checkSchema, checkId, validationResult } = require('../../helpers')

router.get('/', checkQuery, bobotKriteriaController.findAll)
router.get('/:id', checkId, bobotKriteriaController.findById)
router.get('/page/:page', checkQuery, bobotKriteriaController.findAll)
router.post('/', checkSchema(schema), validationResult, bobotKriteriaController.insert)
router.put('/:id', checkId, bobotKriteriaController.updateById)
router.delete('/:id', checkId, bobotKriteriaController.removeById)

module.exports = router