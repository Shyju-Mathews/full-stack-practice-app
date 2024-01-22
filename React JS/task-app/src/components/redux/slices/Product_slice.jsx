import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

// const initialState = {
//     products: [{
//         id: 1,
//         productName: 'chips',
//         productPrice: "100",
//         productQuantity: 1
//     }]
// }


export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products.push(action.payload)
        }
    }
})


export const {setProducts} = ProductSlice.actions
export default ProductSlice.reducer