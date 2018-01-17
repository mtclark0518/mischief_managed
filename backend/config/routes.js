const router = require('express').Router();
const controller = require('../controller/controller')
const schedule = require('../controller/schedule')


//Controller Routes
router.get('/api/houses', controller.getHouses)
router.get('/api/houses/score', controller.syncScoreboard)
router.get('/api/locations', controller.getLocations)
router.get('/api/students', controller.getStudents)
router.get('/api/staff', controller.getStaff)
router.put('/api/students/:id', controller.updateStudent)


//Schedule Routes
router.post('/api/schedule', schedule.schedule)
router.post('/api/schedule/staff', schedule.staffToClass);


module.exports = router;
