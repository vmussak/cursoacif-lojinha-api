const Sequelize = require('sequelize');
const db = require('../../database/database');

const ClienteTipo = db.define(
    'clientetipo',
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true
        }
    },
    {
        tableName: 'clientetipo',
        schema: 'public',
        freezeTableName: false,
        timestamps: false
    }
);

module.exports = ClienteTipo;