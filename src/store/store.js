import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

const reducer = {
    home: homeSlice,
};

export const store = configureStore({
    reducer,
});