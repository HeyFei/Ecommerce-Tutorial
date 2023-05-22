import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cart/cartSlice';
import authSlice from "./auth/authSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
    }
});

export default store;