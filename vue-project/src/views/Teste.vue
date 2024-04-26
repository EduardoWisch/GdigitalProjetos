<script>
    import Modal from '../components/MyFirstComponent.vue';
    import axios from 'axios';

    export default {
        data() {
            return {
                modalTitle: 'Meu título',
                showModal: true,
                selectedProduct: '',
                
            }
        },
        methods: {
            modalIsClosed() {
                console.log('O modal está fechado')
            },
            getProducts() {
                axios.get('product')
                    .then((response) => {
                        this.products = response.data.data
                        console.log(this.products)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log('A requisição acabou!')
            })
            },
            deleteProduct() {
                axios.delete(`/product/${this.selectedProduct.id}`)
                .then((response) => {
                    console.log(response)
                        let itemIndex = this.products.findIndex(product => product.id === this.selectedProduct.id)
                    if (itemIndex) {
                        this.products.splice(itemIndex, 1)
                    }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                }
        },
        components: {
            Modal,
        },
        mounted () {
            axios.defaults.baseURL = 'http://192.168.0.134:8000/api/'

            this.getProducts()
        }
    }
</script>

<template>
    <Modal  v-model:showModal="showModal" :modalTitle="modalTitle" @closeModal="modalIsClosed"  :product="selectedProduct"> 

    </Modal>
    
    <div 
    v-for="product in products" 
    :key="product.id" 
    class="product-box" 
    @click="selectedProduct = product" 
    :class="selectedProduct.id === product.id ? 'selected-box' : ''">
        <h3>{{product.name}}</h3>
        <p>{{product.amount}}</p>
    </div>

<div class="about">
  <h1>Teste</h1>
  <button @click="selectedProduct = {}, showModal = true">Criar produto</button>
    <button @click="showModal = true" :disabled="!selectedProduct.id">Editar produto</button>
  <button @click="deleteProduct()" >Deletar produto {{ selectedProduct.name }}</button>
</div>
</template>

  <style scoped>

.selected-box {
    background-color: #fff2;;
}

  .product-box{
    transition: 0.3s;
    border: 1px solid white;
    padding: 20px;
    margin: 15px;
    border-radius: 20px;
  }
  .product-box h3{
    font-size: 21px ;
  }

  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>