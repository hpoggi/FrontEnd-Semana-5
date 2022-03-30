<template>
		<section id="flavorMenu">
				<h2>Seleccione el pastel</h2>
				<div class="flavor-card-container">
						<div class="flavor-card" v-for="cake in cakes" :key="cake.id" :cake="cake">
								<img :src="cake.img" alt="">
								<div class="flavor-card-content">
										<div class="price">{{cake.price}}</div>
										<div class="flavor">{{cake.flavor}}</div>
										<div class="stars"></div>
										<button @click="addToCart(cake)">Add</button>
										<div class="productTotal" v-if="product_total">
												<h3>Carrito</h3>
												<h4>{{product_total(cake)}}</h4>

										</div>
								</div>
						</div>
				</div>
		</section>
</template>
<script>
import cakes from '../assets/cakes.js'

export default {
  name: 'FlavorSelection',
  methods:{
		addToCart(cake){
				this.$store.commit('addToCart',cake)
		}
  },
  props: {product: Object
  },
  computed:{
		product_total(cake){
				return this.$store.getters.productQuantity(cake)
		}
  },
  data(){
    return {
		cakes: cakes
	}
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
