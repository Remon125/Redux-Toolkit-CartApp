import { configureStore } from '@reduxjs/toolkit'
import productsData from './ProductSlice'
import CartProduct from './CartSlice'
// Store Iclude All Reducer 
export const store = configureStore({
  reducer: {
 products:productsData,
 cart:CartProduct,
 
  },
})

