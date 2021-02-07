<template>
    
    <div class="seq-clip" :style="{ left : clipX }"></div>

</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({

    props : { index : { type : Number, required : true }},
    setup(props) {

        const clipX = computed(() => props.index * 6.7 + '%')

        return { clipX }

    }  
})

</script>

<style scoped>

    .seq-clip {

        position: absolute;
        top: 21%;
        width : 6.7%;
        height : 65%;
        background: tomato;
        border-radius: 10px;
        box-sizing: border-box;
        border: 1px solid black;

    }

</style>