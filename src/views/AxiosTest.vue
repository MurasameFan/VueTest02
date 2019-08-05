<template>
<div>AxiosTest
  <button type="button" @click="getToken">使用默认用户名密码登录</button>
  <button type="button" @click="getStaffAll">获取员工数据的的</button>
</div>
</template>

<script>
export default {
  name: 'AxiosTest',
  methods: {
    getStaffAll () {
      // this.$axios({
      //   method: 'get',
      //   url: 'api/worker/queryAllStaffNew',
      //   data: {
      //     name: 'NB'
      //   }
      // })
      this.$axios.get('/api/worker/queryAllStaffNew', {
        params: {
          responseData: 'aaa'
        },
        headers: {'token': localStorage.getItem('token')}
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    getToken () {
      this.$axios.post('/api/login', this.$QS.stringify({
        tel: '12345678910',
        password: '123'
      })).then(function (response) {
        console.log(response)
        console.log(response.data.data.token)
        const token = response.data.data.token
        localStorage.setItem('token', token)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  data () {
    return {
      tokenNew: '没用上，为什么？？？思考一下'
    }
  }
}
</script>

<style scoped>

</style>
