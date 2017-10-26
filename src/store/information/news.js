export default {
	namespaced:true,
	state: {
		datas:{
			1:{
				currpage:1,
				total:1,
				number:5,
				news:[],
				otherImgs:[]
			},
			2:{
				currpage:1,
				total:1,
				number:5,
				news:[],
				otherImgs:[]
			}
		}
	},
	mutations: {
		getNews(state,payload){
			state.datas[payload.type].currpage = payload.currentPage;
			state.datas[payload.type].total = payload.totalPages;
			state.datas[payload.type].news = payload.rows;
		},
		getPhotos(state,payload){
			state.datas[payload.type].otherImgs = payload.photos;
		}
	},
	actions: {
		getNews({state, commit, rootState },params){
			params.number = state.datas[params.type].number;
			this._vm.api.getNews(params,rootState,(res) => {
				commit('getNews',res);
			},(res) => {
				commit('getPhotos',res);
			})
		}
	}
}