<template>
  <div class="container">
    <div class="content">
      <SiteHeader/>  
      <HeroCover/>
      <HistoryBox/>
      <div class="spacer">
        <HistoryText/>
      </div>
    </div>
</div>
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import HeroCover from '@/components/HeroCover.vue'
import HistoryBox from '@/components/HistoryBox.vue'
import HistoryText from '@/components/HistoryText.vue'

export default {
  name: 'AboutPage',
  components: {
    SiteHeader,
    HeroCover,
    HistoryBox,
    HistoryText,
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
</style> 