import axios from "axios";
import { publicRequest } from "../Request/RequestMethod";

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

export const productfetchApi = async(type)=>{
  try{
    const productres = await publicRequest.post('product/productbycategory',type);
    console.log('products fetched',productres.data);
    return productres.data
  }catch(err){
    console.log('poduct fetch errr');
    throw err
  }

}