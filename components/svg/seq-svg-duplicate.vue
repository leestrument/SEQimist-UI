<template>
    
    <svg width="100%" height="100%" viewBox="0 0 32 32">
        <path :fill="color" d="M28 8.67H10.67a2 2 0 00-2 2V28a2 2 0 002 2H28a2 2 0 002-2V10.67a2 2 0 00-2-2z"/>
        <path :fill="color" d="M23.33 6.67v-2A2.67 2.67 0 0020.67 2h-16A2.68 2.68 0 002 4.67v16a2.67 2.67 0 002.67 2.66h2V10.67a4 4 0 014-4z"/>
    </svg>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { color : { type : String, required : true } }

})

</script>

<style scoped>

    svg { position: absolute; }

</style>