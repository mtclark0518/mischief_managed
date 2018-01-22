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
        },
        // attributes that impact the interaction function  -- scaled between 0 - 1
        awareness: {
            type: Sequelize.INTEGER
        },
        severity: {
            type: Sequelize.INTEGER
        },
        biasCorruption: {
            type: Sequelize.INTEGER
        }
    });
    return model
}
