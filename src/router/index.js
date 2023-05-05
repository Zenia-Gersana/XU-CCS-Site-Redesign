import { createRouter, createWebHistory } from 'vue-router'

    import AboutPage from '../views/AboutPage.vue'
    import HomeView from '../views/HomeView.vue'
    import FacultyPage from '../views/FacultyPage.vue'
    import CourseOfferings from '../views/CourseOfferings.vue'

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
      },

      {
        path: '/course-offerings',
        name: 'CourseOfferings',
        component: CourseOfferings,
      }

    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router