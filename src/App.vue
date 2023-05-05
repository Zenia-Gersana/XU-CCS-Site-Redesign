<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lexend:100,200,300,400,500,600,700,800,900">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sora:100,200,300,400,500,600,700,800,900">

  <div class="container">
    <SiteHeader/>
    <router-link to="/"></router-link>
    <router-view></router-view>

    <footer class ="footer">
      <FooterFeet/>
    </footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import FooterFeet from '@/components/FooterFeet.vue'

export default {
  name: 'App',
  components: {
    FooterFeet,
    SiteHeader,
  }
}
</script>

<style>
:root{
  --white: #FFFFFF;
  --prime: #2B3B73;
  --light: #9EABD7;
  --black: #1F1D1D;
  --acc: #B99433;
  --dacc: #97762f;
  
  --header: "Sora", "Verdana", sans-serif;
  --text: "Lexend", "Arial", sans-serif;
  --swiper-theme-color: var(--light) !important;
}
html, body{
  margin: 0;
  height: 100%;
  font-size: 20px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
  margin: 0px;
  text-align: left;
}

.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}

.container{
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

</style>