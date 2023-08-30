import {configureStore} from "@reduxjs/toolkit";
import cartSlice from './cart/cartSlice';
import authSlice from "./auth/authSlice";
import favouriteSlice from './favourite/favouriteSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        favourite: favouriteSlice.reducer
    }
});

export default store;