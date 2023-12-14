const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController')

router.post('/create', categoriesController.create)
router.delete('/:id', categoriesController.destroy)


module.exports = router