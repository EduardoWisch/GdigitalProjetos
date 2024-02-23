let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let conteudo = document.getElementById('conteudo')

function validar(){
    if(name.value == '' || email.value == '' || phone.value == ''){
        all()
        return
    }
    all()
    pessoa = {
        nome: `${name.value}`,
        email: `${email.value}`,
        telefone: `${phone.value}`
    }
    let objectJSON = JSON.stringify(pessoa)
    localStorage.setItem('')
    console.log(objectJSON)
    conteudo.innerText = 'Cadastro realizado co sucesso'
}

function all(){
    validarNome()
    validarEmail()
    validarTelefone()
}

function validarNome(){
    if(name.value == ''){
        name.style.backgroundColor = 'red'
    }else{
        name.style.backgroundColor = 'white'
    }
}

function validarEmail(){
    if(email.value == ''){
        email.style.backgroundColor = 'red'
    }else{
        email.style.backgroundColor = 'white'
    }
}

function validarTelefone(){
    if(phone.value == ''){
        phone.style.backgroundColor = 'red'
    }else{
        phone.style.backgroundColor = 'white'
    }
}