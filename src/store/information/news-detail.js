export default {
	namespaced: true,
	state: {
		datas:{},
		imgs:[
			'./static/detail-1.jpg',
			'./static/detail-2.jpg',
			'./static/detail-3.jpg'
		]
	},
	mutations: {
		getNewsDetail(state,payload){
			this._vm.$set(state,'datas',payload);
		}
	},
	actions: {
		getNewsDetail({ commit },id){
			this._vm.api.getNewsDetail(id,(res) => {
				commit('getNewsDetail',res);
			})
		}
	}
}