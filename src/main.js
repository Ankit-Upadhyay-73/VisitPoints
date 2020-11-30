import Vue from 'vue'
import HomeComp from "@/components/HomeComp";
// import sample from "@/components/sample";
import vuetify from './plugins/vuetify';
import VueResource from "vue-resource";
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(vuetify);
new Vue({
  vuetify,
  render: h => h(HomeComp)
}).$mount('#app')
