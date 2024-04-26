<template>
    <div class="backdrop-modal" v-if="showModal">
        <div class="modal">
            <span class="close-x" @click="close()">X</span>
            <h2>{{ modalTitle }}</h2>
            <h1>{{ product.name }}</h1>
            <label>Nome do produto</label>
            <input type="text" v-model="productName">
            <label>Valor do produto</label>
            <input type="number" v-model="productValue">
            <button @click="createProduct()" >Criar produto</button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                productName: '',
                productValue: '',

            }
        },
        props: {
            modalTitle: {
                type: String,
                default: '',
            },
            showModal: {
                type: Boolean,
                required: true,
            },
            product: {
                type: Object,
                required: true, 
            }
        },
        methods: {
            close() {
                this.$emit('closeModal')
                this.$emit('update:showModal', false)
            },
            createProduct(){
                let data = {
                    name: this.productName,
                    amount: this.productValue
                }
                axios.post('product', data)
                    .then((response) => {
                            console.log(response)
                    })
                        .catch((error) => {
                        console.log(error)
                        })
            }
        },
    }
</script>

<style lang="scss" scoped>

.backdrop-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #0002;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    display: grid;
    gap: 15px;
    width: 400px;
    height: 250px;
    height: fit-content;
    padding: 30px;
    position: relative;
    background-color: white;
    border-radius: 15px;
    color: black;
    .close-x {
        position: absolute;
        top: 15px;
        right: 15px;
        color: black;
        cursor: pointer;
        font-size: 20px;
    }
}
    
.modal > input {
    border: 1px solid #cdcdcd;
    border-radius: 10px;
    padding: 12px;
    font-size: 16px;
}
.modal > label {
    font-size: 16px;
}
.modal > button {
    transition: .3s;
    height: 50px;
    background-color: #cdcdcd;
    border: none;
    border-radius: 10px;
}
.modal > button:hover {
    background-color: #bdbdbd;
}
</style>