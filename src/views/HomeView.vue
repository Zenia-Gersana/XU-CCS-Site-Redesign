<template>  
  <div class="container">
    <transition name="fade">
      <div class="content">  
        <SiteHeader/>
        <ImageSlider/>
        <HistoryBox/>
        <CollapsibleCard/>
      </div>
    </transition>

    <footer class ="footer">
      <FooterFeet/>
    </footer>
  </div>

</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import CollapsibleCard from '@/components/CollapsibleCard.vue'
import FooterFeet from '@/components/FooterFeet.vue'

export default {
  name: 'HomeView',
  components: {
    SiteHeader,
    ImageSlider,
    CollapsibleCard,
    FooterFeet
  }
}
</script>

<style>

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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
