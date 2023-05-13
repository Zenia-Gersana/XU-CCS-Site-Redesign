<template>
  <div>
    <section class="events-navigation">
      <nav>
        <ul class="navigation-buttons">
          <li><router-link :to="{ name: 'Upcoming Events' }" :class="{ active: activeButton === 'upcoming' }" @click="activeButton = 'upcoming'">Upcoming Events</router-link></li>
          <li><router-link :to="{ name: 'School Calendar' }" :class="{ active: activeButton === 'calendar' }" @click="activeButton = 'calendar'">Calendar</router-link></li>
          <li><router-link :to="{ name: 'Past Events' }" :class="{ active: activeButton === 'past' }" @click="activeButton = 'past'">Past Events</router-link></li>
        </ul>
      </nav>
    </section>
    <main>
      <!-- if there is main content -->
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

};
</script>

<style scoped>
.events-navigation {
  padding: 0;
}

.navigation-buttons {
  list-style: none;
  padding: 0;
  margin: 0 auto; 
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--acc);
  padding: 12px;
}
.navigation-buttons a {
  text-decoration: none;
  color: var(--white);
  font-size: 20px;
  font-family: var(--text);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  padding: 12px 24px;
  background-color: var(--acc);
  align-items: center;
  transition-duration: 0.2s;
}
.navigation-buttons li {
  position: relative; 
}
.navigation-buttons li:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 50px;
  border-right: 1px solid white; 
}
.navigation-buttons a.active {
  background-color: var(--dacc);
  font-weight: 700;
  color: white;
}
.navigation-buttons a:hover {
  background-color: var(--dacc);
  color: white;
  letter-spacing: 3px;
  font-weight: 700;
}

.navigation-buttons li:first-child{
  border-radius: 10px 0 0 10px;
}

</style>
