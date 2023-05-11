<template>
  <div class="container">
      <NavButtons />
      <router-view></router-view>
  </div>
</template>

<script>
import NavButtons from "@/components/Events/NavButtons.vue";

export default {
  name: 'EventsPage',
  components: {
    NavButtons,
  },
};
</script>

<style>
  .etitle {
    max-width: 100%;
    height: 200px;
    box-sizing: border-box;

    display: flex;

    font-weight: 500;
    font-size: 70px;
    font-family: var(--header);
    text-transform: uppercase;
    font-style: italic;
    color: var(--black);
    
    text-align: center;
    letter-spacing: 2px;
    padding: 100px 35px 0 35px;
    margin: 0px 18.5% 0px 18.5%;
  }
</style>
