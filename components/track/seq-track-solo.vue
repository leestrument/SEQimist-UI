<template>
    
    <div class="seq-track-solo-wrapper">

        <div class="seq-track-solo"></div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {}

})

</script>

<style scoped>

    .seq-track-solo-wrapper {
        
        padding: 4px;
        background: rgb(30, 30, 35);
        
    }

    .seq-track-solo {

        position: relative;
        width: 100%;
        height: 100%;
        background: rgb(45, 102, 172);
        border-radius: 2px;
        /* box-shadow: inset 2px 2px 4px rgb(150, 150, 150), inset -2px -2px 2px rgb(50, 50, 50); */

    }

</style>