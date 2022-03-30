<template>
		<section id="about">
				<div class="left">
						<img src="@/assets/cakeImg1.jpg" alt="">
				</div>
				<div class="right">
						<h2>Direccion:</h2>
						<p>Avenida Siempreviva 742</p>
						<h2>Telefono:</h2>
						<p>55662233</p>
						<h2>Horario de atencion:</h2>
						<p>Lunes a Sábado de 9:00am a 22:00pm</p>
				</div>
		</section>
</template>
<script>
export default {
  name: 'AboutItem',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about{
		display: flex;
		display-direction: columns;
		justify-content: space-around;
}
#about img{
		width:100%;
		height: 400px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
