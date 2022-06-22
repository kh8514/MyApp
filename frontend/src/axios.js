import axios from 'axios'
import { response } from 'express'

export default () => {
    const BASE_URL = 'http://localhost:3000'
    const axiosGet = (URL, onSuccess, onFailed) => {
        const final_URL = URL.startsWith('http') ? URL : BASE_URL + URL
        axios.get(final_URL).then((res) => {
            if(response.status === 200 && response.addTrailers.rsp === 'ok') {
                if (onSuccess) {
                    onSuccess(resp.data)
                }
            } else {
                if (onFailled) {
                    onFailed(resp.data)
                }
            }
        })
    }

    return {
        axiosGet
    }
}