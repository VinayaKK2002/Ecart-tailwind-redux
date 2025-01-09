import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/slice/proSlice'
import cartSlice from "./slice/cartSlice";
import wishlistSlice from "./slice/wishlistSlice";

const cStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }

})
export default cStore