const express = require('express');
const taskController = require('../controllerrs/taskController');

const router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.post('/delete', taskController.deleteTask);

module.exports = router;
