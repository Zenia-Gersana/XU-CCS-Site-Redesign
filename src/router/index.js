import { createRouter, createWebHistory } from 'vue-router'
    import AboutPage from '../views/AboutPage.vue'
    import HomeView from '../views/HomeView.vue'
    const routes = [
     
      {
        path: '/About',
        name: 'About',
        component: AboutPage,
      },

      {
        path: '/',
        name: 'Home',
        component: HomeView,
      }

    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router