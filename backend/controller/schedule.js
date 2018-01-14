const db = require('../models')
const Location = db.models.Location;
const House = db.models.House;
const Staff = db.models.Staff;
const Student = db.models.Student;


const schedule = (req, res) => {
    let block = req.body.block
    Student.findAll()
    .then(students => {
        students.forEach(student => {
            switch(block){
                case 'sleep':
                    student.updateAttributes({
                        LocationId: student.HouseId
                    });
                    break;
                case 'meal':
                    student.updateAttributes({
                        LocationId: 15
                    });
                    break;
                default: console.log('uh this shouldnt happen')
            }
        });
    })
    .then( () => {
        Student.findAll(
            {include:[
                {model:House},
                {model:Location}
            ]}
        )
        .then(students=>{
            res.json(students);
        });
    });
};
module.exports = {schedule: schedule}
