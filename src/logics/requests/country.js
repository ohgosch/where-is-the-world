import Axios from 'axios';

export const getAll = () => (
  Axios.get('/all')
);

export const getConutry = (code) => (
  Axios.get(`/alpha/${code}`)
);

export const getByCodes = (codes = []) => (
  Axios.get('/alpha', {
    params: {
      codes: codes.join(';'),
    },
  })
);
