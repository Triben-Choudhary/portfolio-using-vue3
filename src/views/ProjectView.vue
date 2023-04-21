<template>
    <div class="container">
        <Navbar/>
        <div class="card-container">
            <Card v-for="project in dataStore.projects" :key="project.id" :project="project"/>
        </div>
    </div>
</template>

<script setup>
    import Navbar from "@/components/Navbar.vue"
    import Card from "@/components/Card.vue"
    import { useDataStore } from "@/stores/data.js"
    const dataStore=useDataStore()
</script>

<style scoped>
.card-container{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    padding: 2rem 0;
}
@media (max-width: 768px) {
  .container {
    width: 90%;
  }

  .card-container {
    justify-content: center;
  }
}

</style>