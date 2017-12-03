const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/mischiefmanaged')

const Castle = sequelize.import('./Castle')
const Subject = sequelize.import('./Subject')
const Location = sequelize.import('./Location')
const House = sequelize.import('./House')
const Student = sequelize.import('./Student')
const Staff = sequelize.import('./Staff')
const Organization = sequelize.import('./Organization')

Castle.hasMany(House);
House.belongsTo(Castle);

Castle.hasMany(Subject);
Subject.belongsTo(Castle)

Castle.hasMany(Location);
Location.belongsTo(Castle);

Castle.hasMany(Staff);
Staff.belongsTo(Castle);

Castle.hasMany(Student)
Student.belongsTo(Castle)

House.hasMany(Student);
Student.belongsTo(House);

House.hasOne(Staff);
Staff.belongsTo(House);

House.hasOne(Location);
Location.belongsTo(House);

Subject.hasOne(Location)
Location.belongsTo(Subject);

Subject.hasOne(Staff);
Staff.belongsTo(Subject);

Location.hasMany(Student);
Student.belongsTo(Location);

Location.hasMany(Staff);
Staff.belongsTo(Location);

Organization.hasMany(Student);
Student.belongsToMany(Organization, {through: 'Student_Organizations', as:'Members'});

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