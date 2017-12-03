module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Organization', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        type: Sequelize.STRING,
        
    });
    return model
}
