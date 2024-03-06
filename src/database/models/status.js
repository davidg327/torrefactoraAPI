const { DataTypes } = require('sequelize');
const sequelize = require('../mysqlModel');

const Priority = sequelize.define('status', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Priority;
