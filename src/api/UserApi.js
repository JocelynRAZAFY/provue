import axiosService from '../plugins/axiosService'

export default {
    async login(param){
        return axiosService.post('/api/user/login',param)
    },
}
