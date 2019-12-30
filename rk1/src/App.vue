<template>
  <div id="app">
  
		 <div class="my-tab">
			 <div  v-for="(v,i) in 3" :key="i" @click="fn(v,i)" :class="[cont==i?'active':'']">第{{v}}个</div>
		 </div> 
		  <div>
			  {{content}}
		  </div>
	
  </div>
</template>
<script>
	export default {
		data(){
			return {
				cont:0,
				content:1,
			}
		},
		methods:{
			fn(v,i){
				this.cont=i;
				this.content=v;
			}
		}
	}
</script>
<style lang="scss">
#app{
	width: 300px;
	height: 400px;
	display: flex;
	flex-direction: column;
	.my-tab{
		width: 100%;
		height: 40px;
		display: flex;
		div{
			flex: 1;
			text-align: center;
			line-height: 40px;
			background: pink;
			&.active{
				background: skyblue;
			}
		}
	
	}
}
</style>
