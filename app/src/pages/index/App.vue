<template>
  <div id="app">
		<Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="less">
@import '../../utils/css/reset.css';
@import '../../theme/style.less';
</style>
