<template>
  <div id="app">
    <div id="nav">
      <h1>Movie<span>Flix</span></h1>
      <router-link to="/">Home</router-link>
    </div>
    <router-view :key="this.$route.path"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

body{
  background-color: #333;

}

#nav {
  padding: 30px;
  text-align: center;
}

#nav h1 span {
  color:red;
  padding-bottom: 0;
  font-size: 40px
}

#nav a {
  font-weight: bold;
  color: #42b983;
  font-size: 20px
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
