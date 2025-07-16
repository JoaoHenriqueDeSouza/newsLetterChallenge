let submitForm = document.querySelector('form')
let input = document.querySelector('.email-input')
let valMessage = document.querySelector('.val-message')
submitForm.addEventListener('submit',validation)

function validation(e){
    e.preventDefault()
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    valMessage.style.display = 'none'
    input.style = 'none'
    if(!regex.test(input.value)){
        valMessage.innerHTML = 'Invalid e-mail'
        valMessage.style.display = 'block' 
        input.style = 'border-color: red;'
        
    }else{
        submitForm.submit()
    }
}



