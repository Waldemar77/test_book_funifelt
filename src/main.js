import { createApp } from 'vue'
import App from './App.vue'
import Login from "@/assets/pages/login"

const routes = [
    { path: '/', name: 'Login', component: Login },
    /*{ path: '/home', name: 'home', component: Home, meta: { requireAuth: true } },*/
    /*{ path: '/regions', name: 'regions', component: Regions, meta: { requireAuth: true } },*/
    /*{ path: '/region/:regionId', name: "region", component: Region, props: true, meta: { requireAuth: true } }*/
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
                name: "Login"
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
