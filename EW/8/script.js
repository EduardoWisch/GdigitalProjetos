function calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let conteudo = document.getElementById('conteudo')

    let imc = peso/(altura * altura)

    if(imc <= 18.5){
        conteudo.innerText = 'Abaixo do peso'
    }else if(imc <= 24.9){
        conteudo.innerText = 'normal'
    }else if(imc <= 29.9){
        conteudo.innerText = 'sobrepeso'
    }else if(imc <= 34.9){
        conteudo.innerText = 'obesidade 1'
    }else if(imc <= 34.9){
        conteudo.innerText = 'obesidade 2'
    }else{
        conteudo.innerText = 'obesidade 3'
    }

}