const form = document.querySelector('form');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let email =   document.getElementById('email')

form.addEventListener('submit', (event) => {
     event.preventDefault();
        password.classList.remove('is-invalid', 'is-valid');
        confirmPassword.classList.remove('is-invalid', 'is-valid');

    if(password.value != confirmPassword.value){
        password.classList.add('is-invalid');
      confirmPassword.classList.add('is-invalid');
    } else {
    form.reset();
   alert('Registration succesfull')
    }
     

})


email.addEventListener('input', (e) => {
        if(!e.target.value.includes('@')){
            e.target.classList.add('is-invalid')
        }else{
            e.target.classList.remove('is-invalid');
        }
    })
  