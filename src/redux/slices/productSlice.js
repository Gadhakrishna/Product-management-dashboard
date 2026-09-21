import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts=createAsyncThunk("products/getAllProducts",async()=> {
    const result = await axios.get("https://dummyjson.com/products")
    console.log(result.data.products);
    return result.data.products
    
})

const productSlice = createSlice({
    name:"products",
    initialState: {
        allProducts:[],
        dummyAllProducts:[],
        loading:true,
        error:''
    },
    reducers :{
        searchProduct: (state, action) => {
        state.allProducts = state.dummyAllProducts.filter(
            item => item.title.toLowerCase().includes(action.payload.toLowerCase())
        )},
        deleteProduct: (state, action) => {
        state.allProducts = state.allProducts.filter(
            item => item.id !== action.payload
        )
        state.dummyAllProducts = state.dummyAllProducts.filter(
            item => item.id !== action.payload
        )},
        addProduct: (state, action) => {
            state.allProducts.push(action.payload)
            state.dummyAllProducts.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.dummyAllProducts = action.payload
            state.loading=false
            state.error=''
        })
         builder.addCase(getAllProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.loading=true
            state.error=''
        })
         builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.loading=false
            state.error='API CALL FAILED...'
        })
    }
})

export const { searchProduct,deleteProduct,addProduct } = productSlice.actions
export default productSlice.reducer