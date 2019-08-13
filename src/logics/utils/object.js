export const isObject = (object) => !!object && typeof object === 'object';

export const isFilled = (object) => isObject(object) && !!Object.keys(object).length;

export default {
  isObject,
  isFilled,
};
