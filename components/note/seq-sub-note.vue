<template>
    
    <div 
    
        class="seq-sub-note" 
        :style="{ 
            
            background : color,
            filter : `brightness(${brightness})`
        
        }"
    
    
    ></div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'

export default defineComponent({

    props : { trackIndex : { type : Number, required : true }},
    setup(props) {

        const store = useStore()
        const color = computed(() => store.getters.getTrackColor(props.trackIndex))
        const velocity = Math.floor(Math.random() * 128) + 1
        const brightness = velocity / 128 * 0.7 + 0.3

        return { color, brightness }

    }

})

</script>

<style scoped>

    /* .seq-sub-note {
        
        width : 100%;
        height : 100%;
        background: rgb(30, 30, 35);

    } */

</style>