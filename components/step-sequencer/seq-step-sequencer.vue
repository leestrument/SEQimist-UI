<template>
    
    <div class="seq-step-sequencer">

        <seq-step-box v-for="e in slotCount" :key="e" :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqStepBox                       from './seq-step-box.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true }},
    components  : { SeqStepBox },
    setup(props) {

        const store         = useStore()
        const slotCount     = computed(() => store.getters.getSlotCount(props.trackIndex))

        return { slotCount }

    }

})

</script>

<style scoped>

    .seq-step-sequencer {

        position: absolute;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;

    }

</style>