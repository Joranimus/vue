import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import vSelect from 'vue-select'


Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.component('v-select', vSelect)

new Vue({
  render: h => h(App),
}).$mount('#app')
