import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/slice/proSlice'
import wishlistSlice from "./slice/wishlistSlice";

const cStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice
    }

})
export default cStore