const User = require("../Modals/UserSchema");
const Crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, address, phone, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = Crypto.AES.encrypt(
      password,
      process.env.Crypto_js
    ).toString();
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      role: role || "customer", // Use the provided role or default to 'customer'
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    const decryptPassword = Crypto.AES.decrypt(
      user.password,
      process.env.Crypto_js
    ).toString(Crypto.enc.Utf8);
    if (decryptPassword !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWTkey, {
      expiresIn: "2h",
    });
  const { password: _, ...userDetails } = user.toObject(); // Rename `password` to `_` to avoid conflict

    // Respond with success, token, and user details (excluding password)
    res.status(200).json({ message: 'Login successful', token, ...userDetails });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
