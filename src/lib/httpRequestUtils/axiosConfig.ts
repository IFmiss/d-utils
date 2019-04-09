export function axiosConfig (axios, HttpRequestUtils) {
  axios.defaults.baseURL = HttpRequestUtils.baseUrl
  axios.defaults.timeout = HttpRequestUtils.timeOut
}
