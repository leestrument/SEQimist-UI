<template>
    
    <div class="seq">

        <seq-nav/>
        <seq-content/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqNav               from './seq-nav.vue'
import SeqContent           from './seq-content.vue'

export default defineComponent({

    components : { SeqNav, SeqContent }

})

</script>

<style scoped>

    .seq {

        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(50, 50, 55);
        display: grid;
        grid-template-rows: 0.22fr 1fr;
        gap: 1px;

    }

</style>