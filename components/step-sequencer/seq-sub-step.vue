<template>
    
    <div 
    
        class="seq-sub-step" 
        :style="{ 
            
            background : color,
            filter : `brightness(${brightness})`
        
        }"
    
    
    ></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { color : { type : String, required : true } },
    setup() {

        const velocity = Math.floor(Math.random() * 128) + 1
        const brightness = velocity / 128 * 0.7 + 0.3

        return { brightness }

    }

})

</script>

<style scoped>

    /* .seq-sub-step {
        
        width : 100%;
        height : 100%;
        background: rgb(30, 30, 35);

    } */

</style>