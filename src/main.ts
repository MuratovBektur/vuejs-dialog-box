import Vue from 'vue'
import App from './App.vue'
import VuejsDialogBox from '../plugin'

Vue.config.productionTip = false

Vue.use(VuejsDialogBox)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
