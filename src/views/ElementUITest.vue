<template>
  <div>
    <el-container>
      <el-header class="header">
        <myheader></myheader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/views/NavMenu'
import Header from '@/views/Header'
export default {
  name: 'ElementUITest',
  components: {
    'navmenu': NavMenu,
    'myheader': Header
  }
}
</script>

<style scoped>
.header{
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
</style>
