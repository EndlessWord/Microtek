/**************工具函数**************/
// 在.vue页面模块导入 import {} from '../utils/utils.js'

export const getImgUrl = (src) => {
	return require('@/assets/' + src);
}
export const toPosition = (rate,dix) => {
	var doc = document.body.scrollTop ? document.body : document.documentElement;
	var scrollTop = doc.scrollTop;

	var move = function() {
		dix /=rate;
		scrollTop -= dix;

		// 临界判断，终止动画
		if (dix<1) {
			return;
		}
		doc.scrollTop = scrollTop;
		// 动画gogogo!
		requestAnimationFrame(move);
	};
	move();
};
