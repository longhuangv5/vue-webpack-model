export default {
	namespaced:true,
	state: {
		datas:{
			textImg:'./static/contact.png',
			title:"/ 联系我们",
			img1:'./static/contact-1.png',
			img2:'./static/contact-2.png',
			infos:{}
		}
	},
	mutations: {
		getContractInfo(state,payload){
			this._vm.$set(state.datas,'infos',payload);
		}
	},
	actions: {
		getContractInfo({ commit }){
			this._vm.api.getContractInfo((res) => {
				commit('getContractInfo',res);
			})
		}
	}
}