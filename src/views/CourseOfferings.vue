<template>
  <div class="compilation">
      <CourseCover/>    
      <CourseOptions/>
  </div>
</template>

<script>

import CourseCover from '@/components/CourseOffering/CourseCover.vue'
import CourseOptions from '@/components/CourseOffering/CourseOptions.vue'

export default {
  name: 'CourseOfferings',
  components: {
    CourseCover,
    CourseOptions
  }
}

</script>

<style scoped>
.spacer{
  margin-top: 40px;
}

</style> 