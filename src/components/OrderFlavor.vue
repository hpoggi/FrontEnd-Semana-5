<template>
		<section id="orderFlavor">
				<h2>Elija los sabores</h2>
				<div class="flavor-selection-container"></div>
		</section>
</template>
<script>
export default {
  name: 'FlavorMenu',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flavor-card-container{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 20px;
		width: 80%;
		position: relative;
		left: 10%;
}
.flavor-card{
		flex: 1 0 21%;
}
.flavor-card img{
width: 200px;
height: 200px;


}
.price:before{
content: "$";
}

</style>
