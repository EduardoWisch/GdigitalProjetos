const button = document.getElementById('botaoDeCadastro')
let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('telefone')

function checkName(){
    let checkedName = document.getElementById('nomeVerificado')
    if(name.value == ''){
        checkedName.style.display = 'block'
    }else{
        checkedName.style.display = 'none'
    }
}

function checkEmail(){
    let checkedEmail = document.getElementById('emailVerificado')
    if(email.value == ''){
        checkedEmail.style.display = 'block'
    }else{
        checkedEmail.style.display = 'none'
    }
}

function checkPhone(){
    let checkedPhone = document.getElementById('telefoneVerificado')
    if(phone.value == ''){
        checkedPhone.style.display = 'block'
    }else{
        checkedPhone.style.display = 'none'
    }
}

function clear(){
    name.value = ''
    email.value = ''
    phone.value = ''

}

function checkAll(){
    checkName()
    checkEmail()
    checkPhone()
}

function check(){
    if( name.value == '' || email.value == '' || phone.value == ''){
        checkAll()
        return
    }
    checkAll()
    alert(`Cadastro realizado com sucesso \nnome: ${name.value} \nE-mail: ${email.value} \nTelefone: ${phone.value}`)
    clear()
}