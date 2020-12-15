const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME || 'lojinha', //banco
    process.env.DATABASE_USER ||'postgres', //user
    process.env.DATABASE_PASS ||'teste123', //senha
    {
        host: process.env.DATABASE_HOST ||'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
);

module.exports = sequelize;