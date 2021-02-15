<template>
    
    <div class="seq-content-left-inside seq-display">

        <seq-clip-view-multiple v-if="multipleClipsAreSelected"/>
        <seq-clip-view v-else/>

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqClipViewMultiple              from '../../clip/seq-clip-view-multiple.vue'
import SeqClipView                      from '../../clip/seq-clip-view.vue'

export default defineComponent({ 
    
    components : { SeqClipViewMultiple, SeqClipView },
    setup() {

        const store = useStore()
        const multipleClipsAreSelected = computed(() => store.getters.multipleClipsAreSelected)

        return { multipleClipsAreSelected }

    }

})

</script>

<style scoped>

    .seq-content-left-inside {

        position: relative;
        width: 100%;
        height: 100%;

    }

</style>