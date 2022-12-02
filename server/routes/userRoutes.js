const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const verification = require('../middleware/user_token-authentication');

const signupController = require('../controllers/userControllers/signup_controller');
const loginController = require('../controllers/userControllers/login_controller');
const userInfoController = require('../controllers/userControllers/user_info_controller');
const userUpdateController = require('../controllers/userControllers/user_update_controller');

router.post('/signup', signupController.signup_controller);

router.post("/login", loginController.login_controller);

router.get('/info/:userId', verification, userInfoController.user_info_controller);

router.put("/update/:userId", verification, userUpdateController.user_update_controller);


module.exports = router;