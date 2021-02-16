<template>
    
    <div class="seq-editor">

        <seq-track 
        
            v-for="(e, i) in trackCount" 
            :key="i"
            :track-index="i"
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqTrack                         from '../track/seq-track.vue'

export default defineComponent({ 
    
    components : { SeqTrack },
    setup() {

        const store         = useStore()
        const trackCount    = computed(() => store.getters.getTrackCount)

        return { trackCount }

    } 

})

</script>

<style scoped>

    .seq-editor {

        background: rgb(15, 15, 15);
        box-shadow: inset 2px 2px 4px black, inset -2px -2px 4px rgb(63, 63, 63);

        display: flex;
        flex-direction: column-reverse;
        /* grid-auto-flow: rows; */
        gap: 2px;

    }

</style>