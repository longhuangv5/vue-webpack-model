export default {
	namespaced:true,
	state:{
		datas:{
			titleImg:'./static/joinus-1.png',
			textImg1:'./static/joinus-2.png',
			textImg2:'./static/joinus-3.png',
			title1:'用人理念',
			title2:'招聘信息',
			infos:[]
		}
	},
	mutations:{
		getRecruitInfo(state,payload){
			this._vm.$set(state.datas,'infos',payload);
		},
		getJoinusContent(state,payload){
			this._vm.$set(state.datas,'content1',payload);
		}
	},
	actions:{
		getRecruitInfo({ commit }){
			this._vm.api.getRecruitInfo((res) => {
				commit('getRecruitInfo',res);
			})
		},
		getJoinusContent({ commit }){
			this._vm.api.getJoinusContent((res) => {
				commit('getJoinusContent',res);
			})
		}
	}
}
