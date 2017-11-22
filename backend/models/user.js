module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('container', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true
        }
    });
    return model
}