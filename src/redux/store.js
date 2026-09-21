import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'

const store = configureStore({
    reducer:{
        productReducer:productReducer
    }
})

export default store