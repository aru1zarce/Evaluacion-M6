import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue'
import Opiniones from '../views/OpinionPersona.vue'
import Administracion from '../views/AdminOpinion.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
{
    path: '/',
    name: 'HomePage',
    component: Home
},
{
    path: '/opiniones/:id',
    name: 'Opiniones',
    component: Opiniones,

},
{
    path: '/administracion',
    name: 'Administracion',
    component: Administracion
},

{
    path: '/*',
    name: 'NotFound',
    component: NotFound
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router

