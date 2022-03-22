/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import Login from "@/assets/pages/login"
import Home from "@/assets/pages/home"
import Credits from "@/assets/pages/credits_page"
import IndexTable from "@/assets/pages/index_table"
import Lesson_1 from "@/assets/pages/lesson_1"
import Lesson_1_1 from "@/assets/pages/lesson_1_1"
import Lesson_1_2 from "@/assets/pages/lesson_1_2"
import firebase from 'firebase';

import { createRouter, createWebHashHistory } from 'vue-router'
import DragDropTouch from './assets/js/DragDropTouch'

const routes = [
    { path: '/', name: 'Login_app', component: Login },
    { path: '/home', name: 'Home_app', component: Home, meta: { requireAuth: true } },
    { path: '/credits', name: 'Credits_app', component: Credits, meta: { requireAuth: true } },
    { path: '/index', name: "Index_app", component: IndexTable, props: true, meta: { requireAuth: true } },
    { path: '/lesson1', name: "Lesson1_app", component: Lesson_1, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_1', name: "Lesson1_1_app", component: Lesson_1_1, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_2', name: "Lesson1_2_app", component: Lesson_1_2, props: true, meta: { requireAuth: true } }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(ruta => ruta.meta.requireAuth)) {
        const user = firebase.auth().currentUser;
        if (user) {
            next();
        } else {
            next({
                name: "Login_app"
            })
        }
    } else {
        next();
    }
})

const app = createApp(App);
app.config.globalProperties.$regionData = { audioPlaying: null };
app.use(router)
app.use(DragDropTouch)
app.mount('#app')
