<template>
    
    <div class="seq-note">

        <seq-sub-note v-for="e in subNoteCount" :key="e" :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqSubNote           from './seq-sub-note.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true }},
    components  : { SeqSubNote },
    setup() {

        const subNoteCount = 1

        return { subNoteCount }

    }

})

</script>

<style scoped>

    .seq-note {

        position: relative;
        width: 100%;
        height : 100%;
        /* background: tomato; */

        display: grid;
        grid-auto-flow: column;
        gap: 0.1em;
        box-sizing: border-box;
        /* padding: 8px; */

    }

</style>