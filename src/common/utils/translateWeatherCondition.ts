import { WEATHER_CONDITIONS } from "../constants/weatherConditions"

export const translateWeatherCondidition = (condition: WEATHER_CONDITIONS, lang: 'en' | 'tr'):string => {
    if (lang === 'tr') {
        switch (condition) {
            case WEATHER_CONDITIONS.Ash:
                return "Kül";
            case WEATHER_CONDITIONS.Clear:
                return "Açık";
            case WEATHER_CONDITIONS.Clouds:
                return "Bulutlu";
            case WEATHER_CONDITIONS.Drizzle:
                return "Çişeleyen Yağmur";
            case WEATHER_CONDITIONS.Dust:
                return "Toz";
            case WEATHER_CONDITIONS.Fog:
                return "Sis";
            case WEATHER_CONDITIONS.Haze:
                return "Pus";
            case WEATHER_CONDITIONS.Mist:
                return "Buğu";
            case WEATHER_CONDITIONS.Rain:
                return "Yağmur";
            case WEATHER_CONDITIONS.Sand:
                return "Kum";
            case WEATHER_CONDITIONS.Smoke:
                return "Duman";
            case WEATHER_CONDITIONS.Snow:
                return "Kar";
            case WEATHER_CONDITIONS.Squall:
                return "Fırtına";
            case WEATHER_CONDITIONS.Thunderstorm:
                return "Gök Gürültüsü";
            case WEATHER_CONDITIONS.Tornado:
                return "Kasırga";
            default: 
                return condition;
        }
    } else {
        return condition;
    }
}