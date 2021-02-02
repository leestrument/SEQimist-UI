<template>
    
    <div class='seq-track-solo'></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {},
    props : { trackIndex : { type : Number, required : true }},

})

</script>

<style scoped>

    .seq-track-solo {

        background: blue;

    }

</style>