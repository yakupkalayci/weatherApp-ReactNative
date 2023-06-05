export const formatCityName = (cityName: string): string => {
  let formattedName = cityName.toLocaleLowerCase();
  formattedName = formattedName[0].toLocaleUpperCase() + formattedName.slice(1);
  return formattedName;
};
