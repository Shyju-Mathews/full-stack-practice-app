import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/Product_slice"
import CounterSlice from "./slices/CounterSlice";


const store = configureStore({
    reducer: {
        product: ProductSlice,
        counter: CounterSlice
    }
})


export default store