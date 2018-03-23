import NoRightTips from '../components/no-right-tips'

export default (Comp, rightType) => ({
  components: {
    Comp,
    NoRightTips
  },
  computed: {
    hasRight () {
      const { rightList } = this.$store.state.user
      return rightList.indexOf(rightType) !== -1
    }
  },
  render (h) {
    return this.hasRight ? h(Comp, {}) : h(NoRightTips, {})
  }
})
