const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://t@localhost:5432/mischiefmanaged')

const Castle = sequelize.import('./Castle')
const Subject = sequelize.import('./Subject')
const Location = sequelize.import('./Location')
const House = sequelize.import('./House')
const Student = sequelize.import('./Student')
const Staff = sequelize.import('./Staff')
const Organization = sequelize.import('./Organization')


//Castle Ownership Relaitionships
Castle.hasMany(House);
House.belongsTo(Castle);
Castle.hasMany(Subject);
Subject.belongsTo(Castle);
Castle.hasMany(Location);
Location.belongsTo(Castle);
Castle.hasMany(Staff);
Staff.belongsTo(Castle);
Castle.hasMany(Student);
Student.belongsTo(Castle);

//House Ownership Relationships
House.hasOne(Location);
Location.belongsTo(House);
House.hasOne(Staff);
Staff.belongsTo(House);
House.hasMany(Student);
Student.belongsTo(House);
House.hasOne(Organization)

//Subject Ownership Relationships
Subject.hasOne(Location);
Location.belongsTo(Subject);
Subject.hasOne(Staff);
Staff.belongsTo(Subject);
Subject.hasOne(Organization);

//Location Ownership Relationships
Location.hasMany(Student);
Student.belongsTo(Location);
Location.hasMany(Staff);
Staff.belongsTo(Location);

//Organization Ownership Relationships
Student.belongsToMany(Organization, {through: 'School_Clubs', as:'Member'});

const db = {}
db.models = {
    House,
    Subject,
    Staff,
    Student,
    Location,
    Castle,
    Organization
}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db