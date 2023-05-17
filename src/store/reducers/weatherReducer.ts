import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherList: []
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    }
});

export default weatherSlice.reducer