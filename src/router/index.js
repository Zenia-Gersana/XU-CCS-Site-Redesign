import { createRouter, createWebHistory } from 'vue-router'
    import SampleProfile from '../views/AboutPage.vue'
    const routes = [
     
      {
        path: '/AboutPage',
        name: 'SampleProfile',
        component: SampleProfile,
      }

    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router