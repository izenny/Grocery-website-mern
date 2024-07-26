const router = require('express').Router();
const UserController = require('../Controllers/UserController');

router.post('/register',UserController.registerUser);
router.get('/login',UserController.loginUser)

module.exports = router