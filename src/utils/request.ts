import axios from 'axios'

const options = {
  method: '',
  url: '',
  data: {},
  params: {},
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  crossDomain: true,
}

const request = (
  method: string,
  url: string,
  data?: { [x: string]: any },
  params?: { [x: string]: any }
) => {
  options.method = method
  options.url = 'http://localhost:8000' + url
  options.data = data ? data : {}
  options.params = params ? params : {}
  return axios.request(options)
}

const getListData = (pageId: number, pageSize: number, name: string) =>
  request('GET', `/api/${name}s`, {}, { page_id: pageId, page_size: pageSize })
export { getListData, request }
export default request
