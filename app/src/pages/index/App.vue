<template>
  <div id="app">
		<Contact></Contact>
		<Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import Contact from '../../components/Contact.vue'

export default {
  name: 'App',
  components: {
    Footer,
		Contact
  }
}
</script>

<style lang="less">
@import '../../utils/css/reset.css';
@import '../../theme/style.less';
</style>
