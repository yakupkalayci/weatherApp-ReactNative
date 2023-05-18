import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = "6a95a6c1b4274679ad89b336dcee7fdd";


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query({
            query: (city) => `onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=minutely,hourly&appid=${apiKey}`
        })
    })
});

export const { useGetWeatherByCityQuery } = weatherApi;