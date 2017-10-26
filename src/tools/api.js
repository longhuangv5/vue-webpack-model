import http from './http'

const kv = {
		'bf1': '/home',
		'bf2': '/main',
		'bf2.1': '/main/introduce',
		'bf2.2': '/main/team',
		'bf2.3': '/main/organization',
		'bf2.4': '/main/contract',
		'bf3': '/product',
		'bf3.1': '/product/industry_complex',
		'bf3.2': '/product/industry_complex_child/fcgg',
		'bf3.3': '/product/industry_complex_child/cbd',
		'bf3.4': '/product/industry_complex_child/wlcx',
		'bf3.5': '/product/science_town',
		'bf3.6': '/product/science_town_hjtown',
		'bf3.7': '/product/science_town_rscity',
		'bf3.8': '/product/city_update',
		'bf3.9': '/product/city_update_nscity',
		'bf4': '/operate',
		'bf4.1': '/operate/operate_child/1',
		'bf4.2': '/operate/operate_child/2',
		'bf4.3': '/operate/operate_child/3',
		'bf4.4': '/operate/operate_child/4',
		'bf4.5': '/operate/operate_child/5',
		'bf4.6': '/operate/operate_child/6',
		'bf4.7': '/operate/operate_child/7',
		'bf5': '/information',
		'bf5.1': '/information/news/1',
		'bf5.2': '/information/news/2',
		'bf5.3': '/information/video',
		'bf5.4': '/information/news-detail',
		'bf6': '/joinus'
	},
	idAndName = {};

let callback;

function initNavs(navs) {
	setNav(navs);
	return navs;
}

function setNav(navs) {
	for(let n of navs) {
		idAndName[n.templateId] = n;
		if(n.templateId === 'bf3') setSpecial(n.sons);
		if(n.templateId === 'bf5') addSpecial(n.sons);
		n.path = kv[n.templateId];
		if(n.sons) setNav(n.sons)
	}
}

function addSpecial(navs) {
	navs.push({
		name: '资讯详情',
		hide: true,
		templateId: 'bf5.4'
	})
}

function setSpecial(navs) {
	navs[0].sons = [];
	navs[0].sons.push(navs[1]);
	navs[0].sons.push(navs[2]);
	navs[0].sons.push(navs[3]);
	navs[4].sons = [];
	navs[4].sons.push(navs[5]);
	navs[4].sons.push(navs[6]);
	navs[7].sons = [];
	navs[7].sons.push(navs[8]);
	delete navs[1];
	delete navs[2];
	delete navs[3];
	delete navs[5];
	delete navs[6];
	delete navs[8];
	navs[1] = navs[4];
	navs[2] = navs[7];
	navs.length = 3;
}

function initBanners(res) {
	for(let r in res) {
		res[r].src = http.imgPath + res[r].pic
	}
	return res;
}

function initProductInfo(res) {
	if(res.length) {
		for(let r in res[0]) {
			if(r === 'picOne' || r === 'picThree' || r === 'picTwo') res[0][r] = http.imgPath + res[0][r];
		}
	} else {
		res = [];
	}
	return res[0];
}

function getDatas(state, cb) {
	let name = idAndName['bf5.1'].name;
	http.get('webinfotype/noauth', {}).then(function(res) {
		let id;
		for(let r in res) {
			if(res[r].name === name) {
				id = res[r].id;
				break;
			}
		}
		http.get('webinfomain/noauth/listPcF', { queryJson: JSON.stringify({ typeId: id }) }).then(function(res) {
			cb && cb(initHomeNews(res));
		})
	});
}

function initHomeNews(res) {
	res.rows.length > 3 && (res.rows.length = 3);
	for(let r in res.rows) {
		res.rows[r]['picAddress'] = http.imgPath + res.rows[r]['picAddress'];
	}
	return res.rows;
}

function initTeam(res) {
	for(let r in res.rows) {
		res.rows[r]['headPic'] = http.imgPath + res.rows[r]['headPic'];
	}
	return res.rows;
}

function initOrganizationImg(res) {
	res.pic = http.imgPath + res.pic;
	return res;
}

function initContractInfo(res) {
	res.map = './static/map/bf.html?lng=' + res.mapX + '&lat=' + res.mapY + '&content=地址：' + res.address + '<br/>电话：' + res.salePhone;
	return res;
}

function initRecruitInfo(res) {
	res.rows.length && (res.rows[0].chk = true);
	return res.rows;
}

function getNewsByType(params, state, cb, cb2) {
	const kv = {
		1: 'bf5.1',
		2: 'bf5.2'
	}
	let name = idAndName[kv[params.type]].name;
	http.get('webinfotype/noauth', {}).then(function(res) {
		let id;
		for(let r of res) {
			if(r.name === name) {
				id = r.id;
				cb2 && cb2(initNewsPhotos(r, params.type));
				break;
			}
		}
		http.get('webinfomain/noauth/listPcF', { queryJson: JSON.stringify({ typeId: id }), pageNum: params.page, pageSize: params.number }).then(function(res) {
			cb && cb(initNews(res, params.type));
		})
	});
}

function initNewsPhotos(res, type) {
	res.type = type;
	res.photos.forEach((r) => {
		r.pic = http.imgPath + r.pic;
	})
	return res;
}

function initNews(res, type) {
	res.type = type;
	res.rows.forEach((r) => {
		r.picAddress = http.imgPath + r.picAddress;
	})
	return res;
}

function getVideoPhotos(state, cb) {
	let name = idAndName['bf5.3'].name;
	http.get('webinfotype/noauth', {}).then(function(res) {
		for(let r of res) {
			if(r.name === name) {
				cb && cb(initNewsPhotos(r));
				break;
			}
		}
	});
}

function initIntroceInfo(res) {
	res.imageOne = http.imgPath + res.imageOne;
	res.imageTwo = http.imgPath + res.imageTwo;
	res.imageThree = http.imgPath + res.imageThree;
	res.contentOne = res.contentOne.replace(/\r/g, '').replace(/\n+/g, '\n').split('\n');
	res.contentTwo = res.contentTwo.replace(/\r/g, '').replace(/\n+/g, '\n').split('\n');
	res.contentThree = res.contentThree.replace(/\r/g, '').replace(/\n+/g, '\n').split('\n');
	res.contentOne.unshift(res.instruction);
	return res;
}

function initOperateInfo(res) {
	res.image = http.imgPath + res.image;
	res.imageOne = http.imgPath + res.imageOne;
	res.imageTwo = http.imgPath + res.imageTwo;
	res.imageThree = http.imgPath + res.imageThree;
	return res;
}

function getComplexInfo(state, cb) {
	let name = idAndName['bf3.1'].name;
	http.get('webbusiness/noauth/findScopeBusinessItem', { name: name }).then(function(res) {
		cb && cb(initComplexInfo(res));
	});
}

function getScienceTown(state, cb) {
	let name = idAndName['bf3.5'].name;
	http.get('webbusiness/noauth/findScopeBusinessItem', { name: name }).then(function(res) {
		cb && cb(initComplexInfo(res));
	});
}

function getUpdateCity(state, cb) {
	let name = idAndName['bf3.8'].name;
	http.get('webbusiness/noauth/findScopeBusinessItem', { name: name }).then(function(res) {
		cb && cb(initComplexInfo(res));
	});
}

function getIndustryComplexChild(state,key,type, cb){
	let name = idAndName[key].name;
	http.get('webbusiness/noauth/findScopeBusinessItem', { name: name }).then(function(res) {
		cb && cb(initComplexChildInfo(res,type,key));
	});
}

function initComplexChildInfo(res,type,key){
	res.homeList.forEach((h) => {
		h.src = http.imgPath + h.image;
		h.text = idAndName[key].name;
	});
	res.projectList.forEach((h) => {
		h.src = http.imgPath + h.image;
	});
	res.hotlineList.forEach((h) => {
		h.src = http.imgPath + h.image;
	});
	res.companyList.forEach((h) => {
		h.src = http.imgPath + h.logo;
	});
	res.contentList.forEach((h) => {
		h.img = http.imgPath + h.image;
	});
	res.investmentList.forEach((h) => {
		h.src = http.imgPath + h.image;
	});
	res.remark = res.remark.replace(/\r/g,'').replace(/\n+/g,'\n').split('\n');
	res.type= type;
	return res;
}

function initComplexInfo(res) {
	res.capitalList.forEach((c) => {
		c.texts = [];
		c.contentOne && c.texts.push(c.contentOne);
		c.contentTwo && c.texts.push(c.contentTwo);
		c.contentThree && c.texts.push(c.contentThree);
		c.contentFour && c.texts.push(c.contentFour);
		c.contentFive && c.texts.push(c.contentFive);
		c.contentSix && c.texts.push(c.contentSix);
	});
	res.contentList.forEach((c) => {
		c.content = c.content.replace(/\r/g, '').replace(/\n+/g, '\n').split('\n');
		c.image = http.imgPath + c.image;
	});
	res.homeList.forEach((h) => {
		h.src = http.imgPath + h.image;
	})
	return res;
}

function initFooterInfo(res){
	res.wxPic = http.imgPath + res.wxPic;
	res.wxQrCode = http.imgPath + res.wxQrCode;
	res.xlPic = http.imgPath + res.xlPic;
	res.logo = http.imgPath + res.logo;
	return res;
}

function getNavs(cb) {
	http.get('webtype/noauth/listTree', {}).then(function(res) {
		if(cb) {
			cb(initNavs(res));
			callback && callback();
		}
	});
}

function getHomeBanner(cb) {
	http.get('webhomecarousel/noauth', {}).then(function(res) {
		cb && cb(initBanners(res));
	});
}

function getProductInfo(cb) {
	http.get('webproductinfo/noauth/findByPark', {}).then(function(res) {
		cb && cb(initProductInfo(res));
	});
}

function getHomeNews(rootState, cb) {
	if(rootState.navs.length) {
		getDatas(rootState, cb);
	} else {
		callback = function() {
			getDatas(rootState, cb);
		}
	}
}

function getHomeOperating(cb) {
	http.get('webproductbusiness/noauth/findProductBusinessList', {}).then(function(res) {
		cb && cb(res);
	});
}

function getTeam(cb) {
	http.get('weborgmanager/noauth', { pageSize: 100 }).then(function(res) {
		cb && cb(initTeam(res));
	});
}

function getOrganizationImg(cb) {
	http.get('weborgpicture/noauth', {}).then(function(res) {
		cb && cb(initOrganizationImg(res));
	});
}

function getContractInfo(cb) {
	http.get('webjoin/noauth', {}).then(function(res) {
		cb && cb(initContractInfo(res));
	});
}

function getRecruitInfo(cb) {
	http.get('webrecruitinfo/noauth', { pageSize: 100 }).then(function(res) {
		cb && cb(initRecruitInfo(res));
	});
}

function getJoinusContent(cb) {
	http.get('webinfo/noauth/findByPark', {}).then(function(res) {
		cb && cb(res.personConcept);
	});
}

function getNews(params, rootState, cb, cb2) {
	if(rootState.navs.length) {
		getNewsByType(params, rootState, cb, cb2);
	} else {
		callback = function() {
			getNewsByType(params, rootState, cb, cb2);
		}
	}
}

function getPhotos(rootState, cb) {
	if(rootState.navs.length) {
		getVideoPhotos(rootState, cb);
	} else {
		callback = function() {
			getVideoPhotos(rootState, cb);
		}
	}
}

function getNewsDetail(id, cb) {
	http.get('webinfomain/noauth/' + id, {}).then(function(res) {
		cb && cb(res);
	});
}

function getIntroduceInfo(cb) {
	http.get('webunit/noauth/findWebUnitInfo', {}).then(function(res) {
		cb && cb(initIntroceInfo(res.rows.length ? res.rows[0] : {}));
	});
}

function getOperateInfo(type, cb) {
	http.get('webproductbusiness/noauth/findProductBusinessByType/' + type, {}).then(function(res) {
		cb && cb(initOperateInfo(res));
	});
}

function getIndustryComplexInfo(state, cb) {
	if(state.navs.length) {
		getComplexInfo(state, cb);
	} else {
		callback = function() {
			getComplexInfo(state, cb);
		}
	}
}

function getScienceTownInfo(state, cb) {
	if(state.navs.length) {
		getScienceTown(state, cb);
	} else {
		callback = function() {
			getScienceTown(state, cb);
		}
	}
}

function getCityUpdateInfo(state, cb) {
	if(state.navs.length) {
		getUpdateCity(state, cb);
	} else {
		callback = function() {
			getUpdateCity(state, cb);
		}
	}
}

function getIndustryComplexChildInfo(state,key,type,cb){
	if(state.navs.length) {
		getIndustryComplexChild(state,key,type, cb);
	} else {
		callback = function() {
			getIndustryComplexChild(state,key,type, cb);
		}
	}
}

function getFooterInfo(cb){
	http.get('webinfo/noauth/findByPark', {}).then(function(res) {
		cb && cb(initFooterInfo(res));
	});
}

export default {
	getNavs: getNavs,
	getHomeBanner: getHomeBanner,
	getProductInfo: getProductInfo,
	getHomeNews: getHomeNews,
	getHomeOperating: getHomeOperating,
	getTeam: getTeam,
	getOrganizationImg,
	getOrganizationImg,
	getContractInfo: getContractInfo,
	getRecruitInfo: getRecruitInfo,
	getJoinusContent: getJoinusContent,
	getNews: getNews,
	getPhotos: getPhotos,
	getNewsDetail: getNewsDetail,
	getIntroduceInfo: getIntroduceInfo,
	getOperateInfo: getOperateInfo,
	getIndustryComplexInfo: getIndustryComplexInfo,
	getScienceTownInfo: getScienceTownInfo,
	getCityUpdateInfo: getCityUpdateInfo,
	getIndustryComplexChildInfo: getIndustryComplexChildInfo,
	getFooterInfo: getFooterInfo
}