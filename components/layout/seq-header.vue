<template>
    
    <div class='seq-header'>
        <seq-button-logo            class="seq-button-with-svg"/>
        <seq-browser/>
        <seq-button-clip-adder      class="seq-button-with-svg"/>
        <seq-button-clip-remover    class="seq-button-with-svg"/>
        <seq-button-clip-duplicator class="seq-button-with-svg"/>
        <seq-button-clip-shuffler   class="seq-button-with-svg"/>
        <seq-button-clip-exporter   class="seq-button-with-svg"/>
    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqButtonLogo            from '../buttons/seq-button-logo.vue'
import SeqBrowser               from '../browser/seq-browser.vue'
import SeqButtonClipAdder       from '../buttons/seq-button-clip-adder.vue'
import SeqButtonClipRemover     from '../buttons/seq-button-clip-remover.vue'
import SeqButtonClipDuplicator  from '../buttons/seq-button-clip-duplicator.vue'
import SeqButtonClipShuffler    from '../buttons/seq-button-clip-shuffler.vue'
import SeqButtonClipExporter    from '../buttons/seq-button-clip-exporter.vue'

export default defineComponent({

    components : { 
        
        SeqButtonLogo, 
        SeqBrowser,
        SeqButtonClipAdder,
        SeqButtonClipRemover,
        SeqButtonClipDuplicator,
        SeqButtonClipShuffler,
        SeqButtonClipExporter,
    
    }

})

</script>

<style scoped>

    .seq-header {

        background: blue;
        display: grid;
        grid-auto-flow: column;

    }

    .seq-button-with-svg {

        position: relative;
        width : 100%;
        height : 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }

</style>