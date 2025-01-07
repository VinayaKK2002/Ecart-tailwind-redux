import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/slice/proSlice'

const cStore=configureStore({
    reducer:{
        productReducer:productSlice

    }

})
export default cStore