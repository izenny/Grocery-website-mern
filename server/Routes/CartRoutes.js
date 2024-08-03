const router = require('express').Router();
const CartController = require('../Controllers/CartController');

router.post('/addtocart/:id',CartController.addToCart)
router.get('/fetchcart/:id',CartController.fetchCart)
module.exports = router
