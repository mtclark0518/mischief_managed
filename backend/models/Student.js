module.exports = (sequelize, Sequelize) => {
    
    const model = sequelize.define('Student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        points: {
            type: Sequelize.INTEGER
        }
    });
    return model
}
