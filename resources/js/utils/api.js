import axios from 'axios'

const api = () => {
    const _api = axios.create({
        baseURL: '/api'
    })

    return _api
}

export default api();