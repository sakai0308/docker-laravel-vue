<template>
  <div id="app">
    <el-header>
      <router-link :to="{ name: 'ItemList' }">
        <h1 class="header-title">VUE.JS EC</h1>
      </router-link>
    </el-header>
    <div class="content">
      <router-view/>
    </div>
    <el-footer class="footer">
      <span>&copy;2018</span>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
li {
  list-style: none;
}
section {
  margin: 15px 0;
}
.el-header, .el-footer {
  padding: 0px;
  text-align: center;
  line-height: 60px;
  color: white;
  background: black;
}
.content {
  min-height: calc(100vh - 120px);
  padding: 30px 0;
}
.router-link-active {
  text-decoration: none;
  color: white;
}
.sub-title {
  text-align: center;
  margin: 0 0 30px;
}
.w-100 {
  width: 100%;
}
.text-center {
  text-align: center;
}
</style>
