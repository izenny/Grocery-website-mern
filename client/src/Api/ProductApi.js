import axios from "axios";
export const newProductApi = async (product) => {
  try {
    const newPoduct = await axios.post("http://localhost:5000/product/addnewproduct", product);
    console.log("newproduct ", newPoduct);
  } catch (err) {
    console.log("error in product api",err);
  }
};
