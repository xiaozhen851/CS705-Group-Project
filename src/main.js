// import '../theme/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import tool from './historyUtil/tool'


Vue.use(ElementUI, { locale });
Vue.use(tool)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
