import { createRouter, createWebHistory } from 'vue-router'
    import AboutPage from '../views/AboutPage.vue'
    import HomeView from '../views/HomeView.vue'
    import FacultyPage from '../views/FacultyPage.vue'
    const routes = [
     
      {
        path: '/about',
        name: 'About',
        component: AboutPage,
      },

      {
        path: '/',
        name: 'HomeView',
        component: HomeView,
      },

      {
        path: '/faculty',
        name: 'Faculty',
        component: FacultyPage,
      }

    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router