const db = require('../_model')
const Hogwarts = db.models.Hogwarts;

enterHogwarts = (req, res) => {
    Hogwarts.findOne({
        where: { id: 1}
    })
}
module.exports = {
    enterHogwarts: enterHogwarts
}