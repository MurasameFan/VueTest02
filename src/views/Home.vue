<template>
  <div>
    <ul class="footer">
      <li><router-link :to = "{ name:'list'}">列表</router-link></li>
      <li><router-link :to = "{ name:'user'}">个人中心</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
  .footer{
    position: absolute;
    width: 100%;
    height: 60px;
    line-height: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .footer>li{
    font-size: 16px;
    flex: 1;
    text-align: center;
  }

  li{
    list-style: none;
  }

  a{
    color: #42b983;
    display: block;
    text-decoration: underline;
  &.active{
     color:#fff;
     background: #42b983;
   }
  }

</style>
