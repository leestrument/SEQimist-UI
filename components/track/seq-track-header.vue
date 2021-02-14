<template>

    <div class="seq-track-header-wrapper">

        <div class="seq-track-header" :style="{background : color}"></div>

    </div>
    
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { color : { type : String, required : true } },

})

</script>

<style scoped>

    .seq-track-header-wrapper {

        padding: 4px;
        background: rgb(30, 30, 35);

    }

    .seq-track-header {

        /* background: tomato; */
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        /* box-shadow: inset 2px 2px 4px rgb(200, 200, 200), inset -2px -2px 2px rgb(50, 50, 50); */

    }

</style>