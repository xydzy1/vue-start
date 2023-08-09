<template>
	<div class="homepage">
		<part1/>
		<part2/>
		<part3/>
		<part4/>
	</div>		
</template>

<style scoped>
.homepage{
	font-family: 'Sarasa Gothic SC';
	align-items: center;
	justify-content: center;
	overflow-x: hidden;
}

</style>

<script>
import part1 from './all_part/part1.vue'
import part2 from './all_part/part2.vue'
import part3 from './all_part/part3.vue'
import part4 from './all_part/part4.vue'
	export default{
		data() {
			return {}
		},
		methods:{},
		created(){},
		components: {part1,part2,part3,part4},
	}
	
</script>