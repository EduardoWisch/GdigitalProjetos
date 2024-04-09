<template>
    <div>

        <div v-show="showName">
        Nome: {{ fisrtName }} <br>
        Sobrenome: {{ lastName }}
      </div>
    
      <div v-if="accessLevel === 'admin'">Usuário Admin</div>
      <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
      <div v-else>Usuário Normal</div>

    </div>
</template>

<script>
    export default {
        name: 'ShowAndIf',
        data() {
            return {
                showHeader: true,
                fisrtName: 'Eduardo',
                lastName: 'Wisch',
                showName: true,
                accessLevel:'admin'
            }
        }
    }
</script>

<style>

</style>