import { createRouter, createWebHistory } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import UpcomingEvents from "../views/UpcomingEvents.vue";
import SchoolCalendar from "../views/SchoolCalendar.vue";
import PastEvents from "../views/PastEvents.vue";

const routes = [
  {
    path: '/siteheader',
    name: 'SiteHeader',
    component: SiteHeader
  },

  {
    path: '/upcomingevents',
    name: 'UpcomingEvents',
    component: UpcomingEvents
  },
  {
    path: '/',
    redirect: '/upcomingevents'
  },

  {
    path: '/schoolcalendar',
    name: 'SchoolCalendar',
    component: SchoolCalendar
  },
  {
    path: '/pastevents',
    name: 'PastEvents',
    component: PastEvents
  },


];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
