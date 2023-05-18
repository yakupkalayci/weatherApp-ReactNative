import { cities } from "../constants/cities"

export const getCity = (name:string): object => {
    const index = cities.findIndex(city => city.name === name.toLocaleUpperCase());    
    if(index > -1) return cities[index];
    return {};
}