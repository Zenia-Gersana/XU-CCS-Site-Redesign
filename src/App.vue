<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lexend:100,200,300,400,500,600,700,800,900">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sora:100,200,300,400,500,600,700,800,900">

  <div class="container">
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
}
html, body{
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
</style>