const multer = require("multer");
const path = require("path");
const Product = require('../Modals/ProductSchema');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../client/public/ProductImages'));
  },
  filename: function (req, file, cb) {
    const filename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({
  storage: storage,
}).single("image");

exports.createProduct = async (req, res) => {
  console.log("Create Product API called");
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to upload image" });
    }
    const { productname, productcode, description, price, category, stock } = req.body;
    let imageFilename = null;
    if (req.file) {
      imageFilename = req.file.filename;
    }
    const product = new Product({
      productname,
      productcode,
      description,
      price,
      category,
      stock,
      image: imageFilename,
    });
    try {
      const newProduct = await product.save();
      console.log("Product created successfully");
      res.status(201).json(newProduct);
    } catch (error) {
      console.log("Error in creating product:", error);
      res.status(400).json({ message: error.message });
    }
  });
};

// fetch product by category

// exports.getProductsByCategory = async (req, res) => {
//   try {
//     // const category = req.params.category;
//     const type = req.body;
//     const products = await Product.find({ category: type });
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
 // Adjust import based on your project structure


exports.getProductsByCategory = async (req, res) => {
  try {
    const { type } = req.body;
    const products = type === 'all' 
      ? await Product.find() 
      : await Product.find({ category: type });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};