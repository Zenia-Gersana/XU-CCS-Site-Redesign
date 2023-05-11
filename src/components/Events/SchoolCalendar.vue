<template>
  <div class ="etitle">
    SY 2022-2023
  </div>
    <div class="calendar">
      <div class="calendar-image">
        <img src="./assets/calendar.png" alt="Calendar Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SchoolCalendar",
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .calendar-image {
    margin-top: 50px;
  }
  
  .calendar-text {
    margin-top: 30px;
    text-align: center;
  }
  </style>
  