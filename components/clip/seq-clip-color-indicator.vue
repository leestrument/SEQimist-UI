<template>
    
    <div class="seq-clip-color-indicator" :style="{background:color}"></div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'

export default defineComponent({

    setup() {

        const store = useStore()
        const color = computed(() => store.getters.getSelectedClipColor)

        return { color }

    }

})

</script>

<style scoped>

    .seq-clip-color-indicator {

        background: rgb(162, 125, 33);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

    }

</style>