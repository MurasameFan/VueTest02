<template>
  <div>
    <form action="" v-if="isReg">
      用户名：<input type="text" v-model="name">
      密码：<input type="password" v-model="password">
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form action="" v-else>
      用户名：<input type="text" v-model="name">
      密码：<input type="password" v-model="password">
      再次输入密码：<input type="password" v-model="repeat">
      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancle()">取消</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isReg: true,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('name') === this.name && localStorage.getItem('passwd') === this.password) {
        this.name = ''
        this.password = ''
        this.$router.push('/home/list')
      } else if (localStorage.getItem('name') === this.name) {
        alert('密码错误，请重新输入')
      } else {
        alert('该用户没有注册')
        this.name = ''
        this.password = ''
      }
    },
    reg () {
      this.isReg = false
    },
    addUser () {
      if (this.password === this.repeat) {
        localStorage.setItem('name', this.name)
        localStorage.setItem('passwd', this.password)
        this.name = ''
        this.password = ''
        this.isReg = true
      } else {
        alert('两次密码输入不一样')
      }
    },
    cancle () {
      this.isReg = false
    }
  }
}
</script>

<style scoped>

</style>
