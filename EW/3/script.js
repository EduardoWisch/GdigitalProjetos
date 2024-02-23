function imparOuPar(){
    let number = document.getElementById('input').value
    let conteudo = document.getElementById('conteudo')
    let numberPI = number % 2
    if(numberPI == 0){
        conteudo.innerText = 'O seu número é Par'
    }else{
        conteudo.innerText = 'O seu número é Impar'
    }
}