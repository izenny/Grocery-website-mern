const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'canceled'], default: 'pending' },
  shippingAddress: { type: String, required: true },
  paymentMethod: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
