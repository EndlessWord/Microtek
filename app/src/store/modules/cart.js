import shoppingCar from '../../api/shoppingCar';
// shoppingCar: [{
// goods_id,
// checked,
// goods_pic,
// goods_name,
// goods_description,
// goods_num,
// format_id,
// goods_format: [{id,price,text}]
// }]
const state = {
	waresLists: [],
	recommendLists: []
}

// getters
const getters = {
	totalPrice(state) {
		let total=0;
		state.waresLists.filter((item) => {
			if(item.checked){
				let oI = item.goods_format.find(v => v.format_id === item.format_id)||item.goods_format[0];
				total +=item.goods_num * oI.price;
			}
		})
		return total*100;
	},
	getWaresPic(state){
		return state.waresLists.map(item=>item.goods_pic);
	}
}

// actions
const actions = {
	getWaresLists({
		commit
	}) {
		shoppingCar.getWaresLists(lists => {
			commit('setWaresLists', lists);
		})
	},
	getRecommendLists({
		commit
	}) {
		shoppingCar.getRecommendLists(lists => {
			commit('setRecommendLists', lists);
		})
	},
	selectAll({
		commit
	}, status) {
		commit('setSelectAll', status);
	}
}

// mutations
const mutations = {
	setWaresLists(state, lists) {
		state.waresLists = lists;
	},
	setRecommendLists(state, lists) {
		state.recommendLists = lists;
	},
	cutNum(state, id) {
		const wareItem = state.waresLists.find(item => item.goods_id === id)
		if (wareItem['goods_num'] > 1) {
			wareItem.goods_num--;
		}
	},
	addNum(state, id) {
		const wareItem = state.waresLists.find(item => item.goods_id === id)
		wareItem.goods_num++;
	},
	delWares(state, index) {
		state.waresLists.splice(index,1);
	},
	addWares(state, wares) {
		state.waresLists.push(wares);
	},
	setSelectAll(state, status) {
		state.waresLists.forEach(item => {
			item.checked = status;
		});
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
