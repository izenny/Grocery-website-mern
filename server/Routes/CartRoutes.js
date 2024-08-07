const router = require('express').Router();
const CartController = require('../Controllers/CartController');

router.post('/addtocart/:id',CartController.addToCart)
router.get('/fetchcart/:id',CartController.fetchCart)
router.put('/removeitem/:id',CartController.removeCartItem)
router.put('/updatequantity/:id',CartController.updateCartItemQuantity)
router.delete('/deletecart/:id',CartController.deleteCart)
module.exports = router
