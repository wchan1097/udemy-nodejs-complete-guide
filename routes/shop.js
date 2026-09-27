const express = require('express');
const producerController = require('../controllers/product');

const router = express.Router();

router.get('/', producerController.getProducts);

module.exports = router;