import layout from '@/views/layout//layout.vue';

export const constantRoutes = [
  // 404 页面
  {
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    // component: () => import('@/views/layout/layout.vue'),
    component: layout,
    meta: { hidden: true },
    children: [
      // {
      //   path: '',
      //   component: () => import('@/views/project/project.vue'),
      //   meta: { hidden: false }
      // },
      {
        path: '',
        component: () => import('@/views/login/login.vue'),
        meta: { hidden: true }
      },
      {
        path: 'project',
        component: () => import('@/views/project/project.vue'),
        meta: { hidden: false }
      },
      {
        path: 'PS-Pricer',
        component: () => import('@/views/project/ps/psPricer.vue'),
        meta: { hidden: false }
      },
      {
        path: 'PS-Sales',
        component: () => import('@/views/project/ps/psSales.vue'),
        meta: { hidden: false }
      },
      {
        path: 'PS-Cost',
        component: () => import('@/views/project/ps/psProjectCost.vue'),
        meta: { hidden: false }
      },
      {
        path: 'TSS-Pricer',
        component: () => import('@/views/project/tss/tssPricer.vue'),
        meta: { hidden: false }
      },
      {
        path: 'TSS-PM',
        component: () => import('@/views/project/tss/tssPM.vue'),
        meta: { hidden: false }
      },
      {
        path: 'TSS-Sales',
        component: () => import('@/views/project/tss/tssSales.vue'),
        meta: { hidden: false }
      },
      {
        path: 'TSS-Cost',
        component: () => import('@/views/project/tss/tssProjectCost.vue'),
        meta: { hidden: false }
      },
    ]
  },
  {
    path: '*',
    redirect: '/login',
    meta: { hidden: true }
  }
];

//私有权限路由表
export const asyncRoutes = [];
