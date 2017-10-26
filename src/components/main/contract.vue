<template>
	<div id="contract-block">
		<div class="title-block">
			<img :src="datas.textImg"/>
			<span>{{datas.title}}</span>
		</div>
		<div class="block-1">
			<div class="info-block">
				<div>
					<img :src="datas.img1" />
					<div>
						<h5>地址：</h5>
						<p>{{datas.infos.address}}</p>
					</div>
				</div>
				<div>
					<img :src="datas.img2" />
					<div>
						<h5>电话：</h5>
						<p>{{datas.infos.salePhone}}</p>
					</div>
				</div>
			</div>
			<div class="map-block">
				<iframe width="100%" height="100%" frameborder="no" scrolling="no" :src="encodeUrl(datas.infos.map)"></iframe>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		name:'contract',
		computed:{
			...mapState({
				datas: state => state.main.contract.datas
			})
		},
		created:function(){
			this.$store.dispatch('main/contract/getContractInfo');
		},
		methods:{
			encodeUrl(url){
				return url ? encodeURI(url) : '';
			}
		}
	}
</script>

<style lang="scss">
	#contract-block{
		width: 1200px;
		margin: 0 auto;
		> div.title-block{
			text-align: center;
			padding: 60px 0;
			> img{
				height: 52px;
			}
			> span{
				font-size: 24px;
				color: #d52836;
				padding: 0 10px;
				vertical-align: bottom;
			}
		}
		> div.block-1{
			height: 274px;
			overflow: hidden;
			> .info-block{
				float: left;
				width: 50%;
				height: 100%;
				padding: 30px 20px;
				background-color: #f8f8f8;
				> div{
					padding: 10px;
					overflow: hidden;
					> img{
						float: left;
						padding: 5px 0;
					}
					> div{
						overflow: hidden;
						padding: 0 10px;
						> h5{
							font-size: 14px;
							color: #333333;
							margin: 0;
							line-height: 1.8em;
							font-weight: 100;
						}
						> p{
							font-size: 14px;
							color: #333333;
							line-height: 1.8em;
							font-weight: 100;
							margin: 0;
						}
					}
				}
			}
			> .map-block{
				float: right;
				height: 100%;
				width: 50%;
			}
		}
	}
</style>