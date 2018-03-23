export default rightType => ({
  // rightType作为参数传入，返回特定mixin
  computed: {
    hasRight () {
      // 判断用户是否有权限进入本页面的计算属性
      // 这里的user是之前在app中通过接口返回注入store的用户信息
      const { rightList } = this.$store.state.user
      return rightList.indexOf(rightType) !== -1 // 问题解决，美滋滋
    }
  }
})
