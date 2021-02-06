<template>
    
    <div class="seq-svg-button" @mousedown="blink">
        <svg :viewBox="viewBox">
            <path :fill="color" :d="path"/>
        </svg>
    </div>

</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

export default defineComponent({

    props : {

        viewBox : { type : String, required : true },
        path    : { type : String, required : true }

    },

    setup() {

        const color = ref('gray')
        const blink = (): void => { color.value = 'white'; setTimeout(() => color.value = 'gray', 100) }

        return { blink, color }

    }

})

</script>

<style scoped>

    .seq-svg-button { position: relative; }
    svg {

        position: absolute;
        width: 100%;
        height: 100%;

    }

</style>