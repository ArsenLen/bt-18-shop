import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantityCart: 0,
        productsCart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.quantityCart++
            state.productsCart.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer