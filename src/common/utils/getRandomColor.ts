import {BASE_COLORS} from '../constants/baseColors';

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * Object.keys(BASE_COLORS).length);
  let color = Object.keys(BASE_COLORS)[index];
  if (color === 'white') {
    color = 'red';
  }
  return color;
};
