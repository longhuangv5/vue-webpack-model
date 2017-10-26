export default {
	namespaced: true,
	state: {
		datas: {
			textImg: "./static/about_1.png",
			title: '/ 企业介绍',
			img3: './static/about_4.jpg',
		}
	},
	mutations: {
		getIntroduceInfo(state,payload){
			this._vm.$set(state.datas,'name',payload.name);
			this._vm.$set(state.datas,'img1',payload.imageOne);
			this._vm.$set(state.datas,'img2',payload.imageTwo);
			this._vm.$set(state.datas,'img4',payload.imageThree);
			this._vm.$set(state.datas,'content1',payload.contentOne);
			this._vm.$set(state.datas,'content2',payload.contentTwo);
			this._vm.$set(state.datas,'content3',payload.contentThree);
		}
	},
	actions: {
		getIntroduceInfo({ commit }){
			this._vm.api.getIntroduceInfo((res) => {
				commit('getIntroduceInfo',res);
			})
		}
	}
}