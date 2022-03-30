
<template>
  <div class="home">
		<AboutItem></AboutItem>
		<FlavorMenu></FlavorMenu>
		<DecorationMenu></DecorationMenu>
		<OrderSelection></OrderSelection>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import AboutItem from '@/components/AboutItem.vue'
import FlavorMenu from '@/components/FlavorMenu.vue'
import DecorationMenu from '@/components/DecorationMenu.vue'
import OrderSelection from '@/components/OrderSelection.vue'
export default {
  name: 'HomeView',
  components: {
  /*   HelloWorld */
  AboutItem,
  FlavorMenu,
  DecorationMenu,
  OrderSelection
  }
}
</script>
