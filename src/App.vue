<template>
  <nav>
    <router-link to="/">Cliente</router-link> |
    <router-link to="/#about">About</router-link>
    <router-link to="/#flavorMenu">Nuestro Menu</router-link>
    <router-link to="/#decorationMenu">Decoraciones</router-link>
    <router-link to="/#order">Pedido</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
