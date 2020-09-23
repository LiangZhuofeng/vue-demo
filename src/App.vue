<template>
  <div id="app">
    <img
      src="./assets/logo.png"
      @click="handleImgClick">
    <HelloWorld
      :title="info"
      msg="Welcome to Your Vue.js App"
      @showMsg="getMsg"
      @change="handleChange" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      info: ''
    }
  },
  mounted() {
    const timestamp = (new Date()).valueOf()
    this.info = timestamp
  },
  methods: {
    handleImgClick(e) {
      console.log('log========e')
      console.log(e)
      this.info = e.timeStamp
    },

    getMsg(msg) {
      this.$notice({
        title: '温馨提示',
        message: msg,
        type: 'success'
      })
    },

    handleChange() {
      console.log('log========change')
      console.log('change')
    }
  }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
