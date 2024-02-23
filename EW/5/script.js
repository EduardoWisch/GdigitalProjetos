function resposta() {
    let number1 = document.getElementById('input1').value
    let number2 = document.getElementById('input2').value
    let conteudo = document.getElementById('conteudo')

    if (number1 > number2) {
        conteudo.innerText = `O número ${number1} é maior que o número ${number2}`
    } else if (number1 == number2 ){
        conteudo.innerText = `O número ${number1} é igual ao número ${number2}`
    } else {
        conteudo.innerText = `O número ${number1} é menor que o número ${number2}`
    }
}