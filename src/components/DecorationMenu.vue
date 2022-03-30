

<template>
		<section id="decorationMenu">
				<h2>Decoraciones</h2>
				<div class="decoration-card-container">
						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>

						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						
						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						<div class="decoration-card">
								<img src="@/assets/vainilla.webp" alt="">
								<div class="decoration-card-content">
										<div class="price">150</div>
										<div class="decoration">Vainilla</div>
										<div class="stars"></div>
								</div>
						</div>
						</div>
		</section>
</template>
<script>
		export default {
						name: 'DecorationMenu',
						props: {
								}
				}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.decoration-card-container{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 20px;
		width: 80%;
		position: relative;
		left: 10%;
}
.decoration-card{
		flex: 1 0 21%;
}
.decoration-card img{
		width: 200px;
		height: 200px;


}
.price:before{
		content: "$";
}

</style>
