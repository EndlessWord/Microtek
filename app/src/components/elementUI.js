/**************element-ui引入**************/
// 使用:在该页面注册要使用的组件

import Vue from 'vue'

import {
	Select,
	Button
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component('el-select', Select),
Vue.component('el-button', Button)
