// Import Screens
import Home from "../screens/home/Home";
import Cities from "../screens/cities/Cities";
import Settings from "../screens/settings/Settings";

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
];