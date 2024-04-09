<template>
    <div>

        <h2 :class="pClass">
            Curso de Vue 3
        </h2>

        <p :class="pClass">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci perferendis tempora provident animi cum? Soluta, ipsum autem dolorum similique eius mollitia nisi veniam nihil totam labore. Exercitationem iure vel harum?
        </p>

    </div>
</template>

<script>
    export default {
        name: 'ClassAndstyle',
        data() {
            return {
                classVar: 'title',
                pClass: ['text', 'text-size']
            }
        }
    }
</script>

<style>
    .title {
        color: blue;
    }

    .text {
        color: aqua;
        background-color: black;
    }

    .text-size {
        font-size: 30px;
    }
</style>