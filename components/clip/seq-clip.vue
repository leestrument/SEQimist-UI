<template>
    
    <div class='seq-clip' :style="{ left : clipLeft }"></div>

</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({ 
    
    components  : {},
    props       : { index : { type : Number, required : true } },
    setup(props) {

        const clipLeft = computed((): string => 6.25 * props.index + '%')

        return { clipLeft }

    }

})

</script>

<style scoped>

    .seq-clip {

        position: absolute;
        top: 21%;
        height: 65%;
        width: 6.25%;
        background: tomato;
        border-radius: 10px;
        box-sizing: border-box;
        border: 1px solid black;

    }

</style>