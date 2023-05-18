import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducers/weatherReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { weatherApi } from "../api/weather";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        weather: weatherReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch