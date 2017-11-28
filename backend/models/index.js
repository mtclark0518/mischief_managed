const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/mischiefmanaged')

const Castle = sequelize.import('./Castle')
const Location = sequelize.import('./Location')
const House = sequelize.import('./House')
const Student = sequelize.import('./Student')


Castle.hasMany(Location);
Castle.hasMany(House);
House.hasMany(Student);
Location.hasMany(Student);

House.hasOne(Location);

Location.belongsTo(Castle);
Student.belongsTo(House);
House.belongsTo(Castle);
Student.belongsTo(Location);

const db = {}
db.models = {
    House,
    Student,
    Location,
    Castle
}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db