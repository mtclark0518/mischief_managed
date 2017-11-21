const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/mischiefmanaged')

const container = sequelize.import('./container')

const db = {}
db.models = {
    container
}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db