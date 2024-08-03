const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const UserRoutes = require('./Routes/UserRoutes')
const ProductRoutes = require("./Routes/ProductRoutes");
const CartRoutes = require('./Routes/CartRoutes')
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/users',UserRoutes)
app.use("/product", ProductRoutes);
app.use('/cart',CartRoutes)
mongoose.connect(process.env.mongo_url).then(() => {
  console.log("connected to database");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`connected to ${PORT} port`);
});
