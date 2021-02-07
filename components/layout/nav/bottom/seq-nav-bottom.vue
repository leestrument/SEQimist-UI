<template>
    
    <div class="seq-nav-bottom">

        <seq-timeline/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTimeline          from '../../../timeline/seq-timeline.vue'

export default defineComponent( { components : { SeqTimeline } } )

</script>

<style scoped>

    .seq-nav-bottom { padding: 5px 10px 10px 10px; }

</style>