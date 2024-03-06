const Status = require('../database/models/status');

async function getStatus(req, res) {
    try {
       const status = await Status.findAll();
        res.status(201).json(status);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getStatus
};
