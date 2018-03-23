<script>
import NoRightTips from '../components/no-right-tips'
import rightmixin from '../mixin/right-mixin'

export default {
  name: 'PAGE_1',
  mixins: [rightmixin('RIGHT_PAGE_1')],
  template: `
    <div v-if="hasRight">欢迎访问传说中的 page1 !</div>
    <no-right-tips v-else></no-right-tips>
  `,
  components: {
    NoRightTips
  }
}
</script>
