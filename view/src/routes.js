import Login from './views/Login.vue'
import NotFound from './views/404.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        hidden: true
    },
    {
        path: '/',
        hidden: true,
        name:'redirect',
        redirect: { path: '/login' }
    },
    {
        path: '/404',
        component: NotFound,
        name: 'notfound',
        hidden: true
    },
];

export default routes;