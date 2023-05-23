// Import ReduxToolkit
import { createSlice } from "@reduxjs/toolkit";

// Initial State
interface IInitalState {
    myCities: string[];
}

const initialState:IInitalState = {
    myCities: ['istanbul', 'ankara', 'izmir', 'bursa', 'antalya'],
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeCity: (state, action) => {
            const index = state.myCities.indexOf(action.payload.oldCity);
            state.myCities[index] = action.payload.newCity;
        }
    }
});

export const { changeCity } = weatherSlice.actions;
export default weatherSlice.reducer;