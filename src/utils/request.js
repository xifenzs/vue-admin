import axios from 'axios'

const server = axios.create({
    baseURL: '',
    timeout: 5000
})

server.interceptors.request.use(config => {
    return config
} ,error => {
    console.log(error)
})

server.interceptors.response.use(response => {
    return response
},error => {
    console.log(error)
})

function request(options){
    return server(options)
    .then(response => {
        return response
    }).catch(error => {
        const { status, statusText } = error
        console.log(status+ statusText)
    })
}

export default request