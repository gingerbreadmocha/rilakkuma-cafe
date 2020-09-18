<template>
  <div id="app">
    <div class = "topnav">
      <router-link class="navText" :to="{name: 'HelloWorld'}">Home</router-link>
      <router-link class="navText" :to="{name: 'About'}">About</router-link>
      <router-link class="navText" :to="{ name: 'Menu'}">Menu</router-link>
      <router-link class="navText" :to="{ name: 'AddItem'}">Add</router-link>
    </div>
    <img class="banner" src="./assets/cafe_banner.png">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.banner{
  height: 700px;
  width: 100%;
  object-fit: cover;

}
.topnav {
  background-color: #333;
  width: 100%;
  overflow: hidden;
}
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  height: 30px;
}
.navText {
  margin-left: 10px;
  margin-top: 10px;
  text-decoration: none;
}
</style>
