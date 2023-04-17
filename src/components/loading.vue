<template>
    <div class="parent">
        <div class="back"></div>
        <div class="show" >
            <img src="./../assets/images/loading.gif">
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .parent {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 300;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;

    }

    .back {
        width: 100%;
        height: 100%;
        background-color: #000000;
        opacity: 0.6;
    }

    .show {
        width: 90%;
        /*border: 1px solid red;*/
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        position: absolute;
    }

</style>
