const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const authHandler = require('../middlewares/authHandler');

router.get('/image', imageController.index)
router.get('/image/:id', imageController.show)
router.put('/image/:id', authHandler, imageController.update)
router.delete('/image/:id', authHandler, imageController.destroy)
router.post('/image', authHandler, imageController.create)

module.exports = router