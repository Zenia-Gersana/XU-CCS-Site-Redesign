<template>
  <div class="container">
    <div class="content">
      <SiteHeader />
      <PictureHeader />
      <NavButtons />
      <router-link to="/"></router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import PictureHeader from "@/components/PictureHeader.vue";
import NavButtons from "@/components/NavButtons.vue";



export default {
  name: 'App',
  components: {
    SiteHeader,
    PictureHeader,
    NavButtons,
  },
};
</script>

<style>
:root {
  --white: #ffffff;
  --prime: #2b3b73;
  --light: #9eabd7;
  --black: #1f1d1d;
  --acc: #b99433;
  --dacc: #97762f;

  --header: "Sora", "Verdana", sans-serif;
  --text: "Lexend", "Arial", sans-serif;
  --swiper-theme-color: var(--light) !important;
}
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
  margin: 0px;
  text-align: left;
}

.container {
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
