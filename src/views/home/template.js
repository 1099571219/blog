export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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