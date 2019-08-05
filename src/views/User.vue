<template>
  <div>
    <button type="button" @click="linkTo()">添加文章</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    linkTo () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>

</style>
