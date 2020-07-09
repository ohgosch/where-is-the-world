/* eslint-disable quote-props */
import { isObject } from 'logics/object';

export const colors = {
  light: {
    'white': '#FFFFFF',
    'black': '#000000',
    'primary': '#FAFAFA',
    'secondary': '#121212',
    'text-dark': '#101113',
    'inputs': '#242426',
    'placeholder': '#888888',
    'country-title': '#232323',
    'country-infos': '#141517',
    'country-infos-description': '#292929',
  },
  dark: {
    'white': '#2b3743',
    'black': '#FFFFFF',
    'primary': '#202d36',
    'secondary': '#FFFFFF',
    'text-dark': '#FFFFFF',
    'inputs': '#FFFFFF',
    'placeholder': '#FFFFFF',
    'country-title': '#FFFFFF',
    'country-infos': '#FFFFFF',
    'country-infos-description': '#FFFFFF',
  },
};

export function color(query = '', theme) {
  const queryArray = query.split('.');
  let accumulator = { ...colors[theme] };

  queryArray.forEach((value) => {
    if (isObject(accumulator)) accumulator = accumulator[value];
  });

  return accumulator || colors.light.white;
}
