const { DataTypes, Model } = require('sequelize');
const sequelize = require('../mysqlModel');
const Priority = require('./priority');
const Status = require('./status');

class Task extends Model {}

Task.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    beginDate: {
        type: DataTypes.DATEONLY,
    },
    endDate: {
        type: DataTypes.DATEONLY,
    },
    duration: {
        type: DataTypes.BIGINT,
    },
    priorityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Priority,
            key: 'id'
        },
    },
    statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Status,
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    modelName: 'tasks',
});

Task.belongsTo(Priority);
Task.belongsTo(Status);

module.exports = Task;
