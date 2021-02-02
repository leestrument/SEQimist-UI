<template>
    
    <div 
    
        class='seq-editor-hider' 
        v-if="multipleClipsAreSelected"
        
    >

        <span class='seq-editor-hider-message'>Multiple clips are selected.</span>

    </div>

</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({

    components : {},
    setup() {

        const store = useStore()
        const multipleClipsAreSelected = computed(() => store.getters.multipleClipsAreSelected)

        return { multipleClipsAreSelected }

    }

})

</script>

<style scoped>

    .seq-editor-hider {

        position: absolute;
        width : 100%;
        height : 100%;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .seq-editor-hider-message {

        color: tomato;

    }

</style>