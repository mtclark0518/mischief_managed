module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Location', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return model
}
