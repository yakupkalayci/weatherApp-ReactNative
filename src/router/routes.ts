// Import Screens
import Home from "../screens/home/Home";
import Cities from "../screens/cities/Cities";
import Settings from "../screens/settings/Settings";
import MyLocation from "../screens/my-location/MyLocation";
import WeatherDetails from "../screens/weather-details/WeatherDetails";
import Map from "../screens/map/Map";

export const routes = [
    {
        key: 'home',
        label: 'Home',
        Component: Home
    },
    {
        key: 'cities',
        label: 'Cities',
        Component: Cities
    },
    {
        key: 'settings',
        label: 'Settings',
        Component: Settings
    },
    {
        key: 'location',
        label: 'Location',
        Component: MyLocation
    },
    {
        key: 'details',
        label: 'Weather Details',
        Component: WeatherDetails
    },
    {
        key: 'map',
        label: 'Map',
        Component: Map
    }
];