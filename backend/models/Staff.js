module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Staff', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true        
        },
        firstName: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING,
        },
        position: {
            type: Sequelize.STRING,
        }
    });
    return model
}
