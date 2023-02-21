import { createSlice } from "@reduxjs/toolkit";
// Slice Of Cart Add
const CartProduct = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    // Add To Cart Actions
    addToCart: (state, action) => {
        // Loop On all Product To find ProductId === Action Product
        const quantityProduct = state.find((productQuantity) => productQuantity.id === action.payload.id)
        // If Quantity Of Product Add + 1
        if(quantityProduct){
            quantityProduct.quantity += 1;
        }else{
            // Empty Product And Add 1
            const productQuan = {...action.payload, quantity : 1 }
            state.push(productQuan)
        }

    },
    // Remove Product From Cart
    removeFromCart: (state, action) => {
        // Filter Product If Not Equel id Product
        return state.filter((product) => product.id != action.payload.id)
    },
    // clear All Cart
    clear: (state, action) => {
        // Return Array 0
        return []
    }
  }
});

export const {addToCart, removeFromCart, clear} = CartProduct.actions;
export default CartProduct.reducer;