const form = document.querySelector('form')
const nome = document.getElementById('name')
const email = document.getElementById('email')
const adress = document.getElementById('adress')
const tel = document.getElementById('tel')
const vehicle = document.getElementById('vehicle')
const inputs = document.querySelectorAll('input')
const poupup = document.getElementById("confirm-poupup")
const content = document.getElementById('contentPoupup')

nome.addEventListener('focus', function(){
    nome.placeholder = "Ex: João da Silva"
})
email.addEventListener('focus', function(){
    email.placeholder = "example@example.com"
})
tel.addEventListener('focus', function(){
    tel.placeholder = "(XX) XXXXX-XXXX"
})
adress.addEventListener('focus', function(){
    adress.placeholder = "Av. exemplo N°XX"
})

inputs.forEach(function(input){
    input.addEventListener('blur', function(){
        input.placeholder = ""
    })
})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    content.innerText = `Nome: ${nome.value}
                        Telefone: ${tel.value}
                        Email: ${email.value}
                        Endereço: ${adress.value}
                        Veículo: ${vehicle.value}`
    inputs.forEach(function(input){
    input.value = ""
   })

})