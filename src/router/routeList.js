import NotFind from '../views/ErrorPage/404.vue'
import NotAuth from '@/views/ErrorPage/403.vue'
export const constantRoutes  = [
    {
        path: '/user',
        hideMenu: true,
        component: () => import(/* webpackChunkName: "layouts" */ "@/layouts/userLayout.vue"),
        children: [
            {
                path: '/user',
                redirect: '/user/login'
            },
            {
                path: '/user/login',
                name: 'login',
                meta: {
                    title: '登录'
                },
                component: () => import(/* webpackChunkName: "users" */ "@/views/Users/login")
            },
            {
                path: '/user/register',
                name: 'register',
                meta: {
                    title: '注册'
                },
                component: () => import(/* webpackChunkName: "users" */ "@/views/Users/register")
            }
        ]
    },
    {
        path: '/404',
        hideMenu: true,
        name: '404',
        component: NotFind
    },
    {
        path: '/403',
        hideMenu: true,
        name: '403',
        component: NotAuth
    }
]

export const menuRoutes = [
    {
        path: "/",
        meta: {
          authority: ['user', 'admin']
        },
        component: () => import(/* webpackChunkName: "layouts" */ "@/layouts/mainLayout.vue"),
        children: [
          {
            path: "/",
            redirect: "/dashboard/welcome"
          },
          {
            path: "/dashboard",
            name: "dashboard",
            meta: {
              title: '首页',
              icon: 'dashboard'
            },
            component: { render: h=> h("router-view")},
            children: [
              {
                path: "/dashboard/welcome",
                name: "welcome",
                meta: {
                  title: '欢迎页'
                },
                component: () => 
                  import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard/index.vue")
              }
            ]
          },
          // from
          {
            path: "/test",
            name: "test",
            meta: {
              title: '功能页',
              icon: 'dashboard',
              authority: ['admin']
            },
            component: { render: h=> h("router-view")},
            children: [
              {
                path: "/test/page1",
                name: "page-1",
                meta: {
                  title: '功能一'
                },
                component: () => import(/* webpackChunkName: "Nav" */ "../views/Nav/Nav1/Base.vue")
              },
              {
                path: "/test/page2",
                name: "page-2",
                meta: {
                  title: '功能二'
                },
                component: () => import(/* webpackChunkName: "Nav" */ "../views/Nav/Nav2")
              }
            ]
          }
        ]
    },
    {
      path: '*',
      hideMenu: true,
      name: '404',
      redirect: '/404'
    }
]