import Vue from 'vue'
import Main from "@/components/Main";
import vuetify from './plugins/vuetify';
import VueResource from "vue-resource";
import VueRouter from 'vue-router';
// import sample from "@/components/sample";
import Routes from "@/routes";
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(vuetify);
const router = new VueRouter({
    routes:Routes,
    mode:'history'
});

new Vue({
  vuetify,
  render: h => h(Main),
  router:router,

}).$mount('#app')
