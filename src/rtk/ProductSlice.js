import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Create Thunk To Use Async Await To fetching Data Api
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resFetchData = await fetch("http://localhost:3000/products");
    const dataProducts = await resFetchData.json();
    return dataProducts;
  }
);
// Create Slice Product Store
const productsData = createSlice({
  initialState: [],
  name: "products",
  reducers: {},
  extraReducers: (builder) => {
    // If Data Fetching Success Return All Data Fetch
    builder.addCase(fetchProducts.fulfilled, (state, actions) => {
      return actions.payload;
    });
  }
});

export const {} = productsData.actions;
export default productsData.reducer;
