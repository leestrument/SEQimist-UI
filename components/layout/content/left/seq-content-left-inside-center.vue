<template>
    
    <div class="seq-content-left-inside-center">

        <seq-clip-view/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqClipView          from '../../../clip/seq-clip-view.vue'

export default defineComponent({

    components : { SeqClipView }

})

</script>

<style scoped>

    .seq-content-left-inside-center {

        background: blue;

    }

</style>