<template>
    <nav>
        <div>My Projects</div>
        <ul>
            <li>
                <RouterLink to="/">Profile</RouterLink>
            </li>
            <li v-if="dataStore.isDataLoaded"><a target="_blank" :href="dataStore.resume">Resume</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    import { useDataStore } from "@/stores/data.js"
    const dataStore=useDataStore()
</script>

<style>
nav{
    display: flex;
    justify-content: space-between;
}

nav ul li{
    list-style: none;
    display: inline-block;
    margin-left: 3rem;
}

nav ul li a{
    color: white;
    text-decoration: none;
    display: inline-block;
    border-bottom: 2px solid white;
}
</style>