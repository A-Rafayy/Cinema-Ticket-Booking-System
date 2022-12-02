const express = require('express');
const router = express.Router();

const verification = require('../middleware/user_token-authentication');

const createSeatController = require('../controllers/seatControllers/seat_creation_controller');
const getSeatController = require('../controllers/seatControllers/get_seat_controller');

router.get('/getAll', getSeatController.get_allSeatsByScreen_controller);
router.get('/getSeat/:seatId', getSeatController.get_seatById_controller);

router.post('/createSeat', verification, createSeatController.seat_creation_controller);

module.exports = router;