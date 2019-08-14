import Axios from 'axios';

/**
 * Get all countries
 */
export const getAll = () => (
  Axios.get('/all')
);

/**
 * Get Country info
 *
 * @param {String} code
 */
export const getCountry = (code) => (
  Axios.get(`/alpha/${code}`)
);

/**
 * Get countries by code
 *
 * @param {Array} codes
 */
export const getByCodes = (codes = []) => (
  Axios.get('/alpha', {
    params: {
      codes: codes.join(';'),
    },
  })
);
