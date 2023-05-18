// Import ReduxToolkit
import { createSlice } from "@reduxjs/toolkit";

// Initial State
interface IInitalState {
    myCities: string[];
}

const initialState = {
    myCities: ['istanbul', 'ankara', 'izmir', 'bursa', 'antalya'],
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeCity: (state, action) => {
            state.myCities.filter(item => item !== action.payload.oldCity);
            state.myCities.push(action.payload.newCity);
        }
    }
});

export const { changeCity } = weatherSlice.actions;
export default weatherSlice.reducer