<template>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="i in 2" :key="i" class="swiper-slide" :class="`slide--${i}`">
        </div>
      </div>
      
      <div class="swiper-pagination"></div>
  
     
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </template>
  
  <script>
  import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
  import 'swiper/swiper-bundle.min.css'
  export default {
    name: 'ImageSlider',
    mounted() {
      Swiper.use([Navigation, Pagination, Autoplay])
  
      // init Swiper:
      /* eslint-disable no-unused-vars */
     // @see https://swiperjs.com/swiper-api#parameters
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        
        modules: [Navigation, Pagination, Autoplay],
        // Pagination 
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        // Autoplay 
        autoplay: {
          delay: 4000
        },
        // Navigation arrows 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  }
  </script>
  
  <style scoped>
  .swiper {
    height: 500px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .swiper-slide {
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #2B3B73 ;
  }
  
  .slide--1 {
    background-image: url('./assets/banner1.jpg');
    background-size: cover;
    background-position: center;
  }
  .slide--2 {
    background-image: url('./assets/banner2.jpg');
    background-size: cover;
    background-position: center;
  }
  .img{
    z-index: 1;
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    object-position: center;
    object-fit: cover;  
}
  </style>
  