import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCartItems, addtoCart, removeCartItem, updateCartItemQuantity } from "../Api/CartApi";

// Async thunks
export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const response = await fetchCartItems(userId);
  return response;
});

export const addItem = createAsyncThunk(
  "cart/addItem",
  async ({ userId, productData }) => {
    const response = await addtoCart(userId, productData);
    console.log('dadaddadad',response);
    
    return response;
  }
);

export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async ({ userId, productId }) => {
    const response = await removeCartItem(userId, { productId });
    return {productId,totalPrice: response.totalPrice}; // Returning productId for state update
  }
);
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ userId, productId, quantity }) => {
    const response = await updateCartItemQuantity(userId, { productId, quantity });
    return { productId, quantity, totalPrice: response.totalPrice }; // Include totalPrice in the response
  }
);


// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {
      items: [],
      totalPrice: 0,
    },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.items.push(action.payload);
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        const { productId, totalPrice } = action.payload;
        state.items.items = state.items.items.filter((item) => item.product._id !== productId);
        state.items.totalPrice = totalPrice; 
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const { productId, quantity, totalPrice } = action.payload;
        const existingItem = state.items.items.find((item) => item.product._id === productId);
        if (existingItem) {
          existingItem.quantity = quantity;
        }
        state.items.totalPrice = totalPrice; // Update totalPrice with the new value
      });
      
  },
});

export default cartSlice.reducer;
