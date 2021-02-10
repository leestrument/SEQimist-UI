<template>
    
    <div class="seq-clip-color-items">

        <seq-clip-color-item v-for="e in 16" :key="e" :color="`hsl(${Math.floor(Math.random() * 360)}, 50%, 40%)`"/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqClipColorItem from './seq-clip-color-item.vue'

export default defineComponent({

    components : { SeqClipColorItem }

})

</script>

<style scoped>

    .seq-clip-color-items {

        width : 100%;
        height : 100%;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        box-sizing: border-box;
        padding: 4px;
        gap: 4px;

    }

</style>