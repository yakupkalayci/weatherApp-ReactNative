// Import ReduxToolkit
import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

// Initial State
interface IInitalState {
    myCities: string[];
}

const initialState:IInitalState = {
    myCities: ['istanbul', 'ankara', 'izmir', 'bursa', 'antalya'],
}

const persistConfig = {
    key: 'weather',
    storage: AsyncStorage
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
export default persistReducer(persistConfig, weatherSlice.reducer);