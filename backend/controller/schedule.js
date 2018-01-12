const db = require('../models')
const Location = db.models.Location;
const House = db.models.House;
const Staff = db.models.Staff;
const Student = db.models.Student;




const schedule = (req, res) => {
    let block = req.body.block
    switch(block){
        case 'sleep':
            console.log('fucking ffffffucker')
            Student.findAll({include:[{model:House}, {model:Location}]}).
                then(students => {
                    students.forEach(student => {
                        student.updateAttributes({
                            LocationId: student.HouseId
                        });
                    });
                }).
                then(()=>{
                    Student.findAll({include:[{model:House},{model:Location}]}).
                    then(students=>{
                        res.json(students);
                    })
                })
        break;
        case 'meal':
        console.log('fucking ffffffucker')
        Student.findAll({include:[{model:House}, {model:Location}]}).
            then(students => {
                students.forEach(student => {
                    student.updateAttributes({
                        LocationId: 15
                    });
                });
            }).
            then(()=>{
                Student.findAll({include:[{model:House},{model:Location}]}).
                then(students=>{
                    res.json(students);
                })
            })
        break;
        case 'class':
            console.log('fucking ffffffucker')
            res.send('fart')
        break;
        case 'down':
            console.log('fucking ffffffucker')
            res.send('fart')
        break;
        default:
            console.log('boner boner boner')
            res.send('fart')
    }



}
module.exports = {schedule: schedule}

