import axios from "axios";
import VueAxios from 'vue-axios'
import {message} from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = '//localhost:8080'