import Vue from 'vue'
import VueRouter from "vue-router";
import AdminLayout from "../components/layouts/AdminLayout";
import Home from "../components/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/register";
import UsersList from "../components/users/usersList";
import Shows from "../components/shows/Shows";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'home'
            },
            {
                path: '/users',
                component: UsersList,
                name: 'users'
            },
            {
                path: '/tv-shows',
                component: Shows,
                name: 'tv-shows'
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    }
]

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'bg-gray-800  shadow',
    routes: routes
})

export default router;
