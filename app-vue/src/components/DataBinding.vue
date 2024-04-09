<template>
    <div>

        <img 
            v-bind:src="imgSrc" 
            v-bind:alt="imgAlt"
        >

    </div>
</template>

<script>
    export default {
        name: 'DataBinding',
        data() {
            return {
                imgAlt: 'Foto Exemplo',
                imgSrc: 'https://via.placeholder.com/150'
            }
        }
    }
</script>

<style>

</style>