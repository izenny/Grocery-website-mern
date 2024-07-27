const router = require('express').Router();
const UserController = require('../Controllers/UserController');

router.post('/register',UserController.registerUser);
router.post('/login',UserController.loginUser)

module.exports = router