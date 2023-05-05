<template>
  <div class="wrapper">
    <img src="./assets/eventscover.png" />
  </div>
</template>

<script>
export default {
  name: "PictureHeader",
};
</script>

<style scoped>
.wrapper {
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  height: 200px; 
}

img {
  z-index: 1;
  width: 100%;
  max-height: 394px;
  background-repeat: no-repeat;
  object-position: center;
  object-fit: cover; 
}
</style>
