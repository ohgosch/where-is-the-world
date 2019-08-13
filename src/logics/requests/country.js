import Axios from 'axios';

export const getAll = () => (
  Axios.get('/all')
);
