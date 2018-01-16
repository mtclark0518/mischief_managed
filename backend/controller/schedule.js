const db = require('../models')
const Location = db.models.Location;
const House = db.models.House;
const Staff = db.models.Staff;
const Student = db.models.Student;



function randomBtwnRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


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
                case 'class':
                    student.updateAttributes({
                        LocationId: randomBtwnRange(5, 14)
                    });
                    break;
                case 'down':
                    student.updateAttributes({
                        LocationId: randomBtwnRange(16, 19)
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
