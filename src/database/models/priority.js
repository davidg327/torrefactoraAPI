const { DataTypes } = require('sequelize');
const sequelize = require('../mysqlModel');

const Priority = sequelize.define('priorities', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Priority;
