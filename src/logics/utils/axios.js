import axiosDefaults from 'axios/lib/defaults';

import { API_URL } from './constants';

export const axiosSetup = () => {
  axiosDefaults.baseURL = API_URL;
};
