import axios from "axios";

export const newProductApi = async (formData) => {
  try {
    console.log("newProduct ", formData);
    const newProduct = await axios.post(
      "http://localhost:5000/product/addnewproduct",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("newProduct ", newProduct);
  } catch (err) {
    console.log("error in product api", err);
  }
};
