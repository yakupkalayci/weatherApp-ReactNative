// Import RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import RN Config
import Config from 'react-native-config';

// Import Types
import { WeatherDataType } from '../common/types/weatherData';
import { City } from '../common/types/city';
import { LatLng } from 'react-native-maps';


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherDataType, City | LatLng>({
            query: (city) => `onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=minutely&appid=${Config.WEATHER_API_KEY}`
        })
    })
});

export const { useGetWeatherByCityQuery } = weatherApi;