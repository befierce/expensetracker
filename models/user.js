const Sequelize = require('sequelize');

const sequelize = new Sequelize('practise', 'root', '10031998mysql@', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING, // Corrected data type to STRING
        primaryKey: true,
        allowNull: false
    },
    money: Sequelize.STRING,
    description: Sequelize.STRING,
    category: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = User;
