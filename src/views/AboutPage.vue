<template>
  <div class="container">
      <HeroCover/>
      <HistoryBox/>
      <div class="spacer">
        <HistoryText/>
      </div>
  </div>
</template>

<script>

import HeroCover from '@/components/About/HeroCover.vue'
import HistoryBox from '@/components/About/HistoryBox.vue'
import HistoryText from '@/components/About/HistoryText.vue'

export default {
  name: 'AboutPage',
  components: {
    HeroCover,
    HistoryBox,
    HistoryText
  }
}
</script>

<style scoped>
.spacer{
  margin-top: 40px;
}
</style> 