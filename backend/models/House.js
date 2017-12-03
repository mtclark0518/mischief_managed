module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('House', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        founder: {
            type: Sequelize.STRING
        },
        points: {
            type: Sequelize.INTEGER
        },
        primaryColor: {
            type: Sequelize.STRING
        },
        secondaryColor: {
            type: Sequelize.STRING
        },
        mascot: {
            type: Sequelize.STRING
        }
    });
    return model
}
