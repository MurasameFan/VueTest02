<template>
<!--  <el-row class="tac">-->
<!--    <el-col :span="24">-->
<!--      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"-->
<!--               unique-closed-->
<!--               router-->
<!--               background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">-->
<!--        <el-submenu index="1">-->
<!--          <template slot="title">-->
<!--            <i class="el-icon-location"></i>-->
<!--            <span>导航一</span>-->
<!--          </template>-->
<!--          <el-menu-item-group>-->
<!--            <el-menu-item index="/">选项1</el-menu-item>-->
<!--            <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--            <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--            <el-menu-item index="1-4">选项4</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--        </el-submenu>-->

<!--        <el-submenu index="2">-->
<!--          <template slot="title">-->
<!--            <i class="el-icon-location"></i>-->
<!--            <span>导航二</span>-->
<!--          </template>-->
<!--          <el-menu-item-group>-->
<!--            <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--            <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--            <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--            <el-menu-item index="2-4">选项4</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--        </el-submenu>-->

<!--      </el-menu>-->
<!--    </el-col>-->
<!--  </el-row>-->
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        class="el-menu-vertical-demo"
        router
        unique-closed
        @open="handleOpen"
        @close="handleClose"
        background-color="#fff"
        text-color="#000"
        active-text-color="#fff"
      >

        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
          <template slot="title">
            <icon name="user"/><span v-text="item.name"></span>
          </template>
          <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
            <icon name="copyright"/><el-menu-item :index="sub.componentName" v-text="sub.name">
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import menu from '@/../config/menu-config'

export default {
  name: 'NavMenu',
  data () {
    return {
      menu: menu
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
