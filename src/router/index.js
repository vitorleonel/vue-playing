import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from '../pages/login'
import IndexPage from '../pages/index'
import HomePage from '../pages/home'
import ProductsPage from '../pages/products'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [

        {
            path: '/',
            component: LoginPage
        },

        {
            path: '/home',
            component: IndexPage,
            children: [
                {
                    path: '/',
                    component: HomePage,
                },
                {
                    path: 'products',
                    component: ProductsPage,
                }
            ]
        },

        {
            path: '/menu',
            component: IndexPage
        },

        {
            path: '/tasks',
            component: IndexPage
        }

    ]
})