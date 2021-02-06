<template>
    
    <div>
        <seq-svg-remover color="white"/>
    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqSvgRemover           from '../svg/seq-svg-trash-can.vue'

export default defineComponent({

    components : { SeqSvgRemover }

})

</script>