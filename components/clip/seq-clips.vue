<template>
    
    <div class="seq-clips">

        <seq-clips-loop/>
        <seq-clip

            v-for       ='(e, i) in clipCount'
            :key        ='i'
            :index      ='i'
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqClipsLoop                     from './seq-clips-loop.vue'
import SeqClip                          from './seq-clip.vue'

export default defineComponent({

    components : { SeqClipsLoop, SeqClip },
    setup() {

        const store = useStore()
        const clipCount = computed(() => store.getters.clipCount)

        return { clipCount }
        
    }

})

</script>

<style scoped>

    .seq-clips {

        position: relative;
        width : 100%;
        height: 100%;
        overflow : overlay;

    }

    .seq-clips::-webkit-scrollbar {

        width: 1vw;
        height: 10px;

    }

    .seq-clips::-webkit-scrollbar-thumb {

        background-color: rgb(40, 40, 50);
        border-radius: 100px;

    }

</style>