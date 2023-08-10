<template>
    <div>
        <div class="part1">
			<div class="navigation" id="nav">
				<span class="s-logo1">
					<img src="../../image/logo.png" class="logo1" >
				</span>
				<span class="trans-area"></span>
				<span class="nav-functions">
					<button class="main">首页</button>						
					<button class="function">功能</button>
					<button v-for="item in ['AI实验室','成员']" class="team">{{ item }}</button>
					<span class="divide">|</span>
					<button class="sign">登录</button>
					<button class="login">注册</button>
				</span>
				<span class="padding-area">
					<button class="menu"><i class="el-icon-menu"></i></button>
				</span>
			</div>
			<div class="title">
				<span class="logo2">
					<img src="../../image/logo2.png">
				</span>
				<span class="text-LUNA">
					<h1 class="team-name">LUNA</h1>
					<h2 class="product-name">智慧教育知识图谱</h2>
				</span>
			</div>
			<div class="search-area">
				<i class="el-icon-search"></i>
				<input type="text" class="search-frame" placeholder="在此输入知识点名称" v-model="serchinfo">
				<div class="absolute right-0">
				<button @click='hello' class="transition duration-300 transform hover:scale-95 text-center border-2 rounded-full pl-10 pr-10 pt-3 pb-3 text-white text-xl font-normal bg-gradient-to-r from-p1_cbutton1 to-p1_cbutton2">
					搜索
				</button>
				</div>
			</div>
		</div>
        <div class="container absolute mx-auto flex items-center justify-center max-w-full h-125 mt-125">
			<div class="absolute top-10 border-2 rounded-full pl-10 pr-10 pt-3 pb-3 bg-gradient-to-t from-p1_cbutton1 to-p1_cbutton2 text-white text-xl font-normal">
				<button @click="hello">
					vue-router-api
				</button>
			</div>
			<div class="flex-none absolute top-1/3 w-760 text-center text-5xl font-medium">
				寓智于教，致知未来
			</div>
			<div class="flex-none absolute flex top-1/2 w-760 text-center text-xl font-normal">
					智慧教育知识图谱（LUNA）致力于为广大师生提供深层次、多维度的海量教育资源处理分析工具，与智能、个性化的教育资源组织、分析与评估服务
			</div>
	    </div>
    </div>
</template>

<style scoped>
	.el-icon-search{
	font-size: 20px;
	line-height: 28px;
	margin-left: 20px;
	padding-right: 12px;
}
</style>

<script>
    import {scroll_color} from '../../../static/utils/scroll'
	export default{
        name: 'part1',
		data() {
			return {
				serchinfo: '三角函数',
			}
		},
		methods:{
			hello() {
				this.$router.replace('/hello');
			},
		},
		created(){
		},
	}
	scroll_color()
</script>