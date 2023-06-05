// Import Screens
import Home from '../screens/home/Home';
import Cities from '../screens/cities/Cities';
import Settings from '../screens/settings/Settings';
import MyLocation from '../screens/my-location/MyLocation';
import WeatherDetails from '../screens/weather-details/WeatherDetails';
import Map from '../screens/map/Map';

export const routes = [
  {
    key: 'home',
    label: 'Home',
    showHeader: false,
    Component: Home,
  },
  {
    key: 'cities',
    label: 'Cities',
    showHeader: false,
    Component: Cities,
  },
  {
    key: 'settings',
    label: 'Settings',
    showHeader: false,
    Component: Settings,
  },
  {
    key: 'location',
    label: 'Location',
    showHeader: false,
    Component: MyLocation,
  },
  {
    key: 'details',
    label: 'Weather Details',
    showHeader: true,
    Component: WeatherDetails,
  },
  {
    key: 'map',
    label: 'Map',
    showHeader: true,
    Component: Map,
  },
];
