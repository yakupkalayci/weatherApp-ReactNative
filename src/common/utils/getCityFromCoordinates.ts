import axios from "axios"
import { MAP_API_KEY } from '@env';

export const getCityFromCoordinates = (lat: number | undefined, long: number | undefined) => {
    return axios.get(`https://us1.locationiq.com/v1/reverse?key=${MAP_API_KEY}&lat=${lat}&lon=${long}&format=json`)
        .then(data => data.data)
        .catch(err => err);
}