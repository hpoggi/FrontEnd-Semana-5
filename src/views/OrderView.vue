<template>
  <div class="order">
  <FlavorSelection></FlavorSelection>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import FlavorSelection from '@/components/FlavorSelection.vue'
export default {
  name: 'OrderView',
  components: {
  /*   HelloWorld */
  FlavorSelection,
  }
}
</script>
