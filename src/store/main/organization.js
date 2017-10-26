export default {
	namespaced:true,
	state: {
		datas:{
			textImg:'./static/company.png',
			title:'/ 组织架构'
		}
	},
	mutations: {
		getOrganizationImg(state,payload){
			this._vm.$set(state.datas,'img',payload.pic)
		}
	},
	actions: {
		getOrganizationImg({ commit }){
			this._vm.api.getOrganizationImg((res) => {
				commit('getOrganizationImg',res);
			})
		}
	}
}