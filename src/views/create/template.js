import blog from "../../api/blog"
import markdownTextArea from '@/components/markdownTextArea'
export default {
  components: {
    markdownTextArea
  },
  data() {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },
  methods: {
    onCreate() {
      blog.createBlog({ title: this.title, content: this.content, description: this.description, atIndex: this.atIndex })
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}` })
        })
    }
  },
}