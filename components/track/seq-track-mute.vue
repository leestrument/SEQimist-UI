<template>
    
    <div class='seq-track-mute'></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {},
    props : { trackIndex : { type : Number, required : true }},

})

</script>

<style scoped>

    .seq-track-mute {

        background: gold;

    }

</style>