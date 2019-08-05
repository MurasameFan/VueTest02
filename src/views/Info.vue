<template>
  <div>
    <h4>标题：</h4><p>标题</p>
    <h5>内容：</h5><p>内容</p>
    <div class="btn" @click="linkto()">返回列表页</div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    linkto () {
      this.$router.push('/home/list')
    }
  }
}
</script>

<style scoped>

</style>
