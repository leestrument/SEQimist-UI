<template>
    
    <div class='seq-inspector-selector'>

        <div class='seq-inspector-selector-text-box' @mousedown="mouseDown(0)"><span class='seq-inspector-selector-text'>Clip</span></div>
        <div class='seq-inspector-selector-text-box' @mousedown="mouseDown(1)"><span class='seq-inspector-selector-text'>Track</span></div>
        <div class='seq-inspector-selector-text-box' @mousedown="mouseDown(2)"><span class='seq-inspector-selector-text'>Note</span></div>
        <div class='seq-inspector-selector-text-box' @mousedown="mouseDown(3)"><span class='seq-inspector-selector-text'>F</span></div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {},
    setup(props, context) {

        const mouseDown = (index: number) => context.emit('inspector-selector', index)

        return { mouseDown }

    }

})

</script>

<style scoped>

    .seq-inspector-selector {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.5fr;
        gap: 5px;

    }

    .seq-inspector-selector-text-box {

        background: rgb(50, 50, 60);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .seq-inspector-selector-text {

        color: rgb(200, 200, 200);
        user-select: none;

    }

</style>