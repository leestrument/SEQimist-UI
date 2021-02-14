<template>
    
    <div class="seq-piano-roll-beat-divider">

        <div class="seq-piano-roll-beat-divier-one"></div>
        <div class="seq-piano-roll-beat-divier-two"></div>
        <div class="seq-piano-roll-beat-divier-one"></div>
        <div class="seq-piano-roll-beat-divier-two"></div>

    </div>

</template>

<style scoped>

    .seq-piano-roll-beat-divider {

        position: absolute;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;

    }

    .seq-piano-roll-beat-divier-one { background: rgb(30, 30, 35); }
    .seq-piano-roll-beat-divier-two { background: rgb(40, 40, 45);}

</style>