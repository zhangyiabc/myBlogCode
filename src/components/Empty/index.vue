<template>
	<div class="Empty-container">
		<Icon type="empty" />
		<span>{{text}}</span>
	</div>
</template>

<script>
	import Icon from "@/components/Icon/index"
	export default {

		components: {
			Icon,
		},
		props: {
			text: {
				type: String,
				default: "无数据"
			}
		}
	}
</script>

<style scoped lang="less">
	@import url(~@/styles/var.less);
	@import url(~@/styles/lessBlock.less);
	.Empty-container {
		.self-center(relative);
		font-size: 50px;
		color: @gray;
		width: 100px;
		height: 100px;
		
		text-align: center;
		/* justify-content: center; */
	}
	span{
		color: @dark;
		font-size: 20px;
		display: block;
	}
</style>