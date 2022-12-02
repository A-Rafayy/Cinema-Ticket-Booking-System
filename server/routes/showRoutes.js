const express = require('express');
const router = express.Router();

const Show = require('../models/show');
const verification = require('../middleware/user_token-authentication');

const createShowController = require('../controllers/showControllers/show_creation_controller');
const getShowController = require('../controllers/showControllers/get_show_controller');
const updateShowController = require('../controllers/showControllers/show_update_controller');
const deleteShowController = require('../controllers/showControllers/show_deletion_controller');

router.get('/', getShowController.get_allShows_controller);
router.get('/:showId', getShowController.get_showById_controller);

router.post('/create', verification, createShowController.create_show_controller);

router.put('/update/:showId', verification, updateShowController.show_update_controller);

router.delete('/delete/:showId', verification, deleteShowController.show_deletion_controller);

module.exports = router;