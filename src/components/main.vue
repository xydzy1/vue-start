<template>
	<div class="font-Sara items-center overflow-x-hidden">
		<div class="container absolute flex items-center justify-center max-w-full h-125 bg-gradient-to-r from-p1_c3 from-0% via-p1_c2 via-45% to-p1_c1 to-100% bg-opacity-100">
			<div class="fixed flex flex-row top-0 w-full z-50 transition duration-300" id="nav">
				<span class="flex-none flex-row basis-1/3 pt-4 pb-4 pl-14">
					<img src="../image/logo.png" class="w-36 h-11" >
				</span>
				<span class="flex-1 basis-1/3"></span>
				<span class="hidden basis-1/3 flex-none lg:flex flex-row flex-nowrap max-w-1280 mt-6 mb-6 mr-14 ml-14 text-xl font-medium">
					<span class="flex-none basis-1/7">
						<button class="pr-4 text-black hover:text-blue-400">首页</button>
					</span>
					<span class="flex-none basis-1/7 ml-8">
						<button class="pr-4 text-black hover:text-blue-400">功能</button>
					</span>
					<span v-for="item in ['AI实验室','成员']" class="flex-none basis-1/7 ml-8">
						<button class="pl-4 pr-4 text-black hover:text-blue-400">{{ item }}</button>
					</span>
					<span class="flex-none pl-4 basis-1/7 ml-8">|</span>
					<span class="flex-none basis-1/7 ml-8">
						<button class="block pl-8 pr-8 text-black hover:text-blue-400">登录</button>
					</span>
					<span class="flex-none basis-1/7">
						<button class="block border-login_cborder border-2 rounded-full pl-6 pr-6 text-black hover:text-blue-400">注册</button>
					</span>
				</span>
				<span class="flex-1 basis-1/3 lg:hidden block"></span>
			</div>
			<div class="absolute flex flex-row max-w-1280 mt-15 mb-40">
				<span class="flex-none pt-60 basis-2/5">
					<img src="../image/logo2.png">
				</span>
				<span class="basis-3/5 pt-66 mb-2.5 mr-3 ml-3">
					<h1 class="text-5xl font-medium pr-5 pl-5">LUNA</h1>
					<h2 class="text-xl font-normal text-center pr-0 pl-0 pt-8 max-w-760">智慧教育知识图谱</h2>
				</span>
			</div>
			<div class="absolute flex flex-row shadow-p1_shadow max-w-1280 border-2 rounded-full w-auto md:w-160 h-16 ml-15 mr-15 md:ml-0 md:mr-0 bg-white items-center bottom-0 -bottom-8 z-40">
				<span class="flex-none basis-1/7 pl-5 pr-3">
					<img src="../image/search.png" class="w-5 h-5">
				</span>
				<span class="flex-none basis-4/7 text-left font-medium">
					<input type="text" class="flex-none outline-none" placeholder="在此输入知识点名称" v-model="serchinfo">
				</span>
				<div class="absolute right-0 scale-50">
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
		<div class="container absolute flex items-center justify-center max-w-full h-1000 mt-1000">
			<div class="absolute top-0 left-1/3 xl:top-52 xl:left-3/5 flex-none basis-3/5">
					<span class="absolute top-28 w-125 text-4xl font-bold">
						<span class="bg-gradient-to-r from-p2_cword1_1 to-p2_cword1_2 inline-block bg-clip-text text-transparent">海量</span>
						<span >教学资源，</span>
						<span class="bg-gradient-to-r from-p2_cword2_1 to-p2_cword2_2 inline-block bg-clip-text text-transparent">智能</span>
						<span>处理</span>
					</span>
					<ul class="absolute top-52 w-125 text-xl font-normal text-p3_cword4">
						<li>海量标准化、体系化的教学资源</li>
						<li class="pt-6">基于高效准确的试题相似度评估算法的高质量资源库</li>
						<li class="pt-6">智能与个性化的资源录入、查询和管理服务</li>
					</ul>
					<span class="absolute flex flex-row top-96 w-125 text-xl text-white font-normal">
						<button class="bg-red-500 pt-3 pb-3 pl-5 pr-5 mr-4 border-2 rounded-xl"><i class="el-icon-edit"></i> 试题录入</button>
						<button class="bg-blue-500 pt-3 pb-3 pl-5 pr-5 mr-4 border-2 rounded-xl"><i class="el-icon-search"></i> 试题检索</button>
						<button class="bg-p2_cbutton pt-3 pb-3 pl-5 pr-5 border-2 rounded-xl"><i class="el-icon-reading"></i> 智能分析</button>
					</span>
			</div>
			<div class="absolute flex flex-row xl:top-52 top-125 left-1/3 xl:left-1/7 text-xl font-semibold">
				<button class="flex-none basis-1/3">试题资源</button>
				<button class="flex-none basis-1/3 pl-10">试卷资源</button>
				<button class="flex-none basis-1/3 pl-10">教材教辅</button>
			</div>
			<div class="absolute flex xl:top-72 top-140 left-1/4 xl:left-1/8 max-w-1280">
				<div class="flex-none basis-2/5">
					<img src="../image/data.png" class="w-152.5 h-130">
				</div>
			</div>	
		</div>
		<div class="container pt-45 pb-45 pl-20 pb-20 absolute flex flex-row max-w-full h-1500 xl:h-1000 mt-2100 bg-gradient-to-r from-p3_c1 to-p3_c2">
			<div class="xl:mt-41.5 xl:mb-41.5 xl:mr-41.5 xl:left-1/8 basis-2/5 flex-none absolute left-1/3">
				<div class="top-80 basis-2/5 flex flex-col">
					<span class="flex-none basis-1/5 w-125 h-8 text-4xl font-bold">
						<span class="bg-gradient-to-r from-p3_cword1_1 to-p3_cword1_2 inline-block bg-clip-text text-transparent">
							多元
						</span>
						<span>知识点，</span>
						<span class="bg-gradient-to-r from-p3_cword2_1 to-p3_cword2_2 inline-block bg-clip-text text-transparent">
							直观
						</span>
						<span>呈现</span>
					</span>
					<ul class="flex-none basis-3/5 text-xl font-normal mt-14 text-p3_cword4">
						<li>知识点智能化组织与展示</li>
						<li class="pt-6">结构清晰，辅助学生梳理知识</li>
						<li class="pt-6">前驱后继、共同学习和层级关系三种知识关系展示</li>
					</ul>
					<span class="flex-none basis-1/5 mt-10 text-white text-xl font-normal">
						<button class="bg-p3_cbutton pl-4 pr-6 pt-3 pb-3 border-2 rounded-xl"><i class="el-icon-right pr-2"></i>立即前往</button>
					</span>
				</div>
			</div>	
			<div class="flex basis-3/5 items-center w-2/5 justify-center ml-10 mt-125 mb-11 pl-8 pr-8 absolute left-1/3 xl:left-1/2 xl:mt-11">
					<div class="flex-none px-8 flex flex-col border-2 rounded-3xl shadow-p3_shadow bg-white z-0">
						<span class="flex-none basis-3/5">
							<img src="../image/triangle.png" class="w-114 h-80">
							<img src="../image/triangle2.png" class="relative left-2/3 w-16 h-28">
						</span>
						<span class="basis-2/5 pb-8 mt-8 flex flex-col flex-none">
							<span class="text-2xl font-bold basis-2/5">三角函数</span>
							<span class="text-xl font-normal basis-1/5 text-p3_cword3 mt-6 leading-8">
								<p>三角函数是基本初等函数之一，是以角度（数学上最常</p>
								<p>用弧度制，下同）为自变量，角度对应任意角终边与单</p>
								<p>位圆交点坐标或其比值为因变量的函数...</p>
							</span>
						</span>	
					</div>
			</div>
		</div>
		<div class="container pt-66 pb-66 pl-20 pb-20 absolute flex flex-col max-w-full h-1000 mt-3600 xl:mt-3100 items-center justify-center">
			<div>
			<span class="flex-none text-4xl ml-24 xl:ml-0 font-bold w-125">
				<span class="bg-gradient-to-r from-p4_cword1_1 to-p4_cword1_2 inline-block bg-clip-text text-transparent">
					特色
				</span>
				<span>教育功能，</span>
				<span class="bg-gradient-to-r from-p4_cword2_1 to-p4_cword2_2 inline-block bg-clip-text text-transparent">
					倾力
				</span>
				<span>打造</span>
			</span>
			<span class="hidden xl:flex xl:flex-row pt-12">
				<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl shadow-md">
					<span>
						<img src="../image/p4-1.png" class="w-72 h-36">
					</span>
					<span class="text-2xl font-bold pt-5 pr-5 pl-5">试卷分析</span>
					<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
						<p>使用人工智能和数据挖掘技</p>
						<p>术在多个层次和维度上分析</p>
						<p>试卷，如各题型占比、知识</p>
						<p>点分值和难度变化</p>	
					</span>
					<span>
						<button class="text-p4_cbutton pl-5 pt-2">了解更多<i class="el-icon-right pl-2"></i></button>
					</span>
				</span>
				<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl ml-8 shadow-md">
					<span>
						<img src="../image/p4-2.png" class="w-72 h-36">
					</span>
					<span class="text-2xl font-bold pt-5 pr-5 pl-5">组卷系统</span>
					<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
						<p>智能组卷系统提供丰富的选</p>
						<p>题方式，自动组卷，以及个</p>
						<p>性化试卷和答题卡编辑、预</p>
						<p>览与下载功能</p>	
					</span>
					<span>
						<button class="text-p4_cbutton pl-5 pt-2">了解更多<i class="el-icon-right pl-2"></i></button>
					</span>
				</span>
				<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl ml-8 shadow-md">
					<span>
						<img src="../image/p4-3.png" class="w-72 h-36">
					</span>
					<span class="text-2xl font-bold pt-5 pr-5 pl-5">AI实验室</span>
					<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
						<p>由LUNA团队提供和维护，</p>
						<p>依托领先的技术实力，为用</p>
						<p>户提供高品质的教育产品及</p>
						<p>服务</p>	
					</span>
					<span>
						<button class="text-p4_cbutton pl-5 pt-2">立即前往<i class="el-icon-right pl-2"></i></button>
					</span>
				</span>
				<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl ml-8 shadow-md">
					<span>
						<img src="../image/p4-3.png" class="w-72 h-36">
					</span>
					<span class="text-2xl font-bold pt-5 pr-5 pl-5">智能教辅平台</span>
					<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
						<p>深层次多维度海量教育资源</p>
						<p>分析，个性化资源管理、组</p>
						<p>织功能，为教师提供智能化</p>
						<p>教学服务</p>	
					</span>
					<span>
						<button class="text-p4_cbutton pl-5 pt-2">立即前往<i class="el-icon-right pl-2"></i></button>
					</span>
				</span>
			</span>
			<span class="xl:hidden flex flex-col pt-12">
				<span class="flex flex-row">
					<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl shadow-md">
						<span>
							<img src="../image/p4-1.png" class="w-72 h-36">
						</span>
						<span class="text-2xl font-bold pt-5 pr-5 pl-5">试卷分析</span>
						<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
							<p>使用人工智能和数据挖掘技</p>
							<p>术在多个层次和维度上分析</p>
							<p>试卷，如各题型占比、知识</p>
							<p>点分值和难度变化</p>	
						</span>
						<span>
							<button class="text-p4_cbutton pl-5 pt-2">了解更多<i class="el-icon-right pl-2"></i></button>
						</span>
					</span>
					<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl ml-8 shadow-md">
						<span>
							<img src="../image/p4-2.png" class="w-72 h-36">
						</span>
						<span class="text-2xl font-bold pt-5 pr-5 pl-5">组卷系统</span>
						<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
							<p>智能组卷系统提供丰富的选</p>
							<p>题方式，自动组卷，以及个</p>
							<p>性化试卷和答题卡编辑、预</p>
							<p>览与下载功能</p>	
						</span>
						<span>
							<button class="text-p4_cbutton pl-5 pt-2">了解更多<i class="el-icon-right pl-2"></i></button>
						</span>
					</span>
				</span>
				<span class="flex flex-row mt-8">
					<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl shadow-md">
						<span>
							<img src="../image/p4-3.png" class="w-72 h-36">
						</span>
						<span class="text-2xl font-bold pt-5 pr-5 pl-5">AI实验室</span>
						<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
							<p>由LUNA团队提供和维护，</p>
							<p>依托领先的技术实力，为用</p>
							<p>户提供高品质的教育产品及</p>
							<p>服务</p>	
						</span>
						<span>
							<button class="text-p4_cbutton pl-5 pt-2">立即前往<i class="el-icon-right pl-2"></i></button>
						</span>
					</span>
					<span class="flex-none flex flex-col basis-1/4 h-96 border-2 rounded-3xl ml-8 shadow-md">
						<span>
							<img src="../image/p4-3.png" class="w-72 h-36">
						</span>
						<span class="text-2xl font-bold pt-5 pr-5 pl-5">智能教辅平台</span>
						<span class="text-p3_cword3 leading-8 pt-2 pl-5 pr-5 font-normal">
							<p>深层次多维度海量教育资源</p>
							<p>分析，个性化资源管理、组</p>
							<p>织功能，为教师提供智能化</p>
							<p>教学服务</p>	
						</span>
						<span>
							<button class="text-p4_cbutton pl-5 pt-2">立即前往<i class="el-icon-right pl-2"></i></button>
						</span>
					</span>
				</span>
			</span>
			</div>
		</div>
		<div class="container pt-8 pb-8 pr-72 pl-72 absolute flex max-w-full h-40 mt-4600 xl:mt-4100 bg-gray-300 items-center justify-center">
			<div class="flex-none flex flex-col">
				<span class="flex flex-row text-gray-400 text-xl font-normal">
					<span>服务条款</span>
					<span class="ml-14">|</span>
					<span class="ml-14">隐私政策</span>
					<span class="ml-14">|</span>
					<span class="ml-14">联系我们</span>
				</span>
				<span class="flex flex-row text-gray-400 text-xl font-normal pt-4">
					<span>LUNA水镜智能</span>
					<span class="ml-1">©</span>
					<span class="ml-1">大数据分析与应用安徽省重点实验室</span>
				</span>
			</div>
		</div>
	</div>	
</template>

<style scoped>

</style>

<script>
	export default{
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
		}
	}
	//导航栏响应滚动变色
	window.onscroll=function(){
		var topScroll =window.pageYOffset;
		console.log(topScroll)
		var nav=document.getElementById("nav");
		if(topScroll>120){
			nav.style.backgroundColor = 'rgba(255,255,255,0.75)';
			nav.style.backdropFilter = 'blur(24px)';
		}
		else{
			nav.style.backgroundColor = '';
			nav.style.backdropFilter = '';
		}
	}
	
</script>