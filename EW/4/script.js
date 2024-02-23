function resposta() {
    let number = document.getElementById('input').value
    let conteudo = document.getElementById('conteudo')

    if (number == 2007) {
        conteudo.innerText = 'Sua resposta está correta'
        conteudo.style.color = 'green'
    } else {
        conteudo.innerText = 'Sua resposta está errada'
        conteudo.style.color = 'red'
    }
}