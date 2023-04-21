<template>
    <li><a target="_blank" :href="item.link"><i :class="item.styleClass"></i></a></li> 
</template>

<script setup>
    const props = defineProps({
        item:{
            type:Object
        }
    })
</script>

<style scoped>
li{
    display: inline-block;
}
li a{
    color: white;
    margin-right: 2rem;
}
</style>