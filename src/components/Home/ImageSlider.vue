<template>
    <div class="swiper">
      <div class="title">Developing Computing Solutions That Matter</div>
      <div class="swiper-wrapper">
        <div v-for="i in 4" :key="i" class="swiper-slide" :class="`slide--${i}`">
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
        speed: 1100,
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
  .title{
      z-index: 2;
      width: auto;
      height: auto;
      padding: 10px 0;
      position: absolute;

      margin-left: 18.5%;
      margin-right: 18.5%;
      bottom: 64px;
      border-radius: 4px;

      font-family: var(--header);
      font-style: italic;
      text-align: left;
      text-transform: uppercase;
      text-shadow: 5px 2px 10px var(--black);
      font-size: 78px;
      font-weight: 700;
      line-height: 72px;
      color: var(--white);
  }

  @media (max-width: 1440px){
  .title{
    margin: 0 13.5%;
  }
}

  .swiper {
    z-index: 1;
    height: 725px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .swiper-button-next, .swiper-button-prev{
    margin: 0 20px;
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
  .slide--3 {
    background-image: url('./assets/banner3.jpg');
    background-size: cover;
    background-position: 50% 70%;
  }

  .slide--4 {
    background-image: url('./assets/banner4.jpg');
    background-size: cover;
    background-position: 50% 70%;
  }
  
  </style>
  