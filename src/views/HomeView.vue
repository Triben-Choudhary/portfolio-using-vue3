<template>
  <div class="container">
        My Portfolio
        <div id="main-content">
            <div class="left">
                <h1>Triben Choudhary</h1>
                <h3>Full-Stack Web Developer</h3>
                <p>A meticulous and motivated fresher looking for an opportunity to help an organisation. Possessing a good knowledge in technical field which will allow me to help the organisation and along with it, it will also help me to grow.</p>
                <RouterLink v-if="dataStore.isDataLoaded" class="projects" to="/project">Projects</RouterLink>
                <a v-if="dataStore.isDataLoaded" class="resume" target="_blank" :href="dataStore.resume">Resume</a>
                <ul class="social">
                    <Social v-for="item in dataStore.social" :key="item.id" :item="item"/>
                </ul>
            </div>
            <div class="right">
                <img src="/passportpic_webview.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

  import Social from '@/components/Social.vue';
  import { useDataStore } from "@/stores/data.js"
  const dataStore=useDataStore()
    console.log(dataStore.social);
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

html {
    font-size: 62.5%;
}

body {
    min-height: 100vh;
    width: 100%;
    background: #11101d;
}

::selection {
    color: #11101d;
    background: #fff;
}
.container{
    width: 80%;
    margin: 0 auto;
    color: white;
    padding: 2rem 1rem;
    font-size: 3rem;
}
#main-content{
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
}
#main-content .left{
    width: 60%;
    padding-right: 1rem;
}
#main-content .right{
    width: 40%;
}
.left h3{
    color: rgb(101, 101, 250);
}
.left p{
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.left>a{
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    padding: 5px 10px;
    border-radius: 10px;
    color: black;
    font-weight: 500;
    margin-right: 1rem;
    box-shadow: 0px 0px 10px 1px #1ede6d;
}
a.projects{
  margin-right: 2rem;
}
a.projects,a.resume{
    background: #1ede6d;
}

ul.social{
    list-style: none;
    display: flex;
    margin-top: 4rem;
}

.right{
    display: flex;
    justify-content: center;
}
.right img{
    margin: auto;
    border-radius: 100%;
    object-fit: cover;
}
@media (max-width: 1024px) {
  .container {
    width: 90%;
    font-size: 2.5rem;
    padding: 1.5rem 1rem;
  }
  #main-content {
    margin-top: 3rem;
    flex-direction: column-reverse;
    align-items: center;
  }
  #main-content .left {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  #main-content .right {
    width: 100%;
    margin-bottom: 2rem;
  }
  ul.social {
    justify-content: center;
    margin-top: 2rem;
  }
  .left h3 {
    font-size: 2.5rem;
    margin-top: 1rem;
  }
  .left p {
    font-size: 2rem;
    margin-top: 1.5rem;
  }
  .left>a {
    font-size: 2rem;
    padding: 5px 10px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    width: 95%;
    font-size: 2rem;
    padding: 1.5rem 1rem;
  }
  #main-content .left p {
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  .left>a {
    font-size: 1.8rem;
    padding: 5px 10px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    width: 100%;
    font-size: 1.8rem;
    padding: 1rem;
  }
  #main-content {
    margin-top: 2rem;
  }
  #main-content .left h1 {
    font-size: 3rem;
  }
  #main-content .left h3 {
    font-size: 2.2rem;
    margin-top: 1rem;
  }
  #main-content .left p {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  .left>a {
    font-size: 1.6rem;
    padding: 5px 10px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .right img {
    width: 70%;
  }
}

@media (max-width: 360px) {
  .container {
    font-size: 1.6rem;
    padding: 1rem 0.5rem;
  }
  #main-content .left h1 {
    font-size: 2.5rem;
  }
  #main-content .left h3 {
    font-size: 1.8rem;
  }
  #main-content .left p {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
  .left>a {
    font-size: 1.4rem;
    padding: 5px 10px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .right img {
    width: 80%;
  }
}
</style>
