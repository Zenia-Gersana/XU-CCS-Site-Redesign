<template>
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
 
  </style>