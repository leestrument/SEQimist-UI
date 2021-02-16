<template>

    <div class="seq-track-header-wrapper" :id="id">

        <div class="seq-track-header" :style="{background:color}"></div>

    </div>
    
</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'

export default defineComponent({

    props : { trackIndex : { type : Number, required : true } },
    setup(props) {

        const store = useStore()
        const id    = computed(() => `track-header-${props.trackIndex}`)
        const color = computed(() => store.getters.getTrackColor(props.trackIndex))

        return { id, color }

    }

})

</script>

<style scoped>

    .seq-track-header-wrapper {

        padding: 4px;
        background: rgb(30, 30, 35);

    }

    .seq-track-header {

        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        /* box-shadow: inset 2px 2px 4px rgb(200, 200, 200), inset -2px -2px 2px rgb(50, 50, 50); */

    }

</style>