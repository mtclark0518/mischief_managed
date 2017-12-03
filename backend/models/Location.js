module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Location', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.STRING,
        }
    });
    return model
}
