export function axiosConfig (axios, HttpRequestUtils) {
  axios.defaults.baseURL = HttpRequestUtils.baseUrl
  axios.defaults.timeout = HttpRequestUtils.timeOut
    // Add a request interceptor
  axios.interceptors.request.use((config: any) => {
    // Do something before request is sent
    return config
  }, (error) => {
    // Do something with request error
    return Promise.reject(error)
  })

  // Add a response interceptor
  axios.interceptors.response.use((response: any) => {
    // Do something with response data
    return response
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  })
}
