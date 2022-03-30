<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Hola"/> -->
<NavItem></NavItem>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import NavItem from '/src/components/Nav.vue'

export default {
  name: 'HomeView',
  components: {
  /*   HelloWorld */
  NavItem
  }
}
</script>
