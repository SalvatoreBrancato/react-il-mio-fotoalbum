const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/image', imageController.index)
router.get('/image/:id', imageController.show)
router.put('/image/:id', imageController.update)
router.delete('/image/:id', imageController.destroy)
router.post('/image', imageController.create)

module.exports = router