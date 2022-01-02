<template>
	<i class="iconfont icon-container" :class="nowIcon" ></i>
</template>

<script>
	const classMap = {
		home: "icon-zhuye",
		success: "icon-success",
		error: "icon-error",
		close: "icon-close",
		warn: "icon-jinggao",
		info: "icon-iconset0103",
		blog: "icon-wenzhang",
		code: "icon-code",
		about: "icon-iconset0103",
		weixin: "icon-weixin",
		mail: "icon-youxiang1",
		github: "icon-github",
		qq: "icon-sign_qq",
		arrowUp: "icon-icon--",
		arrowDown: "icon-xiangxia5",
		empty: "icon-zanwu",
		chat: "icon-liuyan",
	}
	export const types = Object.keys(classMap);
	export default {
		props: {
			type: {
				type: String,
				required: true,
			},
		},
		computed:{
			nowIcon(){
				return classMap[this.type];
			}
		}
	}
</script>

<style scoped>
	@import url(//at.alicdn.com/t/font_2554530_6gefxgxnamd.css);

	.iconfont {
		color: inherit;
		font-size: inherit;
	}
</style>>