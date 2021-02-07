<template>
    
    <div class="seq">

        <seq-nav/>
        <seq-content/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqNav               from './nav/seq-nav.vue'
import SeqContent           from './content/seq-content.vue'

export default defineComponent({

    components : { SeqNav, SeqContent }

})

</script>

<style scoped>

    .seq {

        position: absolute;
        width: 100%;
        height: 100%;
        background: gray;
        display: grid;
        grid-template-rows: 0.211fr 1fr;
        gap: 1px;

    }

</style>