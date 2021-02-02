<template>
    
    <svg width="100%" height="100%" viewBox="0 0 28.35 28.35">
        <path :fill="color" d="M14.17 0C6.34 0 0 6.35 0 14.17s6.34 14.17 14.17 14.17S28.35 22 28.35 14.17 22 0 14.17 0zm6.57 18.23a1.768 1.768 0 01-1.25 3.02c-.45 0-.91-.17-1.25-.52l-4.06-4.06-4.06 4.06c-.35.34-.8.52-1.25.52-.45 0-.91-.17-1.25-.52-.69-.69-.69-1.81 0-2.5l4.06-4.06-4.08-4.06a1.768 1.768 0 012.5-2.5l4.06 4.06 4.06-4.06a1.768 1.768 0 012.5 2.5l-4.06 4.06 4.08 4.06z"/>
    </svg>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { color : { type : String, required : true } }

})

</script>