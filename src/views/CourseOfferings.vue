<template>
  <div class="container">
      <CourseCover/>
      <CourseOptions/>     
  </div>
</template>

<script>

import CourseCover from '@/components/Course/CourseCover.vue'
import CourseOptions from '@/components/Course/CourseOptions.vue'

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