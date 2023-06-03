// Import RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import RN Config
import Config from 'react-native-config';


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query({
            query: (city) => `onecall?lat=${city.lat || city.latitude}&lon=${city.long || city.longitude}&lang=${city.lang}&units=metric&exclude=minutely&appid=${Config.WEATHER_API_KEY}`
        })
    })
});

export const { useGetWeatherByCityQuery } = weatherApi;