<script setup>
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'

const questions = reactive([
  {
    title: 'Bachelor of Science in Electronics and Communications Engineering',
    answer: 'BSEMC students typically learn about topics such as circuit analysis, digital logic design, analog and digital communication systems, microprocessors, and embedded systems. They also gain hands-on experience through laboratory exercises and design projects that allow them to apply their knowledge to real-world problems.',
    isExpanded: false 
  },
  {
    title: 'Bachelor of Science in Computer Science',
    answer: 'BSCS students typically learn about topics such as programming languages, data structures and algorithms, operating systems, computer networks, and databases. They also gain hands-on experience through individual and group programming projects, where they can apply their knowledge to create software applications that solve real-world problems.',
    isExpanded: false
  },
  {
    title: 'Bachelor of Science in Intergrated Technologies',
    answer: ' Bachelor of Science in Information Technology, is a four-year undergraduate degree program that focuses on the practical application of computer systems and information technology. It is a popular program for students who are interested in technology and computing and want to pursue a career in the field.',
    isExpanded: false
  },
  {
    title: 'Bachelor of Science in Information Systems',
    answer: 'Bachelor of Science in Information Systems, is a four-year undergraduate degree program that focuses on the integration of information technology and business processes. It is a popular program for students who are interested in both technology and business and want to pursue a career that combines the two.',
    isExpanded: false
  }
])

function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}

</script>

<template>
  <div class="wrapper" v-for="(question, index) in questions" :key="question.title">
    <button class="accordion" @click="() => handleAccordion(index)">
      {{ question.title }}
    </button>
    <Collapse :when="questions[index].isExpanded" class="collapse">
      <p class="answer">
        {{ question.answer }}
      </p>
    </Collapse>
  </div>
</template>

<style scoped>
.wrapper{
  max-height: 100%;
  max-width: 100%;
  margin: 60px 18.5% 140px 18.5%;
}

.accordion {
  background-color: #B99433;
  color: #FAF9F6;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.6s ease;
}

.active, .accordion:hover {
  background-color: #97762f;
}

.answer {
  margin: 0 100px 20px 100px;
  font-family: var(--text);
  font-size: 20px;
  font-weight: 100px;
  background-color: #FAF9F6;
}

.collapse {
  transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
}
</style>
