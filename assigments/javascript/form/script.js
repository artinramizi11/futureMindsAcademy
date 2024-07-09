const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const lengthRegex = /.{8,}/;
const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialCharRegex = /[.,'!#]/;

function checkPasswordRequirements(password){
        return (lengthRegex.test(password) &&
        lowercaseRegex.test(password) &&
        uppercaseRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password) )
            
        
}

function updatePasswordRequirements(){
    const password = passwordInput.value;
    document.querySelector('.lengthReq').classList.toggle('requirement-met', lengthRegex.test(password));
    document.querySelector('.lowercaseReq').classList.toggle('requirement-met', lowercaseRegex.test(password));
    document.querySelector('.uppercaseReq').classList.toggle('requirement-met', uppercaseRegex.test(password));
    document.querySelector('.numberReq').classList.toggle('requirement-met', numberRegex.test(password));
    document.querySelector('.specialReq').classList.toggle('requirement-met', specialCharRegex.test(password));


}

passwordInput.addEventListener('input', function(){
    updatePasswordRequirements();
    submitBtn.disabled = !checkPasswordRequirements(passwordInput.value)

})