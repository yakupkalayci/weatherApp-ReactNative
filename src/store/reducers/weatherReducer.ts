// Import ReduxToolkit
import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

// Import Store
import { RootState } from "../store";

// Import i18next
import i18n from '../../common/locales/i18n';

// Import Types
import { Themes } from "../../common/theme/type";

// Initial State
interface IInitalState {
    myCities: string[];
    theme: Themes,
    lang: string
}

const initialState:IInitalState = {
    myCities: ['istanbul', 'ankara', 'izmir', 'bursa', 'antalya'],
    theme: 'light',
    lang: 'en'
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
        },
        changeStoreTheme: (state, action) => {
            const newTheme = action.payload;
            state.theme = newTheme;
        },
        changeStoreLang: (state, action) => {
            const newLang = action.payload;
            state.lang = newLang;
        }
    }
});

export const selectTheme = (state:RootState) => state.weather.theme;
export const { changeCity, changeStoreTheme, changeStoreLang } = weatherSlice.actions;
export default persistReducer(persistConfig, weatherSlice.reducer);