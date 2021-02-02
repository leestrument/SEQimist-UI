<template>
    
    <div class='seq-track-header'>

        <span class="seq-track-header-label">C1</span>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {},
    props : { trackIndex : { type : Number, required : true }},

})

</script>

<style scoped>

    .seq-track-header {

        background: rgb(132, 73, 191);
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .seq-track-header-label {

        color: rgb(200, 200, 200);

    }

</style>