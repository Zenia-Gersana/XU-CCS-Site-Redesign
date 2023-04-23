<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lexend:100,200,300,400,500,600,700,800,900">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sora:100,200,300,400,500,600,700,800,900">
   
  <div class="AboutPage">
  <div class="container">
    <div class="content">  
      <HeroCover/>
      <HistoryBox/>
      <div class="spacer">
        <HistoryText/>
      </div>
    </div>

  </div>
</div>
</template>

<script>

import HeroCover from '@/components/HeroCover.vue'
import HistoryBox from '@/components/HistoryBox.vue'
import HistoryText from '@/components/HistoryText.vue'

export default {
  name: 'AboutPage',
  components: {
    HeroCover,
    HistoryBox,
    HistoryText,
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
.spacer{
  margin-top: 40px;
}
.container{
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
.content{
  flex: 1;
}
.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style> 