import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // 账号管理-权限分配
  {
    path: '/permission_management',
    component: Layout,
    redirect: '/permission_management/index',
    alwaysShow: true,
    meta: {
      title: '权限管理',
      icon: 'lock'
    },
    children: [{
      path: 'index',
      component: _import('permission_management/index'),
      name: 'permission_management',
      meta: {
        title: '权限分配'
      }
    }]
  },
  // 内容管理
  {
    path: '/page_management',
    component: Layout,
    redirect: '/page_management/index',
    meta: {
      title: '内容管理',
      icon: 'chart'
    },
    children: [
      { path: 'page_column', component: _import('page_management/page_column'), name: 'page_column', meta: { title: '栏目管理' }},
      { path: 'page_add', component: _import('page_management/page_add'), name: 'page_add', meta: { title: '内容添加' }},
      { path: 'index', component: _import('page_management/index'), name: 'page_management', meta: { title: '内容管理' }},
      { path: 'page_custom', component: _import('page_management/page_custom'), name: 'page_custom', meta: { title: '分类管理自定义' }}
    ]
  },
  // 通知消息模块
  {
    path: '/message',
    component: Layout,
    redirect: '/message/index',
    meta: {
      title: '通知消息',
      icon: 'chart'
    },
    children: [
      { path: 'index', component: _import('message/index'), name: 'message', meta: { title: '发布通知' }},
      { path: 'message_operation', component: _import('message/message_operation'), name: 'message_operation', meta: { title: '操作' }},
      { path: 'message_infro', component: _import('message/message_infro'), name: 'message_infro', meta: { title: '消息', roles: ['admin'] }}
    ]
  },
  // 报修模块
  {
    path: '/repair',
    component: Layout,
    redirect: '/repair/repair_people',
    meta: {
      title: '报修',
      icon: 'chart'
    },
    children: [
      { path: 'repair_people', component: _import('repair/repair_people'), name: 'repair_people', meta: { title: '维修人员' }},
      { path: 'repair_list', component: _import('repair/repair_list'), name: 'repair_list', meta: { title: '维修单列表' }},
      { path: 'repair_state', component: _import('repair/repair_state'), name: 'repair_state', meta: { title: '维修人员派遣状态' }},
      { path: 'repair_evaluate', component: _import('repair/repair_evaluate'), name: 'repair_evaluate', meta: { title: '维修单信息评价列表' }},
      { path: 'repair_seach', component: _import('repair/repair_seach'), name: 'repair_seach', meta: { title: '维修单查询' }}
    ]
  },
  // 会议室管理
  {
    path: '/meeting',
    component: Layout,
    redirect: '/meeting/meeting_infro',
    meta: {
      title: '会议室管理',
      icon: 'chart'
    },
    children: [
      { path: 'meeting_infro', component: _import('meeting/meeting_infro'), name: 'meeting_infro', meta: { title: '基本信息管理' }},
      { path: 'meeting_occupy', component: _import('meeting/meeting_occupy'), name: 'meeting_occupy', meta: { title: '占用情况' }},
      { path: 'meeting_forward', component: _import('meeting/meeting_forward'), name: 'meeting_forward', meta: { title: '使用批准信息转发' }},
      { path: 'meeting_print', component: _import('meeting/meeting_print'), name: 'meeting_print', meta: { title: '请单按格式打印' }},
      { path: 'meeting_apply', component: _import('meeting/meeting_apply'), name: 'meeting_apply', meta: { title: '申请列表' }},
      { path: 'meeting_count', component: _import('meeting/meeting_count'), name: 'meeting_count', meta: { title: '会议信息统计' }}
    ]
  },
  // 新闻管理
  {
    path: '/news',
    component: Layout,
    redirect: '/news/news_list',
    meta: {
      title: '新闻管理',
      icon: 'chart'
    },
    children: [
      { path: 'news_list', component: _import('news/news_list'), name: 'news_list', meta: { title: '新闻列表' }},
      { path: 'news_classify', component: _import('news/news_classify'), name: 'news_classify', meta: { title: '新闻分类列表' }},
      { path: 'news_editor', component: _import('news/news_editor'), name: 'news_editor', meta: { title: '新闻编辑发布' }}
    ]
  },
  // 智慧餐厅
  {
    path: '/cookroom',
    component: Layout,
    redirect: '/cookroom/cookroom_brief',
    meta: {
      title: '智慧餐厅',
      icon: 'chart'
    },
    children: [
      { path: 'cookroom_brief', component: _import('cookroom/cookroom_brief'), name: 'cookroom_brief', meta: { title: '餐厅介绍' }},
      { path: 'cookroom_list', component: _import('cookroom/cookroom_list'), name: 'cookroom_list', meta: { title: '美食列表' }},
      { path: 'cookroom_details', component: _import('cookroom/cookroom_details'), name: 'cookroom_details', meta: { title: '美食详情' }}
    ]
  },
  // 访客预约
  {
    path: '/visit',
    component: Layout,
    redirect: '/visit/visit_reason',
    meta: {
      title: '访客预约',
      icon: 'chart'
    },
    children: [
      { path: 'visit_reason', component: _import('visit/visit_reason'), name: 'visit_reason', meta: { title: '访客事由' }},
      { path: 'visit_list', component: _import('visit/visit_list'), name: 'visit_list', meta: { title: '访客列表' }},
      { path: 'visit_count', component: _import('visit/visit_count'), name: 'visit_count', meta: { title: '访客统计' }}
    ]
  },
  // 用车申请
  {
    path: '/car',
    component: Layout,
    redirect: '/car/car_infro',
    meta: {
      title: '用车申请',
      icon: 'chart'
    },
    children: [
      { path: 'car_infro', component: _import('car/car_infro'), name: 'car_infro', meta: { title: '车辆维护信息' }},
      { path: 'car_list', component: _import('car/car_list'), name: 'car_list', meta: { title: '车辆列表' }},
      { path: 'car_apply', component: _import('car/car_apply'), name: 'car_apply', meta: { title: '车辆申请' }}
    ]
  },
  // banner图
  {
    path: '/banner',
    component: Layout,
    redirect: '/banner/banner_upload',
    meta: {
      title: 'banner管理',
      icon: 'chart'
    },
    children: [
      { path: 'banner_upload', component: _import('banner/banner_upload'), name: 'banner_upload', meta: { title: '图片上传' }},
      { path: 'banner_details', component: _import('banner/banner_details'), name: 'banner_details', meta: { title: '详情管理' }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
