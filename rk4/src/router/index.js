import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path:"/",
		redirect:"/home/list"
	},
     {
	  path:"/home",
	  component:()=>import("../views/home"),
	  children:[
		  {
			path:"/home/my",
			component:()=>import("../components/My"),  
		  },
		  {
		  			path:"/home/list",
		  			component:()=>import("../components/List"),  
		  },
		  {
		  			path:"/home/index",
		  			component:()=>import("../components/Index"),  
		  }
	  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
