<template>
  <div id="app">
    <!-- 路由入口：使用 router-link 组件进行导航，通过传递 `to` 来指定链接 -->
    <Button><router-link to="/">Go to Index</router-link></Button>
    &nbsp;&nbsp;&nbsp;
    <router-link to="/about">Go to About</router-link>
    <!-- 路由出口： 使用 router-view 组件进行展示，路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
