function tabuada() {
    let pegarTabuada = document.getElementById('tabuada')
    pegarTabuada.innerText = ''
    let numeroEscolhido = +prompt('Escolha um número')
    console.log(`Tabuada do número ${numeroEscolhido}`)
    pegarTabuada.innerHTML += `<p>Tabuada do número ${numeroEscolhido}</p>`
    for (i = 0; i <= 10; i++) {
        console.log(`${numeroEscolhido} x ${i} = ${numeroEscolhido * i}`)
        pegarTabuada.innerHTML += `<p>${numeroEscolhido} x ${i} = ${numeroEscolhido * i}</p>`
    }
}

function fatorial() {
    let pegarFatorial = document.getElementById('fatorial')
    pegarFatorial.innerText = ''
    let numeroEscolhido = +prompt('Escolha um número')
    let numeroEscolhido2 = numeroEscolhido
    document.getElementById('fatorial').innerHTML += `<p>fatorial do número ${numeroEscolhido}</p>`
    for (n = numeroEscolhido2; n > 1; n--) {
        pegarFatorial.innerHTML += `${n} x `
    }
    pegarFatorial.innerText += ' 1 ='
    for (i = numeroEscolhido - 1; i > 1; i--) {
        numeroEscolhido *= i
    }
    console.log(numeroEscolhido)
    pegarFatorial.innerText += ` ${numeroEscolhido}`
}

function aleatorio() {
    // let numeroAleatorio = Math.random()
    let mostrar = document.getElementById('numeroAleatorio')
    let numeroAleatorio = Math.floor(Math.random() * 100);
    console.log(numeroAleatorio);
    let numeroEscolhido = +prompt('Adivinhe o número de 0 a 100')
    while (numeroEscolhido != numeroAleatorio) {
        if (numeroEscolhido > numeroAleatorio) {
            numeroEscolhido = +prompt('O número correto é menor que ' + numeroEscolhido)
        } else if(numeroEscolhido < numeroAleatorio){
            numeroEscolhido = +prompt('O número correto é maior que ' + numeroEscolhido)
        }
    }
    alert(`Parabéns, Você acertou o número correto (${numeroAleatorio})`)
    
    mostrar.classList.remove('numeroAleatorio');
    // }
    // for(i = numeroEscolhido; i == numeroAleatorio;){
    //     let numeroEscolhido = +prompt('Adivinhe o número de 0 a 100')
    // }
}    
