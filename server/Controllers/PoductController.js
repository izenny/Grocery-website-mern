const Product = require("../Modals/ProductSchema");

exports.createProduct = async (req, res) => {
  console.log("Create Product API called"); // Add this log
  try {
    const product = new Product({
      productName: req.body.productName,
      productCode: req.body.productCode,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      // productImage: req.body.productImage,
    });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error in creating product:", error);
    res.status(400).json({ message: error.message });
  }
};

// Get products by category
exports.productbyCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    console.log("Error in fetching category products:", error);
    res.status(400).json({ message: error.message });
  }
};
