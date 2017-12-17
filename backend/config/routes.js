const router = require('express').Router();
const controller = require('../controller/controller')

//CASTLE
router.get('/api/castle', controller.showHogwarts)

//HOUSE
router.get('/api/houses', controller.showHouses)

//LOCATION
router.get('/api/locations', controller.showLocations)

//STAFF
router.get('/api/staff', controller.showStaff)

//STUDENT
router.get('/api/students', controller.showStudents)

router.get('/api/students/location/:id', controller.studentsByLocation)

//SUBJECT
router.get('/api/subjects', controller.showSubjects)


module.exports = router;
