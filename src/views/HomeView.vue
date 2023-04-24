<template>  
  <div class="container">
    <transition name="fade">
      <div class="content">  
        <ImageSlider/>
        <HistoryBox/>
        <CollapsibleCard/>
      </div>
    </transition>
  </div>

</template>

<script>
import ImageSlider from '@/components/Home/ImageSlider.vue'
import CollapsibleCard from '@/components/Home/CollapsibleCard.vue'

export default {
  name: 'HomeView',
  components: {
    ImageSlider,
    CollapsibleCard
  }
}
</script>

<style scoped>
.content{
  flex: 1;
}

</style>
