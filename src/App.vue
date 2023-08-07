<template>
	<div>
		<div class="container absolute flex items-center justify-center max-w-full h-500 bg-gradient-to-r from-c3 from-0% via-c2 via-45% to-c1 to-100% bg-opacity-100">
			<div class="fixed flex flex-row top-0 w-full" id="nav">
				<span class="flex-1 basis-2/3 pt-4 pb-4 ml-14">
					<img src="./image/logo.png" class="left-0 w-36 h-11">
				</span>
				<span class="flex-none basis-1/3 flex flex-row max-w-7xl mt-6 mb-6 mr-14 ml-14 text-xl font-medium">
					<span class="flex-none basis-1/7">
						<button class="pr-4 text-black hover:text-blue-400">首页</button>
					</span>
					<span v-for="item in ['功能','AI实验室','成员']" class="flex-none basis-1/7 ml-8">
						<button class="pl-4 pr-4 text-black hover:text-blue-400">{{ item }}</button>
					</span>
					<span class="flex-none pl-4 basis-1/7 ml-8">|</span>
					<span class="flex-none basis-1/7 ml-8">
						<button class="block pl-8 pr-8 text-black hover:text-blue-400">登录</button>
					</span>
					<span class="flex-none basis-1/7">
						<button class="block border-cborder border-2 rounded-full pl-6 pr-6 text-black hover:text-blue-400">注册</button>
					</span>
				</span>
			</div>
			<div class="flex flex-row max-w-7xl mt-60 mb-40">
				<span class="basis-2/5">
					<img src="./image/logo2.png">
				</span>
				<span class="basis-3/5 mt-2.5 mb-2.5 mr-3 ml-3">
					<h1 class="text-5xl font-medium pr-5 pl-5">LUNA</h1>
					<h2 class="text-xl font-light text-center pr-0 pl-0 pt-8 max-w-760">智慧教育知识图谱</h2>
				</span>
			</div>
			<div class="">
				
			</div>
		</div>
		<div class="container absolute flex items-center justify-center max-w-full h-500 mt-500">
			
		</div>
	</div>	
</template>

<style>

</style>

<script>
	window.onscroll=function(){
		var topScroll =document.body.scrollTop;
		var nav=document.getElementById("nav");
		if(topScroll>120){
			nav.style.backgroundColor = 'rgba(0,0,0,0.75)'
			nav.style.backdropFilter = 'blur(24px)'
		}
	}
	
</script>