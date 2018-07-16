let apiBaseUrl = '/v2';

if ((typeof process.env.REACT_APP_API_BASE_URL !== 'undefined') && (process.env.REACT_APP_API_BASE_URL.length)){
  apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
}

export default {
  apiBaseUrl: apiBaseUrl
};
