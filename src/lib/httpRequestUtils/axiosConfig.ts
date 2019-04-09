export function axiosConfig (axios, HttpRequestUtils) {
  axios.defaults.baseURL = HttpRequestUtils.baseUrl
  axios.defaults.timeout = HttpRequestUtils.timeOut
  // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  // axios.defaults.headers.common['Content-Type'] = 'application/json'
}
