import axios from 'axios'
import { ROAST_CONFIG } from '@/config'

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default {
  profile () {
    const Url = ROAST_CONFIG.main_api_url + 'profile'
    return axios({
      method: 'GET',
      url: Url
    }).then(response => {
      const data = response.data
      return data
    }).catch(response => {
      console.log('code catch', response)
    })
  }
}
