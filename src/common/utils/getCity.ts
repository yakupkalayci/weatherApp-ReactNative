import { cities } from "../constants/cities"
import { City } from "../types/city";

export const getCity = (name:string): City | object => {
    const index = cities.findIndex(city => city.name === name.toLocaleUpperCase());    
    if(index > -1) return cities[index];
    return {};
}