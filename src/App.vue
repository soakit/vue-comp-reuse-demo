<template>
  <div id="app">
    <div class="app-page" v-if="user.userLoaded">
      <div class="app-page-cnt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    // vuex中的action，会从接口请求包含权限的用户信息，并保存到store中的user字段
    // store中具体的代码因为比较简单，并且在这里不重要，所以就不展示了,可以自己脑补
    ...mapActions(['getUserDetail'])
  },
  computed: {
    // store中的user信息，在未从接口获取返回之前，为{ userLoaded: false }
    ...mapState(['user'])
  },
  created () {
    this.getUserDetail()
  }
}
</script>
