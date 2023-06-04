import axios from "axios"
import Config from "react-native-config";

export const getCityLocationFromCoordinates = (lat: number | undefined, long: number | undefined) => {
    return axios.get(`https://us1.locationiq.com/v1/reverse?key=${Config.LOCATION_API_KEY}&lat=${lat}&lon=${long}&format=json`)
        .then(data => data.data)
        .catch(err => err);
}