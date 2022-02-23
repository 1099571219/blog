import axios from "axios";
import VueAxios from 'vue-axios'
import {Message, message} from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = '//localhost:8080'

window.request = request

export default function request(url,type = 'GET',data={}){
    return new Promise((resolve,reject)=>{
        let option = {
            url,
            method:type,
        }
        if(type.toLowerCase()==='get'){
            option.params = data
        }else{
            option.data = data
        }
        if(localStorage.token){
            axios.defaults.headers.common['Authorization'] = localStorage.token
        }
        axios(option).then(res=>{
            console.log(res.data);
            if(res.data.status==='ok'){
                if(res.data.token){
                    localStorage.token = res.data.token
                }
                resolve(res.data)
            }else{
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(error=>{
            Message.error('网络异常')
            reject({msg:'网络异常'})
        })
    })
}