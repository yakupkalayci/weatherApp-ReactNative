export const getRouteName = (routeName: string): string => {
    switch (routeName) {
        case 'home':
            return "HEADER.ROUTES.HOME";
        case 'cities':
            return "HEADER.ROUTES.CITIES";
        case 'settings':
            return "HEADER.ROUTES.SETTINGS";
        case 'location':
            return "HEADER.ROUTES.LOCATION";
        case 'details':
            return "HEADER.ROUTES.DETAILS";
        case 'map':
            return "HEADER.ROUTES.MAP";
        default: 
            return routeName;
    }
}