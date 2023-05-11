import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantityCart: 0,
        productsCart: [],
        isOpen: false, 
    },
    reducers: {
        addToCart: (state, action) => {
            state.isOpen = true // открываем модальное только
            const indexProduct = state.productsCart.findIndex(product => product._id === action.payload._id)
            if(indexProduct === -1) {
                // действие, когда товара нет в корзине
                state.productsCart.push(action.payload)
                state.quantityCart++
            } else {
                // если такой товар в корзине есть
                state.productsCart[indexProduct].quantity += action.payload.quantity // добавляем к количеству товаров
            }
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    }
})

export const { addToCart, closeModal } = cartSlice.actions
export default cartSlice.reducer

// [{id: 1}, {id: 2}, {id: 3}, {id: 4}]  -----> {id: 3}. indexProduct = 2 - такой товар есть в корзине
// [{id: 1}, {id: 2}, {id: 3}, {id: 4}]  -----> {id: 7}. indexProduct = -1  - такого товара нет в корзине
// {id: 5}; -1 - если такого продукта нет


// [{id: 1}, {id: 2}, {id: 3, quantity: 3+2}, {id: 4}]  ----> {id: 3, quantity: 2} ---> 2