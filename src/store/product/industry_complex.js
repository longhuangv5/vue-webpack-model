export default {
	namespaced: true,
	state: {
		datas: {
			banners: [{}],
			textImg: "./static/develop.png",
			contentList:[],
			img6: './static/develop-6.jpg',
			name11: 'ThREE CAPITAL',
			name12: '/ 三资',
			content6: []
		}
	},
	mutations: {
		getIndustryComplexInfo(state,payload){
			this._vm.$set(state.datas,'contentList',payload.contentList);
			this._vm.$set(state.datas,'content6',payload.capitalList);
			this._vm.$set(state.datas,'banners',payload.homeList);
			this._vm.$set(state.datas,'title','/ '+payload.name);
		}
	},
	actions: {
		getIndustryComplexInfo({ commit, rootState }){
			this._vm.api.getIndustryComplexInfo(rootState,(res) => {
				commit('getIndustryComplexInfo',res);
			})
		}
	}
}