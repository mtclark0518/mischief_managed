const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/mischiefmanaged')

const Hogwarts = sequelize.import('./hogwarts')

const db = {}
db.models = {
    Hogwarts
}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db