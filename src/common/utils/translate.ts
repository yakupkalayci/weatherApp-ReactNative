import i18n from "../locales/i18n"

export const translate = (text:string):string => {
    return i18n.t(text);
}