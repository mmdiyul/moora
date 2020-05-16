const express = require('express');
const router = express.Router();
const roleController = require('./role.controller')
const { schema } = require('./role.validation')
const { protect, checkQuery, checkSchema, checkId, validationResult } = require('../../helpers')

router.get('/', checkQuery, roleController.findAll)
router.get('/:id', checkId, roleController.findById)
router.get('/page/:page', checkQuery, roleController.findAll)
router.post('/', checkSchema(schema), validationResult, roleController.insert)
router.put('/:id', checkId, roleController.updateById)
router.delete('/:id', checkId, roleController.removeById)

module.exports = router