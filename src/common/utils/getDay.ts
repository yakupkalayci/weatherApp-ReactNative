export const getDay = (timeStamp:number):string => {

    const day = new Date(timeStamp * 1000).getDay();
    const today = new Date().getDay()

    if(day === today) {
        if(new Date(timeStamp * 1000).getDate() === new Date().getDate()) {
            return "Today";
        }
    }
    if(day - today === 1) {
        return "Tomorrow";
    } else {
        switch(day) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "";
        }
    }
}