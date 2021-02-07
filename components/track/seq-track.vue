<template>
    
    <div class="seq-track" :style="{ top : top }"></div>

</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({

    props : { index : { type : Number, required : true } },
    components : {},
    setup(props) {

        const top = computed(() => props.index * 6.25 + '%')

        return { top }

    }

})

</script>

<style scoped>

    .seq-track {

        position: absolute;
        width : 100%;
        height : 6.25%;
        background: tomato;
        box-sizing: border-box;
        border: 1px solid black;

    }

</style>