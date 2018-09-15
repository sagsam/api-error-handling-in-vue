// axios instance
import axios from 'axios'
import qs from 'qs'

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: '//lperp.herokuapp.com/api/v1',
    paramsSerializer: function (params) {
        return qs.stringify(params, { indices: false })
    }
});

export const http = instance