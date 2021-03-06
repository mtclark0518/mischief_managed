const db = require('../models')
const Location = db.models.Location;
const House = db.models.House;
const Staff = db.models.Staff;
const Student = db.models.Student;
const Subject = db.models.Schedule;


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
                        LocationId: randomBtwnRange(5, 15)
                    });
                    break;
                case 'down':
                    student.updateAttributes({
                        LocationId: randomBtwnRange(16, 20)
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

const staffToClass = (req,res) => {
    console.log(req.body)
    let block = req.body.block;
    switch(block){
        case 'class':
            Staff.findAll({where: {position: "Professor"}}).then(staff=>{
                let teachers = staff.map(staff=>{
                    return staff.dataValues;
                })
                Location.findAll({where: {type: "Classroom"}}).then(location=>{
                    let classrooms = location.map(location=>{
                        return location.dataValues;
                    })
                    teachers.forEach( teacher => {
                        classrooms.forEach(classroom=>{
                            if(teacher.SubjectId == classroom.SubjectId){
                                updateTheTeacher(teacher.id , classroom.id)
                            }
        
                        })
                    })    
                })
            }).then(()=>{
                Staff.findAll({include: [ { model: House}, {model: Location}, {model: Subject}]}).then(staff=>{
                    res.json(staff)
                })
            })
        break;
        case 'meal':
            Staff.findAll().then(staff=>{
                staff.forEach(staff=>{
                    updateTheTeacher(staff.dataValues.id , 15)
                })
            })
            .then(()=>{
                Staff.findAll({include: [ { model: House}, {model: Location}, {model: Subject}]}).then(staff=>{
                    res.json(staff)
                })
            })
        break;
        case 'sleep':
        Staff.findAll({include: [ { model: House}, {model: Location}, {model: Subject}]}).then(staff=>{
            res.json(staff)
        })
        break;
        case 'down':
        Staff.findAll({include: [ { model: House}, {model: Location}, {model: Subject}]}).then(staff=>{
            res.json(staff)
        })
        break;
        default: console.log('ruh roh datsa not good')
    }

}
const practice = ( ) => {

}
updateTheTeacher = (who, where) => {
    console.log(who, where)
    Staff.findOne({where:{id: who}}).then(staff=>{
        staff.updateAttributes({
            LocationId: where
        }).then(staff=>{
            console.log('updated the staff')
        })
    })
}
module.exports = {
    schedule: schedule,
    staffToClass: staffToClass
}
