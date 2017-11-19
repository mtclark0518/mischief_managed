const db = require('../_model')
const Hogwarts = db.models.Hogwarts;

function enterHogwarts(req, res) {
    Hogwarts.findOne({
        where: { id: 1}
    }).then(data=>{
        let name = data.dataValues.name
        console.log(name)
        return name
    })
}
module.exports = {
    enterHogwarts: enterHogwarts
}