export const isObject = (object) => !!object && typeof object === 'object' && object.constructor === Object;

export const isFilled = (object) => isObject(object) && !!Object.keys(object).length;

export default {
  isObject,
  isFilled,
};
