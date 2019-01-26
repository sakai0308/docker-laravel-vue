<template>

  <div id="app">
    <el-header class="header">
      <router-link :to="{ name: 'ItemList' }">
      <h1>VUE.JS EC</h1>
      </router-link>
      <ul class="menu_list">
        <li>ホーム</li>
        <li>カテゴリー</li>
        <li>カート</li>
      </ul>
      <div class="menu">
        <li></li>
        <li></li>
        <li></li>
      </div>
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
  padding: 0 30px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 50px;
  width: 100%;
  color: white;
  background: black;
  position: fixed;
  z-index: 1000;
}

.router-link-active {
  text-decoration: none;
  color: white;
}

.menu {
  width: 40px;
  height: 40px;
  margin: 5px 0;
}

.menu li {
  color: white;
  width: 30px;
  height: 5px;
  margin: 5px;
  padding: 0;
  border-bottom: solid 2px white;
}

.menu_list {
  display: flex;
}

.content {
  min-height: 95vh;
  padding-top: 100px;
}

.footer {
  margin-top: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  background: black;
}

@media screen and (max-width:480px){
  ul li {
    display: none;
  }

  h1 {
    flex-basis: 200px;
  }

  .menu {
    flex-basis: 50px;
  }
}
</style>
