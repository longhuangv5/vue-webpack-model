export default {
	namespaced: true,
	state: {
		datas: {
			videos: [{
				src: './static/video/video_2.MP4',
				img: './static/3.jpg'
			}, {
				src: './static/video/video_3.MP4',
				img: './static/2.jpg'
			}, {
				src: './static/video/video_8.MP4',
				img: './static/4.jpg'
			}, {
				src: './static/video/video_4.MP4',
				img: './static/1.jpg'
			}, {
				src: './static/video/video_9.MP4',
				img: './static/5.jpg'
			}],
			otherImgs: []
		}
	},
	mutations: {
		getPhotos(state,payload){
			state.datas.otherImgs = payload.photos;
		}
	},
	actions: {
		getPhotos({ commit, rootState }){
			this._vm.api.getPhotos(rootState,(res) => {
				commit('getPhotos',res);
			})
		}
	}
}