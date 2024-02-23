import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: {},
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

export const { setApiConfiguration, setGenres } = homeSlice.actions;

export default homeSlice.reducer;