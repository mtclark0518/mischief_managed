const db = require('../models')
const DB = db.models;

const castle = [
    {
        name: 'Hogwarts'
    }
]

const houses = [
    {
        name: 'Gryffindor',
        founder: 'Godric Grryffindor',
        points: 0,
        primaryColor: '#931B06',
        secondaryColor: '#C9982A',
        mascot: 'Lion',
        CastleId: 1
    },
    {
        name: 'Hufflepuff',
        founder: 'Helga Hufflepuff',
        points: 0,
        primaryColor: '#F2C135',
        secondaryColor: '#151619',
        mascot: 'Badger',
        CastleId: 1
    },
    {
        name: 'Ravenclaw',
        founder: 'Rowena Ravenclaw',
        points: 0,
        primaryColor: '#071A7F',
        secondaryColor: '#9C8C5A',
        mascot: 'Raven',
        CastleId: 1
    },
    {
        name: 'Slytherin',
        founder: 'Salazar Slytherin',
        points: 0,
        primaryColor: '#154B07',
        secondaryColor: '#B4AEB6',
        mascot: 'Serpent',
        CastleId: 1
    }
];
const subjects = [
    {
        name: 'Arithmancy',
        CastleId: 1
    },
    {
        name: 'Care of Magical Creatures',
        CastleId: 1
    },
    {
        name: 'Charms',
        CastleId: 1
    },
    {
        name: 'Defense Against the Dark Arts',
        CastleId: 1
    },
    {
        name: 'Divination',
        CastleId: 1
    },
    {
        name: 'Herbology',
        CastleId: 1
    },
    {
        name: 'History of Magic',
        CastleId: 1
    },
    {
        name: 'Muggle Studies',
        CastleId: 1
    },
    {
        name: 'Potions',
        CastleId: 1
    },
    {
        name: 'Transfiguration',
        CastleId: 1
    }
];

const locations = [
    {
        name: 'Common Room',
        type: 'Restricted',
        CastleId: 1,
        HouseId: 1        
    },
    {
        name: 'Common Room',
        type: 'Restricted',        
        CastleId: 1,
        HouseId: 2
    },
    {
        name: 'Common Room',
        type: 'Restricted',        
        CastleId: 1,
        HouseId: 3
    },
    {
        name: 'Common Room',
        type: 'Restricted',        
        CastleId: 1,
        HouseId: 4
    },
    {
        name: 'Classroom',
        type: 'Classroom',
        CastleId: 1,
        SubjectId: 1
    },
    {
        name: 'Hagrid\'s Hut',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 2,
    },
    {
        name: 'Classroom',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 3
    },
    {
        name: 'Classroom',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 4,
    },
    {
        name: 'Classroom',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 5
    },
    {
        name: 'Greenhouse',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 6,
    },
    {
        name: 'Classroom',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 7
    },
    {
        name: 'Classroom',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 8,
    },
    {
        name: 'Dungeon',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 9,
    },
    {
        name: 'Classroom',
        type: 'Classroom',        
        CastleId: 1,
        SubjectId: 10
    },
    {
        name: 'Great Hall',
        type: 'Common Area',        
        CastleId: 1,
    },
    {
        name: 'Quidditch Pitch',
        type: 'Common Area',        
        CastleId: 1,
    },
    {
        name: 'Infirmary',
        type: 'Common Area',        
        CastleId: 1,
    },
    {
        name: 'Library',
        type: 'Common Area',        
        CastleId: 1,
    },
    {
        name: 'Owlery',
        type: 'Common Area',        
        CastleId: 1,
    },
    {
        name: 'Headmaster\'s Office',
        type: 'Restricted',        
        CastleId: 1,
    },
    {
        name: 'Room of Requirement',
        type: 'Restricted',        
        CastleId: 1,
    },
    {
        name: 'Chamber of Secrets',
        type: 'Restricted',        
        CastleId: 1,
    }


]

const students = [
    {
        firstName: 'Harry',
        lastName: 'Potter',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1,
    },
    {
        firstName: 'Neville',
        lastName: 'Longbottom',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Dean',
        lastName: 'Thomas',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Parvati',
        lastName: 'Patil',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'George',
        lastName: 'Weasely',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Fred',
        lastName: 'Weasely',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Ginny',
        lastName: 'Weasely',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Ron',
        lastName: 'Weasely',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Lee',
        lastName: 'Jordan',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Hermione',
        lastName: 'Granger',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Seamus',
        lastName: 'Finnigan',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Angelina',
        lastName: 'Johnson',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Katie',
        lastName: 'Bell',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Kevin',
        lastName: 'Whitby',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Rose',
        lastName: 'Zeller',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Zacharias',
        lastName: 'Smith',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Eloise',
        lastName: 'Midgeon',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Laura',
        lastName: 'Madley',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Ernie',
        lastName: 'Macmillan',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Hannah',
        lastName: 'Abbot',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Justin',
        lastName: 'Finch-Fletchley',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Owen',
        lastName: 'Cauldwell',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Eleanor',
        lastName: 'Branstone',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Susan',
        lastName: 'Bones',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Lavender',
        lastName: 'Brown',
        HouseId: 1,
        LocationId: 1,
        CastleId: 1
    },
    {
        firstName: 'Cedric',
        lastName: 'Diggory',
        HouseId: 2,
        LocationId: 2,
        CastleId: 1
    },
    {
        firstName: 'Cho',
        lastName: 'Chang',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Stewart',
        lastName: 'Ackerley',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Marcus',
        lastName: 'Belby',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Terry',
        lastName: 'Boot',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Eddie',
        lastName: 'Carmichael',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Penelope',
        lastName: 'Clearwater',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Michael',
        lastName: 'Corner',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Roger',
        lastName: 'Davies',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Marietta',
        lastName: 'Edgecombe',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Anthony',
        lastName: 'Goldstein',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Luna',
        lastName: 'Lovegood',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Padma',
        lastName: 'Patil',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Lisa',
        lastName: 'Turpin',
        HouseId: 3,
        LocationId: 3,
        CastleId: 1
    },
    {
        firstName: 'Draco',
        lastName: 'Malfoy',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Malcom',
        lastName: 'Baddock',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Miles',
        lastName: 'Bletchley',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Millicent',
        lastName: 'Bullstrode',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Vincent',
        lastName: 'Crabbe',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Gregory',
        lastName: 'Goyle',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Terence',
        lastName: 'Higgs',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Pansy',
        lastName: 'Parkinson',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Tom',
        lastName: 'Riddle',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Blaise',
        lastName: 'Zabini',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Graham',
        lastName: 'Montague',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    },
    {
        firstName: 'Cassius',
        lastName: 'Warrington',
        HouseId: 4,
        LocationId: 4,
        CastleId: 1
    }
]
const staff = [
    {
        firstName: 'Albus',
        lastName: 'Dumbledore',
        position: 'Headmaster',
        CastleId: 1,
        LocationId: 15
    },
    {
        firstName: 'Minerva',
        lastName: 'McGonagall',
        position: 'Professor',
        CastleId: 1,
        SubjectId: 10,
        HouseId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Pomona',
        lastName: 'Sprout',
        position: 'Professor',
        CastleId: 1,
        SubjectId: 6,
        HouseId: 2,
        LocationId: 15,
    },
    {
        firstName: 'Filius',
        lastName: 'Flitwick',
        position: 'Professor',
        CastleId: 1,
        SubjectId: 3,
        HouseId: 3,
        LocationId: 15,
    },
    {
        firstName: 'Severus',
        lastName: 'Snape',
        position: 'Professor',
        CastleId: 1,
        SubjectId: 9,
        HouseId: 4,
        LocationId: 15,
    },
    {
        firstName: 'Remus',
        lastName: 'Lupin',
        position: 'Professor',
        SubjectId: 4,
        CastleId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Rubius',
        lastName: 'Hagrid',
        position: 'Professor',
        SubjectId: 2,
        CastleId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Sybill',
        lastName: 'Trelawney',
        position: 'Professor',
        SubjectId: 5,
        CastleId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Cuthbert',
        lastName: 'Binns',
        position: 'Professor',
        SubjectId: 7,
        CastleId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Charity',
        lastName: 'Burbage',
        position: 'Professor',
        SubjectId: 8,
        CastleId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Septima',
        lastName: 'Vector',
        position: 'Professor',
        SubjectId: 1,
        CastleId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Argus',
        lastName: 'Filch',
        position: 'Caretaker',
        CastleId: 1,
        LocationId: 15,
    },
    {
        firstName: 'Irma',
        lastName: 'Pince',
        position: 'Librarian',
        CastleId: 1,
        LocationId: 18,
    },
    {
        firstName: 'Poppy',
        lastName: 'Pomfrey',
        position: 'Matron',
        CastleId: 1,
        LocationId: 17,
    }
]
const organizations = [
    {
        name: 'Dumbledore\'s Army',
        type: 'Secret'
    },
    {
        name: 'Quidditch',
        type: 'Team',
        HouseId: 1,
    }
]

const createCastle = () => {
    return DB.Castle.bulkCreate(castle);
};

const createHouse = () => {
    return DB.House.bulkCreate(houses)
};
const createSubject = () => {
    return DB.Subject.bulkCreate(subjects)
};

const createLocation = () => {
    return DB.Location.bulkCreate(locations)
};
const createStaff = () => {
    return DB.Staff.bulkCreate(staff)
};
const createStudents = () => {
    return DB.Student.bulkCreate(students)
};
const createOrganizations = () => {
    return DB.Organization.bulkCreate(organizations)
};

// createCastle()
//     .then(
//         createHouse() 
//     )
//     .then(
//         createSubject()
//     )
//     .then(
//         createLocation()
//     )

// createOrganizations()

//    createStaff()
    
// createStudents()
.then( () => { process.exit() } )