
<template>
		<section id="flavorMenu">
				<h2>Nuestro Menu</h2>
				<div class="flavor-card-container">
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="flavor-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="flavor-card-content">
										<div class="price">150</div>
										<div class="flavor">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
				</div>
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
