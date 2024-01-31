let firstString = "Conteúdo da string!"
let firstNumber = 10
let firstBoolean = true

let firstArray = [firstString, firstNumber, firstBoolean, 'Outro Elemento!']

function acessArray(){
    let index = +prompt(`Qual a posição do elemento em que você quer acessar? (de 0 a ${firstArray.length - 1})`);
    if(index <= firstArray.length - 1 ){
    alert(`O index ${index} do array guarda o valor "${firstArray[index]}" do tipo ${typeof(firstArray[index])}. O primeiro elemento dessa array é "${firstArray[0]}" e o último é "${firstArray[firstArray.length - 1]}"`)
    }else{
        alert("Você não sabe contar?")
    }
}

function helloWorld10(){
    numero = +prompt("Qual número você quer?")
    console.log(`Tabuada do número ${numero}`)
    for (let index = 0; index < 11; index++) {
        console.log(`${numero} x ${index} = ${numero*index}`)
    }
}

function fatorial() {
    let numero = +prompt("Qual número você quer?");
    let num = 1
    for (let i = numero; i > 1; i--) {
        num *= i;
    }
    console.log(num);
}




