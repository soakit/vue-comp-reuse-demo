import Vue from 'vue'
import Router from 'vue-router'
import rightHoc from '../HOC/right-hoc'

import { createHOC } from 'vue-hoc'
import {options, renderWith} from '../HOC/right-hoc2'
import Page5 from '../views/page5.vue'
import Page6 from '../views/page6.vue'
Vue.use(Router)

// 以下是组件异步加载的写法, 功能上等同于直接import
const Page0 = resolve => require(['../views/page0'], resolve)
const Page1 = resolve => require(['../views/page1'], resolve)
const Page2 = resolve => require(['../views/page2'], resolve)
const Page3 = resolve => require(['../views/page3'], resolve)
const Page4 = resolve => require(['../views/page4'], resolve)

export default new Router({
  routes: [
    { path: '/page0', component: Page0 },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: rightHoc(Page3, 'RIGHT_PAGE_3') },
    { path: '/page4', component: rightHoc(Page4, 'RIGHT_PAGE_4') },
    { path: '/page5', component: createHOC(Page5, options(Page5, 'RIGHT_PAGE_5'), renderWith) },
    { path: '/page6', component: createHOC(Page6, options(Page6, 'RIGHT_PAGE_6'), renderWith) }
  ]
})
