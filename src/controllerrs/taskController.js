const Tasks = require('../database/models/tasks');
const Priority = require('../database/models/priority');
const Status = require('../database/models/status');

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
        const taskWithRelations = await Tasks.findOne({
            where: { id: newTask.id },
            include: [
                { model: Priority, attributes: ['id', 'name'] },
                { model: Status, attributes: ['id', 'name'] }
            ]
        });
        const response = {
            id: taskWithRelations.id,
            name: taskWithRelations.name,
            description: taskWithRelations.description,
            beginDate: taskWithRelations.beginDate,
            endDate: taskWithRelations.endDate,
            duration: taskWithRelations.duration,
            priority: taskWithRelations.priority,
            status: taskWithRelations.status
        };
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await Tasks.findAll(
            {
                include: [
                    {
                        model: Priority,
                        attributes: ['id', 'name']
                    },
                    {
                        model: Status,
                        attributes: ['id', 'name']
                    }
                ]
            }
        );
        res.status(201).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function deleteTask(req, res){
    try {
        const { id } = req.body;
        const existingTask = await Tasks.findOne({ where: { id: id } });
        await existingTask.destroy();
        res.status(200).json({ message: 'Tarea eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Hubo un error al eliminar la tarea'});
    }
}

module.exports = {
    createTask,
    getTasks,
    deleteTask,
};
