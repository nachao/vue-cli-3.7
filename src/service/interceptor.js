import { PREFIX } from './api'

export default class AxiosInterceptor {
    constructor ({ request, response }, router) {
        request.use(
            this._requestCorrect,
            this._requestError)

        response.use(
            this._responseCorrect,
            this._responseError)
    }

    _requestCorrect (request) {
        request.url = `${PREFIX}${request.url}`
        return request
    }

    _requestError (error) {
        return Promise.reject(error)
    }

    _responseCorrect(response) {
        return response
    }

    _responseError(error) {
        if (router && error.response.status === 401) {
            router.push('/login')
        }
        return Promise.reject(error)
    }
}
