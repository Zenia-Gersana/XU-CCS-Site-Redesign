<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lexend">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sora">

  <SiteHeader/>
  <HeroCover/>
  <HistoryBox/>
  <div class="spacer">
    <HistoryText/>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import HeroCover from './components/HeroCover.vue'
import HistoryBox from './components/HistoryBox.vue'
import HistoryText from './components/HistoryText.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    HeroCover,
    HistoryBox,
    HistoryText
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

  --header: "Arial", sans-serif;
  --text: "Lexend", "Helvetica", sans-serif;
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

.spacer{
  margin-top: 40px;
  margin-bottom: 85px;
}
</style>
