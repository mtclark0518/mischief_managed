const router = require('express').Router();
const controller = require('../controller/controller')

//CASTLE
router.get('/api/castle', controller.showHogwarts)

//HOUSE
router.get('/api/houses', controller.getHouses)

//LOCATION
router.get('/api/locations', controller.getLocations)

//STAFF
router.get('/api/staff', controller.showStaff)
router.get('/api/staff/location/:id', controller.staffByLocation)

//STUDENT
router.get('/api/students', controller.getStudents)
router.get('/api/students/:id', controller.showStudent)
router.put('/api/students/:id', controller.updateStudent)
router.put('/api/students/hex/:id/', controller.hexStudent)
router.put('/api/students/honor/:id', controller.honorStudent)
router.get('/api/students/house/:id', controller.studentsByHouse)
router.get('/api/students/location/:id', controller.studentsByLocation)

//SUBJECT
router.get('/api/subjects', controller.showSubjects)


module.exports = router;
