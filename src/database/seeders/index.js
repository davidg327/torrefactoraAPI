const sequelize = require('../mysqlModel');
const Priority = require('../models/priority');
const Status = require('../models/status');
require('../../database/models/priority');
require('../../database/models/status');
require('../../database/models/tasks');

async function Seeders(){
    try {
        const dataStatus = [
            { id: 1, name: 'Iniciada'},
            { id: 2, name: 'En proceso' },
            { id: 3, name: 'Terminada' },
        ];
        const dataPriority = [
            { id: 1, name: 'Urgente'},
            { id: 2, name: 'Normal' },
            { id: 3, name: 'Bajo' },
        ];

        await sequelize.sync();

        await Promise.all(dataPriority.map(priority => Priority.create(priority)));
        await Promise.all(dataStatus.map(status => Status.create(status)));
    } catch (error) {
        console.error('Error al insertar datos quemados:', error);
    }
};

module.exports = Seeders;
