const Cart = require("../Modals/CartSchema");
const Product = require("../Modals/ProductSchema");

// Add item to cart
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
      return res.status(404).json({ message: "Product not found" });
    }
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    cart.totalPrice += product.price * quantity;
    await cart.save();
    // res.status(200).json(cart);
    // res.status(200).json({product});
     const updatedItem = cart.items.find(item => item.product.toString() === productId);

    res.status(200).json({ product: updatedItem });

  } catch (err) {
    console.log('Error adding to cart', err);
    res.status(500).json({ message: "Server error", err });
  }
};

// Fetch cart items by user ID
exports.fetchCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItems = await Cart.findOne({ user: id }).populate('items.product');
    if (!cartItems) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cartItems);
  } catch (error) {
    console.log('Error fetching cart', error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove item from cart
exports.removeCartItem = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;
  try {
    const cart = await Cart.findOne({ user: id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      const product = await Product.findById(productId);
      cart.totalPrice -= product.price * cart.items[itemIndex].quantity;
      cart.items.splice(itemIndex, 1);
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (err) {
    console.log('Error removing item from cart', err);
    res.status(500).json({ message: "Server error", err });
  }
};

// Delete all items in the cart
exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({ user: id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.log('Error deleting cart', err);
    res.status(500).json({ message: "Server error", err });
  }
};

// Update cart item quantity
exports.updateCartItemQuantity = async (req, res) => {
  const { id } = req.params;
  const { productId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ user: id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      const product = await Product.findById(productId);
      cart.totalPrice = cart.totalPrice - (cart.items[itemIndex].quantity * product.price) + (quantity * product.price);
      cart.items[itemIndex].quantity = quantity;
      await cart.save();
      res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (err) {
    console.log('Error updating cart item quantity', err);
    res.status(500).json({ message: "Server error", err });
  }
};
