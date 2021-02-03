<template>
    
    <div class='seq-main'>

        <seq-editor/>
        <seq-inspector/>
        
    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqEditor            from '../editor/seq-editor.vue'
import SeqInspector         from '../inspector/seq-inspector.vue'

export default defineComponent({ components : { SeqEditor, SeqInspector} })
 
</script>

<style scoped>

    .seq-main {

        width : 100%;
        height : 100%;
        background: rgb(45, 45, 50);
        display: grid;
        grid-template-columns: 5fr 1fr;

    }

</style>