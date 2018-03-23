import NoRightTips from '../components/no-right-tips'

export const options = (comp, rightType) => {
  return {
    computed: {
      hasRight () {
        const { rightList } = this.$store.state.user
        return rightList.indexOf(rightType) !== -1
      }
    },
    created () {
    },
    render (h) {
      return this.hasRight ? h(comp, {}) : h(NoRightTips, {})
    }
  }
}

export const renderWith = {
  props: {
  },
  listeners: {
  }
}
