import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios";
export default new Vuex.Store({
  state: {
	list:[],
	filterArr:[],
  },
  mutations: {
	 setList(state,action){
		 state.list=action.list
	 },
	 FilTer(state,action){
		if(action.Text){
			state.filterArr=JSON.parse(JSON.stringify(state.list));
			state.list=state.list.filter(v=>{
			  return v.title.includes(action.Text)||v.content.includes(action.Text)
			});
		}else{
			state.list=state.filterArr;
		}
		 
	 }
	
  },
  getters:{

  },
  actions: {
	getData({commit}){
		axios.get("/get_data").then(res=>{
			console.log(res.data.list)
			commit("setList",{
				list:res.data.list
			})
		})
	}
  },
  modules: {
  }
})
