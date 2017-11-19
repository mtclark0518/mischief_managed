const db = require('../_model/index')
const DB = db.models;

const hogwarts = 
    {
        name: 'Hogwarts',
        connected: 0
    }



const constructo = () => {
    return DB.Hogwarts.create(hogwarts)
};

constructo().then( () => { process.exit() } )