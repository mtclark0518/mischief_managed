module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('user', {
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