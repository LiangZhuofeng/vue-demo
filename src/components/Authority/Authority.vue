<script>
const AUTH_LIST = ['admin', 'user']

function checkAuth(auths) {
  return AUTH_LIST.some(item => auths.includes(item))
}

export default {
  functional: true,
  props: {
    auth: {
      type: Array,
      require: true,
      default() {
        return []
      }
    }
  },
  render(h, context) {
    const { props, scopedSlots } = context
    console.log('log========scopedSlots')
    console.log(scopedSlots.default())
    return checkAuth(props.auth) ? scopedSlots.default() : null
  }

}
</script>
