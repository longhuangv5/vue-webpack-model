export default {
	namespaced: true,
	state: {
		datas: {
			banners: [{}],
			contentList:[],
			textImg: "./static/city.png"
		}
	},
	mutations: {
		getCityUpdateInfo(state, payload) {
			this._vm.$set(state.datas,'contentList',payload.contentList);
			this._vm.$set(state.datas,'banners',payload.homeList);
			this._vm.$set(state.datas,'title','/ '+payload.name);
		}
	},
	actions: {
		getCityUpdateInfo({ commit, rootState }) {
			this._vm.api.getCityUpdateInfo(rootState, (res) => {
				commit('getCityUpdateInfo', res);
			})
		}
	}
}