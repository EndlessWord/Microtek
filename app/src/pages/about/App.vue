<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
		我是关于界面
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
		Footer
  }
}
</script>

<style lang="less">
@import '../../utils/css/reset.css';
@import '../../theme/style.less';
</style>
