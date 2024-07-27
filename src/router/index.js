import {createRouter, createWebHistory} from "vue-router";

import dashboard from '../views/dashboard.vue'
import patients from '../views/patients.vue'
import sessoes from '../views/sessions.vue'

const routes = [
    {
        path:'/',
        name: "Home",
        component: dashboard
    },
    {
        path:'/pacientes',
        name: "Pacientes",
        component: patients
    },
    {
        path:'/sessoes',
        name: "Sessoes",
        component: sessoes
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router