export default {
	namespaced:true,
	state: {
		datas:{
			1:{
				textImg:'./static/management.png',
				title:"/ 商业管理"
			},
			2:{
				textImg:'./static/service.png',
				title:"/ 物业服务"
			},
			3:{
				textImg:'./static/smartPark.png',
				title:"/ 智慧园区"
			},
			4:{
				textImg:'./static/space.png',
				title:"/ 众创空间"
			},
			5:{
				textImg:'./static/powerise.png',
				title:"/ 创智汇"
			},
			6:{
				textImg:'./static/hotel.png',
				title:"/ 星级酒店"
			},
			7:{
				textImg:'./static/cinema.png',
				title:"/ 优质院线"
			},
		}
	},
	mutations: {
		getOperateInfo(state,payload){
			this._vm.$set(state.datas[payload.type],'name1',payload.title);
			this._vm.$set(state.datas[payload.type],'img1',payload.image);
			this._vm.$set(state.datas[payload.type],'img2',payload.imageOne);
			this._vm.$set(state.datas[payload.type],'img3',payload.imageTwo);
			this._vm.$set(state.datas[payload.type],'img4',payload.imageThree);
			this._vm.$set(state.datas[payload.type],'name2',payload.nameOne);
			this._vm.$set(state.datas[payload.type],'name3',payload.nameTwo);
			this._vm.$set(state.datas[payload.type],'name4',payload.nameThree);
			this._vm.$set(state.datas[payload.type],'content1',payload.remark);
			this._vm.$set(state.datas[payload.type],'content2',payload.remarkOne);
			this._vm.$set(state.datas[payload.type],'content3',payload.remarkTwo);
			this._vm.$set(state.datas[payload.type],'content4',payload.remarkThree);
		}
	},
	actions: {
		getOperateInfo({ commit },type){
			this._vm.api.getOperateInfo(type,(res) => {
				commit('getOperateInfo',res);
			})
		}
	}
}