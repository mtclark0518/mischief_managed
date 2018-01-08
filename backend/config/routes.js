const router = require('express').Router();
const controller = require('../controller/controller')


router.get('/api/houses', controller.getHouses)
router.get('/api/locations', controller.getLocations)
router.get('/api/students', controller.getStudents)
router.put('/api/students/:id', controller.updateStudent)




// router.get('/api/castle', controller.showHogwarts)
// router.get('/api/staff', controller.showStaff)
// router.get('/api/staff/location/:id', controller.staffByLocation)
// router.get('/api/students/:id', controller.showStudent)
// router.put('/api/students/hex/:id/', controller.hexStudent)
// router.put('/api/students/honor/:id', controller.honorStudent)
// router.get('/api/students/house/:id', controller.studentsByHouse)
// router.get('/api/students/location/:id', controller.studentsByLocation)
// router.get('/api/subjects', controller.showSubjects)


module.exports = router;
