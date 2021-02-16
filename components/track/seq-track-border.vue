<template>
    
    <div class="seq-track-border" :style="{borderColor:color}"></div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'

export default defineComponent({

    props : { trackIndex : { type : Number, required : true }},
    setup(props) {

        const store = useStore()
        const color = computed(() => store.getters.getTrackColor(props.trackIndex))

        return { color }

    }

})

</script>

<style scoped>

    .seq-track-border {

        position: absolute;
        width : 100%;
        height : 100%;
        border: 1px solid white;
        z-index: 1;

    }

</style>