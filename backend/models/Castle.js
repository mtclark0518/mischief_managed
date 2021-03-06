module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Castle', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        block: {
            type: Sequelize.STRING
        }
    });
    return model
}
