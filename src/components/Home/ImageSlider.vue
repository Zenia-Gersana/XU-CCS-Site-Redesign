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
        speed: 800,
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

  .swiper-button-next, .swiper-button-prev{
    margin: 20px 20px;
    color: var(--white)
  }

  .swiper-pagination-bullet-active{
    color: var(--acc);
  }

  .swiper-slide {
    display: flex;
    border-bottom: 2px solid var(--prime) ;
  }
  
  .slide--1 {
    background-image: url('./assets/banner1.jpg');
    background-size: cover;
    background-position: 50% 0%;
  }
  .slide--2 {
    background-image: url('./assets/banner2.jpg');
    background-size: cover;
    background-position: 50% 30%;
  }
  </style>
  