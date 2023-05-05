<template>
    <div class="courses">

     <div class="credentials">
        {{ courseCredentials }}
        <br />
        {{ accreditation }}
        <br />
        Click to watch the video
        <br />
        {{ contact }}
     </div>

     <div class="video-container">

      <div class="video-slider" ref="slider">

        <div class="video-slide" v-for="(video, index) in videoList" :key="index">
          <Vue3Youtube :video-id="video" />
        </div>
        
      </div>

      <button class="prev-button" @click="prevVideo">&#10094;</button>
      <button class="next-button" @click="nextVideo">&#10095;</button>
    </div>

    </div>
</template>


<script>
import { Vue3Youtube } from "vue3-youtube";

export default {
  name: 'CourseOptions',
  components: {
    Vue3Youtube
  },
  props: {
    courseType: {
      type: String,
      required: true,
      validator: (value) => {
        return ["cs", "is", "it", "emc", "mit"].includes(value.toLowerCase());
      },
    },
  },
  data() {
    return {
      videoList: ["DP4bpEyn124", "TGw1quRFmlQ", "V-VM7pFhnso", "Xkw0UKGWdac"], 
      currentVideoIndex: 0,
      slideWidth: 0,
    };
  },
  computed: {
    courseCredentials() {
      switch (this.courseType.toLowerCase()) {
        case "cs":
          return "BS Computer Science";
        case "is":
          return "BS Information Systems";
        case "it":
          return "BS Information Technology";
        case "emc":
          return "BS Entertainment and Multimedia Computing";
        case "mit":
          return "Master in Information Technology";
        default:
          return "";
      }
    },
    accreditation() {
      switch (this.courseType.toLowerCase()) {
        case "cs":
        case "is":
          return "PAASCU Level 1 accredited";
        default:
          return "";
      }
    },
    contact() {
      switch (this.courseType.toLowerCase()) {
        case "cs":
          return "Contact: cs@xu.edu.ph";
        case "is":
          return "Contact: is@xu.edu.ph";
        case "it":
        case "emc":
        case "mit":
          return "Contact: computerstudies@xu.edu.ph";
        default:
          return "";
      }
    },
  },
  mounted() {
    this.slideWidth = this.$refs.slider.clientWidth;
  },
  methods: {
    prevVideo() {
      if (this.currentVideoIndex === 0) {
        this.currentVideoIndex = this.videoList.length - 1;
      } else {
        this.currentVideoIndex--;
      }
      this.scrollToCurrentVideo();
    },
    nextVideo() {
      if (this.currentVideoIndex === this.videoList.length - 1) {
        this.currentVideoIndex = 0;
      } else {
        this.currentVideoIndex++;
      }
      this.scrollToCurrentVideo();
    },
    scrollToCurrentVideo() {
      const slider = this.$refs.slider;
      slider.style.transform = `translateX(-${this.currentVideoIndex * this.slideWidth}px)`;
    },
  },
};
</script>

<style>
  .course {
    margin-bottom: 50px;
  }

  .credentials {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    overflow: hidden;
  }

  .video-slider {
    display: flex;
    width: calc(100% * 3);
    transition: transform 0.3s ease-in-out;
  }

  .video-slide {
    width: calc(100% / 3);
    padding-right: 20px;
    box-sizing: border-box;
  }

  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    cursor: pointer;
    z-index: 1;
  }

  .prev-button {
    left: 0;
  }

  .next-button {
    right: 0;
  }
</style>