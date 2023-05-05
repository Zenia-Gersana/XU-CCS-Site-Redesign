import { createRouter, createWebHistory } from 'vue-router'
    import AboutPage from '../views/AboutPage.vue'
    import HomeView from '../views/HomeView.vue'
    import FacultyPage from '../views/FacultyPage.vue'
    import EventsPage from "../views/EventsPage.vue"
    import UpcomingEvents from "../components/Events/UpcomingEvents.vue";
    import SchoolCalendar from "../components/Events/SchoolCalendar.vue";
    import PastEvents from "../components/Events/PastEvents.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),    
    routes: [
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
        path: '/events',
        name: 'Events',
        component: EventsPage,
        children:[
          {
            path: 'upcoming',
            name: 'UpcomingEvents',
            component: UpcomingEvents
          },
          {
            path: 'past',
            name: 'PastEvents',
            component: PastEvents
          },
          {
            path: 'calendar',
            name: 'SchoolCalendar',
            component: SchoolCalendar
          }
        ]
      },
    ]
})

export default router;