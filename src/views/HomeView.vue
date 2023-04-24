<template>  
  <div class="container">
      <transition name="fade">
        <div class="content">  
          <ImageSlider/>            
          <div class="flex">
              <card><CollapsibleCard/></card>
              <fb><FBFeed/></fb>
          </div>
        </div>
      </transition>
  </div>

</template>

<script>
import ImageSlider from '@/components/Home/ImageSlider.vue'
import CollapsibleCard from '@/components/Home/CollapsibleCard.vue'
import FBFeed from '@/components/Home/FBFeed.vue'

export default {
  name: 'HomeView',
  components: {
    ImageSlider,
    CollapsibleCard,
    FBFeed
  }
}
</script>

<style scoped>

.flex{
  display: flex;
  align-items: top;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;

  max-height: 100%;
  max-width: 100%;
  margin: 45px 18.5% 140px 18.5%;
}

.flex card{
  width: 100%;
  margin: 0 25px 0 0;
}

.flex fb{
  margin: 0 0 0 0;
}

.content{
  flex: 1;
}

</style>
