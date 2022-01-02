<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<p>姓：{{firstname}}</p>
		<p>名：{{lastname}}</p>
		<div>计算属性得出--全名: {{fullname}}</div>
		<div>计算属性得出--全名: {{fullname}}</div>
		<div>计算属性得出--全名: {{fullname}}</div>
		<div>计算属性得出--全名: {{fullname}}</div>

		<div>方法得出--全名: {{getFullName()}}</div>
		<div>方法得出--全名: {{getFullName()}}</div>
		<div>方法得出--全名: {{getFullName()}}</div>
		<div>方法得出--全名: {{getFullName()}}</div>

	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				firstname: "张",
				lastname: "毅"
			}
		},
		computed: {
			fullname() {
				console.log("运行了计算属性fullname")
				return this.firstname + this.lastname;
			}
		},
		methods: {
			getFullName() {
				console.log("运行了方法fullname")
				return this.firstname + this.lastname
			}
		}
	}
	//计算属性与方法的区别
	// 两者的执行结果是完全相同的
	// 计算属性是基于他们的依赖进行缓存的，只有在相关依赖发生改变时，他们才会重新求值，也就是说，只要他的依赖没有发生变化，那么每次访问的时候计算属性都会立即返回之前的计算结果，不再执行函数
	// 每次触发重新渲染时，调用方法将总会再次执行函数
	//计算属性利用缓存可以提高运行效率
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>