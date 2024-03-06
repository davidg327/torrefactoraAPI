const Priority = require('../database/models/priority');

async function getPriority(req, res) {
    try {
        const priority = await Priority.findAll();
        res.status(201).json(priority);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getPriority
};
