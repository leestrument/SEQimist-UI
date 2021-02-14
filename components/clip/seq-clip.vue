<template>
    
    <div 
    
        class="seq-clip"
        :style="{ left : left, background : color }"
    
    ></div>

</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({

    props : { index : { type : Number, required : true }},
    setup(props) {

        const left  = computed(() => props.index * 6.25 + '%')
        const color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 40%)`

        return { left, color }

    }

})

</script>

<style scoped>

    .seq-clip {

        position: absolute;
        top: 30px;
        width : 6.25%;
        height : 65px;
        background: rgb(67, 82, 162);
        border-radius: 10px;
        box-sizing: border-box;
        border: 1px solid rgb(20, 20, 20);
        /* box-shadow: inset 1px 1px 2px rgb(150, 150, 150), inset -1px -1px 1px black; */

    }

</style>