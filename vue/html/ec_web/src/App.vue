<template>
  <div id="app">
    <div class="header">
      <h1>VUE.JS EC</h1>
      <li>ホーム</li>
      <li>カテゴリー</li>
      <li>カート</li>
      <div class="menu">
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <span>&copy;2018</span>
    </div>
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
  text-align: center;
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
  color: white;
  background: black;
  
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

.footer {
  height: 50px;
  line-height: 50px; 
  color: white;
  background: black;
}
</style>
