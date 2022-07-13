import HomeComponent from './components/HomeComponent.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import LoginComponent from './components/LoginComponent.vue'
import AddComponent from './components/AddComponent.vue'
import UpdateComponent from './components/UpdateComponent.vue'
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
   },
   {
    name: 'Add',
    component: AddComponent,
    path: '/Add'
   },
   {
    name: 'Update',
    component: UpdateComponent,
    path: '/Update'
   }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;