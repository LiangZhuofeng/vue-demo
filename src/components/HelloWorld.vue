<template>
  <div class="hello">
    <div>
      <el-button
        type="primary"
        @click="deliverMsg">
        {{ msg }}
      </el-button>
      <el-button
        type="primary"
        @click="getJokeList">
        获取段子列表
      </el-button>
      <el-button
        v-auth="['auth']"
        type="danger"
        @click="getInfo">
        {{ this.$attrs.title }}
      </el-button>
    </div>
    <div>
      <authority :auth="['admin']">
        <el-button
          type="success"
          @click="getEvent">提交</el-button>
      </authority>
    </div>
  </div>
</template>

<script>
import { MXG_API, OPEN_API } from '@/api/request'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  mounted() {
    console.log('log========this.$attrs')
    console.log(this.$attrs)
    console.log(this.$listeners)
  },
  methods: {
    deliverMsg() {
      console.log('log========test')
      console.log('test')
      this.$emit('showMsg', 'HelloWorld!')
      this.$listeners.change()
    },

    getJokeList() {
      OPEN_API.getJoke({
        type: 'all',
        page: '',
        count: ''
      }, 'post')
        .then(res => {
          console.log('log========joke list')
          console.log(res)
        })
        .catch(err => {
          console.log('log========joke err')
          console.log(err)
        })
    },

    getInfo() {
      console.log('log========API')
      console.log(MXG_API)
      MXG_API.getQQInfo({ qq: '1244920721' })
        .then((res) => {
          console.log('log========res -> qqInfo')
          console.log(res)
        })
        .catch((err) => {
          console.log('log========err -> err')
          console.log(err)
        })
    },

    getEvent() {
      MXG_API.getTodayInHistory()
        .then((res) => {
          console.log('log========res')
          console.log(res)
        })
        .catch((err) => {
          console.log('log========err')
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
