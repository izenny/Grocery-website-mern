// import React, { useEffect, useState } from "react";
// import Product from "../Components/Product";
// import Navbar from "../Components/Navbar";
// import { newProductApi } from "../Api/ProductApi";

// const AddProduct = () => {
//   const [productName, setProductName] = useState("");
//   const [productCode, setProductCode] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [mnfDate, setMnfDate] = useState("");
//   const [expDate, setExpDate] = useState("");
//   const [price, setPrice] = useState(0);
//   const [quantity, setQuantity] = useState(0);
//   const [productImage, setProductImage] = useState(null);
//   useEffect(() => {
//     const AddProductFuction = async () => {
//       try {
//         newProductApi({
//           productName,
//           productCode,
//           description,
//           category,
//           mnfDate,
//           expDate,
//           price,
//           quantity,
//           productImage,
//         });
//       } catch (error) {
//         console.log("eeror");
//       }
//     };
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProductImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center m-4 h-full">
//       <div className="max-w-md p-8 space-y-3 rounded-lg shadow">
//         <h2 className="text-3xl font-bold font-Merriweather text-center">
//           Add Product
//         </h2>
//         <div className="space-y-2">
//           <input
//             type="text"
//             placeholder="Product Name"
//             className="w-full p-2 text-sm border rounded-md"
//             onChange={(e) => setProductName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Product Code"
//             className="w-full p-2 border text-sm rounded-md"
//             onChange={(e) => setProductCode(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             className="w-full p-2 border text-sm rounded-md"
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Category"
//             className="w-full p-2 border text-sm rounded-md"
//             onChange={(e) => setCategory(e.target.value)}
//           />
//           <input
//             type="date"
//             placeholder="Manufacturing Date"
//             className="w-full p-2 border text-sm rounded-md"
//             onChange={(e) => setMnfDate(e.target.value)}
//           />
//           <input
//             type="date"
//             placeholder="Expiry Date"
//             className="w-full p-2 border text-sm rounded-md"
//             onChange={(e) => setExpDate(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             className="w-full p-2 border text-sm rounded-md"
//             onChange={(e) => setPrice(Number(e.target.value))}
//           />
//           <input
//             type="number"
//             placeholder="Quantity"
//             className="w-full p-2 border text-sm rounded-md"
//             onChange={(e) => setQuantity(Number(e.target.value))}
//           />
//         </div>
//         <div className="w-full p-2 border rounded-md">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full text-sm p-2"
//           />
//         </div>
//         <button className="w-full p-2 mt-4 text-white bg-orange-500 rounded-md">
//           Add Product
//         </button>
//       </div>
//       <div className="mt-4">
//         <Product
//           productName={productName}
//           description={description}
//           price={price}
//           image={productImage}
//         />
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
import React, { useState } from "react";
import Product from "../Components/Product";
import Navbar from "../Components/Navbar";
import { newProductApi } from "../Api/ProductApi";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [mnfDate, setMnfDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
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
        mnfDate,
        expDate,
        price,
        quantity,
        // productImage,
      });
      // Optionally reset the form after successful submission
      setProductName("");
      setProductCode("");
      setDescription("");
      setCategory("");
      setMnfDate("");
      setExpDate("");
      setPrice();
      setQuantity();
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
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Product Code</label>
              <input
                type="text"
                value={productCode}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setProductCode(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Description</label>
              <input
                type="text"
                value={description}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Category</label>
              <input
                type="text"
                value={category}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Manufacturing Date</label>
              <input
                type="date"
                value={mnfDate}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setMnfDate(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Expiry Date</label>
              <input
                type="date"
                value={expDate}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setExpDate(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Price</label>
              <input
                type="number"
                value={price}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Quantity</label>
              <input
                type="number"
                value={quantity}
                className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm "
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-2/3 text-sm p-2 border border-gray-300 rounded-md shadow-sm "
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
          productname={productName}
          productcode={productCode}
          description={description}
          category={category}
          mnfDate={mnfDate}
          expDate={expDate}
          price={price}
          quantity={quantity}
          image={productImage}
        />
      </div>
    </div>
  );
};

export default AddProduct;
