const bcrypt = require('bcrypt-nodejs')
module.exports = (sequelize, Sequelize) => {
    
    const model = sequelize.define('Student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return model
}
