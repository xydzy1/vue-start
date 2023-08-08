import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path: '/',
        redirect: 'main',
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../components/main.vue'),
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('../components/hello.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })

export default router