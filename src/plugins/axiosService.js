import axios from "axios";
import { getToken } from './auth'
import store from '../store'
const baseUrl = 'http://127.0.0.1:8000'
export default {
    postFormData(url,params){
        let config;
        let token = getToken()

        config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.post(baseUrl+url, params, config)
    },
    postData(url,formData){
        let config;
        let token = getToken()

        if(token){
            config = {
                headers: {
                    'Content-Type': 'application/ld+json',
                    'Authorization': 'Bearer ' + token
                },
                onUploadProgress: function(progressEvent) {
                    let percentage = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                    store.commit('upload/setPercentage',{uid: formData.get('uid'), percentage: percentage})
                }
            }

        }else {
            config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        }
        // this.getIntercept()
        return axios.post(url, formData, config)
    },
    post(url,params){
        var config;
        var token = getToken()

        if(token){
            config = {
                headers: {
                    'Content-Type': 'application/ld+json',
                    'Authorization': 'Bearer ' + token
                }
            }

        }else {
            config = {
                headers: {
                    'Content-Type': 'application/ld+json'
                }
            }
        }
       // this.getIntercept()
        return axios.post(baseUrl+url, params, config)
    },
    get(url){
        var token = getToken()
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        //this.getIntercept()
        return axios.get(url, config)
    }
}
