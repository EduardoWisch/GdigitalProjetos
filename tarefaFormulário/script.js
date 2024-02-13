const button = document.getElementById('botaoDeCadastro')
function checkName(){
    let name = document.getElementById('name')
    let checkedName = document.getElementById('nomeVerificado')
    if(name.value == ''){
        checkedName.style.display = 'block'
    }else{
        checkedName.style.display = 'none'
    }
}

function checkEmail(){
    let email = document.getElementById('email')
    let checkedEmail = document.getElementById('emailVerificado')
    if(email.value == ''){
        checkedEmail.style.display = 'block'
    }else{
        checkedEmail.style.display = 'none'
    }
}

function checkPhone(){
    let phone = document.getElementById('telefone')
    let checkedPhone = document.getElementById('telefoneVerificado')
    if(phone.value == ''){
        checkedPhone.style.display = 'block'
    }else{
        checkedPhone.style.display = 'none'
    }
}

function clear(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let phone = document.getElementById('telefone')
    name.value = ''
    email.value = ''
    phone.value = ''

}

function check(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let phone = document.getElementById('telefone')
    let modal = document.getElementById('modal')
    if( name.value == '' || email.value == '' || phone.value == ''){
        checkName();
        checkEmail();
        checkPhone();
        return
    }
        checkName();
        checkEmail();
        checkPhone()
        alert(`Cadastro realizado com sucesso \nnome: ${name.value} \nE-mail: ${email.value} \nTelefone: ${phone.value}`)
        clear()
}