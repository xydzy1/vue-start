<template>
    <div>
        <div class="container absolute flex items-center justify-center max-w-full h-125 bg-gradient-to-r from-p1_c3 from-0% via-p1_c2 via-45% to-p1_c1 to-100% bg-opacity-100">
			<div class="fixed flex flex-row top-0 w-full z-50 transition duration-300" id="nav">
				<span class="flex-none py-4 pl-14">
					<img src="../../image/logo.png" class="w-36 h-11" >
				</span>
				<span class="flex-1"></span>
				<span class="hidden flex-none md:flex flex-row flex-nowrap max-w-1280 my-6 mx-14 text-xl font-medium">
					<button class="pr-3 hover:text-blue-400">首页</button>
					<button class="pr-3 ml-6 hover:text-blue-400">功能</button>
					<button v-for="item in ['AI实验室','成员']" class="ml-6 pr-3 hover:text-blue-400">{{ item }}</button>
					<span class="ml-6">|</span>
					<button class="ml-6 hover:text-blue-400 ">登录</button>
					<button class="border-login_cborder border-2 rounded-full pl-4 pr-4 ml-6 hover:text-blue-400 ">注册</button>
				</span>
				<span class="flex-1 md:hidden">
					<button class="hover:text-blue-400 text-4xl mt-4 absolute right-4"><i class="el-icon-menu"></i></button>
				</span>
			</div>
			<div class="absolute flex flex-row max-w-1280 mt-15 mb-40">
				<span class="flex-none pt-60">
					<img src="../../image/logo2.png">
				</span>
				<span class="pt-66 mb-2.5 mr-3 ml-3">
					<h1 class="text-5xl font-medium px-5">LUNA</h1>
					<h2 class="text-xl font-normal text-center pt-6 max-w-760">智慧教育知识图谱</h2>
				</span>
			</div>
			<div class="absolute flex flex-row shadow-p1_shadow max-w-1280 border-2 rounded-full w-auto md:w-160 h-16 mx-15 md:mx-0 bg-white items-center bottom-0 -bottom-8 z-40">
				<i class="el-icon-search text-xl ml-5 pr-3"></i>
				<input type="text" class="flex-none text-left text-4.5 font-medium w-110 flex-none outline-none" placeholder="在此输入知识点名称" v-model="serchinfo">
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

<script>
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
    }
</script>