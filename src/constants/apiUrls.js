import config from '../config/config';

export default {
  BASE:  config.apiBaseUrl,
  FETCH_ALL: `${config.apiBaseUrl}/_catalog`
};
