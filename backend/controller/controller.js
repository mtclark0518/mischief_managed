const db = require('../models')
const Castle = db.models.Castle;
const Location = db.models.Location;
const House = db.models.House;
const Subject = db.models.Subject;
const Staff = db.models.Staff;
const Student = db.models.Student;



//utility function that updates house points
const updateHousePoints = houseId => {
    House.findOne({
        where: {id: houseId}, 
        include: [ { model:Student }]})
    .then(house => {
        let students = house.Students;
        let individualPoints = students.map( student => {
            return student.points;
        })
        let totalPoints = individualPoints.reduce((acc, cv) => acc + cv);
        
        house.updateAttributes({
            points : totalPoints
        });
    });
};



//CASTLE
const showHogwarts = (req, res) => {
    Castle.findOne({ where: {id: 1},
    include:[{model: House}] })
    .then( hogwarts => { res.json(hogwarts); } );
}

//HOUSE
const showHouses = (req, res) => {
    House.findAll({
        include:[
            {
                model: Student
            },
            {
                model: Staff
            }
            // {
            //     model: Organization
            // }

        ]
    })
    .then( houses => {
        res.json(houses);
    });
}


//LOCATION
const showLocations = (req, res) => {
    Location.findAll({
        include:[
            {
                model: Student
            },
            {
                model: Staff
            },
            {
                model: Subject
            },
            {
                model: House
            }
        ]
    })
    .then( locations => {
        res.json(locations);
    });
}

//STAFF
const showStaff = (req, res) => {
    Staff.findAll()
    .then( staff => {
        res.json(staff);
    });
};
//STAFF BY LOCATION
const staffByLocation = (req, res) => {
    Staff.findAll({
        where: {
            LocationId: req.params.id
        },
        include:[
            {
                model: House
            },
            {
                model: Subject
            }
        ]
    })
    .then( staff => {
        console.log(staff)
        res.json(staff);
    });
};

//INDEX STUDENTS
const getStudents = (req, res) => {
    Student.findAll()
    .then( students => {
        res.json(students);
    });
};
//SHOW A STUDENT
const showStudent = (req, res) => {
    Student.findOne({where:{id:req.params.id}, include:[{model: House}]})
    .then( student => {
        res.json(student);
    });
};
//HEX A STUDENT
const hexStudent = (req, res) => {
    Student.findOne({where: { id:req.params.id} })
    .then( student => {
        let hex = student.points - 1;
        student.updateAttributes({
            points: hex
        })
        .then(student => {
            updateHousePoints(student.HouseId)
            res.json(student)
        });
    });
};
const honorStudent = (req, res) => {
    Student.findOne({where: { id:req.params.id} })
    .then( student => {
        let honor = student.points + 2;
        student.updateAttributes({
            points: honor
        })
        .then(student => {
            updateHousePoints(student.HouseId)
            res.json(student)
        });
    });
};

//STUDENT BY HOUSE
const studentsByHouse = (req, res) => {
    Student.findAll({
        where: {
            HouseId: req.params.id
        },
        include:[
            {
                model: House
            }
        ]
    })
    .then( students => {
        console.log(students)
        res.json(students);
    });
}
//STUDENT BY LOCATION
const studentsByLocation = (req, res) => {
    Student.findAll({
        where: {
            LocationId: req.params.id
        },
        include:[
            {
                model: House
            }
        ]
    })
    .then( students => {
        console.log(students)
        res.json(students);
    });
}


//SUBJECT
const showSubjects = (req, res) => {
    Subject.findAll({
        include: [
            {
                model: Staff
            },
            {
                model: Location
            }

        ]
    })
    .then( subjects => {
        res.json(subjects);
    });
}

module.exports = { 
    showHogwarts: showHogwarts,
    showHouses: showHouses,
    showLocations: showLocations,
    showStaff: showStaff,
    staffByLocation: staffByLocation,
    getStudents: getStudents,
    showStudent: showStudent,
    studentsByHouse: studentsByHouse,
    hexStudent: hexStudent,
    honorStudent: honorStudent,
    studentsByLocation: studentsByLocation,
    showSubjects: showSubjects,
};
// const login = (req, res) => {

//     let username = req.body.name;
//     let attemptedPassword = req.body.password;

//     const findUser = (name) => {
//         console.log(name);
//         User.findOne( { where: { name: name } } ).then(user => {
//             if (user) {
//                 console.log('user found')
//                 validateUser(user, attemptedPassword)
                
//             } else {
//                 console.log('no user found')
//                 createUser(username, attemptedPassword)
//             }
//         })
//     }
//     const validateUser = (user, password) => {
//         console.log(user, password)
//         let encrypted = user.dataValues.password
//         console.log(encrypted)
//         if (user.validPassword(password, encrypted)) {
//             console.log('it worked')
//             res.json(user)
//         } else { 
//             console.log('error damnit');
//             res.json(
//                 "an error occured"
//             )
//         }
//     }
//     const createUser = (user, password) => {
//         console.log(user, password)
//         User.create({
//             name: user,
//             password: password
//         })
//         .then( user => {
//             let pass = user.dataValues.password
//             console.log(pass)
//             let hashed = user.hash(pass)
//             user.updateAttributes({
//                 password: hashed
//             })
//             .then( user => { 
//                 console.log(user.dataValues)
//                 res.json(user)
//             })
//         })
//     }

//     findUser(username)
// };

// User.create( { name: req.body.name, password: req.body.password } )
// .then( user => {
//     if(error){return console.log(error, 'error')}else{
//     // let encrypted = user.dataValues.password;
//     // let attempted = req.body.password;
//     // if (user.validPassword(attempted, encrypted)) {
//     res.json(user);}
//     // } else {
//     //     return console.log(error, ': error');
//     // }
// });
// const activeUsers = (req, res) => {
//     User.findAll({
//         where: {
//             isActive: true
//         }
//     }).then()
// }