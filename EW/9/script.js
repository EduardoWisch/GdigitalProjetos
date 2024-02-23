function tabuada() {
    let numeroEscolhido = document.getElementById('numero').value
    let conteudo = document.getElementById('conteudo')
    clear()
    for (i = 0; i <= 10; i++) {
        // conteudo.innerText = `${numeroEscolhido} x ${i} = ${numeroEscolhido * i}`
        conteudo.innerHTML += `<p>${numeroEscolhido} x ${i} = ${numeroEscolhido * i}</p>`
    }
}

function clear(){
    conteudo.innerHTML = ''
}