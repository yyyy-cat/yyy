import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import index2 from '@/components/index1'
import table from '@/components/table'
import charts from '@/components/charts'

Vue.use(Router)

export default new Router({

  routes: [
    {
      //主页
      path: "/index",
      component: index,
      // keepAlive:true
    },
    {
      //主页
      path: "/table",
      component: table,
      // keepAlive:true,
    },
    {
      //主页
      path: "/charts",
      component: charts,
      // keepAlive:true,
    },
    {
      //主页2
      path: "/index1",
      component: index2,
      // keepAlive:true
    },
    {
      //默认
      path: "*",
      redirect: "/table"
    }
  ]
})
