<template>
    
    <div class='seq-inspector-clip-track-count'>
        <form>
            <label for='track-count' >Track Count </label>
            <select name="track-count" v-model="selected" @change="change">
                <option>1</option>
                <option>4</option>
                <option>8</option>
                <option>16</option>
                <option>32</option>
                <option>64</option>
            </select>
        </form>
    </div>

</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({

    components : {},
    setup() {

        const selected = ref('')
        const store = useStore()
        const change = () => { 

            const selectedTrackCount = parseInt(selected.value)
            
            store.commit('mouseDownTrackCount', selectedTrackCount)
        
        }

        return { selected, change }

    }

})

</script>

<style scoped>

    .seq-inspector-clip-track-count {

        background: tomato;

    }

</style>