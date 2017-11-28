module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('House', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    });
    return model
}
