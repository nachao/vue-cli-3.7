import axios from 'axios'
import { API } from '../api'

export function getList (params) {
    return axios({
        method: 'get',
        url: API.GET_TOPICS_LIST,
        params
    })
}