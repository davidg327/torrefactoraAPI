const Tasks = require('../database/models/tasks');

async function createTask(req, res) {
    const {name, description, beginDate, endDate, duration, priorityId, statusId} = req.body;
    try {
       const newTask = await Tasks.create({
            name,
            description,
            beginDate,
            endDate,
            duration,
            priorityId,
            statusId
        });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function getTasks(req, res) {
    try {
        const status = await Tasks.findAll();
        res.status(201).json(status);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    createTask,
    getTasks,
};
