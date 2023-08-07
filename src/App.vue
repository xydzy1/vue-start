<template>
	<div class="absolute h-620 w-1440 left-0 top-0 opcity-100 
	bg-gradient-tl from bg-p1color1 from-0% via-p1color2 via-55% to-p1color3 to-100% ">
		<div class="fixed bg-transparent top-0" id="nav">

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
		}
	}
	
</script>