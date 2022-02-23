import request from "../../helpers/request";
import auth from "../../api/auth";

window.request = request
window.auth = auth

export default {
  data() {
    return {
      msg: '欢迎来到'
    }
  },
  methods: {
    onClick1() {
      
    },
    onClick2() {
      this.$message.error('错了哦，这是一条错误消息');
    }
  },
}