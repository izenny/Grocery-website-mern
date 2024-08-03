import { userRequest } from "../Request/RequestMethod";

export const addtoCart = async (id, cartData) => {
  try {
    const response = await userRequest.post(`cart/addtocart/${id}`, cartData);
    return response.data;
  } catch (err) {
    console.log("Error adding to cart", err);
    throw err;
  }
};

export const fetchCartItems = async (id) => {
  try {
    const cartitems = await userRequest.get(`cart/fetchcart/${id}`);
    console.log('fetched cart',cartitems.data);
    
    return cartitems.data;
  } catch (err) {
    console.log("Error fetchcart", err);
    throw err;
  }
};
