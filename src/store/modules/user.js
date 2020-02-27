import { login,getUserInfo,logout } from '../../api/user'
import { getToken, setToken, removeToken } from '../../utils/cookie'
const state = {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    auth: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_AUTH: (state, auth) => {
        state.auth = auth
    }
}

const actions = {
    async login({commit}, userInfo) {
        const { username, password } = userInfo
        const res = await login(username,password)
        const { data } = res
        commit('SET_TOKEN', data.token)
        setToken(data.token)
    },
    async getInfo({commit, state}) {
        const res  = await getUserInfo(state.token)
        if(!res){
            Promise.reject('请重新登录')
        }
        const {avatar, name, roles, auth } = res
        if(!roles){
            Promise.reject('请重新登录')
        }
        commit('SET_NAME',name)
        commit('SET_AVATAR',avatar)
        commit('SET_ROLES',roles)
        commit('SET_AUTH',auth)
        
    },
    async logout({commit, state, dispatch}) {
        const res = await logout(state.token)
        if(res) {
            commit('SET_TOKEN', '')
            commit('SET_NAME', '')
            commit('SET_AVATAR', '')
            commit('SET_ROLES',[])
            commit('SET_AUTH',[])
            removeToken()
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}