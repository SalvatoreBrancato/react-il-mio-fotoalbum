const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/image', imageController.index)
router.post('/image', imageController.create)

module.exports = router