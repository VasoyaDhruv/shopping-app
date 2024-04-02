
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
    wishlist: localStorage.getItem("wishlist")
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [],
    // totalwish: localStorage.getItem("totalwish")
    //     ? JSON.parse(localStorage.getItem("totalwish"))
    //     : 0,
    totalItemWish: localStorage.getItem("totalItemWish")
        ? JSON.parse(localStorage.getItem("totalItemWish"))
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
            state.total = parseFloat((state.total).toFixed(2));

           
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("totalItem", JSON.stringify(state.totalItem));

            toast.success("Added to Cart");
        },
        addToWishlist: (state, action) => {
            const wishList = action.payload;
            const index = state.wishlist.findIndex((item) => item.id === wishList.id);
            if (index >= 0) {
                toast.error('already added');
                return;
            }
        
            state.wishlist.push(wishList);
            state.totalItemWish++;
        
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
            localStorage.setItem("totalItemWish", JSON.stringify(state.totalItemWish));
        
            toast.success("added to Wishlist");
        },
        removeFromCart: (state, action) => {
            const cartItem = action.payload;         
            const index = state.cart.findIndex(item => item.id);
            if (index >= 0) {
                state.totalItem--;
                state.total -= state.cart[index].price;
                state.total = parseFloat((state.total).toFixed(2));
                state.cart.splice(index, 1); // Remove 1 item at index
                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
                localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
                toast.success("Removed from cart");
            } else {
                console.warn("Item not found in cart:", cartItem);
            }
        },
        removeFromWishlist: (state, action) => {
            const wishList= action.payload;
            const index = state.wishlist.findIndex((item) => item.id === wishList.id);
            if (index >= 0) {
                state.totalItemWish--;
                state.wishlist.splice(index, 1); // Remove 1 item at index
                localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
                localStorage.setItem("totalItemWish", JSON.stringify(state.totalItemWish));
                toast.success("Removed from wishlist");
            } else {
                console.warn("Item not found in wishlist:", wishListItem);
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

export const { addToCart, removeFromCart, resetCart ,addToWishlist, removeFromWishlist} = cartSlice.actions;
export default cartSlice.reducer;
