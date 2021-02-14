<template>
    
    <div class="seq-track-mute-wrapper">

        <div class="seq-track-mute"></div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {}

})

</script>

<style scoped>

    .seq-track-mute-wrapper {

        padding: 4px;
        background: rgb(30, 30, 35);
    }

    .seq-track-mute {

        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background: rgb(187, 154, 19);
        /* box-shadow: inset 2px 2px 4px rgb(150, 150, 150), inset -2px -2px 2px rgb(50, 50, 50); */


    }

</style>