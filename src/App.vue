<template>
  <div id="app">
    <Header id="header"/>
    <router-view/>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  components: { Header,Footer },
  name: 'App'
}
</script>

<style lang='less'>
@import '~@/assets/style/common.less';
#app{
  text-align: center;
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
  'header header header'
  '.      main   .'
  'footer footer footer';
}
#header{
  grid-area: header;
  padding-left: 12%;
  padding-right: 12%;
}
#main{
  grid-area: main;
}
#footer{
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
}
@media (max-width:750px) {
  #app{
    grid-template-columns: 10px auto 10px;
    #header,#footer{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
