<template>
    
    <div 
    
        class="lee-button"
        :class="state.className"
        @mousedown="blink"
    
    >   

        <div class="lee-svg-wrapper">

            <slot> <!-- Drop SVG here! --></slot>

        </div>

    </div>

</template>

<script lang="ts">

import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({

    setup() {

        const state = reactive({

            isPressed : false,
            className : computed(() => state.isPressed ? 'lee-button-pressed' : 'lee-button-released')

        })

        const blink = (): void => { state.isPressed = true; setTimeout(() => state.isPressed = false, 100) }

        return { state, blink }

    }

})

</script>

<style scoped>

    .lee-button { 
        
        position: relative;
        border-radius: 4px;
        padding: 4px;
    
    }

    .lee-svg-wrapper{

        position: relative;
        width: 100%;
        height: 100%;

    }

    .lee-button-released {

        box-shadow: -1px -1px 2px rgb(100, 100, 100), 2px 2px 2px rgb(10, 10, 10);
        fill: rgb(20, 20, 20);

    }

    .lee-button-pressed {

        box-shadow: inset 1px 1px 2px rgb(20, 20, 20), inset -1px -1px 2px rgb(50, 50, 50);
        background: rgb(30, 30, 35);
        fill: rgb(150, 150, 150);

    }

</style> 