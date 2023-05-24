// Import React-Native-Toast
import Toast from "react-native-toast-message";

// Import Constants
import { TOAST_TYPES } from "../constants/toastTypes";

export const showToast = (title:string, type?:TOAST_TYPES, message?:string, time?:number) => {

    Toast.show({
        type: type,
        text1: title,
        text2: message,
        visibilityTime: time,
    })
}