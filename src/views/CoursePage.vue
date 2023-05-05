<template>
  <div class="container">
      <CourseCover/>
      <CourseOptions/>
  </div>
</template>

<script>

import CourseCover from "@/components/CourseOfferings/CourseCover.vue"
import CourseOptions from "@/components/CourseOfferings/CourseOptions.vue"

export default {
  name: 'CoursePage',
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