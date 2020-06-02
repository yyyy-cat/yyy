// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import layer from 'layui-layer';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';
import App from './App'
import ElementUI from 'element-ui';
// import layui from 'layui-src';
import router from './router'
import iView from 'iview';
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import {request} from './assets/js/libs/request.js';

Vue.prototype.$request=request;



Vue.config.productionTip = false
Vue.use(iView);
Vue.use(ElementUI);
// Vue.use(layui);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
