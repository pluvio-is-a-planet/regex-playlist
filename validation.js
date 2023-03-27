// validation script here
const userInputs = document.querySelectorAll('input');      

const regExPatterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    telephone: /^(\d{11})$/,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/
};

function validate(field, regex){
    console.log('field:', field);
    console.log('regex:', regex);
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

console.log(regExPatterns);

userInputs.forEach((input) => {
    input.addEventListener('keyup',(activeField) => {
        validate(activeField.target, regExPatterns[activeField.target.attributes.name.value]);
    })
})