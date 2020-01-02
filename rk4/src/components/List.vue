<template>
	<div class="list">
		<div v-for="(v,i) in list" :key="i" class="list-v">
			  <div>
				  <img  :src="v.img"/>
			  </div>
			  <div>
				  <h4>{{v.title}}</h4>
				  <p>{{v.content}}</p>
			  </div>
		</div>
	</div>
</template>

<script>
	import {mapState} from "vuex"
	export default{
		computed:{
			...mapState(["list"]),
		
		},
		
	}

</script>

<style lang="scss" scoped>
	.list{
		width: 100%;
		height: 100%;
		
		.list-v{
			width: 100%;
			height: auto;
			display: flex;
		    div{
				margin: 5px;
			}
		}
	}
</style>
