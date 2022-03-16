import blog from "../../api/blog";
export default {
  data() {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false,
      blogId: null
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title
      this.content = res.data.content
      this.atIndex = res.data.atIndex
      this.description = res.data.description
    })
  },
  methods: {
    onEdit() {
      this.$confirm('是否更新内容?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        blog.updateBlog({ blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex }).then(res => {
            this.$message.success(res.msg);
            this.$router.push({path:`/detail/${res.data.id}`})
          })
      }).catch((err) => {
        this.$message({
          type: 'info',
          message: '已取消编辑'
        });
      });
    },
  }
}