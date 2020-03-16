const waresLists = [{
		goods_id: 1,
		checked: true,
		goods_pic: 'img/22.png',
		goods_name: 'Croissant With Blueberry Jam',
		goods_description: '蓝莓丹麦（京沪杭满39元包邮）',
		goods_num: 1,
		format_id: 5,
		goods_format: [{
			id: 7,
			price: 13.8,
			text: '454g(1.0磅)'
		}, {
			id: 11,
			price: 27,
			text: '908g(2.0磅			)'
		}]
	},
	{
		goods_id: 2,
		checked: false,
		goods_pic: 'img/22.png',
		goods_name: 'Croissant With Blueberry Jam',
		goods_description: '蓝莓丹麦（京沪杭满39元包邮）',
		goods_num: 1,
		format_id: 5,
		goods_format: [{
			id: 7,
			price: 13.8,
			text: '454g(1.0磅)'
		}, {
			id: 11,
			price: 27,
			text: '908g(2.0磅			)'
		}]
	}
]

const recommendLists = [{
		goods_id: 1,
		checked: 1,
		goods_pic: 'img/22.png',
		goods_name: 'Croissant With Blueberry Jam',
		goods_description: '蓝莓丹麦（京沪杭满39元包邮）',
		goods_num: 1,
		format_id: 5,
		goods_format: [{
			id: 7,
			price: 13.8,
			text: '454g(1.0磅)'
		}, {
			id: 11,
			price: 27,
			text: '908g(2.0磅			)'
		}]
	},
	{
		goods_id: 1,
		checked: 1,
		goods_pic: 'img/22.png',
		goods_name: 'Croissant With Blueberry Jam',
		goods_description: '蓝莓丹麦（京沪杭满39元包邮）',
		goods_num: 1,
		format_id: 5,
		goods_format: [{
			id: 7,
			price: 13.8,
			text: '454g(1.0磅)'
		}, {
			id: 11,
			price: 27,
			text: '908g(2.0磅			)'
		}]
	},
	{
		goods_id: 1,
		checked: 1,
		goods_pic: 'img/22.png',
		goods_name: 'Croissant With Blueberry Jam',
		goods_description: '蓝莓丹麦（京沪杭满39元包邮）',
		goods_num: 1,
		format_id: 5,
		goods_format: [{
			id: 7,
			price: 13.8,
			text: '454g(1.0磅)'
		}, {
			id: 11,
			price: 27,
			text: '908g(2.0磅			)'
		}]
	},
	{
		goods_id: 1,
		checked: 1,
		goods_pic: 'img/22.png',
		goods_name: 'Croissant With Blueberry Jam',
		goods_description: '蓝莓丹麦（京沪杭满39元包邮）',
		goods_num: 1,
		format_id: 5,
		goods_format: [{
			id: 7,
			price: 13.8,
			text: '454g(1.0磅)'
		}, {
			id: 11,
			price: 27,
			text: '908g(2.0磅			)'
		}]
	}
]

export default {
	getWaresLists(cb) {
		cb(waresLists);
	},
	getRecommendLists(cb) {
		cb(recommendLists);
	}
}

// export default {
// 	getWaresLists(cb) {
// 		if(this.$cookies.get('userId')){
// 			let user_id = this.$cookies.get('userId');
// 			this.$http.get('/waresLists?user_id=' + user_id)
// 				.then((res)=> {
// 					let waresLists = res.data.data
// 					cb(waresLists)
// 				})
// 				.catch((err)=> {
// 					console.log(err)
// 				})
// 		}
// 	},
// 	getRecommendLists(cb) {
// 		this.$http.get('/recommendLists)
// 			.then((res)=> {
// 				let recommendLists = res.data.data
// 				cb(recommendLists)
// 			})
// 			.catch((err)=> {
// 				console.log(err)
// 			})
// 	}
// }
