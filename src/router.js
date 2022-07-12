import HomeComponent from './components/HomeComponent.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import LoginComponent from './components/LoginComponent.vue'
const routes =[
   {
    name: 'Home',
    component: HomeComponent,
    path: '/'
   },
   {
    name: 'SignUp',
    component: SignUp,
    path: '/SignUp'
   },
   {
    name: 'Login',
    component: LoginComponent,
    path: '/Login'
   }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;