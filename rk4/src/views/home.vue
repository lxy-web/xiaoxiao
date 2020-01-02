<template>
	<div class="home">
		<header>
		    <el-input placeholder="请输入内容" v-model="Text" class="input-with-select">
		      <el-button slot="append" icon="el-icon-search" @click="add"></el-button>
		    </el-input>
		</header>
		<div class="my-main">
			<router-view></router-view>
		</div>
		<footer>
			<router-link v-for="(v,i) in list" :key="i" :to="v.url">{{v.name}}</router-link>
		</footer>
	</div>
</template>

<script>
	import {mapMutations, mapActions} from "vuex"
	export default{
		data(){
			return {
				Text:"",
				list:[
					{
						url:"/home/my",
						name:"我的"
					},
					{
						url:"/home/list",
						name:"消息"
					},
					{
						url:"/home/my",
						name:"联系人"
					}
				]
			}
		},
		methods:{
			add(){
				this.$store.commit("FilTer",{
					Text:this.Text
				})
			}
		},
		created() {
			 this.$store.dispatch("getData")
			// ...mapActions(["getData"])
		}
	}
</script>

<style lang="scss" scoped>
	.home{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		header{
			width: 100%;
			height: 50px;
		}
		.my-main{
			flex: 1;
			overflow: auto;
		}
		footer{
			width: 100%;
			height: 50px;
			display: flex;
			a{
				flex: 1;
				line-height: 40px;
				text-align: center;
			}
		}
	}
	 .el-select .el-input {
	    width: 130px;
	  }
	  .input-with-select .el-input-group__prepend {
	    background-color: #fff;
	  }
</style>
