import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
    { 
        path: '/', 
        redirect: '/login', 
    },
    { 
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'), 
    },
    {
        path: "/:pathMatch(.*)*", // 代替vue2的通配符path: "*",
        name: "NotFound",
        component: ()=> import('@/views/Notfound.vue') ,
    },
];

const router = createRouter({
    // hash模式：createWebHashHistory，history模式：createWebHistory
    history: createWebHashHistory(),
    routes: routes,
});

export default router