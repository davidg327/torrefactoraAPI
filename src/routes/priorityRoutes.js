const express = require('express');
const priorityController = require('../controllerrs/priorityController');

const router = express.Router();

router.get('/', priorityController.getPriority);

module.exports = router;
