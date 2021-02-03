<template>
    
    <div class='seq-timeline'>

        <seq-clips/>
    
    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqClips from '../clip/seq-clips.vue'

export default defineComponent({

    components : { SeqClips }

})

</script>

<style scoped>

    .seq-timeline {

        background: rgb(100, 100, 110);
        margin: 0 10px 10px 10px;
        border-radius: 10px;
        padding: 10px;

    }

</style>