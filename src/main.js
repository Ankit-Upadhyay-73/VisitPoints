import Vue from 'vue'
import sample from "@/components/sample";
// import HomeComp from "@/components/HomeComp";
import vuetify from './plugins/vuetify';
import VueResource from "vue-resource";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(vuetify);
new Vue({
  vuetify,
  render: h => h(sample)
}).$mount('#app')
