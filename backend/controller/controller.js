const db = require('../models')
const Castle = db.models.Castle;
const Location = db.models.Location;
const House = db.models.House;
const Subject = db.models.Subject;
const Staff = db.models.Staff;
const Student = db.models.Student;



//HOUSE
const getHouses = (req, res) => {
    House.findAll()
    .then( houses => {
        res.json(houses);
    });
}


//LOCATION
const getLocations = (req, res) => {
    Location.findAll({include:[
        {model: Subject},
        {model: House},
    ]})
    .then( locations => {
        res.json(locations);
    });
}
//STUDENTS
const getStudents = (req, res) => {
    Student.findAll({include:[
        {model:Location},
        {model:House}
    ]})
    .then( students => {
        res.json(students);
    });
};


const updateStudent = ( req, res) => {
    let amount = req.body.amount
    Student.findOne({where: { id:req.params.id}, include:[{model: House}, {model: Location}]})
    .then( student => {
        student.updateAttributes({
            points: student.points + amount
        }).then( student => {
            res.json(student)
        });
    });
};

//STAFF
const getStaff = (req, res) => {
    Staff.findAll({include:[
        {model:Location},
        {model:House},
        {model: Subject}
    ]})
    .then( staff => {
        res.json(staff);
    });
};

// //utility function that updates house points
const syncScoreboard = (req, res) => {
    House.findAll({
        include: [ { model:Student }]})
    .then(houses => {
        console.log(houses)
        let update = houses.map(house=>{
            let students = house.Students
            let individualPoints = students.map( student => {
                return student.points;
            })
            console.log(individualPoints)
            let totalPoints = individualPoints.reduce((acc, cv) => acc + cv);
            house.updateAttributes({
                points : totalPoints
            });
            return house
        })
        res.json(update)
    });
};

module.exports = { 
    getHouses: getHouses,
    syncScoreboard: syncScoreboard,
    getLocations: getLocations,
    getStudents: getStudents,
    getStaff: getStaff,
    updateStudent: updateStudent,
};

