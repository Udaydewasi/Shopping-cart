import { configureStore } from "@reduxjs/toolkit";
//there may be mistake
import CartSlice from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart : CartSlice
    }
})