import axiosDefaults from 'axios/lib/defaults';

import { API_URL } from 'logics/utils/constants';

/**
 * Setup Axios
 */
export const axiosSetup = () => {
  axiosDefaults.baseURL = API_URL;
};
