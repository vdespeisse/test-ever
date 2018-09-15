window.log = Vue.prototype.log = console.log.bind(console)
Vue.prototype.alert = (msg) => window.alert(msg)
window.update_query = Vue.prototype.update_query = query => vm.$router.push({ query: vm.$route.query.add(query).filter((v, k) => v) })
window.type = Vue.prototype.type = x => Object.prototype.toString.call(x).slice(8, -1).toLowerCase()
window.size = Vue.prototype.size = () => {
  let size = ''
  if (window.innerWidth > 1500) size += 'desktop4K '
  if (window.innerWidth > 1200) size += 'desktop '
  if (window.innerWidth > 900) size += 'laptop '
  if (window.innerWidth > 600) size += 'tablet '
  return size += 'mobile'
}
window.browser = Vue.prototype.browser = () => {
  const ua = navigator.userAgent
  if (/MSIE/.test(ua) || /Trident/.test(ua)) return 'ie'
  if (/Edge/.test(ua)) return 'edge'
  if (/Firefox/.test(ua)) return 'firefox'
  if (/Opera/.test(ua)) return 'opera'
  if (/Chrome/.test(ua)) return 'chrome'
  if (/Safari/.test(ua)) return 'safari'
  return 'unknown'
}
