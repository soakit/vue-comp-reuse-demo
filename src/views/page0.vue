<script>
export default {
  template: `
    <div v-if="hasRight">欢迎访问传说中的 page0 !</div>
    <div v-else>不好意思，由于不够帅，你没有权限访问本页面</div>
  `,
  name: 'PAGE_0',
  computed: {
    hasRight () { // 判断用户是否有权限进入本页面的计算属性
      // 这里的user是之前在app中通过接口返回注入store的用户信息
      const { rightList } = this.$store.state.user
      return rightList.indexOf(`RIGHT_${this.name}`) !== -1
    }
  }
}
</script>
