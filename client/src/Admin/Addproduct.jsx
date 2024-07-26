
import React, { useState } from "react";
import Product from "../Components/Product";
import Navbar from "../Components/Navbar";
import { newProductApi } from "../Api/ProductApi";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newProductApi({
        productName,
        productCode,
        description,
        category,
        price,
        stock,
        productImage,
      });
      // Optionally reset the form after successful submission
      setProductName("");
      setProductCode("");
      setDescription("");
      setCategory("");
      setPrice();
      setstock();
      setProductImage(null);
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-4 h-full">
      <div className="max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold font-Merriweather text-center mb-6">
          Add Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Product Name</label>
              <input
                type="text"
                value={productName}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Product Code</label>
              <input
                type="text"
                value={productCode}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => setProductCode(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Description</label>
              <input
                type="text"
                value={description}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Category</label>
              <select
                value={category}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Books">Books</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Price</label>
              <input
                type="number"
                value={price}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">stock</label>
              <input
                type="number"
                value={stock}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-2/3 text-sm p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-orange-500 rounded-md shadow hover:bg-orange-600"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="mt-4">
        <Product
          productName={productName}
          productCode={productCode}
          description={description}
          category={category}
          price={price}
          stock={stock}
          image={productImage}
        />
      </div>
    </div>
  );
};

export default AddProduct;
