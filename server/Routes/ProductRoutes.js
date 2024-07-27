const router = require("express").Router();
const ProductController = require("../Controllers/PoductController");

router.post("/addnewproduct", ProductController.createProduct);
// router.get("/bycategory", ProductController.productbyCategory);
module.exports = router;
