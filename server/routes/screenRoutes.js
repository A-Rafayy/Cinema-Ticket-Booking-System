const express = require('express');
const router = express.Router();

const verification = require('../middleware/user_token-authentication');
const seatRoute = require('./seatRoutes');

const createScreenController = require('../controllers/screenControllers/screen_creation_controller');
const getScreenController = require('../controllers/screenControllers/get_screen_controller');
const updateScreenController = require('../controllers/screenControllers/screen_update_controller');

router.get('/', getScreenController.get_allScreens_controller);
router.get('/:screenId', getScreenController.get_screenById_controller);
router.use('/:screenId/seat', verification, seatRoute);

router.post('/create', verification, createScreenController.create_screen_controller);
router.post('/create/seat', verification, seatRoute);

router.put('/update/:screenId', verification, updateScreenController.update_screen_controller);

module.exports = router;