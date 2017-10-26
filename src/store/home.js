export default {
	namespaced: true,
	state: {
		banners: [{
			src: ''
		}],
		datas: {
			product:{},
			news:[{}],
			operate:[{}],
			img1: './static/product_01.png',
			img5: './static/operation_01.png',
			img6: './static/operation.png',
			img7: './static/video.png',
			img8: './static/video_01.png',
			img9: './static/video_05.png',
			img10: './static/info.png',
			icons: './static/operation-icons.png',
			title2: '全面高效的运营体系',
			title3: "企业视频",
			video: "./static/video/video_2.MP4",
			title4: '更有价值的企业资讯',

		}
	},
	mutations: {
		getBanner(state, payload) {
			state.banners = payload;
		},
		getProductInfo(state,payload) {
			state.datas.product = payload;
		},
		getNews(state,payload){
			state.datas.news = payload;
		},
		getHomeOperating(state,payload){
			state.datas.operate = payload;
		}
	},
	actions: {
		getBanner({ commit }) {
			this._vm.api.getHomeBanner((res) => {
				commit('getBanner', res);
			})
		},
		getProductInfo({ commit }) {
			this._vm.api.getProductInfo((res) => {
				commit('getProductInfo', res);
			})
		},
		getNews({ commit, rootState }){
			this._vm.api.getHomeNews(rootState,(res) => {
				commit('getNews',res);
			})
		},
		getHomeOperating({ commit }){
			this._vm.api.getHomeOperating((res) => {
				commit('getHomeOperating',res);
			})
		}
	}
}