import { userRequest } from "../Request/RequestMethod";

// Add item to cart
export const addtoCart = async (id, cartData) => {
  try {
    const response = await userRequest.post(`cart/addtocart/${id}`, cartData);
    console.log("Added to cart", response.data);
    return response.data;
  } catch (err) {
    console.log("Error adding to cart", err);
    throw err;
  }
};

// Fetch cart items
export const fetchCartItems = async (id) => {
  try {
    const cartItems = await userRequest.get(`cart/fetchcart/${id}`);
    console.log("Fetched cart", cartItems.data);
    return cartItems.data;
  } catch (err) {
    console.log("Error fetching cart", err);
    throw err;
  }
};

// Remove item from cart
export const removeCartItem = async (id, { productId }) => {
  try {
    const response = await userRequest.put(`cart/removeitem/${id}`, { productId });
    console.log("Removed item from cart", response.data);
    return response.data;
  } catch (err) {
    console.log("Error removing item from cart", err);
    throw err;
  }
};

// Delete cart (remove all items)
export const deleteCart = async (id) => {
  try {
    const response = await userRequest.delete(`cart/deletecart/${id}`);
    console.log("Cart deleted", response.data);
    return response.data;
  } catch (err) {
    console.log("Error deleting cart", err);
    throw err;
  }
};

// Update cart item quantity
export const updateCartItemQuantity = async (id, { productId, quantity }) => {
  try {
    const response = await userRequest.put(`cart/updatequantity/${id}`, { productId, quantity });
    console.log("Updated cart item quantity", response.data);
    return response.data;
  } catch (err) {
    console.log("Error updating cart item quantity", err);
    throw err;
  }
};
