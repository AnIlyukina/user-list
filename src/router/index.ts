import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import EditView from '../views/EditView.vue';
import CreationView from '../views/CreationView.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/create',
        name: 'CreationView',
        component: CreationView,
    },
    {
        path: '/edit',
        name: 'editView',
        component: EditView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
