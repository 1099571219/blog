<template>
  <div id="home">
    <p>首页{{msg}}</p>
    
    <el-button @click="onClick1">按钮1</el-button>
    <el-button :plain="true" @click="onClick2">错误</el-button>
  </div>
</template>

<script src = './template.js'>
</script>
<style scoped lang="less" src = './template.less'>
</style>
