module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Hogwarts', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true
        },
        connected: {
            type: Sequelize.INTEGER,
        }
    });
    return model
}