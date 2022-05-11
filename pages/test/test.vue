<template>
	<view>
		test
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('testData', function(data) {
			  console.log(data)
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
