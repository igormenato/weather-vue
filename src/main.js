import Vue from 'vue'
import App from './App.vue'
import 'dotenv/config'
import VueMeta from 'vue-meta'

Vue.use(VueMeta);

new Vue({
  render: h => h(App),
}).$mount('#app')
