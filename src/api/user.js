import request from '../utils/request'
export const login = (username,password) => {
    return request({
        url: '/api/user/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export const getUserInfo = token => {
    return request({
        url: '/api/user/login',
        method: 'get',
        params: {
            token
        }
    })
}

export const logout = token => {
    return request({
        url: '/api/user/login',
        method: 'get',
        params: {
            token
        }
    })
}