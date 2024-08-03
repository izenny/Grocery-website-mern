const Cart = require("../Modals/CartSchema");
const Product = require("../Modals/ProductSchema");
exports.addToCart = async (req, res) => {
  const { id } = req.params;
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: id });
    if (!cart) {
      cart = new Cart({ user: id, items: [], totalPrice: 0 });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    cart.totalPrice += product.price * quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.log('err',err);
    
    res.status(500).json({ message: "server error", err });
  }
};

// exports.fetchCart = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const cartItems = await Cart.findOne({ user : id });
//     if (!cartItems) {
//       return res.status(404).json({ message: "Cart not found" });
//     }
    
    
//     res.status(200).json(cartItems );
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };


// Route handler to fetch cart items by user ID
exports.fetchCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItems = await Cart.findOne({ user: id }).populate('items.product');
    if (!cartItems) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }}
