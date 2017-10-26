export default {
	namespaced:true,
	state: {
		datas:{
			textImg:'./static/manager.png',
			title:'/ 管理团队',
			teamer:[]
		}
	},
	mutations: {
		getTeam(state,payload){
			state.datas.teamer = payload;
		}
	},
	actions: {
		getTeam({ commit }){
			this._vm.api.getTeam((res) => {
				commit('getTeam',res);
			})
		}
	}
}