import Vuex from 'vuex'
import Vue from 'vue'

import home from './home'
import main from './main'
import product from './product'
import operate from './operate'
import information from './information'
import joinus from './joinus'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		headerDatas:{},
		navs: [],
		footerDatas:{
			address:[]
		}
	},
	mutations: {
		getNavs(state, payload) {
			state.navs = payload
		},
		getFooterInfo(state,payload){
			this._vm.$set(state.headerDatas,"logo",payload.logo);
			this._vm.$set(state.footerDatas,"address",payload.offAddressList);
			this._vm.$set(state.footerDatas,"link",payload.xlAddress);
			this._vm.$set(state.footerDatas,"weixin",payload.wxPic);
			this._vm.$set(state.footerDatas,"weibo",payload.xlPic);
			this._vm.$set(state.footerDatas,"qcode",payload.wxQrCode);
			this._vm.$set(state.footerDatas,"companyName",payload.name);
			this._vm.$set(state.footerDatas,"netCode",payload.record);
			this._vm.$set(state.footerDatas,"form",'技术支持：'+payload.technology);
		}
	},
	actions: {
		getNavs({ commit }) {
			this._vm.api.getNavs((res) => {
				commit('getNavs', res);
			})
		},
		getFooterInfo({ commit }){
			this._vm.api.getFooterInfo((res) => {
				commit('getFooterInfo',res);
			})
		}
	},
	modules: {
		home,
		main,
		product,
		operate,
		information,
		joinus
	}
})