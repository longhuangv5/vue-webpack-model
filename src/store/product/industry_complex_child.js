const kv = {
	'fcgg':'bf3.2',
	'cbd':'bf3.3',
	'wlcx':'bf3.4'
};

export default {
	namespaced:true,
	state: {
		datas:{
			'fcgg':{
				banners:[{}],
				titleImg:'./static/ft-1.png',
				textImg1:'./static/ft-2.png',
				textImg2:'./static/ft-3.png',
				textImg3:'./static/ft-4.png',
				textImg4:'./static/ft-5.png',
				textImg5:'./static/ft-6.png',
				search:'./static/search.png',
				imgs1:[],
				name1:'项目简介：',
				content1:[],
				text1:'/ 产品类型',
				content2:[{}],
				text2:'/ 入驻情况',
				content3:[{}],
				text3:'/ 在线招商',
				content4:{
					banners:[{}]
				},
				text4:'/ 周边交通',
				content5:{
					infos:[{
						name:'地址信息'
					},{
						name:"电话"
					}],
					map:{
						content:[{
							name:'地址'
						},{
							name:'电话'
						}]
					}
				},
				text5:'/ 联系我们',
				content6:{
					imgs:[],
					infos:[{
						name:'售楼电话：'
					}]
				}
			},
			'cbd':{
				banners:[{}],
				titleImg:'./static/ft-1.png',
				textImg1:'./static/ft-2.png',
				textImg2:'./static/ft-3.png',
				textImg3:'./static/ft-4.png',
				textImg4:'./static/ft-5.png',
				textImg5:'./static/ft-6.png',
				search:'./static/search.png',
				imgs1:[],
				name1:'项目简介：',
				content1:[],
				text1:'/ 产品类型',
				content2:[{}],
				text2:'/ 入驻情况',
				content3:[{}],
				text3:'/ 在线招商',
				content4:{
					banners:[{}]
				},
				text4:'/ 周边交通',
				content5:{
					infos:[{
						name:'地址信息'
					},{
						name:"电话"
					}],
					map:{
						content:[{
							name:'地址'
						},{
							name:'电话'
						}]
					}
				},
				text5:'/ 联系我们',
				content6:{
					imgs:[],
					infos:[{
						name:'售楼电话：'
					}]
				}
			},
			'wlcx':{
				banners:[{}],
				titleImg:'./static/ft-1.png',
				textImg1:'./static/ft-2.png',
				textImg2:'./static/ft-3.png',
				textImg3:'./static/ft-4.png',
				textImg4:'./static/ft-5.png',
				textImg5:'./static/ft-6.png',
				search:'./static/search.png',
				imgs1:[],
				name1:'项目简介：',
				content1:[],
				text1:'/ 产品类型',
				content2:[{}],
				text2:'/ 入驻情况',
				content3:[{}],
				text3:'/ 在线招商',
				content4:{
					banners:[{}]
				},
				text4:'/ 周边交通',
				content5:{
					infos:[{
						name:'地址信息'
					},{
						name:"电话"
					}],
					map:{
						content:[{
							name:'地址'
						},{
							name:'电话'
						}]
					}
				},
				text5:'/ 联系我们',
				content6:{
					imgs:[],
					infos:[{
						name:'售楼电话：'
					}]
				}
			}
		}
	},
	mutations: {
		getIndustryComplexChildInfo(state,payload){
			this._vm.$set(state.datas[payload.type],'title',payload.businessName);
			this._vm.$set(state.datas[payload.type],'banners',payload.homeList);
			this._vm.$set(state.datas[payload.type],'imgs1',payload.projectList);
			this._vm.$set(state.datas[payload.type],'content1',payload.remark);
			this._vm.$set(state.datas[payload.type],'content2',payload.contentList);
			this._vm.$set(state.datas[payload.type],'content3',payload.companyList);
			this._vm.$set(state.datas[payload.type].content4,'banners',payload.investmentList);
			this._vm.$set(state.datas[payload.type].content5.infos[0],'text',payload.address);
			this._vm.$set(state.datas[payload.type].content5.infos[1],'text',payload.contactMobile);
			this._vm.$set(state.datas[payload.type].content5.map.content[0],'text',payload.address);
			this._vm.$set(state.datas[payload.type].content5.map.content[1],'text',payload.contactMobile);
			this._vm.$set(state.datas[payload.type].content5.map,'lng',payload.mapX);
			this._vm.$set(state.datas[payload.type].content5.map,'lat',payload.mapY);
			this._vm.$set(state.datas[payload.type].content6.infos[0],'text',payload.contactMobile);
			this._vm.$set(state.datas[payload.type].content6,'imgs',payload.hotlineList);
		}
	},
	actions: {
		getIndustryComplexChildInfo({ commit, rootState },type){
			this._vm.api.getIndustryComplexChildInfo(rootState, kv[type],type,(res) => {
				commit('getIndustryComplexChildInfo',res);
			})
		}
	}
}