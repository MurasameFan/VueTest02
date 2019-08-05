<template>
  <div>List
    <ul class="list">
      <li v-for="(item,index) in pageLists"
      :key="index"
      @click="linkto()">
        {{item.title}}-{{item.content}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'List',
  store,
  computed: {
    pageLists () {
      return store.state.lists
    }
  },
  methods: {
    linkto () {
      this.$router.push('/info')
    }
  }
}
</script>

<style scoped lang="scss">
.list>li:hover{
  background-color: forestgreen;
  cursor: pointer;
}

</style>
