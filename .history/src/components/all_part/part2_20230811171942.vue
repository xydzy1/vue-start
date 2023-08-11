<template>
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
					<img src="../../image/data.png" class="w-152.5 h-130">
				</div>
			</div>	
	</div>
</template>

<script>
    export default{
        name: 'part2'
    }
</script>