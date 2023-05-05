<template>
  <div class="container">
      <PictureHeader />
      <NavButtons />

      <router-link to="/events"></router-link>
      <router-view :router="$eRouter"></router-view>
  </div>
</template>

<script>
import PictureHeader from "@/components/Events/PictureHeader.vue";
import NavButtons from "@/components/Events/NavButtons.vue";

export default {
  name: 'App',
  components: {
    PictureHeader,
    NavButtons,
  },
};
</script>

<style scoped>

</style>
