import { createRouter, createWebHistory } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import UpcomingEvents from "../components/UpcomingEvents.vue";
import SchoolCalendar from "../components/SchoolCalendar.vue";
import PastEvents from "../components/PastEvents.vue";

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
