import { isObject } from '../logics/object';

export const colors = {
  light: {
    white: '#FFF',
    primary: '#FAFAFA',
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
