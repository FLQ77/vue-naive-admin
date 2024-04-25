export const basicRoutes = [
  {
    name: 'Page1',
    path: '/page1',
    component: () => import('@/views/test-page/page1/index.vue'),
    meta: {
      title: '动态路由1',
      role: ['admin'],
    },
  },
  {
    name: 'Page2',
    path: '/page2',
    component: () => import('@/views/test-page/page2/index.vue'),
    meta: {
      title: '动态路由2',
      role: ['editor'],
    },
  },
  {
    name: 'Page3',
    path: '/page3',
    component: () => import('@/views/test-page/page3/index.vue'),
    meta: {
      title: '动态路由3',
      role: ['admin'],
    },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },  
  {
      name: 'LOGIN',
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      isHidden: true,
      meta: {
        title: '登录页',
      },
    },
  
    {
      name: 'Dashboard',
      path: '/',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
  
    {
      name: 'TestUnocss',
      path: '/test/unocss',
      component: () => import('@/views/test-page/unocss/index.vue'),
      meta: {
        title: '测试unocss',
      },
    },
  ]
  
  export const NOT_FOUND_ROUTE = {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    isHidden: true,
  }
  
  // modules文件夹下的路由都会作为动态路由
  const modules = import.meta.glob('./modules/*.js', { eager: true })
  const asyncRoutes = []
  Object.keys(modules).forEach((key) => {
    asyncRoutes.push(...modules[key].default)
  })
  
  export { asyncRoutes }