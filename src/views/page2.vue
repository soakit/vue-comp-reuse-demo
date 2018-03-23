<script>
import NoRightTips from '../components/no-right-tips'
import rightmixin from '../mixin/right-mixin'

export default {
  name: 'PAGE_2',
  mixins: [rightmixin('RIGHT_PAGE_2')],
  template: `
    <div v-if="hasRight">欢迎访问传说中的 page2 !</div>
    <no-right-tips v-else></no-right-tips>
  `,
  components: {
    NoRightTips
  }
}
</script>
