import UserApi from '../api/UserApi'
import {setToken} from "../plugins/auth";

export default {
    namespaced: true,
    state: {
        isUser: true,
        token: ''
    },
    mutations: {
        setToken(state,token){
            state.token = token
        }
    },
    actions: {
        async loginAction(context,param){
            const res = await UserApi.login(param)
            if(res.data.token != null){
                context.commit('setToken', res.data.token)
                setToken(res.data.token)
            }
        },
    }
}
