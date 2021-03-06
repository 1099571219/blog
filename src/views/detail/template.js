import {marked} from 'marked'
import blog from '../../api/blog'
export default {
    data () {
      return {
        title:'',
        rowContent:'',
        user:{},
        createdAt:'',

      }
    },
    created() {
      this.blogId = this.$route.params.blogId
      blog.getDetail({blogId:this.blogId}).then(res=>{
        this.title = res.data.title
        this.rowContent = res.data.content
        this.user = res.data.user
        this.createdAt = res.data.createdAt
      })
    },
    computed:{
      markdown(){
        return marked(this.rowContent)
      }
    }
  }