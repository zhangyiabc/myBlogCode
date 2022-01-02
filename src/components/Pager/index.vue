<template>
	<div class="pager-container">
		<a v-if="current !== 1" @click="handleClick(1)" :class="{disabled:current === 1}">首页</a>
		<a v-if="current !== 1" @click="handleClick(current - 1)" :class="{disabled:current === 1}">上一页</a>
		<a @click="handleClick(n)" v-for='(n,i) in numbers' :key="i" :class="{active:n === current}">

			{{n}}
		</a>

		<a v-if="current !== pagerNumber" @click="handleClick(current + 1)"
			:class="{disabled:current === pagerNumber}">下一页</a>
		<a v-if="current !== pagerNumber" @click="handleClick(pagerNumber)"
			:class="{disabled:current === pagerNumber}">尾页</a>
	</div>
</template>

<script>
	export default {
		props: {
			//总数据
			total: {
				type: Number,
				default: 10
			},
			//当前页面
			current: {
				type: Number,
				default: 1
			},
			//可见页码数
			visibleNumber: {
				type: Number,
				default: 10
			},
			//一页显示多少数据
			limit: {
				type: Number,
				default: 10,
			}
		},
		//计算属性
		computed: {
			//总页数
			pagerNumber() {
				return Math.ceil(this.total / this.limit)
			},
			//得到最大页数
			pagerMax() {
				let max = this.pagerMin + this.visibleNumber - 1;
				if (max > this.pagerNumber) {
					max = this.pagerNumber;
				}
				return max;
			},
			//得到最小页数
			pagerMin() {
				let min = this.current - Math.floor(this.visibleNumber / 2);
				if (min < 1) {
					min = 1
				}
				return min;
			},
			//存储页码数据
			numbers() {

				let nums = [];

				for (let index = this.pagerMin; index <= this.pagerMax; index++) {
					nums.push(index)

				}
				return nums;
			},
		},
		methods: {
			handleClick(newPage) {
				if (newPage < 1) {
					newPage = 1;
				} else if (newPage > this.pagerNumber) {
					newPage = this.pagerNumber;
				}

				//如果点击的页码跟当前页相同，不做任何处理
				if (newPage === this.current) {
					return;
				}
				//此时抛出一个事件
				this.$emit("pageChange", newPage);
			}
		}


	}
</script>

<style lang=less>
	@import "../../styles/var.less";

	.pager-container {
		display: flex;
		justify-content: center;
		margin: 20px 0;

		a {
			color: @primary;
			margin: 0 6px;
			cursor: pointer;

			&.disabled {
				color: @lightWords;
				cursor: not-allowed;
			}

			&.active {
				color: @words;
				font-weight: bold;
				cursor: text;
			}
		}
	}
</style>