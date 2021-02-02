<template>
    
    <div class='seq-editor-header' :style="{background : clipColor}"></div>

</template>

<script lang="ts">

import { defineComponent, computed, onRenderTracked } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({

    components : {},
    setup() {

        const store     = useStore()
        const clipColor = computed(() => store.getters.lastSelectedClip.getColor())

        onRenderTracked(() => console.log('re-render!'))

        return { clipColor }

    }

})

</script>

<style scoped>

    .seq-editor-header {

        transition: background 0.3s;
        box-sizing: border-box;
        border-top: 2px solid rgb(60, 60, 60);
        border-left : 2px solid rgb(60, 60, 60);
        border-bottom : 2px solid rgb(60, 60, 60);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

    }

</style>