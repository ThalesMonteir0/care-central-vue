import {createRouter, createWebHistory} from "vue-router";

import dashboard from '../views/dashboard.vue'
import patients from '../views/patients.vue'
import sessoes from '../views/sessions.vue'
import financeiro from '../views/financial.vue'

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
    {
        path:'/financeiro',
        name: "financeiro",
        component: financeiro
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router