<template>
  <div class="etitle">
    Past Events
  </div>
  <div class="past-events">
    <div class="row1">
      <div class="col-md-6">
        <div class="event-image1">
          <img src="./assets/pastevent1.jpg" alt="Event 1 Image" />
        </div>
        <div class="event-text1">
          <h4>Thursday- Friday, 19-20 May 2022 | 9am – 4pm </h4>
          <a href="https://drive.google.com/file/d/14StCXovplf1b5SFOevEIVXPOndHEip6S/view?usp=sharing" target="_blank">Programme</a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="event-image2">
          <img src="./assets/pastevent2.jpg" alt="Event 2 Image" />
        </div>
        <div class="event-text2" style="text-align: justify; word-wrap: break-word; max-width: 100%;">
          <h4>For Waived Entrance Examination Applicants (Freshmen and Transferees): </h4>
          <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.xu.edu.ph%2Fadmission-waivedenrollment&sa=D&sntz=1&usg=AOvVaw2GeVpJjlBbePym2Ga4QRIw" target="_blank">https://www.xu.edu.ph/admission-waivedenrollment </a>
          <h4>For Returnees, Prof Ed, and 2nd Courser Applicants (Upperclassmen): </h4>
          <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.xu.edu.ph%2Fadmission-process&sa=D&sntz=1&usg=AOvVaw0qXcY5E62eNdLRk-TMhQAB" target="_blank">https://www.xu.edu.ph/admission-process </a>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="col-md-6">
        <div class="event-image3">
          <img src="./assets/pastevent3.jpg" alt="Event 3 Image" />
        </div>
        <div class="event-text3">
          <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.xu.edu.ph%2Fxavier-news%2F170-xu-ateneo-news-sy-2020-2021%2F5041-xavier-ateneo-college-of-computer-studies-is-now-a-huawei-ict-academy-partner&sa=D&sntz=1&usg=AOvVaw3Cd8lklv2_XD_LDhzXg7EY">Huawai ICT Academy</a>
          <h4>Click the link above for the full article</h4>
        </div>
      </div>
      <div class="col-md-6">
        <div class="event-image4">
          <img src="./assets/pastevent4.jpg" alt="Event 4 Image" />
        </div>
        <div class="event-text4" style="text-align: justify; word-wrap: break-word; max-width: 100%;">
          <h4>Scan the QR code and you will get free course enrollment in Cisco Networking Academy </h4>
          <h5>Cisco The Bridge to Possible</h5>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: "PastEvents",
  };
  </script>
  
  <style scoped>
  .past-events {
    padding: 0 50px 50px 50px;
  }
  
  .event-image1 {
    text-align: center;
    height: 250px; 
  }
  .event-image2 {
    text-align: center;
    height: 250px; 
  }
  .event-image3 {
    text-align: center;
    height: 250px; 
  }

  .event-image4 {
    text-align: center;
    height: 250px; 
  }
  
  .event-image1 img {
    max-height: 100%; 
    max-width: 100%;
    object-fit: cover; 
    margin-top: -13px;
    margin-left: 140px;
  }
  .event-image2 img {
    max-height: 100%; 
    max-width: 100%;
    object-fit: cover; 
    margin-top: 39px;
  }

  .event-image3 img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    margin-top: 60px;
    height: 250px;
    margin-left: 140px;
  }

  .event-image4 img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    margin-top: 60px;
    margin-right: 0px;
    height: 250px;
  }
  .event-text1 {
    text-align: center;
    margin-left: 140px;
    margin-top: -13px;
  }
  .event-text2 {
    text-align: center;
    margin-top: 50px;
    margin-left: 140px;
  }

  .event-text3 {
    text-align: center;
    margin-top: 70px;
    margin-left: 140px;
  }

  .event-text4 {
    text-align: center;
    margin-top: 70px;
    margin-left: 120px;
    margin-right: -110px;
  }
  
  .row1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  