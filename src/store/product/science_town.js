export default {
	namespaced:true,
	state: {
		datas:{
			banners:[{}],
			contentList:[],
			textImg:'./static/science-text.png'
		}
	},
	mutations: {
		getScienceTownInfo(state,payload){
			this._vm.$set(state.datas,'contentList',payload.contentList);
			this._vm.$set(state.datas,'banners',payload.homeList);
			this._vm.$set(state.datas,'title','/ '+payload.name);
		}
	},
	actions: {
		getScienceTownInfo({ commit,rootState }){
			this._vm.api.getScienceTownInfo(rootState,(res) => {
				commit('getScienceTownInfo',res);
			})
		}
	}
}