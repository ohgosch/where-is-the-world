/* eslint-disable quote-props */
import { isObject } from '../logics/object';

export const colors = {
  light: {
    'white': '#FFF',
    'primary': '#FAFAFA',
    'secondary': '#121212',
    'text-dark': '#101113',
    'inputs': '#242426',
    'placeholder': '#888888',
    'country-title': '#232323',
    'country-infos': '#161616',
  },
};

export function color(query = '') {
  const queryArray = query.split('.');
  let accumulator = { ...colors.light };

  queryArray.forEach((value) => {
    if (isObject(accumulator)) accumulator = accumulator[value];
  });

  return accumulator || colors.light.white;
}
