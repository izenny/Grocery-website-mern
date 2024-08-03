import axios from "axios";
import { publicRequest, userRequest } from "../Request/RequestMethod";

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

export const productfetchApi = async (type) => {
  try {
    const productres = await publicRequest.post(
      "product/productbycategory",
      type
    );
    console.log("products fetched", productres.data);
    return productres.data;
  } catch (err) {
    console.log("poduct fetch errr");
    throw err;
  }
};
// export const productFetchById = async (productId) => {
//   try {
//     // const products = await userRequest.get(`product/productbyid/${id}`,productId);
//     const products = await publicRequest.get("product/productbyid", productId);

//     console.log("products fetchedghjfgh", products.data);
//     return products.data;
//   } catch (err) {
//     console.log("poduct fetch errr");
//     throw err;
//   }
// };
export const productFetchById = async (productId) => {
  try {
    const response = await publicRequest.get(`/product/productbyid/${productId}`);
    console.log("products fetchedghjfgh", response.data);
    return response.data;
  } catch (error) {
    console.log("error in fetching product", error);
    throw error;
  }
};