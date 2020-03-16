<template>
  <div id="app">
		<img alt="Vue logo" src="../../assets/logo.png">
		<a href="/about"><el-button>去关于界面</el-button></a>
		<HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
@import '../../utils/css/reset.css';
@import '../../theme/style.less';
</style>
