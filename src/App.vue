<template>
  <RouterView/>
</template>

<script setup>
  import { useDataStore } from "@/stores/data.js"
  const dataStore=useDataStore()
  dataStore.init()
</script>

<style>

</style>
