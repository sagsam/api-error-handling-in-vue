// axios instance
import axios from 'axios'
import qs from 'qs'

/**
 *
 * parse error response
 */
function parseError (messages) {
    // error
    if (messages) {
      if (messages instanceof Array) {
        return Promise.reject({ messages: messages })
      } else {
        return Promise.reject({ messages: [messages] })
      }
    } else {
      return Promise.reject({ messages: ['Error ...'] })
    }
}

/**
 * parse response
 */
function parseBody (response) {
    if (response.status === 200) {    
        return response.data
      } else {
        return this.parseError(response.data.messages)
      }
    }

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: '//lperp.herokuapp.com/api/v1',
    paramsSerializer: function (params) {
        return qs.stringify(params, { indices: false })
    }
})

// response parse
instance.interceptors.response.use((response) => {
    return parseBody(response)
  }, error => {
    if (error.response) {
        console.warn('Error status', error.response.status)
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);        
        if (error.response.status === 400){
            // Bad Request
            return parseError(error.response.data)
        }else if(error.response.status === 401){
            return parseError('UnAuthorized')
        }else if(error.response.status === 404){
            return parseError('API Route is Missing or Undefined')
        }else if(error.response.status === 405){
            return parseError('API Route Method Not Allowed')
        }else if(error.response.status === 422){
            return parseError('Unprocessable Entity')
        }else if(error.response.status >= 500){
            return parseError('Server Error')
        }else {
            return parseError()
        }

    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);

    } else {
        // Something happened in setting up the request that triggered an Error
        console.warn('Error', error.message);
    } 
    console.log(error.config);
})

export const http = instance