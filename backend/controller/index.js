const db = require('../models')


// const iterate = () => {
//     db.models.container.findOne({where: {id : 1}}).then(number =>{
//         console.log(number)        
//         let num = number.dataValues.number
//         console.log('this is num: ', num)
//         num++
//         console.log('just apply iterate and num becomes: ', num)
//         number.updateAttributes({
//             number: num
//         }).then(newNumber=>{
//         console.log('here is the updated number')
//         console.log(newNumber.dataValues.number)
//         return newNumber.dataValues.number
//     })
//     })
// }
// const getNumber = () => {
//     db.models.container.findOne({where: {id : 1}}).then(number =>{
//         console.log(number)
//         let thing = number.dataValues.number
//         console.log(thing)
//         console.log(typeof(thing))
//         return thing;   
//     })
// }


// module.exports = {
//     iterate: iterate,
//     getNumber: getNumber
// }