import axios from 'axios'
import { ROAST_CONFIG } from '@/config'

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default {
  getCode (mobile) {
    const Url = ROAST_CONFIG.main_api_url + 'code'
    const Orgdata = { mobile: mobile }

    return axios({
      method: 'POST',
      url: Url,
      data: Orgdata
    }).then(response => {
      const data = response.data
      return data
    }).catch(response => {
      console.log('code catch', response)
    })
  },

  login (key, code, mobile) {
    const Url = ROAST_CONFIG.main_api_url + 'login'
    const Orgdata = {
      key: key,
      code: code,
      mobile: mobile
    }

    return axios({
      method: 'POST',
      url: Url,
      data: Orgdata
    }).then(response => {
      const data = response.data
      return data
    }).catch(response => {
      console.log('code catch', response)
    })
  }
}
