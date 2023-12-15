const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const authHandler = require('../middlewares/authHandler');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public");
    },
    filename: function(req, file, cb){
        cb(null,Date.now()+ "_"+ file.originalname );
    },
});

router.get('/image', imageController.index)
router.get('/image/:id', imageController.show)
router.put('/image/:id', authHandler, imageController.update)
router.delete('/image/:id', authHandler, imageController.destroy)
router.post('/image', multer({storage:storage}).single("image"), authHandler, imageController.create)

module.exports = router