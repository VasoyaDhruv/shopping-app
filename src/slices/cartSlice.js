
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total"))
        : 0,
    totalItem: localStorage.getItem("totalItem")
        ? JSON.parse(localStorage.getItem("totalItem"))
        : 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartItem = action.payload;
            const index = state.cart.findIndex((item) => item.id === cartItem.id);
            if (index >= 0) {
                // If the course is already in the cart, do not modify the quantity
                toast.error("already in cart");
                return;
            }

            state.cart.push(cartItem);
            state.totalItem++;  
            state.total += cartItem.price;

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("totalItem", JSON.stringify(state.totalItem));

            toast.success("Added to Cart");
        },
        removeFromCart: (state, action) => {
            const cartItem = action.payload;
            console.log(cartItem);
            const index = state.cart.findIndex(item => item.id);
            if (index >= 0) {
                state.totalItem--;
                state.total -= state.cart[index].price;
                state.cart.splice(index, 1); // Remove 1 item at index
                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
                localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
                toast.success("Removed from cart");
            } else {
                console.warn("Item not found in cart:", cartItem);
            }
        },
        resetCart: (state) => {
            state.cart = [];
            state.total = 0;
            state.totalItem = 0;
            // Update to localstorage
            localStorage.removeItem("cart");
            localStorage.removeItem("total");
            localStorage.removeItem("totalItem");
        },
    },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
