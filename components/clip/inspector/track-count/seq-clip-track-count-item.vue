<template>
    
    <div class="seq-track-count-item">

        <span class="seq-track-count-item-label" v-text="label"></span>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { label : { type : String, required : true } },
    components : {}

})

</script>

<style scoped>

    .seq-track-count-item {

        background: rgb(30, 30, 35);
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .seq-track-count-item-label {

        font-size: 12px;
        color: rgb(100, 100, 100);

    }

</style>