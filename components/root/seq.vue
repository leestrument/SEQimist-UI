<template>
    
    <div class="seq" @mousedown="seqEventHandler(seq, $event)">

        <seq-header/>
        <seq-nav/>
        <seq-content/>
        <seq-info v-if="false"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import { useStore }         from "vuex"
import seqEventHandler      from './seqEventHandler'
import SeqHeader            from '../layout/header/seq-header.vue'
import SeqNav               from '../layout/nav/seq-nav.vue'
import SeqContent           from '../layout/content/seq-content.vue'
import SeqInfo              from '../info/seq-info.vue'

export default defineComponent({ 
    
    components : { SeqHeader, SeqNav, SeqContent, SeqInfo },
    setup() {

        const store = useStore()
        const seq   = store.state

        return { seq, seqEventHandler }

    }

})

</script>

<style scoped>

    .seq {

        position: absolute;
        width : 100%;
        height : 100%;
        background: var(--background);
        display: grid;
        grid-template-rows: var(--row-ratio);
        box-sizing: border-box;
        padding: var(--gap);
        gap: var(--gap);

    }

</style>