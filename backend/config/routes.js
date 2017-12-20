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
router.get('/api/staff/location/:id', controller.staffByLocation)

//STUDENT
router.get('/api/students', controller.showStudents)
router.get('/api/students/house/:id', controller.studentsByHouse)
router.get('/api/students/location/:id', controller.studentsByLocation)

//SUBJECT
router.get('/api/subjects', controller.showSubjects)


module.exports = router;
