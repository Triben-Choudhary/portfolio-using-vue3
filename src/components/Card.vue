<template>
    <div class="card">
      <div class="img-box"><img :src="project.img" alt=""></div>
      <div class="cap-box">
        <div class="head-cap">{{ project.title }}</div>
        <div class="body-cap">
          <div v-html="output"></div>
        </div>
      </div>
      <div class="links-container">
        <a target="_blank" :href="project.githubLink">Github Link</a>
        <a target="_blank" :href="project.liveLink">Live Link</a>
      </div>
    </div>
</template>
  
<script setup>
    import { defineProps } from 'vue';
  
    const props = defineProps({
      project: {
        type: Object,
        required: true,
      },
    });
  
    let output = '';
    props.project.description.forEach((el) => {
      output += `- ${el} <br>`;
    });
</script>
  
<style scoped>
    .head-cap {
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.1;
      margin-bottom: 1rem;
    }
  
    .cap-box {
      padding: 1.5rem;
      flex: 1;
    }
  
    .links-container a {
      text-decoration: none;
      display: inline-block;
      padding: 0.5rem 1rem;
      background: #1ede6d;
      color: black;
      border-radius: 10px;
      margin-right: 1rem;
      font-weight: 500;
    }
  
    .links-container {
      padding: 1.2rem 1.5rem;
      
    }
  
    .card {
      border: 2px solid rgba(255, 255, 255, 0.63);
      border-radius: 10px;
      width: 25%;
      margin: 3rem 2rem;
      font-size: 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    .img-box {
      padding: 0.5rem;
    }
  
    .img-box img {
      width: 100%;
      height: 15rem;
    }
  
    /* Media queries */
    @media screen and (max-width: 1280px) {
      .card {
        width: 33%;
      }
    }
    @media screen and (max-width: 1280px){
        .links-container a{
            margin: 0.6rem 0;
            margin-right: 1rem;
        }
    }
    @media screen and (max-width: 768px) {
      .card {
        width: 50%;
      }
    }
    @media screen and (max-width: 660px) {
      .card {
        width: 70%;
      }
    }
  
    @media screen and (max-width: 480px) {
      .card {
        width: auto;
        /* margin: 2rem 0; */
      }
  
      .img-box img {
        height: 10rem;
      }
    }
</style>
  