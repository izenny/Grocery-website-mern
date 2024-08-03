const router = require("express").Router();
const ProductController = require("../Controllers/PoductController");

router.post("/addnewproduct", ProductController.createProduct);
// router.get("/bycategory", ProductController.productbyCategory);
router.post("/productbycategory", ProductController.getProductsByCategory);
router.get('/productbyid/:productId',ProductController.getProductsById)

module.exports = router;
