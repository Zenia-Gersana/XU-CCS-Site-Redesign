import { createRouter, createWebHistory } from 'vue-router'

    import AboutPage from '../views/AboutPage.vue'
    import HomeView from '../views/HomeView.vue'
    import FacultyPage from '../views/FacultyPage.vue'
    import EventsPage from "../views/EventsPage.vue"
    import CourseOfferings from "../views/CourseOfferings.vue";
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
        name: 'College of Computer Studies',
        component: HomeView,
      },

      {
        path: '/faculty',
        name: 'Faculty',
        component: FacultyPage,
      },

      {
        path: '/offer',
        name: 'Course Offerings',
        component: CourseOfferings,
      },

      {
        path: '/events',
        name: 'Events',
        component: EventsPage,
        children:[
          {
            path: '',
            name: 'Upcoming Events',
            component: UpcomingEvents,
          },
          {
            path: 'past',
            name: 'Past Events',
            component: PastEvents,
          },
          {
            path: 'calendar',
            name: 'School Calendar',
            component: SchoolCalendar,
          }
        ]
      },
    ]
    
})

export default router;

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});