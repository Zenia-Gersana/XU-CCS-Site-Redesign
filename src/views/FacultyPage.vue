<template>
    <div class="container">
      <div class="content">
        <FacultyCover/>
        <DeanInfo/>
        <ChairCoor/>
        <OtherFaculty/>
        <AdminAssist/>
      </div>
  
    </div>
  </template>
  
  <script>
  import FacultyCover from "@/components/Faculty/FacultyCover.vue";
  import DeanInfo from "@/components/Faculty/DeanInfo.vue";
  import ChairCoor from "@/components/Faculty/ChairCoor.vue"
  import AdminAssist from "@/components/Faculty/AdminAssist.vue"
  import OtherFaculty from "@/components/Faculty/OtherFaculty.vue"
  import AdminAssist from "@/components/Faculty/AdminAssist.vue"
  
  export default {
    name: 'FacultyPage',
    components: {
      FacultyCover,
      DeanInfo,
      ChairCoor,
      OtherFaculty,
<<<<<<< HEAD
      AdminAssist
=======
      AdminAssist,
>>>>>>> 4ac626503ca0b92c556c886adb2a2fd85ee7c9e9
  }
  }
  </script>
  
  <style>
    .pic {
        width: auto;
        margin: 0 auto;
    }

    .fTitle { 
        margin: 60px 10% -35px 10%;
        padding-left: 30px;
        position: relative;
        letter-spacing: 4px;

        font-style: normal;
        font-weight: bolder;
        font-family: var(--header);
        font-size: 50px;

        color: #6B2685;
    }

    #area {
        display: flex;
        border-radius: 10px;
        box-sizing: content-box;
        align-content: space-around;
        flex-direction: column;

        padding: 12px;
        background-color: var(--prime);
        width: 250px;
        height: auto;
    }

  .info {
        font-family: var(--text);
        color: var(--white);
        text-align: center;
        overflow-wrap: anywhere;
    }

  .info p {
      font-size: 17px;
      font-weight: bolder;
      margin: 6px 0;
  }

  .info h3 {
      font-size: 15px;
      font-weight: normal;
      margin: 6px 0;
  }
  
  .info h4 {
      margin: 22px 0 12px 0;
      font-size: 18px;
      letter-spacing: 1px;
      font-weight: 400;
  }

  .info a {
      color: var(--acc); 
      text-decoration: none;
      transition-duration: 0.2s;
  }


  .info a:hover {
      color: var(--light);
      letter-spacing: 2px;
  }

  </style>