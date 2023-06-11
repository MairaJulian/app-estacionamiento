import { configureStore } from "@reduxjs/toolkit";
import LocationSlice from "./locations/LocationSlice";

export const store = configureStore({
    reducer: {
        location : LocationSlice,
    }
})