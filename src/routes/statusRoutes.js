const express = require('express');
const statusController = require('../controllerrs/statusController');

const router = express.Router();

router.get('/', statusController.getStatus);

module.exports = router;
