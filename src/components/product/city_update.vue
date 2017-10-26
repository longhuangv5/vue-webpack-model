<template>
	<div id="city_update_block">
		<div class="title-block">
			<img :src="datas.textImg" />
			<span>{{datas.title}}</span>
		</div>
		<div class="block-1" v-if="datas.contentList[0]">
			<img v-lazy="datas.contentList[0].image"/>
			<div>
				<h3>{{datas.contentList[0].titleChinese}}</h3>
				<p v-for="p in datas.contentList[0].content">{{p}}</p>
			</div>
		</div>
		<div class="block-2">
			<div class="left" :style="{'background-image': 'url('+datas.contentList[1].image+')'}" v-if="datas.contentList[1]">
				<h3>{{datas.contentList[1].titleChinese}}</h3>
				<p v-for="p in datas.contentList[1].content">{{p}}</p>
			</div>
			<div class="right" v-if="datas.contentList[2]">
				<img v-lazy="datas.contentList[2].image"/>
				<div>
					<h3>{{datas.contentList[2].titleChinese}}</h3>
					<p v-for="p in datas.contentList[2].content">{{p}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'city-update',
		computed: {
			datas() {
				this.changeDatas(this.$store.state.product.cityUpdate.datas);
				return this.$store.state.product.cityUpdate.datas;
			}
		},
		methods: {
			changeDatas: function(val) {
				this.$store.commit('product/isNormal', true);
				this.$store.commit('product/isBanner', true);
				this.$store.commit('product/setImgs', val.banners);
			}
		},
		created:function(){
			this.$store.dispatch('product/cityUpdate/getCityUpdateInfo');
		}
	}
</script>

<style lang="scss">
	#city_update_block {
		width: 1200px;
		margin: 0 auto 40px;
		>.title-block {
			text-align: center;
			padding: 60px 0;
			>img {
				height: 52px;
			}
			>span {
				font-size: 24px;
				color: #d52836;
				padding: 0 10px;
				vertical-align: bottom;
			}
		}
		> .block-1{
			height: 480px;
			> img{
				float: left;
				width: 65%;
				height: 100%;
				object-fit: cover;
				display: block;
			}
			> div{
				overflow: hidden;
				padding: 20px 10px 0 40px;
				> h3{
					font-size: 22px;
					color: #333;
					margin: 0;
					padding: 10px 0 20px;
				}
				> p{
					font-size: 14px;
					color: #999;
					line-height: 1.6em;
					text-align: justify;
				}
			}
		}
		> .block-2{
			margin-top: 30px;
			height: 530px;
			overflow: hidden;
			> .left{
				float: left;
				width: 48.5%;
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 100%;
				padding: 40px;
				> h3{
					font-size: 22px;
					color: #444;
					margin: 0;
					padding-bottom: 30px;
				}
				> p{
					font-size: 14px;
					line-height: 1.6em;
					color: #333;
					padding-right: 55%;
				}
			}
			> .right{
				float: right;
				width: 48.5%;
				height: 100%;
				position: relative;
				&:after{
					position: absolute;
					content: '';
					background-color: #d52836;
					height: 92%;
					width: 100%;
					bottom: 0;
					left: 0;
					z-index: -1;
				}
				> img{
					height: 100%;
					width: 95%;
					object-fit: cover;
				}
				> div{
					position: absolute;
					bottom: 0;
					left: 0;
					background: linear-gradient(to right, rgba(255,0,0,.3), rgba(213,40,54,1));
					padding: 30px 30px 30px 40px;
					> h3{
						text-align: right;
						font-size: 22px;
						margin: 0;
						padding-bottom: 10px;
						color: #eebdc0;
					}
					>p{
						font-size: 14px;
						line-height: 1.6em;
						color: white;
						text-align: justify;
					}
				}
			}
		}
	}
</style>