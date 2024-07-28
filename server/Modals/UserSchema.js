const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String ,default: null},
  phone: { type: Number, required: true },
  role: { type: String, enum: ['admin','customer'], default: 'customer' },
  cart:[{type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}],
  wishlist:[{type: mongoose.Schema.Types.ObjectId, ref: 'Wishlist'}]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
