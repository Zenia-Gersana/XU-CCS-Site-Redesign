<template>
  <div>
    <section class="events-navigation">
      <nav>
        <ul class="navigation-buttons">
          <li><router-link :to="{ path: '/upcomingevents' }" :class="{ active: activeButton === 'upcoming' }" @click="activeButton = 'upcoming'">Upcoming Events</router-link></li>
          <li><router-link :to="{ path: '/schoolcalendar' }" :class="{ active: activeButton === 'calendar' }" @click="activeButton = 'calendar'">Calendar</router-link></li>
          <li><router-link :to="{ path: '/pastevents' }" :class="{ active: activeButton === 'past' }" @click="activeButton = 'past'">Past Events</router-link></li>
        </ul>
      </nav>
    </section>
    <main>
      <!-- main content -->
    </main>
  </div>
</template>

<script>
export default {
  name: "EventsContent",
  data() {
    return {
      activeButton: ""
    };
  }
  // additional script content
};
</script>

<style scoped>
.events-navigation {
  padding: 0;
  margin: 250px 0 0 0; /* add margin-top of 50px */
}

.navigation-buttons {
  list-style: none;
  padding: 0;
  margin: 0 auto; /* set margin to center and remove left and right margin */
  display: flex;
  justify-content: center;
}


.navigation-buttons a {
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  padding: 20px;
  background-color: #B2BEB5;
  border-radius: 0px;
  align-items: center;
}
.navigation-buttons li {
  position: relative; /* set position to relative for ::after pseudo-element */
}

.navigation-buttons li:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 50px;
  width: 1px;
  border-right: 1px solid white; /* add border and adjust thickness and color */
}




.navigation-buttons a.active {
  background-color: var(--prime);
  color: white;
}

.navigation-buttons a:hover {
  background-color: var(--prime);
  color: white;
}

.navigation-buttons a:first-child {
  margin-left: 0;
}

.navigation-buttons a:last-child {
  margin-right: 0;
}
</style>
