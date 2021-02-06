<template>
    
    <svg width="100%" height="100%" viewBox="0 0 28.35 28.35">
        <path :fill="color" d="M14.17 0C6.35 0 0 6.35 0 14.17s6.35 14.17 14.17 14.17S28.35 22 28.35 14.17 22 0 14.17 0zm8.41 14.84c0 .68-.56 1.24-1.24 1.24h-5.29l-.01 5.3c0 .68-.56 1.24-1.24 1.24h-1.38c-.68 0-1.24-.56-1.24-1.24l-.01-5.3H6.88c-.68 0-1.24-.56-1.24-1.24v-1.38c0-.68.56-1.24 1.24-1.24l5.29.02.01-5.32c0-.68.56-1.24 1.24-1.24h1.38c.68 0 1.24.56 1.24 1.24l.01 5.32 5.29-.02c.68 0 1.24.56 1.24 1.24v1.38z"/>
    </svg>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { color : { type : String, required : true } }

})

</script>