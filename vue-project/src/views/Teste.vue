<script>
    import Modal from '../components/MyFirstComponent.vue';

    export default {
        data() {
            return {
                modalTitle: 'Meu título',
                showModal: true,
            }
        },
        methods: {
            modalIsClosed() {
                console.log('O modal está fechado')
            }
        },
        components: {
            Modal,
        },
    }
</script>

<template>
    <Modal  v-model:showModal="showModal" :modalTitle="modalTitle" @closeModal="modalIsClosed"> 
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus voluptates placeat officia expedita aspernatur eaque, repellat veritatis laudantium distinctio impedit consectetur numquam ex odio adipisci doloribus possimus illo fugiat iusto.</p>
    </Modal>
    <div class="about">
      <h1>Teste</h1>
      <button @click="showModal = true">Mostrar modal</button>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>