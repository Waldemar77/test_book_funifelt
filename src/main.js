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
import Lesson_1_3 from "@/assets/pages/lesson_1_3"
import Lesson_1_4 from "@/assets/pages/lesson_1_4"
import Lesson_1_5 from "@/assets/pages/lesson_1_5"
import Lesson_1_g1 from "@/assets/pages/game_1_lesson_1"
import Lesson_1_6 from "@/assets/pages/lesson_1_6"
import Lesson_1_g2 from "@/assets/pages/game_2_lesson_1"
import Lesson_1_7 from "@/assets/pages/lesson_1_7"
import Lesson_1_g3 from "@/assets/pages/game_3_lesson_1"
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
    { path: '/lesson1_2', name: "Lesson1_2_app", component: Lesson_1_2, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_3', name: "Lesson1_3_app", component: Lesson_1_3, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_4', name: "Lesson1_4_app", component: Lesson_1_4, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_5', name: "Lesson1_5_app", component: Lesson_1_5, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_g1', name: "Lesson1_g1_app", component: Lesson_1_g1, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_6', name: "Lesson1_6_app", component: Lesson_1_6, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_g2', name: "Lesson1_g2_app", component: Lesson_1_g2, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_7', name: "Lesson1_7_app", component: Lesson_1_7, props: true, meta: { requireAuth: true } },
    { path: '/lesson1_g3', name: "Lesson1_g3_app", component: Lesson_1_g3, props: true, meta: { requireAuth: true } },
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
