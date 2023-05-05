<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lexend:100,200,300,400,500,600,700,800,900">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sora:100,200,300,400,500,600,700,800,900">
  
    <div class="container">
      <div class="content">
        <FacultyCover/>
        <DeanInfo/>
        <ChairCoor/>
        <OtherFaculty/>
      </div>
  
    </div>
  </template>
  
  <script>
  import FacultyCover from "@/components/Faculty/FacultyCover.vue";
  import DeanInfo from "@/components/Faculty/DeanInfo.vue";
  import ChairCoor from "@/components/Faculty/ChairCoor.vue"
  import OtherFaculty from "@/components/Faculty/OtherFaculty.vue"
  
  export default {
    name: 'App',
    components: {
      FacultyCover,
      DeanInfo,
      ChairCoor,
      OtherFaculty,
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
  }
  
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--black);
    margin: 0px;
    text-align: left;
  }
  
  .container{
    position: relative;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  
    padding-bottom: 8%;
  }
  
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  
  </style>