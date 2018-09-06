import HttpRequest from '@/libs/axios'
import config from '@/config'
// dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
// pro: 'https://produce.com'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const axios = new HttpRequest(baseUrl)
export default axios
