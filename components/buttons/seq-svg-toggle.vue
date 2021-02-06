<template>
    
    <div class="seq-svg-toggle" @mousedown="toggle">
        <svg :viewBox="viewBox">
            <path :fill="color" :d="path"/>
        </svg>
    </div>

</template>

<script lang="ts">

import { defineComponent, ref, computed } from 'vue'

export default defineComponent({

    props : {

        viewBox : { type : String, required : true },
        path    : { type : String, required : true }

    },

    setup() {

        const isPressed = ref(false)
        const color     = computed(() => isPressed.value ? 'white' : 'gray')
        const toggle    = () => isPressed.value = !isPressed.value

        return { isPressed, color, toggle }

    }

})

</script>

<style scoped>

    .seq-svg-toggle { position: relative; }
    svg {

        position: absolute;
        width: 100%;
        height: 100%;

    }

</style>