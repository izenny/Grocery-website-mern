const router = require("express").Router();
const ProductController = require("../Controllers/PoductController");

router.post("/addnewproduct", ProductController.createProduct);
// router.get("/bycategory", ProductController.productbyCategory);
router.post("/productbycategory", ProductController.getProductsByCategory);

module.exports = router;
